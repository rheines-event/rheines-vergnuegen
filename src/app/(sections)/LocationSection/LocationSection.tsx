import { Suspense } from 'react';

import { SectionTitle } from '@rheine/app/(components)/SectionTitle';

import * as FancyAccordion from './FancyAccordion';
import { AmphitheaterDetails } from './AmphitheaterDetails';
import { ClubraumDetails } from './ClubraumDetails';
import { EventkuecheDetails } from './Eventkueche';
import { OpenSpaceDetails } from './OpenSpaceDetails';
import { JagdzimmerDetails } from './JagdzimmerDetails';
import { Wordgrid } from './Wordgrid';


export function LocationSection() {
  return (
    <article className="relative lg:max-w-4xl lg:mx-auto lg:px-0 flex flex-col px-4 py-16 text-lg font-sans">

      <SectionTitle id="location">Location</SectionTitle>

      <p>
        Der ideale Ort, um Geburtstage, Hochzeiten oder geschäftliche Anlässe zu etwas Gewinnbringendem 
        für alle Gäste und Teilnehmer werden zu lassen &ndash;<span className="ml-2.5">a place to remember!</span>
      </p>

      <Wordgrid />

      <Suspense>
        <FancyAccordion.Accordion
          className="w-full -ml-4 my-16 lg:my-24 space-y-2"
          searchParamName="location-accordion">
          <FancyAccordion.Panel
            id="location-clubraum"
            value="clubraum"
            title="Clubraum">
            <ClubraumDetails />
          </FancyAccordion.Panel>
          <FancyAccordion.Panel
            id="location-jagdzimmer"
            value="jagdzimmer"
            title="Jagdzimmer">
            <JagdzimmerDetails />
          </FancyAccordion.Panel>
          <FancyAccordion.Panel
            id="location-eventkueche"
            value="eventkueche"
            title="Eventküche">
            <EventkuecheDetails />
          </FancyAccordion.Panel>
          <FancyAccordion.Panel
            id="location-amphitheater"
            value="amphitheater"
            title="Amphitheater">
            <AmphitheaterDetails />
          </FancyAccordion.Panel>
          <FancyAccordion.Panel
            id="location-open-space"
            value="open-space"
            title="Open Space">
            <OpenSpaceDetails />
          </FancyAccordion.Panel>
        </FancyAccordion.Accordion>
      </Suspense>

    </article>
  );
}
