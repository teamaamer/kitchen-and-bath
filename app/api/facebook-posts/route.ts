import { NextResponse } from 'next/server'

const FACEBOOK_PAGE_ID = '1004234972778413'

export async function GET() {
  try {
    const accessToken = process.env.FACEBOOK_PAGE_TOKEN

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Facebook access token not configured' },
        { status: 500 }
      )
    }

    // Fetch posts from Facebook Graph API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${FACEBOOK_PAGE_ID}/posts?fields=message,full_picture,permalink_url,created_time&limit=10&access_token=${accessToken}`,
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error(`Facebook API error: ${response.status}`)
    }

    const data = await response.json()

    // Filter posts that have images
    const postsWithImages = data.data?.filter((post: any) => post.full_picture) || []

    // Transform posts for frontend
    const transformedPosts = postsWithImages.map((post: any) => ({
      id: post.id,
      message: post.message || '',
      image: post.full_picture,
      url: post.permalink_url,
      createdTime: post.created_time,
    }))

    return NextResponse.json({
      posts: transformedPosts,
      success: true,
    })
  } catch (error) {
    console.error('Error fetching Facebook posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Facebook posts', success: false },
      { status: 500 }
    )
  }
}
