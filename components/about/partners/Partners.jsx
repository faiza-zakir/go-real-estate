import Image from "next/image";
// import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
// api
// import { fatchCredentialsClients } from "@/app/apis/commonApi";

// css
import "./styles.scss";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 800,
  // lazyLoad: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const Partners = ({ partnersData }) => {
  // const [partnersData, setPartnersData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchClientsListData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await fatchCredentialsClients();

  //       let updatedData = [...data]?.filter((item) => item?.type === "clients");
  //       setPartnersData(updatedData);
  //     } catch (error) {
  //       console.error("Error fetching Data:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchClientsListData();
  // }, []);

  return (
    <div className="partners_sec mt-60">
      <Container>
        {/* {isLoading ? (
              <p className="para_comm text-center">loading...</p>
            ) : ( */}
        <Slider {...settings}>
          {partnersData?.map((item, i) => (
            <div className="partners_item" key={i}>
              <div className="img_wrape">
                <Image
                  // src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.logo}`}
                  src={item?.logo}
                  width={130}
                  height={130}
                  alt={item?.name}
                />
              </div>
            </div>
          ))}
        </Slider>
        {/* )} */}
      </Container>
    </div>
  );
};

export default Partners;
