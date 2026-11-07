import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import CourseAreaHomeFour from "@/components/homes/home/CourseAreaHomeFour";
import Link from "next/link";

export const metadata = {
  title: "Course Management & Annotation | EazyClassroom",
  description: "Organize your curriculum, assign courses to rooms, and annotate live.",
};

export default function CoursesPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "100px" }}>
        <CourseAreaHomeFour />
        
        <section className="ec-bg-dark" style={{ padding: "80px 0", textAlign: "center" }}>
          <div className="container">
            <h2 className="ec-title" style={{ marginBottom: "20px" }}>Bring your curriculum to life.</h2>
            <Link href="/signup" className="ec-dash-btn">Start Free Trial</Link>
          </div>
        </section>
      </main>
      <FooterFour />
    </>
  );
}