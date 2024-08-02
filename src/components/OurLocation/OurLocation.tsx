import React from "react";
import Arrow from "@/src/components/Arrow";

const OurLocation = () => {
  return (
    <section className="bg-tranparent">
      <Arrow
        id="location"
        className="space-x-2"
        ImageSource="/SVG/map-pinned.svg"
        SectionText="Visit our location"
      />
      <div className="mx-auto max-w-7xl px-1 py-5 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl"></div>
        <div className="mt-16 lg:mt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="h-full w-full rounded-md bg-gray-600">
              <iframe
                className="w-full rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.188464163369!2d86.43893562557604!3d23.811896428628557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9fac678481%3A0x122cb1d133a89995!2sIndian%20Institute%20of%20Technology%20(Indian%20School%20of%20Mines)%2C%20Dhanbad!5e0!3m2!1sen!2sin!4v1722491075541!5m2!1sen!2sin"
                width="595"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <div className="mx-auto max-w-full overflow-hidden rounded-lg">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Our Address
                  </h3>
                  <p className="mt-1 text-gray-600">
                    shop no. 4, IIT (ISM, RD, Kalyanpur, Jharkhand 826004
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">
                    Monday - Friday: 9am - 5pm
                  </p>
                  <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                  <p className="mt-1 text-gray-600">Sunday: Closed</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-600">Email: IITD@iitd.ac.in</p>
                  <p className="mt-1 text-gray-600">Phone: +91 06524295148</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
