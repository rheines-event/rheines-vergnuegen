import { SectionImage } from '@rheine/app/(components)/SectionImage';


export function EventkuecheDetails() {
  return (
    <section className="pb-8">

      <p className="py-8">
        Unsere Eventküche ist der perfekte Ort, um ein einzigartiges und unvergessliches Erlebnis für jeden Anlass zu schaffen.
        Egal, ob es sich um eine private Feier oder Firmenevent handelt. 
      </p>

      <SectionImage
        src="/eventkueche.jpg"
        caption="In einer Eventküche geht es nicht nur um das Essen, sondern auch um das Erleben." />

      <p className="pb-8">
        Unsere Eventküche bietet nicht nur eine außergewöhnliche kulinarische Erfahrung, sondern auch die Möglichkeit, gemeinsam mit Freunden, Familie oder Kollegen Zeit zu verbringen und sich auszutauschen.
        Das Essen wird zum verbindenden Element und schafft unvergessliche Momente.
      </p>

    </section>
  );
}
