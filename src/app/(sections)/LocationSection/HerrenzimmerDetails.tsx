import { SectionImage } from '@rheine/app/(components)/SectionImage';


export function HerrenzimmerDetails() {
  return (
    <section className="pb-8">
      
      <p className="py-8">
        Die Rheines-Event GmbH verwandelt fünf ehemalige Squash-Courts
        in einen lebendigen Begegnungsort mit über <span className="font-medium">500 m² Nutzfläche.</span>
      </p>
      
      <SectionImage
        src="/herrenzimmer.jpg"
        caption="Das Herrenzimmer unserer Location" />

    </section>
  );
}
