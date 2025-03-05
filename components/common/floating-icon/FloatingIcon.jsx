"use client";
import Image from "next/image";
// css
import "./styles.scss";

const FloatingIcon = () => {
  return (
    <div className="floating_icon_wrape">
      <a
        href={"https://wa.me/919825003080"}
        className="contact-pannel-btn text-decoration-none"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <figure>
          <Image
            src="/assets/icons/whatsapp1.webp"
            loading="lazy"
            alt="whatsapp"
            width={50}
            height={50}
          />
        </figure>
      </a>
    </div>
  );
};

export default FloatingIcon;
