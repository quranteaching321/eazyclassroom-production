import type { Metadata } from "next";
import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import ContactAreaHomeFour from "@/components/homes/home/ContactAreaHomeFour";

export const metadata: Metadata = {
  title: "Contact Us | EazyClassroom",
  description: "Get in touch with our team for support, sales, or general questions.",
  alternates: { canonical: "https://eazyclassroom.net/contact" },
  openGraph: {
    title: "Contact Us | EazyClassroom",
    description: "Get in touch with our team for support, sales, or general questions.",
    url: "https://eazyclassroom.net/contact",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EazyClassroom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | EazyClassroom",
    description: "Get in touch with our team for support, sales, or general questions.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <HeaderFour />
      <main>
        <ContactAreaHomeFour />
      </main>
      <FooterFour />
    </>
  );
}