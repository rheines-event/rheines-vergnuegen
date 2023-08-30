import { MarkerIcon } from '@rheine/app/(components)/MarkerIcon';
import { SectionTitle } from '@rheine/app/(components)/SectionTitle';
import { Logo } from '../(components)/Logo';
import { SectionMap } from '../(components)/SectionMap';


export function ContactSection() {
  return (
    <article className="relative lg:max-w-4xl lg:mx-auto lg:px-0 my-8 md:my-16 lg:my-24 flex flex-col px-4 py-16 text-lg font-sans">
      
      <SectionTitle id="contact">Kontakt</SectionTitle>

      <p className="hyphens-auto">Sie würden gerne unsere <span className="font-medium">Location besichtigen oder uns einfach nur kennenlernen?</span> Dann schauen Sie gern  vor Ort bei uns vorbei!</p>

      <SectionMap align="end" alt="Unsere Location auf Google Maps">
        <div className="z-30 w-full flex items-center justify-center xl:justify-start">
          <Address />
        </div>
      </SectionMap>
      <OpeningTimes />

    </article>
  );
}


function Address() {
  return (
    <div className="py-16 text-center">
      <Logo mode="responsive" />
      <h4 className="font-body text-3xl">Rheines Vergnügen</h4>
      <a
        href="https://goo.gl/maps/eosGBqKbmJEG2ter5"
        className="inline-flex gap-x-2 items-center underline underline-offset-4">
        <MarkerIcon className="w-4 h-4" />
        <span className="font-sans font-light text-lg">Hafenbahn 12, 848431 Rheine</span>
      </a>
    </div>
  );
}


function OpeningTimes() {
  return (
    <div className="px-4 py-8 lg:py-16">
      <h6 className="mb-4 font-semibold dark:text-white">Öffnungszeiten</h6>
      <div className="flex justify-between items-center">
        <span>Montag</span>
        <span>09:00 - 20:00</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Dienstag</span>
        <span>09:00 - 20:00</span>
      </div>
    </div>
  );
}