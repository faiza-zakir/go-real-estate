import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Partners Profile of Global Opportunities Real Estate",
    description: "Partners Profile of Global Opportunities Real Estate",
    alternates: {
      canonical: "https://gogrouprealestate.vercel.app/profile",
    },
  };
}

const Profile = () => {
  return <PageContent />;
};

export default Profile;
