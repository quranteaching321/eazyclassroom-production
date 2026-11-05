import { StaticImageData } from "next/image";
import service_icon_7 from "@/assets/img/custom/screen-sharing.svg";
import service_icon_8 from "@/assets/img/custom/multi-device.svg";
import virtual_class_1 from "@/assets/img/custom/virtual-classroom-1.svg";
import virtual_class_2 from "@/assets/img/custom/virtual-classroom-2.svg";
import student_management from "@/assets/img/custom/student-management.svg";
import whiteboard from "@/assets/img/custom/whiteboard.svg";
import chat from "@/assets/img/custom/chat.svg";
import share_course from "@/assets/img/custom/share-course.svg";
import recording from "@/assets/img/custom/recording.svg";
import polling from "@/assets/img/custom/polling.svg";
import alert from "@/assets/img/custom/alert.svg";
import class_log from "@/assets/img/custom/class-log.svg";
import monitoring from "@/assets/img/custom/monitoring.svg";
import report from "@/assets/img/custom/report.svg";
import speech from "@/assets/img/custom/speech-recognition.svg";
import teacher_management from "@/assets/img/custom/teacher-management.svg";
import branding from "@/assets/img/custom/branding.svg";
import source_code from "@/assets/img/custom/source-code.svg";
interface our_service_data_type {
  id: number;
  img: StaticImageData;
  category: string;
  title: string;
}

const our_service_data: our_service_data_type[] = [
  {
    id: 1,
    img: virtual_class_1,
    category: "Audio & Video Sessions",
    title: "Audio and video classroom with an interactive whiteboard support, offering teachers and students a seamless experience."
  },
  {
    id: 2,
    img: virtual_class_2,
    category: "Rooms Management",
    title: "Effortless Room Management <br /> Create and manage multiple rooms with permanent URLs, allowing students to join without needing to log in."
  },
  {
    id: 3,
    img: recording,
    category: "Automatic Recordings",
    title: "Record all sessions automatically, plus prevent tutor/student to stop/pause it, capturing all activities including audio, video, screensharing, and chat."
  },
  {
    id: 4,
    img: chat,
    category: "Chat Functionality",
    title: "In-Session Chat for Interaction <br /> Encourage interaction with a real-time chat feature, allowing immediate feedback and engagement."
  },
  {
    id: 5,
    img: service_icon_7,
    category: "Screen Sharing",
    title: "Instant Screen Sharing <br /> Enable teachers and students to share screens for demonstrations, enhancing collaborative learning."
  },
  {
    id: 6,
    img: whiteboard,
    category: "Interactive Whiteboard",
    title: "Interactive Whiteboard for Collaboration <br /> Use a shared whiteboard for brainstorming, drawing, and visual learning, promoting collaboration among students."
  },
  {
    id: 7,
    img: share_course,
    category: "Share Course Material",
    title: "Seamless Course Material Sharing <br /> Present slides and documents in real-time, enhancing engagement with smooth transitions and interactive features."
  },
  {
    id: 8,
    img: polling,
    category: "Polling and Quizzes",
    title: "Engage Students with Polls and Quizzes <br /> Use live polling and quizzes during sessions to check understanding and maintain interest."
  },
  {
    id: 9,
    img: alert,
    category: "Realtime Disconnection Alerts",
    title: "Receive real-time notifications both in-browser and within the app whenever a disconnection occurs during sessions. This feature is particularly valuable for administrative purposes."
  },
  {
    id: 10,
    img: class_log,
    category: "Class Events Log",
    title: "Comprehensive Class Events Log <br /> Track classroom activities with logs showing join/leave times, screensharing events, and disconnections."
  },
  {
    id: 11,
    img: monitoring,
    category: "Live Monitoring",
    title: "Live Class Monitoring <br /> Administrators can monitor ongoing classes in real-time and join sessions for supervision and support."
  },
  {
    id: 12,
    img: report,
    category: "Class/Room Report",
    title: "Detailed Class and Room Reports <br /> Access comprehensive reports on class activities, including participation, talk time, join/leave times, and shared materials."
  },
  {
    id: 13,
    img: speech,
    category: "Live Session Keyword Alerts",
    title: "Receive instant email alerts when blacklisted keywords are spoken, helping online schools monitor compliance and stop unauthorized personal data collection during the live sessions."
  },
  {
    id: 14,
    img: service_icon_8,
    category: "Multi-Device Support",
    title: "Accessible Across Multiple Devices <br /> Ensure flexibility by supporting access from desktops, tablets, and smartphones."
  },

{
  id: 15,
  img: teacher_management,  // or "/images/teacher-management.png" if string
  category: "Teachers & Parents Panels",
  title: "Separate panels for teachers and parents from where they can start or join the sessions."
},
{
  id: 16,
  img: student_management,  // or "/images/student-management.png"
  category: "API Integration",
  title: "Integrate our virtual classroom within your own system from where you can start/join sessions, get recordings, etc."
},
  {
    id: 17,
    img: branding,
    category: "White Labeling",
    title: "Customizable White Label Options <br /> Personalize the platform with your school or company name and logo for a unique learning experience."
  },
  {
    id: 18,
    img: source_code,
    category: "Customizable WPA Apps",
    title: "Offer custom-branded WPA (Web Progressive App) applications. These apps are tailored with your brand logo and design, can be installed on mobile and desktop."
  }
];






export default our_service_data;