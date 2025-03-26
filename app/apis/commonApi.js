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

// Property Types API

export const fatchPropertyType = () => {
  return API.get("/property-types");
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

// Login Form

export const postLoginForm = (formData) => {
  return API.post("/go-partners-login", formData);
};

// Register Form

export const postRegisterForm = (formData) => {
  return API.post("/go-partners-register", formData);
};

// Email Verification Form

export const postVerifyEmailForm = (formData) => {
  return API.post("/go-partners-verify-email", formData);
};

// Phone Verification Form

export const postVerifyPhoneForm = (formData) => {
  return API.post("/go-partners-verify-phone", formData);
};

// Upload doc. Form

export const postUploadDocForm = (formData) => {
  return API.post("/upload-document", formData);
};
