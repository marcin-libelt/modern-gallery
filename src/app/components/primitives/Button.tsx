interface ButtonProps {
  clickHandler: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button = ({ clickHandler, className, children }: ButtonProps) => {
  return (
    <button type="button" onClick={clickHandler} className={`${className}`}>
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
