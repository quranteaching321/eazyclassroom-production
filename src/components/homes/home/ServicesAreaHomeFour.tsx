import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import SmollRound from "@/svg/smoll_round";
import MarketingIcon from "@/svg/marketing_icon";
import RightArrowThree from "@/svg/right_arrow_3";
import SEOAnalyticsIcon from "@/svg/SEO_analytics_icon";
import SocialMarketingIcon from "@/svg/social_marketing_icon";

import header_rocket from "@/assets/img/shape/header-rocket.png";
import service_shape_1 from "@/assets/img/shape/choose-4-shape-1.png";
import service_shape_2 from "@/assets/img/shape/choose-4-shape-2.png";
import service_shape_3 from "@/assets/img/shape/choose-4-shape-3.png";

interface service_content_type {
    sub_title: string;
    sub_title_2: string;
    title: string;
    service_data: {
        id: number;
        step: string;
        shape: StaticImageData;
        icon: JSX.Element;
        title: string;
        sm_des: string;
    }[];
    sm_info: JSX.Element;
}

const service_content: service_content_type = {
    sub_title: 'How it works',
    sub_title_2: "How it works",
    title: "Set up your academy in 10 minutes",
    service_data: [
        {
            id: 1,
            step: "01",
            shape: service_shape_1,
            icon: <MarketingIcon />,
            title: "Brand it",
            sm_des: "Upload your academy logo and name. It appears on the web portal, the mobile PWA, and inside EazyRecorder on every teacher's PC.",
        },
        {
            id: 2,
            step: "02",
            shape: service_shape_2,
            icon: <SEOAnalyticsIcon />,
            title: "Connect your meetings",
            sm_des: "Keep the Zoom, Google Meet, or Microsoft Teams you already use — or run fully-hosted native rooms. Both live under one dashboard.",
        },
        {
            id: 3,
            step: "03",
            shape: service_shape_3,
            icon: <SocialMarketingIcon />,
            title: "Send one room login",
            sm_des: "Create a room login in the admin panel. One login works across multiple rooms, so a tutor teaching three grades signs in once.",
        },
    ],
    sm_info: <>Then your teachers launch EazyRecorder (our Windows client), sign in, and start the session. Everything else — recording, AI analysis, cloud sync — happens automatically.</>,
}

const { sub_title, sub_title_2, title, service_data, sm_info } = service_content;

const ServicesAreaHomeFour = ({ style }: any) => {
    return (
        <>
            <section className="services-area pb-120" id="how_it_works">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={`${style ? "optimize-subtitle mb-50" : "section-wrapper mb-60"} text-center`}>
                                <span>{style ? sub_title_2 : sub_title}</span>
                                <h5 className={`section-title-4 ${style ? "fs-54" : ""}`}>{title}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {service_data.map((item, i) =>
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="services-item-4 text-center mb-55">
                                    <div className="services-icon-4 mb-30">
                                        <Image src={item.shape} alt="EazyClassroom" />
                                        <i> {item.icon} </i>
                                    </div>
                                    <div className="services-content-4">
                                        <div className="services-step">Step {item.step}</div>
                                        <h5 className="title mb-20">{item.title}</h5>
                                        <p>{item.sm_des}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10 col-md-11">
                            <div className="services-bottom text-center">
                                <div className="servics-details-4 d-flex align-items-center justify-content-center flex-wrap gap-3">
                                    <Image src={header_rocket} alt="EazyClassroom" />
                                    <p>{sm_info}</p>
                                    <Link href="/signup" className="services-inline-cta">
                                        Start Free Trial
                                        <i><RightArrowThree /></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesAreaHomeFour;