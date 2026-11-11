import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import ContactAreaHomeFour from "@/components/homes/home/ContactAreaHomeFour";

export const metadata = {
  title: "Contact Us | EazyClassroom",
  description: "Get in touch with our team for support, sales, or general questions.",
};

export default function ContactPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "68px" }}>
        <ContactAreaHomeFour />
      </main>
      <FooterFour />
    </>
  );
}