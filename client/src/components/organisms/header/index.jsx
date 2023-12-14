import { useNavigate } from "react-router-dom";
import { ChevronLeft, Menu } from "lucide-react";

import NavbarHeader from "../../molecules/navbarHeader";
import NavbarButton from "../../atoms/navbarButton";
import Searcher from "../../atoms/searcher";
import UserIcon from "../../atoms/userIcon";
import UserHeaderMenu from "../../atoms/userHeaderMenu";

import { useState, useEffect } from "react";

function Header() {
  const [isLogged, setIsLogged] = useState(true);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [closeMenuTimeOut, setCloseMenuTimeOut] = useState(null);
  const userDefault = {
    names: "Caperactus",
  };
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user")) || userDefault
  );

  const navigate = useNavigate();

  const toLogout = () => {
    setIsLogged(false);  
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/"); 
  };

  useEffect(() => {
    if (userInfo.email) {
      setIsLogged(true);
    } 
  }, [userInfo]);

const closeSession = () => {
  toLogout();
};

  const headerMenuOptions = [
    {
      text: "Mi Cuenta",
      redirect: "/Myaccount",
      dataTest: "link_mi-cuenta",
    },
    {
      text: "Reservas",
      redirect: "/booked",
      dataTest: "link_reservas",
    },
    {
      text: "Cerrar Sesión",
      onClick: () => {
        console.log("Clic en Cerrar Sesión");
        toLogout();
      },
      dataTest: 'link_cerrar-sesion',
    }
  ];

  const toRegister = () => {
    navigate("/Register");
  };

  const closeMenu = () => {
    let timeout = setTimeout(() => {
      setIsMenuToggled(false);
    }, 200);
    setCloseMenuTimeOut(timeout);
  };

  const toLogin = () => {
    navigate("/Login");
  };

  const renderLogSection = () => {
    if (isLogged) {
      return (
        <div className="relative flex items-center gap-2 justify-center w-fit">
          <button
            className="group flex focus:outline-none items-center gap-1"
            onClick={() => setIsMenuToggled((prev) => !prev)}
            onBlur={closeMenu}
            data-test="user_menu_toggle"
          >
            <UserIcon imgUrl={userInfo.picture}/>
            <span className="group-hover:text-secondary-3 group-focus:text-secondary-3">
              {userInfo.names}
            </span>
            <ChevronLeft
              className={`transform ${
                isMenuToggled
                  ? "-rotate-90"
                  : "group-hover:-rotate-90 group-focus:-rotate-90"
              } transition-transform duration-300 ease-in-out`}
            />
          </button>
          {isMenuToggled && (
            <UserHeaderMenu
              options={headerMenuOptions}
              toCancelClose={closeMenuTimeOut}
              toCloseMenu={closeMenu}
            />
          )}
        </div>
      );
    }
    return (
      <div className="flex gap-4 justify-evenly w-fit">
        <NavbarButton
          filled={false}
          text={"Iniciar Sesión"}
          handler={toLogin}
        />
        <NavbarButton filled text={"Registrarse"} handler={toRegister} />
      </div>
    );
  };

  return (
    <header className="w-full h-fit py-6 flex flex-col items-center justify-between bg-gradient-to-b from-black to-secondary-1 text-primary-1 sticky top-0 z-50 lg:flex-row">
      <div className="flex items-center justify-between w-full lg:w-fit lg:flex-grow-0">
        <picture
          onClick={() => navigate("/")}
          className="h-14 overflow-hidden ml-10 mb-4"
        >
          <img
            className="h-full w-auto object-contain"
            src="https://media.discordapp.net/attachments/1176511259093516384/1180139581736222870/image.png?ex=657c55a2&is=6569e0a2&hm=a399b0f29e8da2d1cd93c6d9d7330f9bced19efac8d73457bc1e30c779327a2b&=&format=webp&quality=lossless&width=606&height=160"
            alt="logo"
          />
        </picture>
        <button
          onClick={() => setIsMobileNav((prev) => !prev)}
          className="group w-10 h-10 mr-10 lg:hidden"
          aria-label="menu toggle"
          data-test="toggle_mobile_menu"
        >
          <Menu className="group-[:hover]:text-secondary-3 group-[:hover]:scale-110 group-[:focus]:text-secondary-3 group-[:focus]:scale-110 transition-transform transform duration-300 ease-out-expo w-full h-full" />
        </button>
      </div>
      {isMobileNav && (
        <div className="px-10 mt-1 pt-3 border-t-2 border-gray-500 flex flex-col gap-5 items-center lg:hidden">
          <Searcher />
          <NavbarHeader />
          {renderLogSection()}
        </div>
      )}
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:mr-10 lg:gap-5 lg:flex-grow">
        <Searcher className={"hidden xl:inline-flex xl:ml-5"} />
        <NavbarHeader className={"lg:flex-grow"} />
        {renderLogSection()}
      </div>
    </header>
  );
}

export default Header;
