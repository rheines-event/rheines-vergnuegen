import { PropsWithChildren } from 'react';


export function SectionTitle({ id, children }: PropsWithChildren<{ id: string }>) {
  return (
    <h2
      id={id}
      className="mb-20 text-[100px] dark:text-white tracking-tighter font-body">
      {children}
    </h2>
  );
}
