import "./button.modules.css";

const Button = ({ title, classes, onclick }) => {
    return (
        <button className={classes} onClick={onclick} title={title}>
            {title}
        </button>
    );
};

export default Button;
