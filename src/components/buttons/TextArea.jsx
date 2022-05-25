import "./button.modules.css";

const TextArea = ({ type, placeholder, value, className, id, children }) => {
    return (
        <textarea
            className={className}
            value={value}
            placeholder={placeholder}
            type={type}
            id={id}
        >
            {children}
        </textarea>
    );
};

export default TextArea;
