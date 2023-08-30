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
      <div className="flex flex-col lg:gap-y-6 bg-white dark:bg-[#171717] text-slate-800 dark:text-slate-100 -mb-px">
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
