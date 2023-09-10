import { SectionImage } from '@rheine/app/(components)/SectionImage';


export function ClubraumDetails() {
  return (
    <section className="pb-8">

      <p className="pt-8 pb-4">
        <p className="font-medium mr-1">Willkommen in unserem Private Clubraum -</p>
        ein Hauch von englischer Eleganz im Herzen der Stadt.
      </p>

      <p className="pb-8">
        Treten Sie ein und versetzen Sie sich zurück in eine Zeit, in der Pubs das Sinnbild von Stil und Raffinesse waren.
        Nehmen Sie Platz auf unseren luxuriösen Chesterfield-Sofas und Sesseln. 
        Im Herzen unseres Clubraums erwartet Sie eine exquisit gestaltete Bar - der Mittelpunkt für die feinsten Getränke und Cocktails.
        Tauchen Sie ein in die opulenten Räumlichkeiten, gekennzeichnet durch dunkle Holzvertäfelung, gedämpftes Licht und sorgfältig ausgewählte Dekoration sowie einer Raucherlounge.
        Es ist eine Atmosphäre, die mühelos den Charme eines großartigen englischen Pubs einfängt.
      </p>

      <SectionImage
        src="/herrenzimmer.jpg"
        caption="Das Herrenzimmer unserer Location" />

      <p>
        Ob Sie einen Rückzugsort für After-Work-Drinks, einen Ort zum Entspannen mit Freunden oder ein Ziel für eine besondere Feier suchen, der Clubraum ist die perfekte Wahl.
        <p className="mt-4">Begleiten Sie uns und erleben Sie den luxuriösen englischen Charme, der einen bleibenden Eindruck hinterlassen wird.</p>
      </p>

    </section>
  );
}
