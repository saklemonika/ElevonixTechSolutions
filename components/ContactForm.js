"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((er) => ({ ...er, [name]: undefined }));
    }
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "That email doesn't look right.";
    }
    if (!values.message.trim()) next.message = "Tell us a little about the project.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // No backend is wired up in this template — swap this block for a call
    // to your API route or form provider (Formspree, Resend, etc.).
    setStatus("success");
    setValues(initialState);
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-line bg-white p-8 text-center sm:p-10">
        <p className="font-display text-xl font-semibold text-ink">
          Thanks &mdash; that's in our inbox.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          We reply to every project inquiry within one business day. In the
          meantime, feel free to browse our recent work.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-md border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-line bg-white p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Jordan Patel"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="jordan@company.com"
        />
        <Field
          label="Company"
          name="company"
          value={values.company}
          onChange={handleChange}
          placeholder="Optional"
        />
        <div>
          <label
            htmlFor="budget"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Estimated budget
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={handleChange}
            className="w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-blue"
          >
            <option value="">Select a range</option>
            <option value="under-10k">Under $10k</option>
            <option value="10k-50k">$10k &ndash; $50k</option>
            <option value="50k-150k">$50k &ndash; $150k</option>
            <option value="150k-plus">$150k+</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="What are you trying to build, and what's the timeline?"
          className={`w-full resize-none rounded-md border bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-blue ${
            errors.message ? "border-red-400" : "border-line"
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue sm:w-auto"
      >
        Send message
      </button>
      <p className="mt-3 text-xs text-slate">
        We typically respond within one business day.
      </p>
    </form>
  );
}

function Field({ label, name, value, onChange, error, placeholder, type = "text" }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-blue ${
          error ? "border-red-400" : "border-line"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
