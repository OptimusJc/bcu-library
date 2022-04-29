import Feature from "./Feature";
import './Feature.modules.css';

const Featured = () => {
	return (
		<div className="featured">
			<h3>Featured</h3>
			<div className="feature-container">
				<Feature />
				<Feature />
				<Feature />
				<Feature />
				<Feature />
				<Feature />
				<Feature />
				<Feature />
			</div>
		</div>
	);
};

export default Featured;
