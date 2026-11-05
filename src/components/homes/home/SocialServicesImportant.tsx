'use client';

import Link from "next/link";
import { useState } from "react";
import "./style.css";
import social_shape_1 from "@/assets/img/services/analysis/analysis-dots.png";
import social_shape_2 from "@/assets/img/services/analysis/analysis-round.png";
import social_shape_3 from "@/assets/img/services/analysis/analysis-round-2.png";
import social_shape_4 from "@/assets/img/services/analysis/analysis-line-1.png";
import social_shape_5 from "@/assets/img/services/analysis/analysis-line-2.png";
import social_shape_6 from "@/assets/img/services/analysis/analysis-line-3.png";
import Image, { StaticImageData } from "next/image";

interface SocialServiceContentType {
    sub_title: string;
    title: JSX.Element;
    title_2: JSX.Element;
    sm_info_2: string;
    service_important_list: {
        id: number;
        title: string;
        sm_des: string;
    }[];
    table_title: string;
    table_header: {
        id: number;
        cls: string;
        text: string;
    }[];
    services_seo_item: {
        id: number;
        Feature: string;
        Zoom: string;
        GoogleMeet: string;
        MicrosoftTeams: string;
        EazyClassroom: string;
    }[];
    social_shapes: {
        id: number;
        img: StaticImageData;
        duration?: string;
        delay?: string;
        cls?: string;
    }[];
}

