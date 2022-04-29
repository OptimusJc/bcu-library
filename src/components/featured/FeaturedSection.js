import Adverts from "./adverts/Adverts";
import Featured from "./featured/Featured";

const Featured_section = () => {
    return (
        <section className="container">
            
            <Adverts />
            <Featured />
        </section>
    );
}

export default Featured_section;