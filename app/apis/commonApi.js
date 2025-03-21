import API from "./config";

// Subscribe Form

export const postSubscribeForm = (formData) => {
  return API.post("/subscribe", formData);
};

// Contact Form

export const postContactForm = (formData) => {
  return API.post("/Contact-form", formData);
};

// Career Form

export const postCareerForm = (formData) => {
  return API.post("/career", formData);
};

// Lead Form

export const postLeadForm = (formData) => {
  return API.post("/banner-forms", formData);
};

// Faqs API

export const fetchFaqData = () => {
  return API.get("/faqs");
};

// Blogs API

export const fetchBlogData = () => {
  return API.get("/blogs");
};

export const fetchBlogDeatilsData = (id) => {
  return API.get(`/blogs/${id}`);
};

// Testimonials API

export const fetchTestimonialData = () => {
  return API.get("/testimonials");
};

// Home Banner Video

export const fatchHomeBannerVideo = () => {
  return API.get("/video-contents");
};

//  Pages API

export const fatchPagesContent = (route) => {
  return API.get(`/pages/${route}`);
};

// Project API

export const fatchProjects = () => {
  return API.get("/projects");
};

//  Partners API

export const fatchPartners = () => {
  return API.get(`/partner`);
};

//  Webinars API

export const fatchWebinars = () => {
  return API.get(`/webinars`);
};

//  Case Studies API

export const fatchCaseStudies = () => {
  return API.get(`/case-study`);
};

//  Industry Reports API

export const fatchIndustryReports = () => {
  return API.get(`/industry_reports`);
};
