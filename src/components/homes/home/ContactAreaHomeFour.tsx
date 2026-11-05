import Image, { StaticImageData } from "next/image";
import ContactFormHomeFour from "@/components/forms/ContactFormHomeFour";
import contact_bg_shape from "@/assets/img/bg/contact-4-bg.jpg";

// contact shape
import contact_shape_1 from "@/assets/img/shape/contact-4-shape-1.png";
import contact_shape_2 from "@/assets/img/shape/contact-4-shape-2.png";
import contact_shape_3 from "@/assets/img/shape/contact-4-shape-3.png";
import contact_shape_4 from "@/assets/img/shape/contact-4-shape-4.png";
import contact_shape_5 from "@/assets/img/shape/contact-4-shape-5.png";
import contact_shape_6 from "@/assets/img/shape/contact-4-shape-6.png";

interface contact_content_type {
    sub_title: string;
    title: JSX.Element;
    sm_des: string;
    cotact_shape: {
        id: number;
        img: StaticImageData;
        cls: string;
    }[];
}

const contact_content: contact_content_type = {
    sub_title: "Get in touch",
    title: <>Lets work <br />Together</>,
    sm_des: "Just tell us your requirements and we will help you!",
    cotact_shape: [
        { id: 1, img: contact_shape_1, cls: "" },
        { id: 2, img: contact_shape_2, cls: "" },
        { id: 3, img: contact_shape_3, cls: "" },
        { id: 4, img: contact_shape_4, cls: "" },
        { id: 5, img: contact_shape_5, cls: "d-none d-xxl-block" },
        { id: 6, img: contact_shape_6, cls: "d-none d-xxl-block" },
    ],
};

const { sub_title, title, sm_des, cotact_shape } = contact_content;

const ContactAreaHomeFour = () => {
    return (
        <section
            className="contact-area p-relative contact-bg-4 pb-65 mb-60"
            id="contact"
            style={{ marginBottom: "0px" }}
        >
            <div className="contact-main-shape-bg d-none d-md-block">
                <Image src={contact_bg_shape} alt="Eazyclassroom" />
            </div>
            <div className="contact-shape d-none d-lg-block">
                {cotact_shape.map((item, i) => (
                    <Image
                        key={i}
                        src={item.img}
                        alt="Eazyclassroom"
                        className={`contact-shape-${item.id} ${item.cls}`}
                    />
                ))}
            </div>
            <div className="container">
                {/* Row 1: intro text + contact form */}
                <div className="row">
                    <div className="col-lg-6">
                        <div
                            className="tpcontact-4 mt-30 mb-50"
                            style={{ marginRight: "12px" }}
                        >
                            <div className="section-wrapper mb-20">
                                <span>{sub_title}</span>
                                <h5 className="section-title-4 section-title-4-2">{title}</h5>
                            </div>
                            <div className="tpcontact-4-content">
                                <p>{sm_des}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tpcontact-4-box mb-60">
                            <div className="tpcontact-4-box-wrapper">
                                <ContactFormHomeFour />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Full‑width company cards (horizontal) */}
                <div className="row">
                    <div className="col-12">
                        <div
                            className="company-details-wrapper"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "20px",
                                marginTop: "1rem",
                                width: "100%",
                                boxSizing: "border-box",
                                justifyContent: "center",
                            }}
                        >
                            {/* Reall Technologies (Private) Limited - Pakistan */}
                            <div
                                className="company-card"
                                style={{
                                    flex: "1 1 280px",
                                    minWidth: "250px",
                                    maxWidth: "100%",
                                    backgroundColor: "#f9f9f9",
                                    padding: "1rem 1.25rem",
                                    borderRadius: "10px",
                                    border: "1px solid #eaeaea",
                                    boxSizing: "border-box",
                                }}
                            >
                                <h6 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "10px", color: "#0a0a0a" }}>
                                    Reall Technologies (Private) Limited
                                </h6>
                                <address style={{ fontStyle: "normal", marginBottom: "8px", fontSize: "0.9rem", lineHeight: "1.5", color: "#555" }}>
                                    2nd Floor, Shakeel Center, above Bank Alfalah,<br />
                                    Faizabad, Rawalpindi, 46000, Pakistan
                                </address>
                                <p style={{ marginBottom: "12px", fontSize: "0.85rem", color: "#666" }}>
                                    <strong>CUI No.:</strong> 0173541
                                </p>

                                {/* Google Maps Embed - Pakistan (address + name) */}
                                <div
                                    style={{
                                        width: "100%",
                                        height: "200px",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <iframe
                                        title="Reall Technologies Pakistan Map"
                                        src="https://maps.google.com/maps?q=Reall+Technologies+(Private)+Limited+2nd+Floor+Shakeel+Center+above+Bank+Alfalah+Faizabad+Rawalpindi+46000+Pakistan&output=embed&z=15"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Reall Technologies LLC - USA (using address + name, no API key needed) */}
                            <div
                                className="company-card"
                                style={{
                                    flex: "1 1 280px",
                                    minWidth: "250px",
                                    maxWidth: "100%",
                                    backgroundColor: "#f9f9f9",
                                    padding: "1rem 1.25rem",
                                    borderRadius: "10px",
                                    border: "1px solid #eaeaea",
                                    boxSizing: "border-box",
                                }}
                            >
                                <h6 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "10px", color: "#0a0a0a" }}>
                                    Reall Technologies LLC
                                </h6>
                                <address style={{ fontStyle: "normal", marginBottom: "8px", fontSize: "0.9rem", lineHeight: "1.5", color: "#555" }}>
                                    1209 Mountain Rd Pl NE,<br />
                                    Albuquerque, NM 87110, United States
                                </address>
                                <p style={{ marginBottom: "12px", fontSize: "0.85rem", color: "#666" }}>
                                    <strong>Entity ID:</strong> 0008102117
                                </p>

                                {/* Google Maps Embed - USA (address + name) */}
                                <div
                                    style={{
                                        width: "100%",
                                        height: "200px",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <iframe
                                        title="Reall Technologies USA Map"
                                        src="https://maps.google.com/maps?q=Reall+Technologies+LLC+1209+Mountain+Rd+Pl+NE+Albuquerque+NM+87110+USA&output=embed&z=15"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Note */}
                        <div
                            style={{
                                marginTop: "1rem",
                                fontSize: "0.8rem",
                                color: "#888",
                                fontStyle: "italic",
                                textAlign: "left",
                            }}
                        >
                            *Parent companies of EazyClassroom.Net
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactAreaHomeFour;