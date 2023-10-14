import { useState, useRef } from "react";
import { useClickAway } from "react-use";

function Search() {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const ref = useRef(null);
  useClickAway(ref, () => {
    setFocus(false);
  });

  return (
    <div
      ref={ref}
      className="min-h-[32px] h-[53px] mb-3 flex items-center sticky top-0 bg-black z-50"
    >
      <label className="h-[43px] bg-[#202327] border border-transparent w-full rounded-full overflow-hidden focus-within:border-[#1d9bf0] focus-within:bg-transparent group relative">
        <div className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0">
          <svg
            viewBox="0 0 24 24"
            height={18.75}
            className="min-w-[44px] text-[#71767b] group-focus-within:text-[#1d9bf0]"
          >
            <path
              fill="currentColor"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            />
          </svg>
        </div>
        <input
          className="w-full h-full bg-transparent outline-none p-3 pl-[55px] text-[#e7e9ea] placeholder-[#71767b]"
          placeholder="Ara"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocus(true)}
        />
        {query && focus && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="w-[22px] h-[22px] rounded-full bg-[#1d9bf0] flex items-center justify-center min-w-[22px] text-black absolute right-3 top-1/2 -translate-y-1/2 z-10"
          >
            <svg viewBox="0 0 15 15" width={10} height={10}>
              <path
                fill="currentColor"
                d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
              />
            </svg>
          </button>
        )}
      </label>
      {focus && (
        <div className="min-h-[100px] absolute top-full shadow-box text-center rounded-lg bg-black -translate-y-1 z-10">
          <p className="p-3 pt-5 text-[#71767B] leading-5 relative">
            Kişileri, listeleri veya anahtar kelimeleri aramayı dene
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
