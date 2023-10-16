import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mb-4 px-4 flex flex-wrap text-[color:var(--color-base-secondary)] text-[13px] leading-4 gap-2">
      <Link to="/" className="hover:underline">
        Hizmet şartları
      </Link>
      <Link to="/" className="hover:underline">
        Gizlilik politikası
      </Link>
      <Link to="/" className="hover:underline">
        Çerez politikası
      </Link>
      <Link to="/" className="hover:underline">
        Imprint
      </Link>
      <Link to="/" className="hover:underline">
        Erişilebilirlik
      </Link>
      <Link to="/" className="hover:underline">
        Reklam bilgisi
      </Link>
      <div className="w-full flex gap-2">
        <Popover className="relative inline-flex leading-4">
          <Popover.Button className="flex items-center">
            Daha fazla
            <svg viewBox="0 0 24 24" className="px-0.5 h-[1em]">
              <path
                fill="currentColor"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              />
            </svg>
          </Popover.Button>
          <Popover.Panel className="bottom-0 right-0 absolute bg-[color:var(--background-primary)] shadow-box text-[color:var(--color-base)] w-[180px] max-w-[384px] rounded-xl overflow-hidden">
            <button className="w-full px-4 py-3 font-bold text-left text-[15px] leading-5 hover:bg-[color:var(--background-secondary)] transition-colors">
              Hakkında
            </button>
            <button className="w-full px-4 py-3 font-bold text-left text-[15px] leading-5 hover:bg-[color:var(--background-secondary)] transition-colors">
              X uygulamasını indir
            </button>
            <button className="w-full px-4 py-3 font-bold text-left text-[15px] leading-5 hover:bg-[color:var(--background-secondary)] transition-colors">
              Durum
            </button>
            <button className="w-full px-4 py-3 font-bold text-left text-[15px] leading-5 hover:bg-[color:var(--background-secondary)] transition-colors">
              İşletmeler için X
            </button>
            <button className="w-full px-4 py-3 font-bold text-left text-[15px] leading-5 hover:bg-[color:var(--background-secondary)] transition-colors">
              Geliştiriciler
            </button>
          </Popover.Panel>
        </Popover>
        <p>© 2023 EMODETH</p>
      </div>
    </footer>
  );
}

export default Footer;
