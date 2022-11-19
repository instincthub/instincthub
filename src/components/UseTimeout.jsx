import { useRef, useEffect } from "react";

export default function useTimeout(callback, delay) {
  const stableCallback = useRef(callback);

  useEffect(() => {
    stableCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => stableCallback.current();

    if (typeof delay !== "number") return;

    const t = setTimeout(tick, delay);

    return () => clearTimeout(t);
  }, [delay]);
}
