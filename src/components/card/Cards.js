import "./cards.modules.css";
import randomImage from "../../assets/images/placeholder/a-book-g793b9761e_640.jpg";

const Cards = ({ custom_style }) => {
    return (
        <div
            className={["card", custom_style].join(" ")}
            // data-aos="fade-right"
            // data-aos-delay="10"
        >
            <img src={randomImage} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 className="card-title">lorem ipsum dolor amet</h5>
                <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
            </div>
        </div>
    );
};

export default Cards;
