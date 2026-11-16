import type { Metadata } from "next";
import HomeFour from "@/components/homes/home";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata: Metadata = {
  title: "EazyClassroom - The All-in-One Virtual Classroom Management System",
  description: "All-in-one virtual classroom management for academies. Record sessions, monitor tutors live, analyze lessons with AI, and manage Zoom, Google Meet, Teams, and native rooms from one dashboard.",
  alternates: { canonical: "https://eazyclassroom.net/" },
  openGraph: {
    title: "EazyClassroom - The All-in-One Virtual Classroom Management System",
    description: "All-in-one virtual classroom management for academies. Record sessions, monitor tutors live, analyze lessons with AI, and manage Zoom, Google Meet, Teams, and native rooms from one dashboard.",
    url: "https://eazyclassroom.net/",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EazyClassroom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EazyClassroom - The All-in-One Virtual Classroom Management System",
    description: "All-in-one virtual classroom management for academies. Record sessions, monitor tutors live, analyze lessons with AI, and manage Zoom, Google Meet, Teams, and native rooms from one dashboard.",
    images: ["/og-image.png"],
  },
};

const index = () => {
  return (
    <Wrapper>
       <HomeFour />
       <ScrollToTop style={false} />
    </Wrapper>
  );
};

export default index;