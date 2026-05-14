import React, { useState } from "react";
import Image from "next/image";

const APIkeyModal = ({ handleModal }: { handleModal: () => void }) => {
  const [key, setKey] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("apiKey", key);
    handleModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 -z-1 bg-background/90"></div>
      <div className="modal-content relative w-10/12 rounded-lg border border-border bg-card p-5 text-center shadow-md md:w-[608px] lg:p-12.5">
        <button
          className="absolute right-2 top-2 rounded-full bg-muted p-3 transition-colors duration-300 hover:bg-accent"
          onClick={handleModal}
        >
          <Image
            src={"/images/ai-tools/icon-4.svg"}
            width={13}
            height={13}
            alt="close icon"
          />
        </button>
        <div>
          <h2 className="text-2xl text-foreground md:text-3xl">
            Enter your OpenAI API Key
          </h2>
          <p className="pb-8 pt-4 text-muted-foreground">
            To access the capabilities of AI Tools Template, a valid OpenAI API
            Key is required.
          </p>

          <form onSubmit={handleSubmit} className="flex justify-between gap-3">
            <input
              onChange={(e) => setKey(e.target.value)}
              className="w-full rounded-lg border border-border bg-input px-6 py-3 text-foreground outline-hidden focus:border-ring"
              type="text"
              placeholder="API-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              required
            />
            <button className="mt-2 inline-flex rounded-lg bg-primary px-7 py-3 font-medium text-primary-foreground transition-opacity duration-300 ease-in hover:opacity-80 lg:mt-0">
              Save
            </button>
          </form>
          <a
            href="https://openai.com/blog/openai-api"
            target="_blank"
            className="inline-block border-b border-muted-foreground pt-6 text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            Get your API key from OpenAI
          </a>
        </div>
      </div>
    </div>
  );
};

export default APIkeyModal;
