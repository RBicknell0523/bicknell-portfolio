"use client";
import { useState, useEffect, useRef } from "react";

interface MobileTextCyclerProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export function MobileTextCycler({ texts, interval = 3500, className = "" }: MobileTextCyclerProps) {
  const [slots, setSlots] = useState<[string, string]>([
    texts[0],
    texts.length > 1 ? texts[1] : texts[0],
  ]);
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const stateRef = useRef({ slot: 0 as 0 | 1, index: 0 });

  useEffect(() => {
    if (texts.length <= 1) return;
    const timer = setInterval(() => {
      const incoming: 0 | 1 = stateRef.current.slot === 0 ? 1 : 0;
      const nextIdx = (stateRef.current.index + 1) % texts.length;
      stateRef.current.slot = incoming;
      stateRef.current.index = nextIdx;
      setSlots((prev) => {
        const s: [string, string] = [prev[0], prev[1]];
        s[incoming] = texts[nextIdx];
        return s;
      });
      setActiveSlot(incoming);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <span className={`${className} relative`}>
      {([0, 1] as const).map((slot) => (
        <span
          key={slot}
          aria-hidden={activeSlot !== slot}
          className={className}
          style={{
            position: "absolute",
            inset: 0,
            opacity: activeSlot === slot ? 1 : 0,
            transition: "opacity 500ms ease-in-out",
          }}
        >
          {slots[slot]}
        </span>
      ))}
    </span>
  );
}
