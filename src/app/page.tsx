import Hero from "@/src/components/Heading/Hero";
import Info from "@/src/components/Heading/Info";
import Info_mobile from "@/src/components/Heading/Info_mobile";
import Aboutus from "@/src/components/AboutUs/Aboutus";
import Work from "@/src/components/WorkProcess/Work";
import CHS from "@/src/components/Comprehensive Health Services/CHS";
import Review from "@/src/components/PatientReviews/Review";
import AppointmentSection from "@/src/components/GetAnAppointment/AppointmentSection";
import BlogSection from "@/src/components/Blogs/BlogSection";
import Newsletter from "@/src/components/NewsLetter/Newsletter";
import Footer from "@/src/components/Footer/Footer";
import NavBar from "@/src/components/NavBar";
import Cursor from "@/cursor/Cursor";
import OurLocation from "@/src/components/OurLocation/OurLocation";
import ContactUs from "@/src/components/ContactUs/ContactUs";

/**
 * Renders the main page of the application.
 * @returns The JSX element representing the main page.
 */

const Page = () => {
  return (
    <>
      <NavBar />
      <main id="home" className="bg-gradient-to-b from-primary to-secondary">
        <Hero />
        <section
          aria-labelledby="info-section"
          className="hidden place-items-center lg:grid"
        >
          <h2 id="info-section" className="sr-only">
            Information
          </h2>
          <Info />
        </section>
        <section
          aria-labelledby="info-mobile-section"
          className="block lg:hidden"
        >
          <h2 id="info-mobile-section" className="sr-only">
            Information Mobile
          </h2>
          <Info_mobile />
        </section>
      </main>
      <section
        aria-labelledby="about-us-section"
        className="bg-gradient-to-b from-secondary to-tertiary pt-6"
      >
        <h2 id="about-us-section" className="sr-only">
          About Us
        </h2>
        <Aboutus />
      </section>

      {/* How we work */}
      <section
        aria-labelledby="work-section"
        className="bg-gradient-to-b from-tertiary to-primary"
      >
        <h2 id="work-section" className="sr-only">
          How We Work
        </h2>
        <Work />
      </section>

      {/* Comprehensive healthcare service */}
      <section
        aria-labelledby="chs-section"
        className="bg-gradient-to-br from-primary to-secondary"
      >
        <h2 id="chs-section" className="sr-only">
          Comprehensive Healthcare Services
        </h2>
        <CHS />
      </section>

      {/* Customer reviews, appointments, and blogs */}
      <section
        aria-labelledby="reviews-appointment-blogs-section"
        className="bg-gradient-to-b from-primary via-secondary to-tertiary"
      >
        <h2 id="reviews-appointment-blogs-section" className="sr-only">
          Customer Reviews, Appointments, and Blogs
        </h2>
        <Review />
        <AppointmentSection />
        <BlogSection />
        <OurLocation />
        <ContactUs />
        <Newsletter />
      </section>

      <Footer />
      <Cursor />
    </>
  );
};

export default Page;
