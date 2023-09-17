import { SectionImage } from '@rheine/app/(components)/SectionImage';


export function JagdzimmerDetails() {
  return (
    <section className="pb-8">
      
      <p className="pt-8 mb-4 font-medium">
        Erleben Sie die Faszination der Jagd in stilvollem Ambiente.
      </p>
      <p>
        Vor Ort finden Sie außerdem unser exklusives Jagdzimmer mit integriertem Schiesskino.
      </p>
      <p className="mt-1">
        Dank des Schießkinos vom Weltmarktführer Marksman können Sie Ihre Schießfähigkeiten testen und Ihre Treffsicherheit unter realistischen Bedingungen trainieren.
      </p>

      <SectionImage
        src="/jagdzimmer.png"
        alt="Das Jagdzimmer unserer Location"
        caption="Unser exklusives Schiesskino der Firma Marksman"
        align="end" />

      <p className="pt-8">
        Das hochmoderne System von Marksman bietet Ihnen eine Vielzahl an
        Jagdszenarien und realitätsgetreuen Simulationen.
      </p>
      <p className="pt-8">
        
      </p>

    </section>
  );
}
