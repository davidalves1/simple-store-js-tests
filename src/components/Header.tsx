import Link from 'next/link';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => (
  <header data-test="header" className="flex h-12 items-center bg-slate-400 px-4">
    <Link href="/">
      <span data-test="header-title" className="text-xl font-bold">
        {title}
      </span>
    </Link>
  </header>
);
