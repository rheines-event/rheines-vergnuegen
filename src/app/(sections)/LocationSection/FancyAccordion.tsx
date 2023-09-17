'use client';

import { PropsWithChildren } from 'react';

import { useSearchParams } from 'next/navigation';
import * as RadixAccordion from '@radix-ui/react-accordion';


export function Accordion({ children, className, searchParamName }: PropsWithChildren<{ className?: string, searchParamName?: string }>) {
  
  const params = useSearchParams();
  const openedSection = searchParamName ?
    params.get(searchParamName) ?? undefined :
    undefined;

  return (
    <RadixAccordion.Root
      type="single"
      className={className}
      defaultValue={openedSection}
      collapsible>
      {children}
    </RadixAccordion.Root>
  );
}


export function Panel({ id, value, title, children }: PropsWithChildren<{ id?: string, value?: string, title: string }>) {
  return (
    <RadixAccordion.Item value={value ?? title}>
      <RadixAccordion.Header
        className="py-2 lg:py-4 text-5xl font-body border-b border-slate-800 dark:border-white dark:text-white">
        <RadixAccordion.Trigger className="group w-full flex gap-x-2 items-center justify-between">
          <span id={id} className="ml-4">{title}</span>
          <PlusMinusIcon className="w-8 h-8" aria-hidden />
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content className="pl-4">{children}</RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}


function PlusMinusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.5 12H4.5"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round" />
      <path
        d="M12 4.5V19.5"
        stroke="currentColor"
        className="group-data-[state=open]:rotate-90 origin-center transition-transform"
        strokeLinecap="square"
        strokeLinejoin="round" />
    </svg>
  );
}
