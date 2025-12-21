"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const router = useRouter();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get reCAPTCHA token
    const token = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    if (!token) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    // Send to API route
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          token, // Include the reCAPTCHA token
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        // Redirect to home page
        router.push("/");
      } else {
        console.error("Failed to send email");
        const data = await response.json();
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="py-8 background-image">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="portfolio-card">
          <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg leading-relaxed mb-6">
            Do you want your own enterprise-website at an affordable price? Fill
            out the form below or email me at raygar1923@outlook.com
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-6 border-l-4 border-[#0095d5]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--kw-red)] focus:border-transparent bg-white"
                  placeholder="John Doe"
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--kw-red)] focus:border-transparent bg-white"
                  placeholder="john@example.com"
                />
              </div>
              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--kw-red)] focus:border-transparent bg-white"
                  placeholder="(555) 123-4567"
                />
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--kw-red)] focus:border-transparent resize-none bg-white"
                  placeholder="Tell me how we can work together..."
                />
              </div>

              {/* reCAPTCHA - invisible */}
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              />
              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-[var(--hp-blue-darker)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--hp-blue-dark)] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
