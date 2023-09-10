import { SectionImage } from '@rheine/app/(components)/SectionImage';


export function AmphitheaterDetails() {
  return (
    <section className="pb-8">

      <p className="pt-8 pb-4 font-medium">
        Willkommen im Vortragsraum der Extraklasse!
      </p>

      <p className="pb-8">
        Mit unserer modernsten Übertragungstechnik und der herausragenden Akustik bieten wir Ihnen den perfekten Ort für Ihre Vorträge, Präsentationen und vieles mehr.
      </p>

      <SectionImage
        src="/amphitheater.jpg"
        caption="Unser Vortragsraum mit Tribüne bietet Platz für bis zu 50 Personen." />

      <p className="pb-8">
        Egal ob Sie ein Unternehmen sind, das regelmäßig Schulungen und Fortbildungen abhält, oder eine Fahrschule, die ihren Schülern eine optimale Lernumgebung bieten möchte - bei uns finden Sie den idealen Raum.
        Doch nicht nur für geschäftliche Zwecke ist unser Vortragsraum geeignet, auch für private Veranstaltungen wie Feiern oder Versammlungen stehen Ihnen unsere Räumlichkeiten zur Verfügung.
      </p>

      <p className="pb-8">
        Unsere modernste Übertragungstechnik ermöglicht es Ihnen, Inhalte auf professionelle Weise zu präsentieren und Ihre Zuhörer optimal zu erreichen.
        Die hervorragende Akustik sorgt dafür, dass Ihre Botschaft klar und deutlich ankommt und keine Details verloren gehen.
        Egal ob Sie einen Vortrag halten, eine Produktpräsentation machen oder eine Schulung abhalten - bei uns wird jeder Ton perfekt übertragen.
      </p>

      <p className="pb-8">
        Überzeugen Sie sich selbst von unserem Vortragsraum und all seinen Vorzügen.
        Kontaktieren Sie uns noch heute, um weitere Informationen zu erhalten oder um einen Besichtigungstermin zu vereinbaren.
        Wir freuen uns darauf, Ihnen den perfekten Raum für Ihre Veranstaltung bieten zu können!
      </p>

    </section>
  );
}
