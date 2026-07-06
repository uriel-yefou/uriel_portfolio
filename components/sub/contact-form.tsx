"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";

const inputClassName =
  "w-full rounded-xl border border-white/10 bg-[#030014]/60 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30";

type FormStatus = "idle" | "sending" | "success" | "error";

export const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await response.text();
      let data: { error?: string; success?: boolean } = {};

      if (text.trim()) {
        try {
          data = JSON.parse(text) as { error?: string; success?: boolean };
        } catch {
          throw new Error("Server returned an invalid response. Please try again.");
        }
      } else if (!response.ok) {
        throw new Error("Server returned an empty response. Please try again.");
      }

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "Failed to send message");
      }

      setStatus("success");
      event.currentTarget.reset();
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
