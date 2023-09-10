export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-[#171717] text-slate-800 dark:text-gray-50">
      {children}
    </div>
  );
}
