import Cards from "../card/Cards";
import "./featuredSpecific.modules.css";

const FeaturedSpecificSection = () => {
    return (
        <section className="featured-specific container-fluid">
            <div className="outer-wrapper">
                <div>
                    <h3>Apostle Dr Mariah Nesbit</h3>
                    <div className="feature-container-specific">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
                <div>
                    <h3>Apostle Arome Osayi</h3>
                    <div className="feature-container-specific">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
                <div>
                    <h3>Pastor Patrick Okuna</h3>
                    <div className="feature-container-specific">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSpecificSection;
