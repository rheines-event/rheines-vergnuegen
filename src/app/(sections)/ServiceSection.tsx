import { SectionImage } from '../(components)/SectionImage';
import { SectionTitle } from '../(components)/SectionTitle';


export function VisionSection() {
  return (
    <article className="relative lg:max-w-4xl lg:mx-auto lg:px-0 flex flex-col px-4 py-16 text-lg font-sans">

      <SectionTitle id="vision">Vision</SectionTitle>

      <p>
        Die Rheines-Event GmbH verwandelt fünf ehemalige Squash-Courts
        in einen lebendigen Begegnungsort mit über <span className="font-medium dark:text-white">500 m² Nutzfläche.</span>
      </p>

      <SectionImage
        src="/office.jpg"
        alt="Unsere Officeräume"
        caption="Business meets Quality-Time" />

      <p className="py-8">
        Innovativ gestaltete Gruppenräume neben einem Auditorium mit State of the Art Internet-Präsentationstechnik.
      </p>

      <SectionImage
        src="/event-kitchen.jpg"
        alt="Unsere Eventküche"
        caption="Entspannen Sie in unserer Eventküche"
        align="end" />

      <h6 className="py-16 text-center text-4xl font-display">
        Klein &amp; fein, <br />
        fernab von Masse
      </h6>

    </article>
  );
}
