"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiMail, FiPhone, FiMapPin, FiCalendar, FiSend } from "react-icons/fi";
import { InlineWidget } from "react-calendly";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        alert("Thank you for your message! I will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-portfolio-bg-primary text-portfolio-text-primary py-8 px-4 sm:px-6 lg:px-40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="@container mb-12">
          <div className="flex flex-col gap-8 @[864px]:flex-row @[864px]:items-center">
            <div className="w-full @[480px]:min-w-[300px] @[864px]:w-2/5">
              <div 
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-300"
                style={{
                  backgroundImage: 'url("/mwero-passport.png")',
                }}
              />
            </div>
            <div className="flex flex-col gap-6 @[864px]:w-3/5 @[864px]:pl-8">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl md:text-4xl font-bold text-white">Let&apos;s Connect</h1>
                <div className="w-20 h-1 bg-blue-600 rounded"></div>
                <p className="text-portfolio-text-muted max-w-2xl">
                  I&apos;m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions. Feel free to reach out through
                  the form below or schedule a call!
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#contact-form" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300">
                  Send Message
                </a>
                <button 
                  onClick={() => setShowCalendly(!showCalendly)}
                  className="px-6 py-3 bg-transparent border border-gray-600 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300"
                >
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" id="contact-form">
          {/* Contact Form */}
          <div className="bg-portfolio-bg-card rounded-xl border border-portfolio-border p-6">
            <h2 className="text-xl font-bold mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </Label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className={`theme-input w-full rounded-lg bg-portfolio-bg-hover border ${
                      errors.name ? "border-red-500" : "border-portfolio-border"
                    } p-3 text-portfolio-text-primary focus:outline-none focus:ring-2 focus:ring-portfolio-accent`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Email <span className="text-red-500">*</span>
                  </Label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className={`theme-input w-full rounded-lg bg-portfolio-bg-hover border ${
                      errors.email ? "border-red-500" : "border-portfolio-border"
                    } p-3 text-portfolio-text-primary focus:outline-none focus:ring-2 focus:ring-portfolio-accent`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1"
                  >
                    Subject <span className="text-red-500">*</span>
                  </Label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Enter the subject"
                    className={`theme-input w-full rounded-lg bg-portfolio-bg-hover border ${
                      errors.subject ? "border-red-500" : "border-portfolio-border"
                    } p-3 text-portfolio-text-primary focus:outline-none focus:ring-2 focus:ring-portfolio-accent`}
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Enter your message"
                    className={`theme-input w-full rounded-lg bg-portfolio-bg-hover border ${
                      errors.message ? "border-red-500" : "border-portfolio-border"
                    } p-3 text-portfolio-text-primary focus:outline-none focus:ring-2 focus:ring-portfolio-accent`}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white py-3 px-6 rounded-lg flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  <FiSend />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info and Calendly */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-portfolio-bg-card rounded-xl border border-portfolio-border p-6">
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-portfolio-accent mt-1">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-portfolio-text-muted">mweroabdalla@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-portfolio-accent mt-1">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-portfolio-text-muted">+254 792982134</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-portfolio-accent mt-1">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-portfolio-text-muted">Mombasa, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Meeting */}
            <div className="bg-portfolio-bg-card rounded-xl border border-portfolio-border p-6">
              <h2 className="text-xl font-bold mb-6">Schedule a Meeting</h2>
              <p className="text-portfolio-text-muted mb-4">
                Book a time directly on my calendar for a video call or meeting.
              </p>
              <Button
                onClick={() => setShowCalendly(!showCalendly)}
                className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white py-3 px-6 rounded-lg flex items-center gap-2 w-full"
              >
                <FiCalendar />
                {showCalendly ? "Hide Calendar" : "Show Calendar"}
              </Button>

              {showCalendly && (
                <div className="mt-6">
                  <InlineWidget
                    url="https://calendly.com/mweroabdalla"
                    styles={{
                      height: "600px",
                      borderRadius: "0.5rem",
                      overflow: "hidden",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
