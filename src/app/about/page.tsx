import { Metadata } from "next";
import AboutContent from "../_components/about-content";
export const metadata: Metadata = {
  title: "About-page",
  description: "about Page",
};
const About = () => {
  return (
    <div>
      <AboutContent />
    </div>
  );
};

export default About;
