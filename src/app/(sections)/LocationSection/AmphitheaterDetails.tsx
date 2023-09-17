import { SectionImage } from '@rheine/app/(components)/SectionImage';


export function AmphitheaterDetails() {
  return (
    <section className="pb-8">

      <p className="pt-8 pb-4 font-medium">
        Willkommen im Vortragsraum der Extraklasse!
      </p>

      <p className="pb-1">
        Wir bieten Ihnen den perfekten Ort für Ihre Vorträge, Präsentationen und vieles mehr.
      </p>

      <p className="pb-4">
        Unser Vortragsraum mit Tribüne bietet Platz inklusive einer Tribüne für bis zu 50 Personen.
      </p>

      <p className="pb-2">
        Egal ob Sie ein Unternehmen sind, das regelmäßig Schulungen und
        Fortbildungen abhält, oder eine Fahrschule, die ihren Schülern eine
        optimale Lernumgebung bieten möchte.
      </p>

      <SectionImage
        src="/amphitheater.jpg"
        caption="Unser Vortragsraum mit Tribüne bietet Platz für bis zu 50 Personen." />

      <p className="pb-4">
        Natürlich können Sie unseren Raum auch für private Veranstaltungen wie
        Feiern oder Versammlungen buchen.
      </p>

    </section>
  );
}
