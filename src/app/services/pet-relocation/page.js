import Link from "next/link";

export const metadata = {
  title: "Pet Care Services & Dog Pick Up in Ahmedabad | Speed Ex Relocation",
  description: "Safe and comfortable pet relocation and dog pick up services in Ahmedabad. We are the trusted Ahmedabad pet care and shifting company for domestic animal transport.",
  keywords: "pet care services, dog pick up services, ahmedabad pet, shifting company, relocation movers near me, packers and movers ahmedabad",
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
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Pet Relocation Services</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Pet Relocation Services</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header End */}


    {/* Page Service Single Start */}
    <div className="page-service-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    {/* Page Single Sidebar Start */}
                    <div className="page-single-sidebar">
                        {/* Page Sidebar Category List Start */}
                        <div className="page-sidebar-catagery-list wow fadeInUp">
                            <h3>Our Services</h3>
                            <ul>
                                <li><Link href="/services/household-goods-shifting">Household Goods Shifting</Link></li>
                                <li><Link href="/services/office-goods-shifting">Office Goods Shifting</Link></li>
                                <li><Link href="/services/loading-and-unloading">Loading and Unloading</Link></li>
                                <li><Link href="/services/packing-and-unpacking-services">Packing and Unpacking Services</Link></li>
                                <li><Link href="/services/moving-services">Moving Services</Link></li>
                                <li><Link href="/services/pet-relocation">Pet Relocation</Link></li>
                                <li><Link href="/services/car-transportation">Car Transportation</Link></li>
                                <li><Link href="/services/bike-transportation">Bike Transportation</Link></li>
                            </ul>
                        </div>
                        {/* Page Sidebar Category List End */}

                        {/* Sidebar CTA Box Start */}
                        <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.2s">
                            {/* Sidebar CTA Content Start */}
                            <div className="sidebar-cta-content">
                                <h3>How can we help?</h3>
                                <p>B 107, Bijal Business Centre, Aslali Circle, Aslali, Ahmedabad 382427</p>
                                <p><a href="mailto:speedexrelocation3@gmail.com">speedexrelocation3@gmail.com</a></p>
                            </div>
                            {/* Sidebar CTA Content End */}

                            {/* Sidebar CTA Button Start */}
                            <div className="sidebar-cta-btn" style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                <a href="tel:9624644006">
                                    <img src="/images/icon-phone.svg" alt="" />+91 9624644006</a>
                                <a href="tel:9211206101">
                                    <img src="/images/icon-phone.svg" alt="" />+91 9211206101</a>
                            </div>
                            {/* Sidebar CTA Button End */}
                        </div>
                        {/* Sidebar CTA Box End */}
                    </div>
                    {/* Page Single Sidebar End */}
                </div>

                <div className="col-lg-8">
                    {/* Service Single Content Start */}
                    <div className="service-single-contemt">
                        {/* Service Entry Start */}
                        <div className="service-entry">
                            <p className="wow fadeInUp">When it comes to relocating your beloved pets, Speed Ex relocation packers and movers makes the journey safe, comfortable, and stress-free. Our dedicated pet care services are designed to ensure the highest standards of safety and care for your pets. We offer trusted dog pick up services and domestic ahmedabad pet relocation solutions—whether it's a cat, dog, bird, or any other pet companion.

