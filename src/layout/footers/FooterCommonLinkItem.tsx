import Link from "next/link";

// footer link type
interface footer_links_type {
    id: number;
    title: string;
    links: {
        title: string;
        link: string;
    }[];
}
// footer link  data
const footer_links: footer_links_type[] = [
    {
      id: 1,
      title: "Information",
      links: [
        { title: "Home", link: "/" },
        { title: "Features", link: "/#feature_area" },
        { title: "Price", link: "/#price_area" },
        { title: "Contact", link: "/#contact" },
        { title: "Compare Us", link: "/#compare_us" },
        { title: "Eazy AI", link: "/#eazy_ai" },
      ],
    },
    {
      id: 2,
      title: "Other Pages",
      links: [
        { title: "Privacy Policy", link: "privacy" },
        { title: "Terms of Service", link: "terms" },
        { title: "Sign in", link: "https://app.eazyclassroom.net/signin" },
        { title: "Sign up", link: "https://app.eazyclassroom.net/signup" },
        { title: "Documentation", link: "https://app.eazyclassroom.net/doc/" },
        { title: "API Integraion", link: "https://app.eazyclassroom.net/docs/api/overview" },
      ],
    },
    {
      id: 3,
      title: "Use Cases",
      links: [
        { title: "Distance Learning - Schools and Universities", link: "/distance-learning" },
        { title: "Revolutionizing Online Education", link: "/online-education" },
        { title: "Key Requirements for Successful Webinars and Workshops", link: "/webinars-workshops" },
        { title: "Transforming Corporate Training with EazyClassroom", link: "/corporate-training" },
    ],
    
    },
  ]

const FooterCommonLinkItem = () => {
    return (
        <>
            {footer_links.map((item, i) => (
                  <div key={i} className={`${item.id === 3 ? "col-lg-5 col-md-6" : "col-lg-2 col-md-6"}`}>
                    <div className="footer-widget footer-col-2 mb-40">
                      <h4 className="footer-widget-title mb-15">
                        {item.title}
                      </h4>
                      <div className="footer-widget-link">
                        <ul>
                          {item.links?.map((link, index) => (
                            <li key={index}>
                              <Link href={link.link}>{link.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
        </>
    );
};

export default FooterCommonLinkItem;