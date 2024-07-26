import Appointment from "@/src/components/Heading/Appointment";
import Hero from "@/src/components/Heading/Hero";
import Info from "@/src/components/Heading/Info";
import Menu from "@/src/components/Heading/Menu";
import Info_mobile from "@/src/components/Heading/Info_mobile";
import Aboutus from "@/src/components/AboutUs/Aboutus";
import Work from "@/src/components/WorkProcess/Work";
import CHS from "@/src/components/Comprehensive Health Services/CHS";
import Review from "@/src/components/PatientReviews/Review";
import AppointmentSection from "@/src/components/GetAnAppointment/AppointmentSection";
import BlogSection from "@/src/components/Blogs/BlogSection";
import Newsletter from "@/src/components/NewsLetter/Newsletter";
import { Footer } from "@/src/components/Footer/Footer";

/**
 * Renders the main page of the application.
 * @returns The JSX element representing the main page.
 */

const page = () => {
  return (
    <main>
      <div className="bg-gradient-to-b from-primary to-secondary">
        <div className="flex justify-between p-3 text-quaternary">
          <Menu />
          <Appointment />
        </div>
        <Hero />
        <div className="hidden place-items-center lg:grid">
          <Info />
        </div>
        <div className="block lg:hidden">
          <Info_mobile />
        </div>
      </div>
      <div className="bg-gradient-to-b from-secondary to-tertiary pt-6">
        <Aboutus />
      </div>

      {/* how we work */}

      <div className="bg-gradient-to-b from-tertiary to-primary">
        <Work />
      </div>

      {/* comprehensive healthcare service */}
      <div className="bg-gradient-to-br from-primary to-secondary">
        <CHS />
      </div>

      {/* Customers review */}
      {/* Appointment and  Blogs  */}
      <div className="bg-gradient-to-b from-primary to-secondary">
        <Review />
        <AppointmentSection />
        <BlogSection />
        <Newsletter />
      </div>

      <Footer />
    </main>
  );
};

export default page;
