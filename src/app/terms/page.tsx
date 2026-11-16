import type { Metadata } from "next";
﻿import ScrollToTop from "@/components/common/scroll-to-top";
import Terms from "@/components/terms";
import Wrapper from "@/layout/Wrapper";

export const metadata: Metadata = {
  title: "Terms of Service - Eacyclassroom.Net",
  description: "",
  alternates: { canonical: "https://eazyclassroom.net/terms" },
  openGraph: {
    title: "Terms of Service - Eacyclassroom.Net",
    description: "",
    url: "https://eazyclassroom.net/terms",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EazyClassroom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Eacyclassroom.Net",
    description: "",
    images: ["/og-image.png"],
  },
};

const index = () => {
    return (
        <Wrapper>
            <Terms />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;