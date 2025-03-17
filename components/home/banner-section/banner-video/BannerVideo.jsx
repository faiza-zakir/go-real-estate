import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const BannerForm = dynamic(() => import("../banner-form/BannerForm"));
// css
import "./styles.scss";

const BannerVideo = ({ content, setShowForm, showForm, btnText }) => {
  const router = useRouter();
  const videoRef = useRef(null);
  const [loadForm, setLoadForm] = useState(false);

  const autoPlay = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      setTimeout(() => {
        video.play();
      }, 2000);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // setLoadForm(true);
    }, 2000);
    if (content?.video_url) {
      autoPlay();
    }
  }, [content?.video_url]);

  return (
    <div
      className="banner-video-area"
      style={{
        // backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${content?.thumbnail})`,
        backgroundImage: `url(${content?.thumbnail})`,
        backgroundSize: "cover",
      }}
    >
      {content?.video_url ? (
        <video
          // id="myVideo"
          autoPlay
          loop
          muted
          className="banner_video"
          playsInline
          webkit-playsinline="true"
          fetchPriority="high"
          poster={content?.thumbnail}
          // poster={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + content?.thumbnail}
          ref={videoRef}
        >
          <source
            src={content?.video_url}
            // src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + content?.video_url}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : null}

      {/* Add content you want to display on top of the video */}
      <div className="container" fetchPriority="high">
        <div className="banner-content mtb-60">
          <div className="bannerDetails">
            <div className="content_wrap">
              <h1>
                {content?.title
                  ? content?.title
                  : "Unlock Exclusive Investment Opportunities in Dubai's Thriving Real Estate Market"}
              </h1>
              {!btnText && (
                <button
                  className="theme_btn"
                  onClick={() => router.push(content?.link)}
                >
                  Learn More
                </button>
              )}
              {loadForm ? null : (
                <button
                  className={`theme_btn ms-3 DesktopBTNTHEME ${
                    !btnText && "contact_btn"
                  }`}
                  onClick={() => setLoadForm(true)}
                >
                  {btnText ? btnText : "Contact Us"}
                </button>
              )}
              {showForm ? null : (
                <button
                  className={`theme_btn mt-3 MobileBTNTHEME ${
                    !btnText && "contact_btn"
                  }`}
                  onClick={() => setShowForm(true)}
                >
                  {btnText ? btnText : "Contact Us"}
                </button>
              )}
            </div>
            <div className="banner_form_wrap form_desktop_view">
              {loadForm && <BannerForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
