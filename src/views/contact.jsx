export default function Contact() {
  return (
    <div
      style={{
        backgroundColor: "#06141b",
        backgroundImage: "none",
        color: "white",
        padding: "40px",
        textAlign: "center",
        backgroundColor: "#06141b",
        backgroundImage: "none",
      }}
    >
      <h2 style={{ color: "#C2A072", marginBottom: "20px" }}>Contact Me</h2>

      <p
        style={{
          fontSize: "18px",
          marginBottom: "30px",
          backgroundColor: "#06141b",
          backgroundImage: "none",
        }}
      >
        📧{" "}
        <a
          href="mailto:alejoceronbacares@gmail.com"
          style={{
            color: "#C2A072",
            textDecoration: "none",
            backgroundColor: "#06141b",
            backgroundImage: "none",
          }}
        >
          alejoceronbacares@gmail.com
        </a>
      </p>

      <a
        href="https://www.linkedin.com/in/alejandro-ceron-bacares/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#06141b",
          backgroundImage: "none",
          color: "#ffffff",
          border: "2px solid #C2A072",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background-color 0.3s, color 0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#C2A072";
          e.target.style.color = "#06141b";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#253846";
          e.target.style.color = "#ffffff";
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
          backgroundImage: "none",
          color: "#ffffff",
          border: "2px solid #C2A072",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background-color 0.3s, color 0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#C2A072";
          e.target.style.color = "#06141b";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#253846";
          e.target.style.color = "#ffffff";
        }}
      >
        Visit my Github profile here
      </a>
    </div>
  );
}
