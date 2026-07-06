"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const inputClassName =
  "w-full rounded-xl border border-white/10 bg-[#030014]/60 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30";

type FormStatus = "idle" | "sending" | "success" | "error";

type Web3FormsResult = {
  success?: boolean;
  message?: string;
};

export const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local",
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: String(formData.get("name") ?? "").trim(),
          email: String(formData.get("email") ?? "").trim(),
          subject: String(formData.get("subject") ?? "").trim(),
          message: String(formData.get("message") ?? "").trim(),
        }),
      });

      const result = (await response.json()) as Web3FormsResult;

      if (!result.success) {
        throw new Error(result.message ?? "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0a0c1a]/80 p-8 backdrop-blur-sm"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-gray-300">
          Name
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className={inputClassName}
            disabled={status === "sending"}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-gray-300">
          Email Id
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className={inputClassName}
            disabled={status === "sending"}
          />
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-2 text-sm text-gray-300">
        Subject
        <input
          type="text"
          name="subject"
          required
          placeholder="Subject of your message"
          className={inputClassName}
          disabled={status === "sending"}
        />
      </label>

      <label className="mt-5 flex flex-1 flex-col gap-2 text-sm text-gray-300">
        Message
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Your Message"
          className={`${inputClassName} min-h-[160px] resize-y`}
          disabled={status === "sending"}
        />
      </label>

      {status === "success" && (
        <p className="mt-5 text-sm text-green-400">
          Message sent successfully. I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="mt-5 text-sm text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="button-primary mt-6 inline-flex w-fit cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-center text-[15px] text-white transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        <PaperAirplaneIcon className="h-5 w-5" />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
