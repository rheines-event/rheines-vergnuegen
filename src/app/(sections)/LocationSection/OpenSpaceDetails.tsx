import { SectionImage } from '@rheine/app/(components)/SectionImage';


export function OpenSpaceDetails() {
  return (
    <section className="pb-8">

      <p className="py-8">
        Willkommen in unserem Open Space Meeting Raum!
        Mit einer großzügigen Fläche von 70 m² bieten wir Ihnen flexible Möglichkeiten für Ihre Veranstaltung.
        Ganz gleich, ob Sie einen Schwangerschaftskurs, Gruppensitzungen oder einen Think Tank durchführen möchten - in unserem Raum haben Sie die Freiheit, Ihre Ideen in die Tat umzusetzen.
      </p>

      <p>
        Planen Sie einen interaktiven Workshop? Kein Problem!
        Unser Open Space Raum bietet genügend Platz für Gruppenaktivitäten und ermöglicht eine reibungslose Zusammenarbeit.
        Sie können die Möbel und die Raumaufteilung nach Belieben anpassen, um den bestmöglichen Arbeitsbereich für Ihre Teilnehmer zu schaffen.
      </p>

      <SectionImage
        src="/open-space.jpg"
        caption="Dank der flexiblen Gestaltung können Sie den Raum so einteilen, dass er Ihre Anforderungen erfüllt." />

      <p className="pb-8">
        Vielleicht möchten Sie aber auch einen ruhigen Ort für eine Gruppensitzung?
        Dann ist unser Open Space Raum perfekt geeignet.
        Dank der flexiblen Gestaltung können Sie den Raum so einteilen, dass er Ihre Anforderungen erfüllt.
        Ob in Form von kleinen Gruppen oder einer großen Runde - wir stellen sicher, dass jeder eine angenehme Atmosphäre zum Austausch hat.
      </p>

      <p>
        Kontaktieren Sie uns noch heute, um Ihren Open Space Meeting Raum zu buchen.
      </p>

    </section>
  );
}
