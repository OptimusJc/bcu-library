import Adverts from "./adverts/Adverts";
import Featured from "./featured/Featured";
import classes from "./featuredSection.module.css";

const Featured_section = () => {
  return (
    <section className={["container", classes.featured_section].join(" ")}>
      <Adverts />
      <Featured />
    </section>
  );
};

export default Featured_section;
