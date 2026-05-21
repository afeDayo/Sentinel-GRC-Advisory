import { useState, FormEvent } from "react";
import { IoChatboxOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import ContactHero from "../components/HeroSections/ContactHero";

// ── Types ─────────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface StatusState {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

// ── Contact info card ─────────────────────────────────────────────────────────
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  dark?: boolean;
}

const InfoCard = ({ icon, title, content, dark = false }: InfoCardProps) => (
  <div
    className={`px-[25px] sm:px-7 py-5 border border-[#00000040] rounded-[15px] flex items-center gap-5 sm:gap-8 w-full card-hover ${
      dark ? "bg-[#18234A]" : ""
    }`}
  >
    <div
      className={`w-[30px] h-[30px] sm:w-[59px] sm:h-[59px] shrink-0 flex items-center justify-center rounded-lg ${
        dark ? "bg-[#F5F5DCE0]" : "bg-[#040B7414]"
      }`}
    >
      <span
        className={`text-base sm:text-[35px] ${dark ? "text-[#040B74]" : "text-[#040B74]"}`}
      >
        {icon}
      </span>
    </div>
    <div className="flex flex-col gap-[7px] items-start text-start">
      <h4
        className={`py-1 font-medium text-[14px] sm:text-[24px] ${dark ? "text-[#F5F5DC]" : "text-[#000000]"}`}
      >
        {title}
      </h4>
      <div
        className={`font-normal text-[11px] sm:text-[20px] leading-relaxed ${dark ? "text-[#F5F5DC]" : "text-[#000000B0]"}`}
      >
        {content}
      </div>
    </div>
  </div>
);

// ── Form field ────────────────────────────────────────────────────────────────
interface FieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  textarea?: boolean;
}

const Field = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  textarea = false,
}: FieldProps) => (
  <div className="flex flex-col items-start gap-1 w-full">
    <label
      htmlFor={id}
      className="p-2 text-[14px] sm:text-[24px] font-medium text-[#000000]"
    >
      {label}
    </label>
    {textarea ? (
      <textarea
        id={id}
        name={id}
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="rounded-lg w-full border border-[#00000040] p-3 placeholder:text-[11px] sm:placeholder:text-[20px] placeholder:text-[#000000B0] focus:outline-none focus:border-[#040B74] focus:ring-1 focus:ring-[#040B74] transition-all resize-none"
      />
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="rounded-lg w-full border border-[#00000040] p-3 placeholder:text-[11px] sm:placeholder:text-[20px] placeholder:text-[#000000B0] focus:outline-none focus:border-[#040B74] focus:ring-1 focus:ring-[#040B74] transition-all"
      />
    )}
  </div>
);

// ── Page ──────────────────────────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<StatusState>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const API_URL = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Message sent! We'll be in touch within 24 hours.",
        });
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <div>
      <ContactHero />

      <section>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-12 sm:py-16 flex flex-col items-center sm:gap-12 gap-10">
          <h3 className="font-medium text-[14px] sm:text-2xl lg:text-[32px] text-[#040B74] text-center italic animate-fade-in-up px-2 sm:px-0">
            Take the first step toward stronger compliance and risk management.
          </h3>

          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-12">
            {/* ── Contact Form ── */}
            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-[48%] py-7 px-5 sm:px-7 border border-[#00000040] rounded-[15px] flex flex-col gap-5 animate-fade-in-left"
            >
              <div className="flex items-center gap-3">
                <IoChatboxOutline className="text-3xl sm:text-4xl text-[#18234A]" />
                <h3 className="p-2 text-base sm:text-2xl lg:text-[32px] font-semibold text-[#000000]">
                  Send Us a Message
                </h3>
              </div>

              <Field
                label="Name"
                id="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleChange}
              />
              <Field
                label="Phone Number"
                id="phone"
                type="tel"
                placeholder="Your phone number"
                value={form.phone}
                onChange={handleChange}
              />
              <Field
                label="Subject"
                id="subject"
                placeholder="How can we help you?"
                value={form.subject}
                onChange={handleChange}
              />
              <Field
                label="Message"
                id="message"
                placeholder="Tell us about your project or enquiry..."
                value={form.message}
                onChange={handleChange}
                textarea
              />

              {/* Status message */}
              {status.type !== "idle" && (
                <div
                  className={`p-3 rounded-lg text-sm font-medium text-center ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : status.type === "error"
                        ? "bg-red-100 text-red-700 border border-red-300"
                        : "bg-blue-50 text-blue-600 border border-blue-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full p-3 bg-[#18234A] flex items-center gap-2 justify-center rounded-lg transition-all duration-300 hover:bg-[#040B74] hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <IoIosSend className="text-[#FFFFFF] text-[15px] sm:text-[25px]" />
                <span className="text-[14px] sm:text-[20px] font-medium text-[#FFFFFF]">
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>

            {/* ── Contact Info ── */}
            <div className="w-full lg:w-[48%] flex flex-col gap-5 animate-fade-in-right">
              <InfoCard
                icon={<LuPhone />}
                title="Phone"
                content={
                  <>
                    <div className="flex items-start gap-1">
                      <p>(+234) 8163 527 692, </p>
                      <p>(+233) 554 678 223</p>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm">
                      Available during business hours
                    </p>
                  </>
                }
              />
              <InfoCard
                icon={<FiMail />}
                title="Email"
                content={
                  <>
                    <p>sentinel.grcadvisory@gmail.com</p>
                    <p className="mt-1 text-xs sm:text-sm">
                      We respond within 24 hours
                    </p>
                  </>
                }
              />
              <InfoCard
                icon={<IoLocationOutline />}
                title="Location"
                content={
                  <>
                    <p>Everywhere, On the Cloud</p>
                    <p className="mt-1 text-xs sm:text-sm">
                      Serving clients locally and internationally
                    </p>
                  </>
                }
              />
              <InfoCard
                icon={<LuClock3 />}
                title="Business Hours"
                content={
                  <>
                    <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                    <p>Saturday: 10:00 AM – 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </>
                }
                dark
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
