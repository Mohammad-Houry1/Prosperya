import { inquiryFields } from "../data/projectInquiry.data.js";

export function normalizeProjectInquiry(values, locale) {
  return {
    ...Object.fromEntries(
      inquiryFields.map((field) => [
        field.name,
        String(values[field.name] ?? "").trim(),
      ]),
    ),
    locale: locale === "fr" ? "fr" : "en",
  };
}

export function validateProjectInquiry(inquiry) {
  const errors = {};
  for (const field of inquiryFields) {
    const value = inquiry[field.name] ?? "";
    if (field.required && !value.trim()) errors[field.name] = "required";
    else if (field.maxLength && value.length > field.maxLength)
      errors[field.name] = "too_long";
    else if (
      field.options &&
      value &&
      !field.options.some((option) => option.value === value)
    )
      errors[field.name] = "invalid_option";
  }
  if (inquiry.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email))
    errors.email = "invalid_email";
  return errors;
}

// Preview adapter: validates only. No transmission, persistence, or backend is implied.
// Replace this adapter with a POST request when the approved lead endpoint is available.
export async function submitProjectInquiry(inquiry) {
  if (Object.keys(validateProjectInquiry(inquiry)).length)
    throw new Error("Invalid project brief");
  return { mode: "preview" };
}
