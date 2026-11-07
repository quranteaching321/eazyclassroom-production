import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import CrmAreaHomeFour from "@/components/homes/home/CrmAreaHomeFour";
import Link from "next/link";

export const metadata = {
  title: "Custom CRM Integration | EazyClassroom",
  description: "Keep your existing CRM and launch your academy's Zoom/Meet links seamlessly.",
};

export default function CrmPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "100px" }}>
        <CrmAreaHomeFour />
        
        <section className="ec-bg-light" style={{ padding: "80px 0", textAlign: "center" }}>
          <div className="container">
            <h2 className="ec-title" style={{ marginBottom: "20px" }}>Keep your CRM. We'll plug right into it.</h2>
            <Link href="/signup" className="ec-dash-btn">Start Free Trial</Link>
          </div>
        </section>
      </main>
      <FooterFour />
    </>
  );
}