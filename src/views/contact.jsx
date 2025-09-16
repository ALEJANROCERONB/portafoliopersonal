import { FaWhatsapp } from "react-icons/fa"; // Asegúrate de tener react-icons instalado: npm install react-icons
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div
      style={{
        backgroundColor: "#06141b",
        color: "white",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#C2A072", marginBottom: "20px" }}>Contact Me</h2>

      <p
        style={{
          fontSize: "18px",
          marginBottom: "30px",
          backgroundColor: "#06141b",
        }}
      >
        📧{" "}
        <a
          href="mailto:alejoceronbacares@gmail.com"
          style={{
            color: "#C2A072",
            textDecoration: "none",
            backgroundColor: "#06141b",
          }}
        >
          alejoceronbacares@gmail.com
        </a>
      </p>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/573207056334"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          flexDirection: "row", // fuerza icono + texto en una fila
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "12px 24px",
          marginBottom: "20px",
          backgroundColor: "#25D366",
          color: "#ffffff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "opacity 0.3s",
          verticalAlign: "middle", // ayuda en caso de reglas globales
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.85";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
      >
        <span style={{ display: "inline-block", verticalAlign: "middle" }}>
          Chat on WhatsApp
        </span>
      </a>

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/alejandro-ceron-bacares/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#06141b",
          color: "#ffffff",
          border: "2px solid #C2A072",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background-color 0.3s, color 0.3s",
          marginBottom: "20px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#C2A072";
          e.currentTarget.style.color = "#06141b";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#06141b";
          e.currentTarget.style.color = "#ffffff";
        }}
      >
        Visit my LinkedIn profile here
      </a>

      <a
        href="https://github.com/ALEJANROCERONB"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#06141b",
          color: "#ffffff",
          border: "2px solid #C2A072",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background-color 0.3s, color 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#C2A072";
          e.currentTarget.style.color = "#06141b";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#06141b";
          e.currentTarget.style.color = "#ffffff";
        }}
      >
        Visit my Github profile here
      </a>

      <div>
        <Footer />
      </div>
    </div>
  );
}
