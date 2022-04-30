import { Link } from "react-router-dom";

const StreamLink = ({ imgSrc, title, classes, onClick, data }) => {
  return (
    <Link to="" className={classes} onClick={onClick} data-animate={data}>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <span>{title}</span>
    </Link>
  );
};

export default StreamLink;
