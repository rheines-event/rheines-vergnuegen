import * as FancyAccordion from './FancyAccordion';
import { SectionImage } from '../../(components)/SectionImage';
import { SectionTitle } from '../../(components)/SectionTitle';
import { HerrenzimmerDetails } from './HerrenzimmerDetails';
import { JagdzimmerDetails } from './JagdzimmerDetails';


export function LocationSection() {
  return (
    <article className="relative lg:max-w-4xl lg:mx-auto lg:px-0 flex flex-col px-4 py-16 text-lg font-sans">

      <SectionTitle id="location">Location</SectionTitle>

      <p>
        Die Rheines-Event GmbH verwandelt fünf ehemalige Squash-Courts
        in einen lebendigen Begegnungsort mit über <span className="font-medium">500 m² Nutzfläche.</span>
      </p>

      <SectionImage
        src="/office.jpg"
        alt="Unsere Officeräume"
        align="end"
        caption={(
          <figcaption className="flex gap-x-2 items-center">
            <MarkerIcon className="w-4 h-4" />
            <span>Hafenbahn 12, 848431 Rheine</span>
          </figcaption>
        )}
        />

      <p className="py-8">
        Innovativ gestaltete Gruppenräume neben einem Auditorium mit State of the Art Internet-Präsentationstechnik.
      </p>

      <FancyAccordion.Accordion className="w-full -ml-4 space-y-2">
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

function MarkerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>
  );
}
