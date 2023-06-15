interface SearchProps {}

export const Search = (props: SearchProps) => {
  return (
    <section id="search" className="pt-10">
      <form className="flex justify-center gap-3">
        <input
          type="search"
          className="mb-3 h-10 rounded-md border border-solid border-zinc-500 px-4 py-2 shadow-lg outline-none"
        />
        <button
          type="submit"
          className="h-10 rounded-md bg-teal-700 px-3 text-white transition-colors hover:bg-teal-900"
        >
          Search
        </button>
      </form>
    </section>
  );
};
