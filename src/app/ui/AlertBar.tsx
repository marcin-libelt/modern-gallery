export default function AlertBar({
  message,
  variant = "info",
}: {
  message: string;
  variant?: "warning" | "success" | "danger" | "info";
}): JSX.Element {
  /* 
  list available dynamic class name, as TailwindCss can't purge them:
  
  text-alert-warning
  text-alert-success
  text-alert-danger
  text-alert-info 

  border-alert-warning
  border-alert-success
  border-alert-danger
  border-alert-info
  */

  return (
    <div
      className={`${classes.root} border-alert-${variant} text-alert-${variant}`}
    >
      {message}
    </div>
  );
}

const classes = {
  root: "border rounded-xl border-red my-3 p-5 text-left bg-wite",
};
