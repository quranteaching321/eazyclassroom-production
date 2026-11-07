import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import PricingAreaHomeFour from "@/components/homes/home/PricingAreaHomeFour";
import Link from "next/link";

export const metadata = {
  title: "Eazy AI Lesson Analysis | EazyClassroom",
  description: "Bring your own Gemini key and get automatic lesson ratings and safety alerts.",
};

export default function AIPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "100px" }}>
        <PricingAreaHomeFour />
        
        <section className="ec-bg-dark" style={{ padding: "80px 0", textAlign: "center" }}>
          <div className="container">
            <h2 className="ec-title" style={{ marginBottom: "20px" }}>Get insights on every single class.</h2>
            <Link href="/signup" className="ec-dash-btn">Start Free Trial</Link>
          </div>
        </section>
      </main>
      <FooterFour />
    </>
  );
}