import Feature from "./Feature";
import './Feature.modules.css';

const Featured = () => {
	return (
		<div className="featured">
			<h3>Featured</h3>
			<Feature />
			<Feature />
			<Feature />
			<Feature />
			<Feature />
		</div>
	);
};

export default Featured;
