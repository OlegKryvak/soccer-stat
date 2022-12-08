import React from "react";
import { useTranslation } from "react-i18next";
import { NavItem } from "../components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeTheme, selectTheme } from "../redux/reducers/theme";
import Sun from "../assets/svgs/sun.svg";
import Moon from "../assets/svgs/moon.svg";
import i18n from "../localization/i18n";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const PATHS = [
    { pathName: t("leagues"), path: "leagues" },
    { pathName: t("teams"), path: "teams" },
  ];
  const changeThemeHandler = (): void => {
    const changableTheme: "dark" | "light" =
      theme === "dark" ? "light" : "dark";
    dispatch(changeTheme({ theme: changableTheme }));
  };

  const changeLangue = (_lang: "en" | "ua") => {
    i18n.changeLanguage(_lang);
  };
  return (
    <div className={theme}>
      <header className="flex w-full bg-aqua dark:bg-darkblue h-20 items-center p-4 justify-between shadow-md">
        <div className="flex items-center">
          <img
            className="w-8 rounded"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Football_Pallo_valmiina-cropped.jpg/170px-Football_Pallo_valmiina-cropped.jpg"
            alt="logo"
          />
          <nav className="ml-4">
            <ul className="flex">
              {PATHS.map((el) => {
                return (
                  <NavItem
                    key={el.path}
                    path={el.path}
                    pathName={el.pathName}
                  />
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="flex">
          <button className="p-2 m-4 rounded bg-darkblue text-white" onClick={() => changeLangue("en")}>En</button>
          <button className="p-2 m-4 rounded bg-darkblue text-white" onClick={() => changeLangue("ua")}>Ua</button>
          <button onClick={changeThemeHandler}>
            <img
              className="z-10 w-8 h-8"
              src={theme === "dark" ? Sun : Moon}
              alt="theme-img"
            />
          </button>
        </div>
      </header>
      <main className="p-4 bg-beige dark:bg-blueviolet min-h-screen">
        {children}
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
