"use client";

import React, { useState, FormEvent } from "react";
import { Mail, Send, CheckCircle, XCircle, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col w-full h-svh md:max-w-4xl mx-auto tablet-xs:pt-8 p-4 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="tablet-xs:rounded-lg tablet-xs:shadow-sm shadow-header-background p-8 tablet-xs:border border-white/32 space-y-8"
      >
        <div className="text-center">
          <div className="flex flex-col justify-center items-center gap-3 mb-3">
            <Mail className="w-10 h-10 text-accent" />
            <h1 className="text-3xl font-light text-text">Kontakt aufnehmen</h1>
          </div>
          <p className="text-text text-sm md:text-base">
            Ich freue mich auf deine Nachricht und melde mich schnellstmöglich
            zurück.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text mb-1 sr-only"
            >
              Dein Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Dein Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md p-4 bg-foreground-secondary/32 border border-transparent focus:border-accent focus:ring-0 outline-none placeholder:text-text/80"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text mb-1 sr-only"
            >
              Deine E-Mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Deine E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md p-4 bg-foreground-secondary/32 border border-transparent focus:border-accent focus:ring-0 outline-none placeholder:text-text/80"
            />
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text mb-1 sr-only"
          >
            Deine Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Deine Nachricht"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full rounded-md p-4 bg-foreground-secondary/32 border border-transparent focus:border-accent focus:ring-0 outline-none placeholder:text-text/80"
          ></textarea>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="group cursor-pointer relative inline-flex items-center justify-center w-full tablet-xs:w-3/6
            py-6 rounded-md bg-foreground-secondary/16 
            shadow-sm border border-white/32 text-text text-base md:text-lg font-semibold 
            hover:shadow-none hover:border-transparent hover:bg-transparent active:scale-116
            transition-all duration-300 ease-in-out overflow-hidden"
          >
            <span
              className="absolute inset-0 flex items-center justify-center 
              transition-all duration-700 ease-in-out
              opacity-100 translate-y-0
              group-hover:opacity-0 group-hover:-translate-y-full"
            >
              Abschicken
            </span>

            <Send
              size={40}
              className="absolute inset-0 m-auto text-header-background
              opacity-0 translate-y-full
              transition-all duration-400 ease-in-out
              group-hover:opacity-100 group-hover:translate-y-0 group-active:scale-108 group-active:shadow-none group-active:border-transparent group-active:bg-transparent"
            />
          </button>
        </div>

        {status && (
          <div className="flex justify-center mt-4 rounded-lg border border-white/32 py-2 px-4 bg-foreground-secondary/32">
            {status === "success" ? (
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span>Nachricht erfolgreich gesendet!</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-red-700">
                <XCircle className="w-5 h-5" />
                <span>Fehler beim Senden. Bitte versuche es erneut.</span>
              </div>
            )}
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
