"use client";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string | null; // Explicitly nullable
  website: string | null; // Explicitly nullable
  message: string;
}

const schema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email"),
  phone: yup.string().nullable(), // Matches nullable type
  website: yup.string().nullable(), // Matches nullable type
  message: yup.string().required("Message is required"),
}).required();

const ContactFormHomeFour = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema) as any, // Cast resolver type explicitly if needed
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://api.eazyclassroom.net/api.php?action=submit_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("There was an error submitting the form.");
      }

      await response.json();
      setStatusMessage("Your message has been sent successfully!");
      reset();
    } catch (error) {
      setStatusMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tpcontact-from-wrapper">
          <div className="row gx-6">
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input
                  type="text"
                  {...register("fullName")}
                  placeholder="Full name"
                />
                <p className="form_error">{errors.fullName?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email Address"
                />
                <p className="form_error">{errors.email?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input
                  type="text"
                  {...register("phone")}
                  placeholder="Phone number (optional)"
                />
                <p className="form_error">{errors.phone?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input
                  type="text"
                  {...register("website")}
                  placeholder="Subject"
                />
                <p className="form_error">{errors.website?.message}</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tpcontact-form-textarea mb-25">
                <textarea
                  {...register("message")}
                  placeholder="Message"
                />
                <p className="form_error">{errors.message?.message}</p>
              </div>
            </div>
          </div>
          <div className="tpcontact-form-submit">
            <button type="submit">Send Message</button>
          </div>
          {statusMessage && <p className="status_message">{statusMessage}</p>}
        </div>
      </form>
    </>
  );
};

export default ContactFormHomeFour;