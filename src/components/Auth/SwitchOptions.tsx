import React from "react";

const SwitchOptions = ({
  isPassword,
  setIsPassword,
}: {
  isPassword: boolean;
  setIsPassword: (value: boolean) => void;
}) => {
  return (
    <div className="mx-auto mb-12.5 mt-9 flex flex-col items-center justify-center gap-2.5 rounded-lg border border-border p-2 md:flex-row">
      <button
        className={`w-full rounded-lg px-6 py-3 text-base outline-hidden transition-all duration-300 hover:bg-accent hover:text-foreground
        ${!isPassword ? "border border-border bg-accent text-foreground" : "bg-transparent text-muted-foreground"}`}
        onClick={() => setIsPassword(false)}
      >
        Magic Link
      </button>
      <button
        className={`w-full rounded-lg px-6 py-3 text-base outline-hidden transition-all duration-300 hover:bg-accent hover:text-foreground ${
          isPassword
            ? "border border-border bg-accent text-foreground"
            : "bg-transparent text-muted-foreground"
        }`}
        onClick={() => setIsPassword(true)}
      >
        Password
      </button>
    </div>
  );
};

export default SwitchOptions;
