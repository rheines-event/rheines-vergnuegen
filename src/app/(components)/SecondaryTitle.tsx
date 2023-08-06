import { PropsWithChildren } from 'react';


export function SecondaryTitle({ id, children }: PropsWithChildren<{ id: string }>) {
  return (
    <h2
      id={id}
      className="mb-20 text-[100px] tracking-tighter font-serif">
      {children}
    </h2>
  );
}