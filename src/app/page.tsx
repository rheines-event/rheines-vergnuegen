import { ContactFormSubsection } from './(sections)/ContactFormSubsection';
import { ContactSection } from './(sections)/ContactSection';
import { HeroSection } from './(sections)/HeroSection';
import { LocationSection } from './(sections)/LocationSection/LocationSection';
import { NewsletterSubsection } from './(sections)/NewsletterSubsection';
import { ServiceSection } from './(sections)/ServiceSection';
import { StorySection } from './(sections)/StorySection';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <div className="shadow bg-white">
        <StorySection />
        <ServiceSection />
        <LocationSection />
        <ContactSection />
        <ContactFormSubsection />
        <NewsletterSubsection />
      </div>
    </main>
  )
}
