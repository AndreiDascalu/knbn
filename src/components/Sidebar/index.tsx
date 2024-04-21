import { HomeOutline, LogOutOutline } from "react-ionicons";

const Sidebar = () => {
  const navLinks = [
    {
      title: "Home",
      icon: <HomeOutline color={"#555"} width={"26px"} height={"26px"} />,
      active: false,
    },
  ];

  return (
    <div className="fixed h-full w-[240px] flex flex-col bg-white overflow-hidden left-0 top-0">
      <div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-white">
        <span className="text-orange-400 font-semibold text-2xl md:block hidden">
          knbn
        </span>
      </div>
      <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-white py-5 px-3 relative">
        {navLinks.map((link) => {
          return (
            <div
              key={link.title}
              className="flex items-center gap-2 w-full rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer"
            >
              {link.icon}
              <span className="font-medium text-[15px] md:block hidden">
                {link.title}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-0 items-center md:justify-start justify-center gap-2 md:w-[100%] w-[70%] rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer bg-gray-200">
        <LogOutOutline></LogOutOutline>
        <span className="font-medium text-[15px] md:block hidden">Log out</span>
      </div>
    </div>
  );
};

export default Sidebar;
