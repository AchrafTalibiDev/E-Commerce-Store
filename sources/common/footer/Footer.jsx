import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>REACT</h1>
              <ul>
                <li>HOT RELOADING </li>
                <li>VIRTUAL DOM </li>
                <li>REACT ROUTER </li>
                <li>REDUX </li>
                <li>React Slick</li>
                <li>Styled Component </li>
              </ul>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i class="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>A propos de nous</h2>
            <ul>
              <li>Nos engagements</li>
              <li>Nos Boutiques</li>
              <li>Nos Partenaires</li>
              <li>Termes & Conditions</li>
              <li>Politique Privée</li>
            </ul>
          </div>
          <div className="box">
            <h2>Service Client</h2>
            <ul>
              <li>Assistance</li>
              <li> </li>
              <li>Suivi de commande </li>
              <li>Devenir partenaire </li>
              <li>Retours & Remboursements </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contactez Nous</h2>
            <ul>
              <li>
                1 Rue Tanger Tanger Maroc{" "}
              </li>
              <li>Email: talibi.achraf.dev@gmail.com</li>
              <li>GSM: +212 767 689 181</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
