import { useEffect } from "react";

export default function useOnClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  handler?: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listerner = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement

      if (!ref.current || ref.current.contains(target)) {
        return;
      }

      if (handler) {
        handler(event)
      }
    }

    document.addEventListener("mousedown", listerner)
    document.addEventListener("touchstart", listerner)

    return () => { 
      document.removeEventListener("mousedown", listerner)
      document.removeEventListener("touchstart", listerner)
    }
  }, [ref, handler])
}