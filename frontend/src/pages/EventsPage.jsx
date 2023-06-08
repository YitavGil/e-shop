import styles from "../styles/styles";
import Header from "../components/layout/Header";
import EventCard from "../components/events/EventCard";

const EventsPage = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <div className={`${styles.section} mt-3`}>
        <EventCard active />
        <EventCard active />
      </div>
    </div>
  );
};

export default EventsPage;
