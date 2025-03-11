import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-[#292759] min-h-[129px]">
      <div className="container mx-auto px-7 ">
        <div className="px-0 sm:px-28 h-full flex flex-col">
          <div className="border-t border-[#F1F1F1] w-full mt-14" />
          <div className="w-full flex justify-between items-center mt-5 flex-wrap">
            <div className="flex gap-x-16  flex-wrap">
              <Image
                src="/NHC.png"
                alt="footer-Logo-one"
                width={30}
                height={30}
                priority
              />
              <Image
                src="/second-footer-logo.png"
                alt="footer-Logo-two"
                width={50}
                height={50}
                priority
              />
            </div>
            <p className="text-[#F1F1F1] text-14">
              All rights reserved © 2022 - Developed and operated by National
              Housing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
