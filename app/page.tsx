import HeroSection from '@/components/home/HeroSection'
import BrandCarousel from '@/components/home/BrandCarousel'
import FeaturedCategories from '@/components/home/FeaturedCategories'
import BrandPhilosophy from '@/components/home/BrandPhilosophy'
import WhyKBS from '@/components/home/WhyKBS'
import BrowseByStyle from '@/components/home/BrowseByStyle'
import FacebookOffersSection from '@/components/home/FacebookOffersSection'
import FacebookFeed from '@/components/home/FacebookFeed'
import ConsultationCTA from '@/components/home/ConsultationCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <BrowseByStyle />
      <BrandPhilosophy />
      <WhyKBS />
      <FacebookOffersSection />
      <FacebookFeed />
      <ConsultationCTA />
      <BrandCarousel />
    </>
  )
}
