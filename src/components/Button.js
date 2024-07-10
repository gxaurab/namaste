
const Button = ({ type, title, variant }) => {
    return (
      <button type={type} className={`btn-${variant}`}>
        <label> {title}</label>
      </button>
    );
  };
  
  export default Button;
  