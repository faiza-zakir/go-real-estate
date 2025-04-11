import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="container">
      <div className="top_bar_sec">
        <ul className="d-flex gap-3 align-items-center social-icons">
          <li>
            <a
              href="https://www.facebook.com/globalopportunitiesrealestate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook fontSize="18px" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/gogrouprealestate/?igshid=OGQ5ZDc2ODk2ZA#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram fontSize="18px" />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/gogrouprealestate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok fontSize="18px" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/gogrouprealestate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin fontSize="18px" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@GOGroupRealEstate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube fontSize="18px" />
            </a>
          </li>
        </ul>
        <ul className="d-flex gap-3 align-items-center">
          <li>
            <a href="mailto:info@gogrouprealestate.com">
              <FaEnvelope fontSize="18px" /> info@GoGroupRealEstate.com
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/15613775509"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp fontSize="18px" /> +1(561) 377-5509
            </a>
          </li>
        </ul>
        <ul className="d-flex gap-3 align-items-center">
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              GO Business Internship
            </a>
          </li>
          <li>
            <a
              href="https://gogrouprealestate.com/referralpartner/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GO Referral Partner
            </a>
          </li>
          <li>
            <a
              href="https://gogrouprealestate.com/trademission/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GO Dubai Trade Mission 2025
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
