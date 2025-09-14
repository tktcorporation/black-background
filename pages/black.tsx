import { useEffect } from "react";

const Black = (): JSX.Element => {
  useEffect(() => {
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen().catch(() => undefined);
    }
  }, []);

  return (
    <div
      style={{ backgroundColor: "black", width: "100vw", height: "100vh" }}
    />
  );
};

export default Black;
