import { SectionImage } from '@rheine/app/(components)/SectionImage';


export function EventkuecheDetails() {
  return (
    <section className="pb-8">

      <p className="pt-8 mb-4 font-medium">
        Unsere Eventküche &ndash;<span className="ml-2.5">weitaus mehr als nur ein Ort zum Essen.</span>
      </p>

      <p className="mb-2">
        In unserer Eventküche geht es nicht nur um das Essen, sondern auch um das Erleben.
        Sie ist der perfekte Ort, um ein einzigartiges und unvergessliches Erlebnis für jeden Anlass zu schaffen.
      </p>
      <p className="pb-8">
        Egal, ob es sich um eine private Feier oder Firmenevent handelt. 
      </p>

      <SectionImage
        src="/eventkueche.jpg"
        caption="In einer Eventküche geht es nicht nur um das Essen, sondern auch um das Erleben." />

      <p className="pb-2">
        Unsere Eventküche bietet nicht nur eine außergewöhnliche kulinarische Erfahrung, sondern auch die Möglichkeit, gemeinsam mit Freunden, Familie oder Kollegen Zeit zu verbringen und sich auszutauschen.
      </p>

      <p className="pb-8">
        Das Essen wird zum verbindenden Element und schafft unvergessliche Momente.
      </p>

    </section>
  );
}
