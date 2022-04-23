import Cards from '../card/Cards';
import './apostle.modules.css';

const ApostleSection = () => {
    return (

        <section className='container apostle-section'>
            <h3>Apostle Dr La Marco Nesbit</h3>
            <div className='feature-container'>
                <Cards classes="small"/>
                <Cards classes="medium"/>
                <Cards />
                <Cards />
                <Cards />
            </div>
        </section>
    );
}

export default ApostleSection;