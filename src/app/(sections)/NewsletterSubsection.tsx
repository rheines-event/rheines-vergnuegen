import { SectionImage } from '@rheine/app/(components)/SectionImage';
import { SubsectionTitle } from '@rheine/app/(components)/SubsectionTitle';


export function NewsletterSubsection() {
  return (
    <article className="relative lg:max-w-4xl lg:mx-auto lg:px-0 flex flex-col px-4 py-16 text-lg font-sans">

      <SubsectionTitle id="newsletter">Newsletter</SubsectionTitle>

      <p className="mb-8">
        Bleiben Sie auf dem Laufenden und erhalten Sie regelmäßig Informationen zu unseren Veranstaltungen.
      </p>

      <form className="group">
        <div className="mb-16">

          <SectionImage
            src="/newsletter.png"
            alt="Unser Newsletter"
            className="!my-0"
            caption={
              <div className="relative -ml-4 -mt-1">
                <input
                  required
                  type="email"
                  className="peer w-full p-4 dark:text-[#171717] focus:outline-none"
                  placeholder="Email Adresse" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="absolute right-0 inset-y-0 my-auto mr-4 w-5 h-5 hidden fill-rose-600 peer-invalid:block">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="absolute right-0 inset-y-0 my-auto mr-4 w-5 h-5 fill-emerald-600 hidden peer-valid:block">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
                </svg>
                <div className="absolute inset-x-0 -bottom-px pointer-events-none border-[#171717] border-b group-focus:border-b-2" />
              </div>
            }
            />
          
        </div>

        <button
          type="submit"
          className="text-[#171717] dark:text-white group-invalid:pointer-events-none group-invalid:text-gray-400 group-invalid:cursor-not-allowed ml-auto mr-4 hover:mr-2 transition-[margin-right] tracking-tighter leading-tight flex text-2xl items-center">
          <span>Jetzt registrieren</span>
          <svg
            className="inline-block ml-2"
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L19 6M19 6L13 11M19 6H0" stroke="currentColor" strokeWidth={1.5} />
          </svg>
        </button>
      </form>
    </article>
  );
}
