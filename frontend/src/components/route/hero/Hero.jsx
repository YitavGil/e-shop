import styles from "../../../styles/styles";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] sm:min-h-[80vh] w-[91.7%] mx-auto bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://pbs.twimg.com/media/D27eB5WUkAEMJHZ.jpg:large",
      }}
    >
      <div style={{ background: " rgba(207, 33, 21, 0.35)" }}>
        <div className={`${styles.section} w-[90%] sm:w-[60%]`}>
          <h1
            className={`text-[35px] leading-[1.2] sm:text-[60px] text-[#ffffffe8] font-[600] capitalize`}
          >
            Best Collection for your Gaming Room
          </h1>
          <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#ffffffe8]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
            quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
            <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
          </p>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-[Poppins] text-[18px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
