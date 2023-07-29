import { StylesDictionary } from "@/app/types";

export default function Loading({
  show,
  className,
}: {
  show: boolean;
  className?: string;
}): JSX.Element | null {
  const styles: StylesDictionary = {
    root: {
      display: "inline-block",
      position: "relative",
      width: "80px",
      height: "80px",
    },
    child: {
      position: "absolute",
      border: "4px solid #fff",
      opacity: "1",
      borderRadius: "50%",
    },
  };

  if (!show) {
    return null;
  }

  return (
    <div className={className}>
      <div style={styles.root}>
        <div className="animate-ldsRipple" style={styles.child}></div>
        <div
          className="animate-ldsRipple"
          style={{ ...styles.child, animationDelay: "-0.5s" }}
        ></div>
      </div>
    </div>
  );
}
