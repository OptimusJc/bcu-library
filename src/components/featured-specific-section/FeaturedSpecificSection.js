import Cards from '../card/Cards';
import './featuredSpecific.modules.css';

const FeaturedSpecificSection = () => {
    return (
        <section className='featured-specific container'>
            <div>
                <h3>Apostle Dr Mariah Nesbit</h3>
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
            <div>
                <h3>Apostle Arome Osayi</h3>
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
            <div>
                <h3>Pastor Patrick Okuna</h3>
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
        </section>
    );
}

export default FeaturedSpecificSection;