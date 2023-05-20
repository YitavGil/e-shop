import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] sm:min-h-[80vh] w-[91.7%] mx-auto bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://pbs.twimg.com/media/D27eB5WUkAEMJHZ.jpg:large",
      }}
    ></div>
  );
};

export default Hero;