const social_service_content: SocialServiceContentType = {
    sub_title: "How We Compare",
    title: <>Looking for a truly white-labeled meeting API? <br /> See how we win.</>,
    title_2: <></>,
    sm_info_2: "Compare plug-and-play brand isolation with standard corporate tools.",

    service_important_list: [
        { id: 1, title: "Pre-built Classroom UI", sm_des: "Skip coding custom layouts; launch instantly via dynamic links." },
        { id: 2, title: "100% Brand Isolation", sm_des: "Keep your platform identity clean with no vendor logos or mandatory apps." },
        { id: 3, title: "Compliance Controls", sm_des: "Enforce recording compliance and track room connectivity natively." },
    ],
    table_title: "Feature Name",
    table_header: [
        { id: 1, cls: "two", text: "Zoom" },
        { id: 2, cls: "three", text: "Google Meet" },
        { id: 3, cls: "four", text: "Microsoft Teams" },
        { id: 4, cls: "five", text: "EazyClassroom" },
    ],
    services_seo_item: [
        {
            id: 1,
            Feature: "Audio/Video Classes",
            Zoom: "YES",
            GoogleMeet: "YES",
            MicrosoftTeams: "YES",
            EazyClassroom: "YES"
        },
        {
            id: 2,
            Feature: "Rooms Management",
            Zoom: "YES <br> Temporary Links",
            GoogleMeet: "YES <br> Static Links",
            MicrosoftTeams: "YES <br> Channel Bound",
            EazyClassroom: "YES <br> Permanent Academic Rooms"
        },
        {
            id: 3,
            Feature: "Automatic Recordings",
            Zoom: "YES <br> Host-Dependent",
            GoogleMeet: "YES <br> Host-Dependent",
            MicrosoftTeams: "YES <br> Host-Dependent",
            EazyClassroom: "YES <br> Enforced Server-Side"
        },
        {
            id: 4,
            Feature: "Stop/Pause Recordings",
            Zoom: "YES",
            GoogleMeet: "YES",
            MicrosoftTeams: "YES",
            EazyClassroom: "NO <br> Enforced Compliance Lock"
        },
        {
            id: 5,
            Feature: "Chat Functionality",
            Zoom: "YES",
            GoogleMeet: "YES",
            MicrosoftTeams: "YES",
            EazyClassroom: "YES"
        },
        {
            id: 6,
            Feature: "Screen Sharing",
            Zoom: "YES",
            GoogleMeet: "YES",
            MicrosoftTeams: "YES",
            EazyClassroom: "YES"
        },
        {
            id: 7,
            Feature: "Interactive Whiteboard",
            Zoom: "YES <br> Basic Canvas",
            GoogleMeet: "NO <br> Requires Integration",
            MicrosoftTeams: "YES <br> Add-on Required",
            EazyClassroom: "YES <br> Natively Integrated"
        },
        {
            id: 8,
            Feature: "Share Course Material",
            Zoom: "YES <br> Session Only",
            GoogleMeet: "YES <br> Chat Only",
            MicrosoftTeams: "YES <br> Files Repository",
            EazyClassroom: "YES <br> Persistent Cloud Drive"
        },
        {
            id: 9,
            Feature: "Polling and Quizzes",
            Zoom: "YES",
            GoogleMeet: "NO",
            MicrosoftTeams: "YES",
            EazyClassroom: "YES <br> Automated Gradebook Sync"
        },
        {
            id: 10,
            Feature: "Real-Time Disconnection Alerts",
            Zoom: "NO",
            GoogleMeet: "NO",
            MicrosoftTeams: "NO",
            EazyClassroom: "YES <br> Instant Admin Notification"
        },
        {
            id: 11,
            Feature: "Class Events Log",
            Zoom: "NO",
            GoogleMeet: "NO",
            MicrosoftTeams: "NO",
            EazyClassroom: "YES <br> Full Audit Trail"
        },
        {
            id: 12,
            Feature: "Live Monitoring",
            Zoom: "NO",
            GoogleMeet: "NO",
            MicrosoftTeams: "YES <br> Enterprise Tier Only",
            EazyClassroom: "YES <br> Supervisor Dashboard"
        },
        {
            id: 13,
            Feature: "Class/Room Reports",
            Zoom: "NO",
            GoogleMeet: "NO",
            MicrosoftTeams: "NO",
            EazyClassroom: "YES <br> Automated Attendance"
        },
        {
            id: 14,
            Feature: "Speech Recognition (Beta)",
            Zoom: "NO",
            GoogleMeet: "NO",
            MicrosoftTeams: "NO",
            EazyClassroom: "YES <br> Keyword Compliance Logs"
        },
        {
            id: 15,
            Feature: "Multi-Device Support",
            Zoom: "YES",
            GoogleMeet: "YES",
            MicrosoftTeams: "YES",
            EazyClassroom: "YES"
        },
        {
            id: 16,
            Feature: "Teachers Management",
            Zoom: "NO",
            GoogleMeet: "NO",
            MicrosoftTeams: "NO",
            EazyClassroom: "YES <br> Dedicated Portal"
        },
        {
            id: 17,
            Feature: "Parents & Students Management",
            Zoom: "NO",
            GoogleMeet: "NO",
            MicrosoftTeams: "NO",
            EazyClassroom: "YES <br> Native LMS Profiles"
        },
        {
            id: 18,
            Feature: "White Labeling",
            Zoom: "NO <br> App Installs Required",
            GoogleMeet: "NO <br> Google Branding",
            MicrosoftTeams: "NO <br> Microsoft Branding",
            EazyClassroom: "YES <br> 100% Custom Domains"
        },
        {
            id: 19,
            Feature: "Customized PWA Apps",
            Zoom: "NO",
            GoogleMeet: "NO",
            MicrosoftTeams: "NO",
            EazyClassroom: "YES <br> Progressive Web App"
        },
        {
            id: 20,
            Feature: "Grades Management",
            Zoom: "NO",
            GoogleMeet: "NO",
            MicrosoftTeams: "NO",
            EazyClassroom: "YES <br> Centralized Gradebook"
        },
        {
            id: 21,
            Feature: "AI Assistant",
            Zoom: "NO",
            GoogleMeet: "NO",
            MicrosoftTeams: "NO",
            EazyClassroom: "YES <br> Eazy AI Content Generator"
        }
    ],

    social_shapes: [
        { id: 1, img: social_shape_1, duration: "", delay: "", cls: "d-none d-md-block" },
        { id: 2, img: social_shape_2, duration: "", delay: "", cls: "" },
        { id: 3, img: social_shape_3, duration: "", delay: "", cls: "d-none d-md-block" },
        { id: 4, img: social_shape_4, duration: ".4s", delay: ".6s", cls: "wow bounceIn" },
        { id: 5, img: social_shape_5, duration: ".4s", delay: ".4s", cls: "wow bounceIn" },
        { id: 6, img: social_shape_6, duration: ".4s", delay: ".6s", cls: "wow bounceIn" },
    ],
};

