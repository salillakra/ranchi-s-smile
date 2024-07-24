import Appointment from "@/src/components/Heading/Appointment";
import Hero from "@/src/components/Heading/Hero";
import Info from "@/src/components/Heading/Info";
import Menu from "@/src/components/Heading/Menu";
import Info_mobile from "@/src/components/Heading/Info_mobile";
import Aboutus from "@/src/components/AboutUs/Aboutus";
import Work from "@/src/components/WorkProcess/Work";
import CHS from "@/src/components/Comprehensive Health Services/CHS";
import Review from "../components/PatientReviews/Review";

const page = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-primary to-secondary">
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
      </section>
      <section className="bg-gradient-to-b from-secondary to-tertiary pt-6">
        <Aboutus />
      </section>

      {/* how we work */}

      <section className="bg-gradient-to-b from-tertiary to-primary">
        <Work />
      </section>

      {/* comprehensive healthcare service */}
      <section className="bg-gradient-to-br from-primary to-secondary">
        <CHS />
      </section>

      {/* Customers review */}
      <section className="h-[200vh] bg-gradient-to-b from-primary to-secondary">
        <Review />
      </section>
    </>
  );
};

export default page;
