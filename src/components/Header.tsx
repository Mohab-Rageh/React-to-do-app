import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

type HeaderProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const Header = ({ isDarkMode, toggleTheme }: HeaderProps) => {
  return (
    <section className="flex items-center justify-between mb-6">
      <h1 className="text-2xl text-slate-50 uppercase font-bold tracking-widest">
        TO DO
      </h1>
      <button
        type="button"
        onClick={toggleTheme}
        title={`Switch to ${isDarkMode ? "Light" : "Dark"} Mode`}
      >
        <img
          className="size-5 md:size-auto"
          src={isDarkMode ? sunIcon : moonIcon}
          alt={isDarkMode ? "Sun Icon" : "Moon Icon"}
          width={26}
          height={26}
        />
      </button>
    </section>
  );
};
export default Header;
