"use client";
import { useState, useEffect } from "react";

interface MobileTextCyclerProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export function MobileTextCycler({ texts, interval = 3500, className = "" }: MobileTextCyclerProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (texts.length <= 1) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % texts.length);
        setVisible(true);
      }, 400);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span
      className={className}
      style={{ opacity: visible ? 1 : 0, transition: "opacity 400ms ease-in-out" }}
    >
      {texts[index]}
    </span>
  );
}
