import BreadcrumbCustom from "@/components/common/breadcrumb/breadcrumb-custom"; 
import FooterFour from "@/layout/footers/FooterFour";
import HeaderFour from "@/layout/headers/HeaderFour";
import PrivacyContent from "./PrivacyContent";



const Privacy = () => {
    return (
        <>
            <HeaderFour />
            <main>
            <BreadcrumbCustom top_title="Privacy" title="Privacy Policy" />
                <PrivacyContent />
            </main>
            <FooterFour />
        </>
    );
};

export default Privacy