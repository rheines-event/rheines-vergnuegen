import { SectionImage } from '@rheine/app/(components)/SectionImage';
import { SectionTitle } from '@rheine/app/(components)/SectionTitle';
import { MarkerIcon } from '@rheine/app/(components)/MarkerIcon';

import * as FancyAccordion from './FancyAccordion';
import { HerrenzimmerDetails } from './HerrenzimmerDetails';
import { JagdzimmerDetails } from './JagdzimmerDetails';


export function LocationSection() {
  return (
    <article className="relative lg:max-w-4xl lg:mx-auto lg:px-0 flex flex-col px-4 py-16 text-lg font-sans">

      <SectionTitle id="location">Location</SectionTitle>

      <p>
        Die Rheines-Event GmbH verwandelt fünf ehemalige Squash-Courts
        in einen lebendigen Begegnungsort mit über <span className="font-medium text-white">500 m² Nutzfläche.</span>
      </p>

      <SectionImage
        src="/office.jpg"
        alt="Unsere Officeräume"
        align="end"
        className="mb-8"
        caption={(
          <figcaption className="flex gap-x-2 items-center">
            <MarkerIcon className="w-4 h-4" />
            <span>Hafenbahn 12, 848431 Rheine</span>
          </figcaption>
        )}
        />

      <p>
        Innovativ gestaltete Gruppenräume neben einem Auditorium mit State of the Art Internet-Präsentationstechnik.
      </p>

      <FancyAccordion.Accordion className="w-full -ml-4 my-16 lg:my-24 space-y-2">
        <FancyAccordion.Panel title="Herrenzimmer">
          <HerrenzimmerDetails />
        </FancyAccordion.Panel>
        <FancyAccordion.Panel title="Jagdzimmer">
          <JagdzimmerDetails />
        </FancyAccordion.Panel>
      </FancyAccordion.Accordion>

    </article>
  );
}
