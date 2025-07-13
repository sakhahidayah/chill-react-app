import { useEffect, useState } from "react";

function Icon() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <>
      <div className="relative group lg:w-20 lg:h-10">
        <button className="flex flex-row gap-1 justify-center items-center">
          <img
            src="/images/favicon/profile.png"
            alt=""
            className="w-5 h-5 lg:w-10 lg:h-10 rounded-full"
          />
          <a href="#" className="group relative lg:w-7 lg:h-7">
            <i className="fas fa-angle-down "></i>
          </a>
        </button>
        <div className="group-hover:inline-block absolute -right-0 w-40 lg:w-44 bg-[#181A1C] text-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition duration-500 z-10 text-center">
          <a
            href="#"
            className="px-[12px] py-2 text-[#3254FF] hover:bg-slate-600 flex flex-row justify-center items-center font-medium text-[10px] leading-[140%] tracking-wide gap-1 lg:text-sm"
          >
            <i className="fas fa-user-alt mr-1"></i> {username}
          </a>
          <a
            href="#"
            className="px-[12px] py-2 hover:bg-slate-600 flex flex-row justify-center items-center font-medium text-[10px] leading-[140%] tracking-wid lg:text-sm"
          >
            <i className="fas fa-star mr-1"></i> Premium {username}
          </a>
          <a
            href="/login"
            className="block px-4 py-2 hover:bg-slate-600 font-medium text-[10px] leading-[140%] tracking-wide lg:text-sm"
          >
            Keluar
          </a>
        </div>
      </div>
    </>
  );
}

export default Icon;
