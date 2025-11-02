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
    <section className="flex flex-col w-full md:max-w-4xl mx-auto tablet-xs:pt-12 p-4 rounded-lg">
      <div className="relative">
        <form
          onSubmit={handleSubmit}
          className="bg-foreground-secondary/88 rounded-lg shadow-lg p-8 border border-accent/10 space-y-8"
        >
          <div className="text-center">
            <div className="flex flex-col justify-center items-center gap-3 mb-3">
              <Mail className="w-10 h-10 text-accent" />
              <h1 className="text-3xl font-light text-text">
                Kontakt aufnehmen
              </h1>
            </div>
            <p className="text-text/70 text-sm md:text-base">
              Ich freue mich auf deine Nachricht und melde mich schnellstmöglich
              zurück.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Dein Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md p-4 bg-accent-dim/40 border border-transparent focus:border-accent focus:ring-0 outline-none"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Deine E-Mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md p-4 bg-accent-dim/40 border border-transparent focus:border-accent focus:ring-0 outline-none"
              />
            </div>
          </div>

          <div className="relative">
            <textarea
              name="message"
              placeholder="Deine Nachricht"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-md p-4 bg-accent-dim/40 border border-transparent focus:border-accent focus:ring-0 outline-none"
            ></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="submit-button flex items-center justify-center gap-2 rounded-md cursor-pointer px-6 py-3 bg-accent text-text-white text-base md:text-lg font-semibold hover:bg-accent/80 transition-colors"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sende...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Nachricht abschicken</span>
                </>
              )}
            </button>
          </div>

          {status && (
            <div className="flex justify-center mt-4">
              {status === "success" ? (
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle className="w-5 h-5" />
                  <span>Nachricht erfolgreich gesendet!</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-500">
                  <XCircle className="w-5 h-5" />
                  <span>Fehler beim Senden. Bitte versuche es erneut.</span>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
