import { SectionImage } from '@rheine/app/(components)/SectionImage';


export function ClubraumDetails() {
  return (
    <section className="pb-8">

      <p className="pt-8 pb-4 font-medium">
        Ein Hauch von englischer Eleganz im Herzen der Stadt.
      </p>

      <p className="mb-1">
        Willkommen in unserem Private Clubraum!
      </p>
      <p className="pb-8">
        Treten Sie ein, machen sie es sich in unseren luxuriösen Chesterfield-Sofas und Sesseln bequem und versetzen Sie sich zurück in eine Zeit, in der Pubs das
        Sinnbild von Stil und Raffinesse waren.
      </p>

      <SectionImage
        src="/herrenzimmer.jpg"
        caption="Das Herrenzimmer unserer Location" />

      <p>
        Ob Sie einen Rückzugsort für After-Work-Drinks,
        einen Ort zum Entspannen mit Freunden oder ein Ziel für eine besondere Feier suchen,
        der Clubraum ist die perfekte Wahl.
      </p>

    </section>
  );
}