const { sub_title, title, title_2, sm_info_2, service_important_list, table_title, table_header, services_seo_item, social_shapes } = social_service_content;

type StyleType = {
    style?: any;
};

const SocialServicesImportant = ({ style }: StyleType) => {

    const renderWithLineBreak = (content: string) => {
        const containsBrTag = content.includes('<br>');
        const [beforeBr, afterBr] = content.split('<br>', 2);

        return (
            <div className="d-flex flex-column">
                <span dangerouslySetInnerHTML={{ __html: beforeBr }} />
                {containsBrTag && (
                    <span style={{ fontSize: '11px', minWidth: '200px', textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: afterBr }} />
                )}
            </div>
        );
    };

    return (
        <section id="compare_us" className={`${style ? "analysis-area pt-110 pb-110" : "services-area services-section-bottom pb-155"}`}>
            <div className="container">
                <div className={`row ${style ? "justify-content-center" : ""}`}>
                    <div className={`${style ? "col-lg-10" : "col-12"}`}>
                        {style ? (
                            <div className="analysis-inner-section text-center mb-50">
                                <h4 className="analysis-inner-title">{title_2}</h4>
                                <span>{sm_info_2}</span>
                            </div>
                        ) : (
                            <div className="optimize-subtitle mb-45">
                                <span>{sub_title}</span>
                                <h5 className="section-title-4 fs-54">{title}</h5>
                            </div>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="services-seo p-relative mt-20">
                            <div className="services-seo-scroll">
                                <div className="services-seo-head">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-3 col-width">
                                            <div className="services-seo-heading">
                                                <h4 className="services-seo-heading-title">
                                                    <span>{table_title}</span>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-9 col-9">
                                            <div className="services-seo-catagory">
                                                <div className="row">
                                                    {table_header.map((tab_head, t_index) => (
                                                        <div
                                                            key={t_index}
                                                            className={`col-lg-3 col-3 col-width ${tab_head.text === 'EazyClassroom' ? 'eazyclassroom-class' : ''}`}
                                                        >
                                                            <div className={`services-seo-heading-item services-seo-catagory-${tab_head.cls}`}>
                                                                <span>{tab_head.text}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="services-seo-info">
                                    {services_seo_item.map((tab_item, t_i) => (
                                        <div key={t_i} className="services-seo-item">
                                            <div className="row align-items-center">
                                                <div className="col-xl-3 col-lg-3 col-3 col-width">
                                                    <div className="services-seo-link d-flex">
                                                        <div className="services-seo-link-check">
                                                            <span>{tab_item.Feature}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-9 col-lg-9 col-9">
                                                    <div className="services-seo-catagory">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-3 col-width">
                                                                <div className="services-seo-catagory-item services-seo-catagory-two">
                                                                    {renderWithLineBreak(tab_item.Zoom)}
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-3 col-width">
                                                                <div className="services-seo-catagory-item services-seo-catagory-three">
                                                                    {renderWithLineBreak(tab_item.GoogleMeet)}
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-3 col-width">
                                                                <div className="services-seo-catagory-item services-seo-catagory-four">
                                                                    {renderWithLineBreak(tab_item.MicrosoftTeams)}
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-3 col-width">
                                                                <div className="services-seo-catagory-item services-seo-catagory-five">
                                                                    {renderWithLineBreak(tab_item.EazyClassroom)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialServicesImportant;