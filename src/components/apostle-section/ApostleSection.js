import Cards from '../card/Cards';
import './apostle.modules.css';

const ApostleSection = () => {
    return (

        <section>
            <h3>Apostle Dr La Marco Nesbit</h3>

            <Cards classes="small"/>
            <Cards classes="medium"/>
            <Cards />
            <Cards />
            <Cards />
        </section>
    );
}

export default ApostleSection;