import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Real Estate Market Trends & Analysis | Newedge Blog",
    description:
      "Stay updated with real estate blogs on market trends, in-depth analysis, and expert insights. Get valuable tips to navigate the property landscape with Newedge.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/blogs",
    },
  };
}

const Blog = () => {
  return <PageContent />;
};

export default Blog;
