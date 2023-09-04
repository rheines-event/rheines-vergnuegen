'use client';

import { useState } from 'react';

import { useSearchParams } from 'next/navigation';


type Reason = 'booking' | 'inquiry' | 'other';
type FormValue = {
  reason: Reason;
  email: string;
  content: string;
};

function ContactFormImplementation({ onSubmit, defaultReason = 'inquiry' }: { defaultReason?: Reason, onSubmit?: (value: FormValue) => void }) {

  const [reason, setReason] = useState<Reason | null>(null);

  return (
    <form
      className="group"
      onSubmit={event => {
        event.preventDefault();

        const formValue: FormValue = {
          reason: event.currentTarget.reason.value,
          email: event.currentTarget.email.value,
          content: event.currentTarget.content.value,
        };

        if (onSubmit) { onSubmit(formValue); }
      }}>

      <div className="flex flex-col border border-[#171717] dark:border-white mb-16">
        <label className="hidden" htmlFor="name">Betreff</label>
        <select
          id="reason"
          name="reason"
          onChange={({ currentTarget }) => setReason(currentTarget.value as Reason)}
          className="font-medium m-4 focus:outline-none dark:bg-[#171717] bg-white"
          value={reason ?? defaultReason}
          placeholder="Betreff">
          <option value="inquiry">Frage</option>
          <option value="booking">Buchung</option>
          <option value="other">Sonstiges</option>
        </select>

        <div className="relative w-full border-y border-[#171717] dark:border-white">
          <label className="hidden" htmlFor="email">Betreff</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="peer w-full p-4 focus:outline-none dark:text-[#171717] dark:placeholder:text-slate-100 dark:bg-[#171717]"
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

        </div>

        <label className="hidden" htmlFor="content">Inhalt</label>
        <textarea
          required
          id="content"
          name="content"
          className="p-4 min-h-[128px] focus:outline-none dark:placeholder:text-slate-100 dark:bg-[#171717]" 
          placeholder="Ihr Anliegen" />
      </div>
      
      <button
        type="submit"
        className="text-[#171717] group-invalid:pointer-events-none group-invalid:text-gray-400 group-invalid:cursor-not-allowed ml-auto mr-4 hover:mr-2 transition-[margin-right] tracking-tighter leading-tight flex text-2xl items-center">
        <span>Absenden</span>
        <svg
          className="inline-block ml-2"
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 1L19 6M19 6L13 11M19 6H0" stroke="currentColor" />
        </svg>
      </button>
      
    </form>
  );
}


function ContactFormUseCase() {

  const params = useSearchParams();
  const inquiry = params.get('cta') as Reason | null ?? 'inquiry';

  return (
    <ContactFormImplementation
      defaultReason={inquiry}
      onSubmit={value => {}} />
  );
}

export const ContactForm = ContactFormUseCase;
