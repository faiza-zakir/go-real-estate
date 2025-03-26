export default async function sitemap() {
  const baseUrl = "https://gogrouprealestate.vercel.app";

  // Fetch dynamic routes from an API or database
  const response = await fetch(
    "https://prismcloudhosting.com/GoRealEstateApis/public/api/blogs"
  );
  const blogs = await response.json();

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/real-estate-investments-in-uae",
    "/dubai-opportunities",
    "/abu-dhabi-opportunities",
    "/ras-al-khaimah-opportunities",
    "/go-community",
    "/go-partners",
    "/careers",
    "/contact",
    "/partners-educational-portal",
    "/blog",
    "/faqs",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
    })),
    ...blogs.map((page) => ({
      url: `${baseUrl}/blog/${page?.route}`,
      lastModified: new Date().toISOString(),
    })),
  ];
}
