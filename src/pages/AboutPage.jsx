import React from "react";

const AboutPage = () => {
  return (
    <section class="py-24 relative bg-neutral-900">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mt-4 mx-auto">
        <h1 className="text-gray-200 text-center text-4xl font-bold">About Us !</h1>
        <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1 mt-8">
          <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 class="text-gray-200 md:text-4xl text-2xl font-bold font-manrope leading-normal lg:text-start text-center">
                Building Stronger platfrom through Collaboration and Empowerment
              </h2>
              <p class="text-gray-300 text-[13px] font-normal leading-relaxed lg:text-start text-center">
                An e-commerce website serves as a digital storefront, allowing
                businesses to sell products and services to customers over the
                internet. This platform eliminates the need for physical stores,
                making it convenient for customers to shop from the comfort of
                their homes, at any time. E-commerce websites typically offer
                features like secure payment gateways, customer reviews, product
                catalogs, and personalized recommendations, enhancing the
                shopping experience. The flexibility and scalability of these
                platforms make them ideal for businesses of all sizes, from
                startups to established brands. They also leverage analytics
                tools to understand consumer behavior, helping businesses tailor
                their marketing strategies. With global reach, an e-commerce
                website can attract customers beyond local markets, boosting
                sales potential. Additionally, these sites use responsive
                design, ensuring seamless access across devices like smartphones
                and tablets. Security protocols, such as SSL encryption, are
                crucial for safeguarding sensitive customer data. Overall, an
                effective e-commerce website enhances customer satisfaction,
                streamlines operations, and drives revenue growth.
              </p>
            </div>
            <button class="sm:w-fit w-full px-3.5 py-2 bg-red-700 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span class="px-1.5 text-white text-sm font-medium leading-6">
                Get Started
              </span>
            </button>
          </div>
          <img
            class="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1717751272.png"
            alt="about Us image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
