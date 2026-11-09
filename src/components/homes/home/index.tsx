
import FooterFour from "@/layout/footers/FooterFour";
import HeaderFour from "@/layout/headers/HeaderFour";
import DashbordAreaHomeThree from "./DashbordAreaHomeThree";
import FeatureAreaHomeFour from "./FeatureAreaHomeFour";
import HeroBannerHomefour from "./HeroBannerHomefour";
import ServicesAreaHomeOne from "./ServicesAreaHomeOne";
import PricingAreaHomeOne from "./PricingAreaHomeFour";
import ServicesAreaHomeFour from "./ServicesAreaHomeFour";
import ServicesAreaHomeThree from "./ServicesAreaHomeThree";
import MarketingFeatureArea from "./MarketingFeatureArea";
import FaqAreaHomeTwo from "./FaqAreaHomeTwo";
import CourseAreaHomeFour from "./CourseAreaHomeFour"; // <-- NEW IMPORT
import CrmAreaHomeFour from "./CrmAreaHomeFour"; // <-- NEW IMPORT
const HomeFour = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <HeroBannerHomefour />
        <ServicesAreaHomeFour />
        <DashbordAreaHomeThree />
        <FeatureAreaHomeFour />
        <ServicesAreaHomeOne />

        <PricingAreaHomeOne />
        <MarketingFeatureArea />
                <CourseAreaHomeFour />    {/* <-- NEW SECTION ADDED HERE */}
                        <CrmAreaHomeFour />        {/* <-- NEW SECTION ADDED HERE */}
        <FaqAreaHomeTwo />
        </main>
      <FooterFour />
    </>
  );
};

export default HomeFour;