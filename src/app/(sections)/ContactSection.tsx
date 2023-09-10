import { MarkerIcon } from '@rheine/app/(components)/MarkerIcon';
import { SectionTitle } from '@rheine/app/(components)/SectionTitle';
import { Logo } from '@rheine/app/(components)/Logo';
import { PhoneIcon } from '@rheine/app/(components)/PhoneIcon';


export function ContactSection() {
  return (
    <article className="relative lg:max-w-4xl lg:mx-auto lg:px-0 my-8 md:my-16 lg:my-24 flex flex-col px-4 py-16 text-lg font-sans">
      
      <SectionTitle id="contact">Kontakt</SectionTitle>

      <p className="hyphens-auto">Sie würden gerne unsere <span className="font-medium">Location besichtigen oder uns einfach nur kennenlernen?</span> Dann schauen Sie gern  vor Ort bei uns vorbei!</p>

      <Address />
      <OpeningTimes />

    </article>
  );
}


function Address() {
  return (
    <div className="flex flex-col pt-24 items-center">
      <Logo mode="responsive" />
      <h4 className="font-body text-3xl mt-4">R(h)eines Vergnügen</h4>
      <a
        href="https://goo.gl/maps/eosGBqKbmJEG2ter5"
        className="inline-flex gap-x-2 items-center underline underline-offset-4">
        <MarkerIcon className="w-4 h-4" />
        <span className="font-sans font-light text-lg">Hafenbahn 12, 848431 Rheine</span>
      </a>
      <p className="flex w-fit gap-x-2 items-center font-light text-lg mt-2">
        <PhoneIcon className="w-4 h-4" />
        <span>
          +49 (0) 173 9525696
        </span>
      </p>
    </div>
  );
}


function OpeningTimes() {
  return (
    <div className="px-4 py-8 lg:py-16">
      <h6 className="mb-4 font-semibold dark:text-white">Öffnungszeiten</h6>
      <div className="flex justify-between items-center">
        <span>Montag</span>
        <span>08:00 - 24:00</span>
      </div>
    </div>
  );
}
