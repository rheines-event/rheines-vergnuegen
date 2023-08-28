import { PropsWithChildren } from 'react';


export function SubsectionTitle({ id, children }: PropsWithChildren<{ id: string }>) {
  return (
    <h3
      id={id}
      className="mb-8 text-5xl tracking-tighter font-serif font-light italic">
      {children}
    </h3>
  );
}
