import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Best Packers and Movers Ahmedabad | Speed Ex Relocation",
  description: "Contact Speed Ex Relocation for professional household shifting services near me, vehicle moving, and pet care services in Ahmedabad. Call +91 9624644006.",
};

export default function Page() {
  return (
    <>
      {/* Page Header Start */}
    <div className="page-header parallaxie">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    {/* Page Header Box Start */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Contact Us</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header End */}


    {/* Page Contact Us Start */}
    <div className="page-contact-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    {/* Contact Us Content Start */}
                    <div className="contact-us-content">
                        {/* Section Title Start */}
                        <div className="section-title section-title-center">
                            <h3 className="wow fadeInUp">contact form</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Get in to <span>touch</span></h2>
                        </div>
                        {/* Section Title End */}

                        {/* Contact Info List Start */}
                        <div className="contact-info-list">
                            {/* Contact Info Item Start */}
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-box">
                                    <img src="/images/icon-phone.svg" alt="" />
                                </div>
                                <div className="contact-info-content">
                                    <p>call to question</p>
                                    <h6><a className="text-white" href="tel:9624644006">+91 9624644006</a> / <a className="text-white" href="tel:9211206101">+91 9211206101</a></h6>
                                </div>
                            </div>
                            {/* Contact Info Item End */}

                            {/* Contact Info Item Start */}
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    <img src="/images/icon-mail.svg" alt="" />
                                </div>
                                <div className="contact-info-content">
                                    <p>send e-mail</p>
                                    <h6><a className="text-white" href="mailto:speedexrelocation3@gmail.com">speedexrelocation3@gmail.com</a></h6>
                                </div>
                            </div>
                            {/* Contact Info Item End */}

                            {/* Contact Info Item Start */}
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon-box">
                                    <img src="/images/icon-location.svg" alt="" />
                                </div>
                                <div className="contact-info-content">
                                    <p>visit anytime</p>
                                    <h6 className="text-white">Ahmedabad Office: B 107, Bijal Business Centre, Aslali Circle, Aslali, Ahmedabad 382427</h6>
                                </div>
                            </div>
                            {/* Contact Info Item End */}
                        </div>
                        {/* Contact Info List End */}
                    </div>
                    {/* Contact Us Content End */}
                </div>

                <div className="col-lg-8">
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
    {/* Page Contact Us End */}

    {/* Google Map Start */}
    <div className="google-map">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    {/* Google Map Start */}
                    <div className="google-map-iframe">
						
						<iframe src="https://maps.google.com/maps?q=Bijal%20Business%20Centre,%20Aslali%20Circle,%20Aslali,%20Ahmedabad%20382427&t=&z=15&ie=UTF8&iwloc=&output=embed" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						
                    </div>
                    {/* Google Map End */}
                </div>
            </div>
        </div>
    </div>
    {/* Google Map End */}




        {/* Our Testimonials Section Start */}
        <div className="our-testimonials">
            <div className="container">
                <div className="row section-row">
                    <div className="col-lg-12">
                        {/* Section Title Start */}
                        <div className="section-title section-title-center">
                            <h3 className="wow fadeInUp">testimonials</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Words of appreciation from <span>our customers</span></h2>
                        </div>
                        {/* Section Title End */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        {/* Testimonial Slider Start */}
                        <div className="testimonial-slider">
                            <div className="swiper">
                                <div className="swiper-wrapper" data-cursor-text="Drag">
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="author-content">
                                                <div className="author-title">
                                                    <h3>Rohit Sharma, IT Professional</h3>
                                                </div>
                                                <div className="author-rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>Shifting my household from Ahmedabad to Bangalore was a breeze with Speed Ex relocation packers and movers. Their household shifting services are top-notch. Highly recommended!</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}

                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="author-content">
                                                <div className="author-title">
                                                    <h3>Priya Menon, HR Manager</h3>
                                                </div>
                                                <div className="author-rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>I was nervous about moving my delicate items, but their packing and unpacking services were absolute perfection. Everything arrived in pristine condition!</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}

                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="author-content">
                                                <div className="author-title">
                                                    <h3>Amit Patel, Business Owner</h3>
                                                </div>
                                                <div className="author-rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>We shifted our entire corporate office from Ahmedabad to Mumbai. The coordination of their office moving services was exceptionally professional and fast.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}

                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="author-content">
                                                <div className="author-title">
                                                    <h3>Neha Kapoor, Interior Designer</h3>
                                                </div>
                                                <div className="author-rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>Their loading and unloading team was incredibly efficient. They handled our heavy lockers and furniture with absolute safety and systematic stacking. Great job!</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}

                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="author-content">
                                                <div className="author-title">
                                                    <h3>Sachin Reddy, Student</h3>
                                                </div>
                                                <div className="author-rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>Used their pet relocation service to move my dog from Ahmedabad to Chennai. The custom pet travel crates and care were amazing. Highly recommend!</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                </div>
                                <div className="testimonial-btn">
                                    <div className="testimonial-btn-prev"></div>
                                    <div className="testimonial-btn-next"></div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Slider End */}
                    </div>
                </div>
            </div>
        </div>
        {/* Our Testimonials Section End */}
    </>
  );
}
