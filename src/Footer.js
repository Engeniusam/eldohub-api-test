import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer className="footer">
        <p className="footer__title">
          Design by{" "}
          <a
            href="https://linktr.ee/Engeniusam"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Engeniusam
          </a>
        </p>
        <div className="footer__social">
          <a
            href="https://api.whatsapp.com/send?phone=254741279049&text=Hello,%20would%20love%20to%20hear%20from%20you%20on%20the%20web%20project%20you%20want%20Engeniusam%20to%20build%20for%20you.%20"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/engeniusam/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://mobile.twitter.com/engeniusam"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <p className="footer__rights">
          &#169; 2023 Copyright • All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
