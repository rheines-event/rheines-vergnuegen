import { SubsectionTitle } from '@rheine/app/(components)/SubsectionTitle';
import { NewsletterFormUseCase } from './NewsletterForm';


export function NewsletterSubsection() {
  return (
    <article className="relative lg:max-w-4xl lg:mx-auto lg:px-0 flex flex-col px-4 py-16 text-lg font-sans">

      <SubsectionTitle id="newsletter">Newsletter</SubsectionTitle>

      <p className="mb-8">
        Bleiben Sie auf dem Laufenden und erhalten Sie regelmäßig Informationen zu unseren Veranstaltungen.
      </p>
      <NewsletterFormUseCase />

    </article>
  );
}
