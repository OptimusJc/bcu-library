import Cards from "../card/Cards";
import "./apostle.modules.css";

const ApostleSection = () => {
    return (
        <section className="container apostle-section">
            <h3>Apostle Dr La Marco Nesbit</h3>
            <div className="feature-container">
                <Cards custom_style="apostle_card" />
                <Cards custom_style="apostle_card" />
                <Cards custom_style="apostle_card" />
                <Cards custom_style="apostle_card" />
                <Cards custom_style="apostle_card" />
                <Cards custom_style="apostle_card" />
            </div>
        </section>
    );
};

export default ApostleSection;
