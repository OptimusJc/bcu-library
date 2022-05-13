import "./Personality.modules.css";
import Button from "../buttons/Button";
import "../buttons/button.modules.css";

import personality_image from "../../assets/images/placeholder/256x471.jpg";

const Personality = () => {
    return (
        <section className="container">
            <div className="personality-section">
                <div className="person_image">
                    <img src={personality_image} alt="" />
                </div>
                <div className="person_bio animate__animated animate__bounce">
                    <h3>personality of the week</h3>
                    <h4>dr. flinstones</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur
                    </p>

                    <Button title="Read More" classes="read-more" />
                </div>
            </div>
        </section>
    );
};

export default Personality;
