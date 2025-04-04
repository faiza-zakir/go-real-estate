import Image from "next/image";
import { Container } from "react-bootstrap";
import { PiLineVertical } from "react-icons/pi";
import moment from "moment";
// css
import "./styles.scss";

const Details = ({ singleBlog }) => {
  return (
    <div className="blog_details_sec mt-60">
      <Container>
        <h2 className="main_sec_heading">{singleBlog?.title}</h2>
        <ul className="info-tabs">
          <li>{singleBlog?.posted_by}</li>
          <li>
            <PiLineVertical />
          </li>
          <li>{singleBlog?.category?.title}</li>
          <li>
            <PiLineVertical />
          </li>
          <li>{moment(singleBlog?.date)?.format("MMMM D")}</li>
        </ul>
        <figure>
          <Image
            src={
              singleBlog?.inner_page_img
                ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                  singleBlog?.inner_page_img
                : "/assets/blog/blogInnerImg.webp"
            }
            layout="fill"
            objectFit="cover"
            alt={singleBlog?.title}
          />
        </figure>
        <div
          className="general-details"
          dangerouslySetInnerHTML={{ __html: singleBlog?.long_description }}
        />
      </Container>
    </div>
  );
};

export default Details;
