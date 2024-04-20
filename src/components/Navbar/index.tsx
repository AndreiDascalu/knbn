import {
  ChevronDown,
  NotificationsOutline,
  PersonOutline,
  SearchOutline,
  SettingsOutline,
  ShareSocialOutline,
} from "react-ionicons";

const Navbar = () => {
  return (
    <div className="w-[calc(100%-240px)] fixed flex items-center justify-between px-2 md:px-6 h-16 border-b border-slate-300 bg-white left-[240px]">
      <div className="flex items-center gap-3 cursor-pointer">
        <PersonOutline color="#fb923c" width={"28px"} height={"28px"} />
        <span className="text-orange-400 font-semibold text-lg whitespace-nowrap">
          Board Name
        </span>
        <ChevronDown color="#fb923c" width={"16px"} height={"16px"} />
      </div>
      <div className="flex items-center gap-3 max-w-xl w-[600px] bg-gray-100 rounded-lg px-3 py-1">
        <SearchOutline color="#999" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow w-0 bg-gray-100 outline-none text-base"
        />
      </div>
      <div className="md:flex hidden items-center gap-4">
        <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
          <ShareSocialOutline color={"#444"} />
        </div>
        <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
          <SettingsOutline color={"#444"} />
        </div>
        <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
          <NotificationsOutline color={"#444"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
