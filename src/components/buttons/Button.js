import "./button.modules.css";

const Button = ({ title, classes}) => {
	return <button className={classes}>{title}</button>;
};

export default Button;
