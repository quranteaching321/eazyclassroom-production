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
    title: "Set up your academy in 10 minutes",
    service_data: [
{
    id: 1,
    step: "01",
    shape: service_shape_1,
    icon: <MarketingIcon />,
    title: "Create Free Account",  // ← Changed
    sm_des: "Signup for a free account in which you can connect two rooms (1 Native + 1 Zoom/Meet/Teams), authorize one social account for social media publishg and one youtube streaming. ",
},
        {
            id: 2,
            step: "02",
            shape: service_shape_2,
            icon: <SEOAnalyticsIcon />,
            title: "Setup your Rooms",
            sm_des: "Create Native rooms or authorize your existing Zoom, Meet, or Teams. Set access schedules, time zones, and generate room logins and more..",
        },
        {
            id: 3,
            step: "03",
            shape: service_shape_3,
            icon: <SocialMarketingIcon />,
            title: "Install EazyRecorder",
            sm_des: "Tutors download the free Windows client, sign in with the room login you created, and start teaching. Everything else is automatic.",
        },
    ],
    sm_info: <>Keep using your existing Zoom, Meet, or Teams rooms, while EazyClassroom acts as your complete command center—handling auto local & cloud recordings, live monitoring, flat-rate AI, and automated social publishing & Youtube streaming all in one place.</>,
}

const ServicesAreaHomeFour = ({ style }: any) => {
    return (
        <section className="services-area pb-120" id="how_it_works">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`${style ? "optimize-subtitle mb-50" : "section-wrapper mb-60"} text-center`}>
                            <span>{service_content.sub_title}</span>
                            <h5 className={`section-title-4 ${style ? "fs-54" : ""}`}>{service_content.title}</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {service_content.service_data.map((item, i) =>
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
                                <p>{service_content.sm_info}</p>
                               <Link href="https://app.eazyclassroom.net/signup" className="services-inline-cta">
    <span className="services-inline-cta-text">Start Free</span>
    <span className="services-inline-cta-icon"><RightArrowThree /></span>
</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesAreaHomeFour;