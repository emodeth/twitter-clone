import { Popover, Transition } from "@headlessui/react";
import { useAuth } from "../contexts/AuthContext";
import AccountPanel from "./AccountPanel";

function Account() {
  const { currentAccount } = useAuth();

  return (
    <div className="mt-auto">
      <Popover className="relative">
        <Popover.Button className="my-3 p-3 rounded-full transition-colors hover:bg-[#eff3f41a] w-full flex items-center outline-none">
          <img
            className="h-10 w-10 rounded-full"
            src={currentAccount.avatar}
            alt="avatar"
          />
          <div className="flex flex-col items-start mx-3">
            <p className=" font-bold">{currentAccount.fullName}</p>
            <p className="text-[color:var(--color-base-secondary)]">
              @{currentAccount.username}
            </p>
          </div>

          <svg
            viewBox="0 0 24 24"
            width={18.75}
            height={18.75}
            className="ml-auto "
          >
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            ></path>
          </svg>
        </Popover.Button>

        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-200"
          leave="transition duration-200 ease-out"
          leaveFrom="transfrom opacity-100"
          leaveTo="transfrom opacity-0"
        >
          <Popover.Panel className="absolute bottom-[90px] w-[300px] left-1/2 -translate-x-1/2 bg-[color:var(--background-primary)] shadow-box rounded-2xl overflow-hidden py-3">
            {({ close }) => <AccountPanel close={close} />}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default Account;
