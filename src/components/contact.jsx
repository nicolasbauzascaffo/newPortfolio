import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import hiEmoji from "../images/hiEmoji.png";

function Contact() {
  const handleClick = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=59896103064`;
    window.open(whatsappURL, "_blank");
  };

  const handleEnviarCorreoClick = () => {
    const destinatario = "nicolasbauza21@gmail.com";
    const asunto = "Contrato";
    const cuerpo = "Contenido del correo electrónico.";

    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(
      asunto
    )}&body=${encodeURIComponent(cuerpo)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div id="contact" className="contact">
      <section className="getInTouch">
        <h3>Get in touch now!</h3>
      </section>
      <img className="rocketEmoji" src={hiEmoji} alt="emoji" />
      <section
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
        }}
      >
        <button onClick={handleClick}>
          <WhatsAppIcon /> Send me a message
        </button>
        <button onClick={handleEnviarCorreoClick}>
          <EmailIcon />
          Send me an e-mail{" "}
        </button>
      </section>
    </div>
  );
}

export default Contact;
