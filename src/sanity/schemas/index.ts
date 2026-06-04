import service from "./documents/service";
import product from "./documents/product";
import project from "./documents/project";
import testimonial from "./documents/testimonial";
import faq from "./documents/faq";
import siteSettings from "./singletons/siteSettings";
import homePage from "./singletons/homePage";
import aboutPage from "./singletons/aboutPage";
import servicesPage from "./singletons/servicesPage";
import productsPage from "./singletons/productsPage";
import projectsPage from "./singletons/projectsPage";

export const schemaTypes = [
  // Singletons — Site-wide
  siteSettings,
  // Singletons — Pages
  homePage,
  aboutPage,
  servicesPage,
  productsPage,
  projectsPage,
  // Documents
  service,
  product,
  project,
  testimonial,
  faq,
];
