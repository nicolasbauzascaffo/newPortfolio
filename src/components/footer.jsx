import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <div className="footer">
      <h2>Nicolás Bauzá</h2>
      <h3>Software Developer</h3>
      <section
      className="information"
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding:'10px'
        }}
      >
        <p><LocalPhoneIcon/> +59896103064</p>
        <p><EmailIcon/> nicolasbauza21@gmail.com</p>
        <p><LocationOnIcon/> Montevideo / Uruguay</p>
      </section>
      <p>© 2023 NicolásBauzá  - All rights reserved</p>
    </div>
  );
}

export default Footer;
