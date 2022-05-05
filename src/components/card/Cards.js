import "./cards.modules.css";
import randomImage from "../../assets/images/placeholder/a-book-g793b9761e_640.jpg";

const Cards = ({ styles }) => {
    return (
        <div className={["card", styles].join(" ")}>
            <img src={randomImage} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
            </div>
        </div>
    );
};

export default Cards;
