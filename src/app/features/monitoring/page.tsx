import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import FeatureAreaHomeFour from "@/components/homes/home/FeatureAreaHomeFour";
import Link from "next/link";

export const metadata = {
  title: "Live Monitoring & Security | EazyClassroom",
  description: "Watch live sessions, get disconnection alerts, and protect student privacy.",
};

export default function MonitoringPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "100px" }}>
        <FeatureAreaHomeFour />
        
        <section className="ec-bg-dark" style={{ padding: "80px 0", textAlign: "center" }}>
          <div className="container">
            <h2 className="ec-title" style={{ marginBottom: "20px" }}>Never miss a dropped class again.</h2>
            <Link href="/signup" className="ec-dash-btn">Start Free Trial</Link>
          </div>
        </section>
      </main>
      <FooterFour />
    </>
  );
}