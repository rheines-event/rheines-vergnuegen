type Falsy = false | 0 | '' | null | undefined;
export function classNames(...classes: (string | Falsy)[]) {
  return classes.filter(Boolean).join(' ');
}
