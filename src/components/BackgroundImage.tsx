import bgDarkImage from "../assets/images/bg-desktop-dark.jpg";
import bgLightImage from "../assets/images/bg-desktop-light.jpg";
import bgMobileDarkImage from "../assets/images/bg-mobile-dark.jpg";
import bgMobileLightImage from "../assets/images/bg-mobile-light.jpg";

type BackgroundImageProps = {
  isDarkMode: boolean;
};

const BackgroundImage = ({ isDarkMode }: BackgroundImageProps): JSX.Element => {
  const lightOrDarkDesktopBGImage = isDarkMode ? bgDarkImage : bgLightImage;

  const lightOrDarkMobileBGImage = isDarkMode
    ? bgMobileDarkImage
    : bgMobileLightImage;

  const suitableBgImage =
    innerWidth > 767 ? lightOrDarkDesktopBGImage : lightOrDarkMobileBGImage;

  return (
    <section className="interface">
      <h2 className="sr-only">Interface</h2>
      <img
        className="absolute left-0 top-0 w-full z-[-1]"
        src={suitableBgImage}
        alt="Background Image"
        width={suitableBgImage === lightOrDarkDesktopBGImage ? 1440 : 375}
        height={suitableBgImage === lightOrDarkDesktopBGImage ? 300 : 200}
      />
    </section>
  );
};
export default BackgroundImage;
