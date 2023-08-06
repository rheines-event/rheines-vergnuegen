import { SectionImage } from "@rheine/app/(components)/SectionImage";

export function JagdzimmerDetails() {
  return (
    <section className="pb-8">
      
      <p className="py-8">
        Die Rheines-Event GmbH verwandelt fünf ehemalige Squash-Courts
        in einen lebendigen Begegnungsort mit über <span className="font-medium">500 m² Nutzfläche.</span>
      </p>
      
      <SectionImage
        src="/jagdzimmer.jpg"
        alt="Das Jagdzimmer unserer Location"
        caption="Unser exklusives Jagdzimmer mit Schiesskino der Firma Marksman"
        align="end" />

    </section>
  );
}
