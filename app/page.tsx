import HeroSection from '@/components/home/HeroSection'
import FeaturedCategories from '@/components/home/FeaturedCategories'
import BrandPhilosophy from '@/components/home/BrandPhilosophy'
import SignatureProducts from '@/components/home/SignatureProducts'
import WhyKBS from '@/components/home/WhyKBS'
import CuratedCollections from '@/components/home/CuratedCollections'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import ConsultationCTA from '@/components/home/ConsultationCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <BrandPhilosophy />
      <SignatureProducts />
      <WhyKBS />
      <CuratedCollections />
      <TestimonialsSection />
      <ConsultationCTA />
    </>
  )
}
