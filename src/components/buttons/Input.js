import "./button.modules.css";

const Input = ({ type, placeholder, value, className, id }) => {
    return (
        <input
            className={className}
            placeholder={placeholder}
            type={type}
            id={id}
        />
    );
};

export default Input;
