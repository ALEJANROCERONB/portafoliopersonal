import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";
import "../styles/Contact.css";

const contactLinks = [
  {
    id: "email",
    icon: <FaEnvelope />,
    label: "Email",
    value: "alejoceronbacares@gmail.com",
    href: "mailto:alejoceronbacares@gmail.com",
  },
  {
    id: "whatsapp",
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "Chat directly with me",
    href: "https://wa.me/573207056334",
    external: true,
    accent: "whatsapp",
  },
  {
    id: "linkedin",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "alejandro-ceron-bacares",
    href: "https://www.linkedin.com/in/alejandro-ceron-bacares/",
    external: true,
  },
  {
    id: "github",
    icon: <FaGithub />,
    label: "GitHub",
    value: "ALEJANROCERONB",
    href: "https://github.com/ALEJANROCERONB",
    external: true,
  },
];

export default function Contact() {
  return (
    <div className="contact-page">
      <h2 className="contact-heading">Let&apos;s Talk</h2>
      <p className="contact-subheading">
        Have a project in mind or just want to say hi? Pick whichever channel
        works best for you.
      </p>

      <div className="contact-grid">
        {contactLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className={`contact-card${
              link.accent ? ` contact-card--${link.accent}` : ""
            }`}
          >
            <span className="contact-card-icon">{link.icon}</span>
            <span className="contact-card-text">
              <span className="contact-card-label">{link.label}</span>
              <span className="contact-card-value">{link.value}</span>
            </span>
            <span className="contact-card-arrow" aria-hidden="true">
              &rarr;
            </span>
          </a>
        ))}
      </div>

      <Footer />
    </div>
  );
}
