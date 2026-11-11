import BreadcrumbCustom from "@/components/common/breadcrumb/breadcrumb-custom"; 
import FooterFour from "@/layout/footers/FooterFour";
import HeaderFour from "@/layout/headers/HeaderFour";
import TermsContent from "./TermsContent";



const Terms = () => {
    return (
        <>
            <HeaderFour />
            <main>
            <BreadcrumbCustom top_title="Terms" title="Terms of Service" />
                <TermsContent />
            </main>
            <FooterFour />
        </>
    );
};

export default Terms