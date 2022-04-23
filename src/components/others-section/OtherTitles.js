import Cards from '../card/Cards';
import '../apostle-section/apostle.modules.css';
import './otherTitle.modules.css';

const OtherTitles = () => {
    return (

        <section className='other-section container'>
            <h3>Explore other messages</h3>
            <div className='feature-container'>

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

export default OtherTitles;