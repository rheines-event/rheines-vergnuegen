import { SectionImage } from '@rheine/app/(components)/SectionImage';


export function JagdzimmerDetails() {
  return (
    <section className="pb-8">
      
      <p className="pt-8">
        Tauchen Sie ein in die Welt der edlen Jagdkultur und erleben Sie ein unvergessliches Jagderlebnis in unserem exklusiven Jagdzimmer!
        Hier finden Sie nicht nur edle Jagdmöbel von höchster Qualität, sondern auch ein Schießkino der renommierten Firma Marksman.
      </p>

      <SectionImage
        src="/jagdzimmer.jpg"
        alt="Das Jagdzimmer unserer Location"
        caption="Unser exklusives Jagdzimmer mit Schiesskino der Firma Marksman"
        align="end" />

      <p>
        Doch das ist noch nicht alles!
        Dank des Schießkinos von Marksman können Sie Ihre Schießfähigkeiten verbessern und Ihre Treffsicherheit unter realistischen Bedingungen trainieren.
        Das hochmoderne System von Marksman bietet Ihnen eine Vielzahl an Jagdszenarien und realitätsgetreuen Simulationen.
        Egal ob Sie ein erfahrener Jäger sind oder noch Ihre ersten Schritte in der Welt der Jagd machen, das Schießkino wird Ihnen helfen, Ihr Können zu perfektionieren.
      </p>

      <p className="pt-8">
        Lassen Sie sich von unserem exklusiven Jagdzimmer begeistern und vereinbaren Sie noch heute einen Termin, um Ihre persönliche Jagd-Oase einzurichten.
        Erleben Sie die Faszination der Jagd in stilvollem Ambiente und verbessern Sie Ihre Fähigkeiten im Schießen.
      </p>

    </section>
  );
}
