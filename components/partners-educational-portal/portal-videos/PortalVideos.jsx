import Image from "next/image";
import { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa";
// css
import "./style.scss";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 800,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const PortalVideos = ({ videoData, isLoading }) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const showArrows = videoData?.length > settings.slidesToShow;

  const PrevArrow = () => (
    <button
      className="slider_custom_arrows"
      onClick={previousSlide}
      disabled={currentSlide === 0}
    >
      <FaAngleLeft fontSize={"24px"} />
    </button>
  );

  const NextArrow = () => (
    <button
      className="slider_custom_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= videoData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className="portal_video_sec mt-60">
      <Container>
        <h2 className="main_sec_heading text-center">Watch Our Videos</h2>
        {isLoading ? (
          <p className="para_comm text-center">loading...</p>
        ) : (
          <Slider
            {...settings}
            ref={sliderRef}
            afterChange={(index) => setCurrentSlide(index)}
          >
            {videoData?.map((video) => (
              <div key={video?.id}>
                <div className="video_item">
                  <figure>
                    <Image
                      // src={
                      //   video?.thumbnail
                      //     ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${video?.thumbnail}`
                      //     : "/assets/go-partners/thumbnail1.png"
                      // }
                      src={
                        video?.thumbnail
                          ? video?.thumbnail
                          : "/assets/go-partners/thumbnail1.png"
                      }
                      layout="fill"
                      objectFit="cover"
                      alt={video?.title}
                    />
                    <div
                      className="icon_wrape"
                      onClick={() => {
                        setVideoLink(video?.video_url);
                        setOpen(true);
                      }}
                    >
                      <FaPlay fontSize={20} className="icon_style" />
                    </div>
                  </figure>
                  <div className="content_sec">
                    <h3 className="sub_heading">{video?.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
        {showArrows && (
          <div className="mobile_view">
            <PrevArrow />
            <NextArrow />
          </div>
        )}
        <ModalVideo
          channel={"youtube"}
          isOpen={isOpen}
          videoId={videoLink?.split("/")?.[3]}
          allowFullScreen={true}
          ratio="16:9"
          onClose={() => setOpen(false)}
        />
      </Container>
    </div>
  );
};

export default PortalVideos;
