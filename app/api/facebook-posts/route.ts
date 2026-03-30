import { NextResponse } from "next/server";

export async function GET() {
  try {
    const pageId = process.env.FACEBOOK_PAGE_ID;
    const token = process.env.FACEBOOK_PAGE_TOKEN;

    if (!pageId || !token) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing environment variables",
          debug: {
            hasPageId: !!pageId,
            hasToken: !!token,
            pageIdValue: pageId ?? null,
          },
        },
        { status: 500 }
      );
    }

    const url = `https://graph.facebook.com/v25.0/${pageId}/posts?fields=message,full_picture,permalink_url,created_time&access_token=${token}`;

    const fbRes = await fetch(url, { cache: "no-store" });
    const fbData = await fbRes.json();

    if (!fbRes.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "Facebook API request failed",
          debug: {
            status: fbRes.status,
            statusText: fbRes.statusText,
            facebookResponse: fbData,
          },
        },
        { status: fbRes.status }
      );
    }

    return NextResponse.json({
      success: true,
      ...fbData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Unexpected server error",
        debug: {
          message: error instanceof Error ? error.message : String(error),
        },
      },
      { status: 500 }
    );
  }
}