"use client";

import { useState } from "react";
import FormField from "@/components/ui/form-field/FormField";
import Button from "@/components/ui/button/Button";
import SectionTitle from "../section-title/SectionTitle";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(""); // reset

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result?.error || "Une erreur est survenue.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Erreur réseau ou serveur.");
    }
  };

  return (
    <>
      <SectionTitle>Contactez-moi !</SectionTitle>
      <form onSubmit={handleSubmit} className="w-full mx-auto my-12">
        <FormField
          id="name"
          label="Nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormField
          id="message"
          label="Message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" isLoading={status === "sending"}>
          Envoyer
        </Button>

        {status === "success" && (
          <p className="text-green-600 mt-4">Message envoyé !</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-4">{errorMessage}</p>
        )}
      </form>
    </>
  );
}
