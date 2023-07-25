export default function Button({
  label,
  value,
  onClick,
  disabled = false,
  className: additionalClassNames,
  iconSvg: icon,
  iconPosition,
  variant = "secondary",
}: {
  label: string;
  value: string;
  onClick?: () => void;
  disabled?: boolean;
  className: string;
  iconSvg?: JSX.Element;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary";
}) {
  /* 
  list available dynamic class name, as TailwindCss can't purge them:
  bg-secondary
  bg-primary 
  */

  const disabledCls = !disabled
    ? ""
    : "!bg-gray-300 cursor-not-allowed !text-gray-400 !fill-gray-400 border-gray-400 !opacity-100";

  const classes = {
    root: `flex px-2 py-1 items-center fill-white text-white text-base bg-${variant} 
    rounded-lg border-2 border-white hover:opacity-md`,
  };

  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`${classes.root} ${additionalClassNames} ${disabledCls}`}
    >
      {!icon ? (
        <>{value}</>
      ) : iconPosition === "left" ? (
        <>
          <span aria-hidden>{icon}</span>
          {value}
        </>
      ) : (
        <>
          {value}
          <span aria-hidden>{icon}</span>
        </>
      )}
    </button>
  );
}
