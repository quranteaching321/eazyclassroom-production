import { StaticImageData } from "next/image";

import recording_list from "@/assets/img/custom/recording-list.webp";
import addon from "@/assets/img/custom/addon.webp";
import classes from "@/assets/img/custom/classes.webp";
import live_view from "@/assets/img/custom/live-view-alert.webp";


interface service_data_type {
    id: number;
    img: StaticImageData;
    category_1: string;
    category_2: string;
    title: string;
}
const service_data: service_data_type[] = [
    {
        id: 1,
        img: recording_list,
        category_1: "Recording Management",
        category_2: "Class Recordings",
        title: "Comprehensive Recording List",
    },
    {
        id: 2,
        img: addon,
        category_1: "Service Expansion",
        category_2: "Add-On Services",
        title: "Add As Many Teachers/Rooms As You Need",
    },
    {
        id: 3,
        img: classes,
        category_1: "Classes Management",
        category_2: "Clases List",
        title: "Classes with Event Logs and Recordings",
    },
    {
        id: 4,
        img: live_view,
        category_1: "Session Monitoring",
        category_2: "Live Class Alerts",
        title: "Real-Time Classroom Monitoring",
    },
];


export default service_data