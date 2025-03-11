import Image from "next/image";

const SectionTitle = ({ children }: { children: string }) => (
  <p className="text-[#285F9D] text-[18px] font-semibold my-7">{children}</p>
);

const AboutContent = () => {
  return (
    <div className="container mx-auto px-7 py-5">
      {/* Logo Section */}
      <div className="flex justify-center items-center">
        <Image
          src="/logo.svg"
          alt="NHC Logo"
          width={242}
          height={250}
          priority
          className="mt-4"
        />
      </div>

      {/* About Section */}
      <SectionTitle>About NHC National Housing Company</SectionTitle>
      <p className="text-[#7F7F7F] text-[16px] leading-relaxed">
        NHC was established in 2016 under Royal Decree No. 7262, on 8/2/1437 AH,
        to be the investment arm of the initiatives and programs of the Ministry
        of Municipal and Rural Affairs and Housing in the real estate,
        residential, and commercial sectors. In May 2020, NHC became fully
        state-owned, entering a new phase as a key enabler of solutions for the
        Saudi real estate market.
      </p>
      <p className="text-[#7F7F7F] text-[16px] leading-relaxed mt-4">
        Today, NHC leads the real estate development sector, fostering strategic
        public-private partnerships. It is committed to delivering high-quality
        urban communities with modern designs and diverse housing solutions at
        affordable prices. Collaborating with experienced and efficient
        developers, NHC aligns with the aspirations of future generations while
        enhancing the quality of life.
      </p>

      {/* National Housing Strategy Section */}
      <SectionTitle>National Housing Strategy</SectionTitle>
      <p className="text-[#7F7F7F] text-[16px] leading-relaxed">
        The NHC Strategy aims to position the company as a key enabler of the
        real estate supply system. By empowering the private sector, NHC
        enhances market professionalism, ensuring sustainable growth and
        long-term success in real estate development.
      </p>
    </div>
  );
};

export default AboutContent;
