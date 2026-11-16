import type { Metadata } from "next";
import AnalyticsRouter from "@/components/AnalyticsRouter";
import LinkTracker from "@/components/LinkTracker";
import "../styles/index.scss";
import "../styles/custom.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eazyclassroom.net"),
  title: "EazyClassroom - All-in-One Virtual Classroom Management",
  description: "Manage virtual classrooms, record sessions, monitor tutors, and analyze lessons with AI. Connect Zoom, Google Meet, Microsoft Teams, and native rooms.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "EazyClassroom",
    locale: "en_US",
    url: "https://eazyclassroom.net",
    title: "EazyClassroom - All-in-One Virtual Classroom Management",
    description: "Manage virtual classrooms, record sessions, monitor tutors, and analyze lessons with AI.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EazyClassroom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EazyClassroom",
    description: "Manage virtual classrooms, record sessions, monitor tutors, and analyze lessons with AI.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = 'GTM-MLMC83FD'; // Replace with your GTM ID
  const fbPixelId = '2243054082776202'; // Replace with your Facebook Pixel ID

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />

        {/* Facebook Pixel Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${fbPixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Crisp Chat Widget Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="96ff7e00-85f8-4d0c-8af1-0a9eb1f67073";
              (function(){
                d=document;
                s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />

        <link rel="icon" href="favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Urbanist:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Facebook Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`}
          />
        </noscript>

        <AnalyticsRouter />
        <LinkTracker />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "EazyClassroom",
            "url": "https://eazyclassroom.net",
            "logo": "https://eazyclassroom.net/og-image.png",
            "description": "All-in-one virtual classroom management system for academies.",
            "sameAs": ["https://app.eazyclassroom.net"],
          }) }}
        />
        {children}
      </body>
    </html>
  );
}