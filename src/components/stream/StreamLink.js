import { Link } from "react-router-dom";

const StreamLink = ({ imgSrc, title, classes, onClick, to }) => {
    return (
        <Link to={to} className={classes} onClick={onClick}>
            <div>
                <img src={imgSrc} alt="" />
            </div>
            <span>{title}</span>
        </Link>
    );
};

export default StreamLink;