We handle everything from customized pet travel crates and documentation support to secure, temperature-controlled transportation and veterinary coordination. Our dedicated animal handler team treats your pets like family, ensuring a smooth transit experience.</p>

                            {/* Service Solution Box Start */}
                            <div className="service-solution-box">
                                <h2 className="text-anime-style-2">Pet relocation made <span>safe and stress-free</span></h2>
                                <p className="wow fadeInUp">From customized travel plans to doorstep coordination, we’re equipped to handle all aspects of pet relocation with professional care.</p>

                                {/* Service Entry Step List Start */}
                                <div className="service-solution-steps">
                                    <div className="service-solution-step-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="service-solution-step-box">
                                            <div className="service-solution-step-no">
                                                <h2>01</h2>
                                            </div>
                                            <div className="service-solution-step-content">
                                                <h3>Travel Plan & Health Check</h3>
                                                <p>We assess your pet's needs, check travel documents/vaccines, and prepare a custom relocation plan.</p>
                                            </div>
                                        </div>
                                        <div className="icon-box">
                                            <img src="/images/icon-service-solution-step-1.svg" alt="" />
                                        </div>
                                    </div>

                                    <div className="service-solution-step-item active wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="service-solution-step-box">
                                            <div className="service-solution-step-no">
                                                <h2>02</h2>
                                            </div>
                                            <div className="service-solution-step-content">
                                                <h3>Secure Travel Crate</h3>
                                                <p>We provide specialized, well-ventilated, and comfortable pet travel crates sized perfectly for your pet.</p>
                                            </div>
                                        </div>
                                        <div className="icon-box">
                                            <img src="/images/icon-service-solution-step-2.svg" alt="" />
                                        </div>
                                    </div>

                                    <div className="service-solution-step-item wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="service-solution-step-box">
                                            <div className="service-solution-step-no">
                                                <h2>03</h2>
                                            </div>
                                            <div className="service-solution-step-content">
                                                <h3>Safe & Monitored Transit</h3>
                                                <p>We transport your pet in temperature-controlled vehicles with regular stops and constant hydration/feed monitoring.</p>
                                            </div>
                                        </div>
                                        <div className="icon-box">
                                            <img src="/images/icon-service-solution-step-3.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Service Solution Box End */}

                            {/* Service Secure Box Start */}
                            <div className="service-secure-box">
                                <h2 className="text-anime-style-2">Specialized pet care, <span>safe journeys</span></h2>

                                <div className="service-entry-image-content">
                                    <div className="service-entry-image">
                                        <figure className="image-anime reveal">
                                            <img src="/services/pet-relocation.webp" alt="" />
                                        </figure>
                                    </div>

                                    <div className="service-entry-content">
                                        <div className="service-entry-content-item wow fadeInUp">
                                            <h3>Veterinary & Documentation</h3>
                                            <p>We assist with health certificates, vaccination records, and all required transit permits.</p>
                                        </div>

                                        <div className="service-entry-content-item wow fadeInUp" data-wow-delay="0.2s">
                                            <h3>Comfort First Vehicles</h3>
                                            <p>Our transport vehicles are equipped with climate control systems to keep your pets comfortable.</p>
                                        </div>

                                        <div className="service-entry-content-item wow fadeInUp" data-wow-delay="0.4s">
                                            <h3>Regular Activity Breaks</h3>
                                            <p>For long-distance journeys, our handlers provide regular food, water, and walk breaks for your pets.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Service Secure Box End */}

                            {/* Service Entry Item Box Start */}
                            <div className="service-entry-item-box">
                                <div className="service-entry-item-list">
                                    <div className="service-entry-item wow fadeInUp">
                                        <div className="icon-box">
                                            <img src="/images/icon-service-entry-item-1.svg" alt="" />
                                        </div>
                                        <div className="service-entry-item-content">
                                            <h3>Dedicated Handlers</h3>
                                            <p>Our team consists of trained animal handlers who know how to soothe and care for pets during transit.</p>
                                        </div>
                                    </div>

                                    <div className="service-entry-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon-box">
                                            <img src="/images/icon-service-entry-item-2.svg" alt="" />
                                        </div>
                                        <div className="service-entry-item-content">
                                            <h3>Real-time Updates</h3>
                                            <p>We provide regular status updates and photo/video checks so you know your pet is safe and happy.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-entry-list wow fadeInUp" data-wow-delay="0.4s">
                                    <ul>
                                        <li>Assist with Health Certificates</li>
                                        <li>Comfort-Sized Travel Crates</li>
                                        <li>Temperature-Controlled Vehicles</li>
                                        <li>Pet Food & Hydration Management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Service Entry End */}

                        {/* Page Single FAQs Start */}
                        <div className="page-single-faqs">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Have Pet Move Questions? <span>We’ve got you covered</span></h2>
                            </div>

                            <div className="faq-accordion" id="faqaccordion">
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            How do you ensure my pet's safety during transit?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>We use specialized ventilated crates, temperature-controlled vehicles, and have trained handlers monitor your pet throughout the journey.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            What documents are required for pet relocation?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Typically, you will need an active vaccination record, a fitness certificate from a registered veterinarian, and state-specific transit permits where applicable.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            Can you transport pets across different states?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Yes! We provide interstate pet relocation services across all major cities in India, ensuring compliance with local transport rules.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            How should I prepare my pet for the move?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>We recommend feeding your pet a light meal a few hours before transit, introducing them to their travel crate beforehand, and providing their favorite toy or blanket to keep them calm.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Page Single FAQs End */}
                    </div>
                </div>


            </div>
        </div>
    </div>
    {/* Page Service Single End */}



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
