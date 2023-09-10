import { SubsectionTitle } from '../(components)/SubsectionTitle';
import { ContactForm } from './ContactForm';


export function ContactFormSubsection() {
  return (
    <article className="relative w-full lg:max-w-4xl lg:mx-auto lg:px-0 flex flex-col px-4 text-lg font-sans">

      <SubsectionTitle id="contact-form">Anfragen</SubsectionTitle>
      <ContactForm />

    </article>
  );
}
