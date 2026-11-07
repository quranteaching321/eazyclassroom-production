import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import ServicesAreaHomeOne from "@/components/homes/home/ServicesAreaHomeOne";
import Link from "next/link";

export const metadata = {
  title: "Tamper-Proof Recording & Storage | EazyClassroom",
  description: "Automated local and cloud recording with auto-cleaning storage.",
};

export default function RecordingPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "100px" }}>
        <ServicesAreaHomeOne />
        
        <section className="ec-bg-light" style={{ padding: "80px 0", textAlign: "center" }}>
          <div className="container">
            <h2 className="ec-title" style={{ marginBottom: "20px" }}>Never lose a lesson again.</h2>
            <Link href="/signup" className="ec-dash-btn">Start Free Trial</Link>
          </div>
        </section>
      </main>
      <FooterFour />
    </>
  );
}