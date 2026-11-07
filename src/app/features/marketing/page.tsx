import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import MarketingFeatureArea from "@/components/homes/home/MarketingFeatureArea";
import Link from "next/link";

export const metadata = {
  title: "Marketing & Social Publishing | EazyClassroom",
  description: "Grow your academy with one-click social media publishing and YouTube streaming.",
};

export default function MarketingPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "100px" }}>
        <MarketingFeatureArea />
        
        <section className="ec-bg-light" style={{ padding: "80px 0", textAlign: "center" }}>
          <div className="container">
            <h2 className="ec-title" style={{ marginBottom: "20px" }}>Turn your lessons into marketing.</h2>
            <Link href="/signup" className="ec-dash-btn">Start Free Trial</Link>
          </div>
        </section>
      </main>
      <FooterFour />
    </>
  );
}