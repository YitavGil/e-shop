import styles from "../../styles/styles";
import CountDown from "./CountDown";
import PropTypes from "prop-types";

const EventCard = ({ active }) => {
  console.log(active);
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? "" : "mb-12"} lg:flex p-2`}>
      <div className="w-full lg:w-1/2 m-auto">
        <img
          src="https://www.ivory.co.il/files/catalog/org/1683624597g97Su.jpg"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
          The Legend Of Zelda: Tears Of The Kingdom
        </h2>
        <p>
          An epic adventure awaits in the Legend of Zelda: Tears of the Kingdom
          game, only on the Nintendo Switch system. In this sequel to the Legend
          of Zelda: Breath of the Wild game, you’ll decide your own path through
          the sprawling landscapes of Hyrule and the mysterious islands floating
          in the vast skies above. Can you harness the power of Link’s new
          abilities to fight back against the malevolent forces that threaten
          the kingdom?
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              500$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            5 sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;

EventCard.propTypes = {
  active: PropTypes.bool,
};

