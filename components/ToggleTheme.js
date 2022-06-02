import { Fragment, useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/theme";
import Head from "next/head";

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <Head>
        <Fragment>
        <link rel="stylesheet" href={`/css/${theme}.css`} />
                
        </Fragment>
      </Head>
      {theme === "light" ? (
        <span
          onClick={() => {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
          }}
          style={{ fontSize: "24px" }}
        >
          🌓
        </span>
      ) : (
        <span
          onClick={() => {
            setTheme("light");
            localStorage.setItem("theme", "light");
          }}
          style={{ fontSize: "24px" }}
        >
          🌞
        </span>
      )}
    </>
  );
};

export default ToggleTheme;