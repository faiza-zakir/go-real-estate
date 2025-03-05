import Image from "next/image";
import Link from "next/link";
// css
import "./styles.scss";

const InvestmentFloatingIcon = () => {
  return (
    <div className="inv_floating_icon_wrape">
      <Link href="/investment" className="contact-pannel-btn">
        <figure>
          <Image
            src="/assets/icons/investment.webp"
            loading="lazy"
            alt="Global Opportunities Real Estate Investment"
          />
        </figure>
      </Link>
    </div>
  );
};

export default InvestmentFloatingIcon;
