import Link from "next/link";
import Image from "next/image";
import FooterLogoHomeFour from "@/svg/logo/footer_logo_home_4";
import FooterCommonLinkItem from "./FooterCommonLinkItem";
import { SocialLinksTwo } from "@/components/common/social-links";
import SubcribeHomeFour from "@/components/forms/SubcribeHomeFour";
import LogoHomeFour from "@/assets/img/logo/logo-new.png";
 const footer_content = {
    footer_info: <>EazyClassroom stands as a trusted platform,
    delivering efficient, tailored solutions
    for modern virtual education.</>,
    subcribe: "Subcribe.", 
    title: "Only valuable resource no bullshit",

 }
 const {footer_info, subcribe, title}  = footer_content

const FooterFour = () => {
    return (
        <>
            <footer>
                <div className="footer-area footer-bg-4 pt-100">
                    <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget footer-4-col-1 mb-30">
                                <div className="footer-widget-logo mb-20">
                                <Image src={LogoHomeFour} alt="Logo" priority />
                                </div>
                                <div className="footer-widget-content">
                                    <p className="footer-widget-text mb-20">{footer_info} </p>
                                    <div className="fooer-btn-4">
                                        <Link className="blue-btn" href="https://app.eazyclassroom.net/signup">Start Free</Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <FooterCommonLinkItem /> 

                            
                        </div>
                    </div>
                    <div className="footer-bottom-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="footer-widget-copyright footer-widget-copyright-4 text-center">
                                    <span>© {new Date().getFullYear()} <Link href="#">EazyClassroom.Net</Link> All Rights Reserved.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterFour;