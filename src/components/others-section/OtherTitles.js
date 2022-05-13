import Cards from "../card/Cards";
import "../apostle-section/apostle.modules.css";
import "./otherTitle.modules.css";

const OtherTitles = () => {
    return (
        <section className="other-section container">
            <h3>Explore other messages</h3>
            <div className="feature-container">
                <Cards custom_style="other_section_card" />
                <Cards custom_style="other_section_card" />
                <Cards custom_style="other_section_card" />
                <Cards custom_style="other_section_card" />
                <Cards custom_style="other_section_card" />
                <Cards custom_style="other_section_card" />
            </div>
        </section>
    );
};

export default OtherTitles;
