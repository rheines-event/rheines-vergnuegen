import { SectionImage } from '@rheine/app/(components)/SectionImage';


export function OpenSpaceDetails() {
  return (
    <section>

      <p className="pt-8 pb-2 font-medium">
        Willkommen in unserem Open Space Meeting Raum!
      </p>
  
      <p className="mb-4">
        Mit einer großzügigen Fläche von 70 m² bieten wir Ihnen flexible Möglichkeiten für Ihre Veranstaltung.
      </p>

      <p className="mt-6 mb-2">Planen Sie einen interaktiven Workshop?</p>
      <p className="mb-2">
        Kein Problem! Unser Open Space Raum bietet genügend Platz für Gruppenaktivitäten und ermöglicht eine reibungslose Zusammenarbeit.
      </p>
      <p>
        Sie können die Möbel und die Raumaufteilung nach Belieben anpassen, um den bestmöglichen Arbeitsbereich für Ihre Teilnehmer zu schaffen.
      </p>

      <SectionImage
        src="/open-space.jpg"
        caption="Teilen Sie sich den Raum so ein, dass er Ihre Anforderungen erfüllt." />

      <p className="mb-2">
        Vielleicht möchten Sie aber auch einen ruhigen Ort für eine Gruppensitzung?
      </p>
      <p className="mb-1">
        Dann ist unser Open Space Raum perfekt geeignet.
      </p>
      <p className="pb-8">
        <span className="mr-2.5">Dank der flexiblen Gestaltung können Sie den Raum so einteilen, dass er Ihre Anforderungen erfüllt &ndash;</span>
        ob in Form von kleinen Gruppen oder einer großen Runde.
      </p>

      <p>Kontaktieren Sie uns noch heute, um Ihren Open Space Meeting Raum zu buchen!</p>

    </section>
  );
}
