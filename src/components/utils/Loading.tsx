import { StylesDictionary } from "@/types";

const Loading = () => {
  const styles: StylesDictionary = {
    root: {
      background: `linear-gradient(
        90deg,
        rgba(0,0,0, 0),
        rgba(255, 255, 255, 0.5),
        rgba(0,0,0, 0)
      )`,
      backgroundSize: "200% 200%",
    },
  };

  return <div className="h-full animate-pendulum" style={styles.root} />;
};

Loading.displayName = "Loading";

export default Loading;
