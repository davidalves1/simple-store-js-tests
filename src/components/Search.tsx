import { ChangeEvent, FormEvent, useState } from 'react';

interface SearchProps {
  onSearch: (value: string) => void;
}

export const Search = (props: SearchProps) => {
  const [term, setTerm] = useState('');

  const handleChangeTerm = (ev: ChangeEvent<HTMLInputElement>) => {
    setTerm(ev.target.value);
  };

  const handleSearch = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    props.onSearch(term);
  };

  return (
    <section id="search" className="pt-10">
      <form className="flex justify-center gap-3" onSubmit={handleSearch}>
        <input
          value={term}
          onChange={handleChangeTerm}
          data-test="search-input"
          type="search"
          className="mb-3 h-10 rounded-md border border-solid border-zinc-500 px-4 py-2 shadow-lg outline-none"
        />
        <button
          data-test="search-button"
          type="submit"
          className="h-10 rounded-md bg-teal-700 px-3 text-white transition-colors hover:bg-teal-900"
        >
          Search
        </button>
      </form>
    </section>
  );
};
