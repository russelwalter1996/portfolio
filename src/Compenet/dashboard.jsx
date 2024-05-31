import React from "react";
import { useState } from "react";

function Dashboard() {

    const [recipient, setRecipient] = useState('crishanderson0129@outlook.com');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [sendEmail, setSendEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const content = `name: ${firstname + ' ' + lastname}\nemail :${sendEmail}\nmessage : ${message}`
        const emailUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;

        window.location.href = emailUrl;
    };

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="">
                        <img src="/assets/images/logo.png" alt="logo image" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link active" href="#home">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#introduction">about me</a></li>
                            <li class="nav-item"><a class="nav-link" href="#service">service</a></li>
                            <li class="nav-item"><a class="nav-link" href="#education">Education</a></li>
                            <li class="nav-item"><a class="nav-link" href="#portfolio">portfolio</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contact">contact</a>
                            </li>
                        </ul>
                        <button type="button" class="rounded-pill btn-rounded">
                            +1 728365413
                            <span>
                                <i class="fas fa-phone-alt"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* <!-- /////////////////////////////////////////////////////////////////////////////////////////////////
      START SECTION 2 - THE INTRO SECTION  
      /////////////////////////////////////////////////////////////////////////////////////////////////////--> */}

            <section id="home" class="intro-section">
                <div class="container">
                    <div class="row align-items-center text-white">
                        {/* <!-- START THE CONTENT FOR THE INTRO  --> */}
                        <div class="col-md-6 intros text-start" style={{ width: "60%" }}>
                            <h1 class="display-2">
                                <span class="display-2--intro" style={{ fontSize: "4rem" }}>Hi, I AM RUSSEL WALTER</span>
                                <span class="display-2--intro" style={{ fontSize: "4rem" }}>Creative</span>
                                <span class="display-2--intro" style={{ fontSize: "4rem" }}>Developer</span>
                                <span class="display-2--description lh-base">
                                    Experienced Blockchain Engineer proficient in Hyperledger Fabric and
                                    Ethereum development with 8+ years in DLT optimization, smart contract
                                    deployment, and network architecture. Skilled in API endpoint creation, UI
                                    development, and cryptography. Strong background in consensus
                                    algorithms and distributed databases.
                                </span>
                            </h1>
                            <button type="button" class="rounded-pill btn-rounded" style={{ fontSize: "20px" }}>
                                <a href="/assets/resume.pdf" target="_blank" style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>Download CV<span><i class="fas fa-download"></i></span></a>
                            </button>
                        </div>
                        {/* <!-- START THE CONTENT FOR THE VIDEO --> */}
                        <div class="col-md-6 intros text-end" style={{ width: "40%" }}>
                            <div class="video-box">
                                <img src="/assets/images/arts/intro-section-illustration.png" alt="video illutration" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fill-opacity="1"
                        d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
                </svg>
            </section>

            {/* <!-- //////////////////////////////////////////////////////////////////////////////////////////////
      START SECTION 3 - THE CAMPANIES SECTION  
      ////////////////////////////////////////////////////////////////////////////////////////////////////--> */}

            {/* <!-- //////////////////////////////////////////////////////////////////////////////////////////////
      START SECTION 4 - THE SERVICES  
      ///////////////////////////////////////////////////////////////////////////////////////////////////--> */}
            <section id="introduction" class="services">
                <div class="container">
                    <div class="row text-center">
                        <h1 class="display-3 fw-bold">About Me</h1>
                        <h3 class="display-3 fw-bold" style={{ fontSize: "48px", color: "#ba2feb" }}>Blockchain Developer</h3>
                        <div class="heading-line mb-1"></div>
                    </div>
                    {/* <!-- START THE DESCRIPTION CONTENT  --> */}
                    <div class="row pt-2 pb-2 mt-0 mb-3">
                        <div class="col-md-6 border-right">
                            <div class="bg-white p-3" style={{ display: "flex", justifyContent: 'center', alignItems: 'center', gap: '32px' }}>
                                <div class="icon d-block fas fa-bolt" style={{ fontSize: '32px' }}></div>
                                <h2 class="fw-bold text-capitalize text-center">
                                    My Ambition
                                </h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="bg-white p-4 text-start">
                                <p class="fw-light">
                                    As a blockchain developer,it is to architect innovative decentralized solutions that revolutionize industries, driving towards a future where trust, transparency, and efficiency are inherent in every transaction and interaction. I aspire to be at the forefront of blockchain technology, pushing boundaries, and shaping a decentralized ecosystem that empowers individuals and organizations worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row pt-2 pb-2 mt-0 mb-3">
                        <div class="col-md-6 border-right">
                            <div class="bg-white p-3" style={{ display: "flex", justifyContent: 'center', alignItems: 'center', gap: '32px' }}>
                                <div class="icon d-block fas fa-rocket" style={{ fontSize: '32px' }}></div>
                                <h2 class="fw-bold text-capitalize text-center">
                                    My Purpose
                                </h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="bg-white p-4 text-start">
                                <p class="fw-light">
                                    Blockchain developer is to harness the transformative potential of decentralized technologies to empower individuals, foster transparency, and reshape traditional systems. Through my work, I aim to contribute to building a more equitable and inclusive digital economy, driving positive social and economic change.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- START THE CONTENT FOR THE SERVICES  --> */}

            </section>

            <section id="service" class="services">
                <div class="container">
                    <div class="row text-center">
                        <h1 class="display-3 fw-bold">My Services</h1>
                        <h3 class="display-3 fw-bold" style={{ fontSize: "48px", color: "#ba2feb" }}>Make your dreams a reality with sincerity and passion.</h3>
                        <div class="heading-line mb-1"></div>
                    </div>
                    {/* <!-- START THE DESCRIPTION CONTENT  --> */}
                </div>

                {/* <!-- START THE CONTENT FOR THE SERVICES  --> */}
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                            <div class="services__content">
                                <div class="icon d-block fas fa-cubes"></div>
                                <h3 class="display-3--title mt-1">blockchain development</h3>
                                <p class="lh-lg">
                                    Would you like to add a financial aspect to your project?
                                    If so, please find me. By using blockchain technology, we add financial functions that are easy to use and convenient to use.
                                </p>
                                <a type="button" class="rounded-pill btn-rounded border-primary nav-link" href="#contact" style={{width: "30%"}}>Contact Me
                                    <span><i class="fas fa-paper-plane" ></i></span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
                            <div class="services__pic">
                                <img src="/assets/images/services/service-3.png" alt="cloud hosting illustration" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- START THE MARKETING CONTENT  --> */}

                    {/* <!-- START THE WEB DEVELOPMENT CONTENT  --> */}
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
                            <div class="services__pic">
                                <img src="/assets/images/services/service-2.png" alt="web development illustration" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                            <div class="services__content">
                                <div class="icon d-block fas fa-code"></div>
                                <h3 class="display-3--title mt-1">web development</h3>
                                <p class="lh-lg">
                                    Do you really want your project to be perfect, great, and well-received by people? If so, please find me. We will do our best to help you satisfy your needs.
                                </p>
                                <a type="button" class="rounded-pill btn-rounded border-primary nav-link" href="#contact" style={{width: "30%"}}>Contact Me
                                    <span><i class="fas fa-paper-plane" ></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                            <div class="services__content">
                                <div class="icon d-block fas fa-paper-plane"></div>
                                <h3 class="display-3--title mt-1">app development</h3>
                                <p class="lh-lg">
                                    If you want your site to be great, easy to use, mobile friendly, and absolutely popular and well-received, come see me. We turn any project into the best product.
                                </p>
                                <a type="button" class="rounded-pill btn-rounded border-primary nav-link" href="#contact" style={{width: "30%"}}>Contact Me
                                    <span><i class="fas fa-paper-plane" ></i></span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
                            <div class="services__pic">
                                <img src="/assets/images/services/service-1.png" alt="marketing illustration" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- START THE CLOUD HOSTING CONTENT  --> */}

                </div>
            </section>
            {/* <!-- /////////////////////////////////////////////////////////////////////////////////////////////////
      START SECTION 6 - THE FAQ 
      //////////////////////////////////////////////////////////////////////////////////////////////////////--> */}
            <section id="education" class="testimonials" style={{display: 'flex', flexDirection: 'column'}}>
                <div class="container">
                    <div style={{paddingBottom: '100px'}}>
                        <div class="row text-center">
                            <h1 class="display-3 fw-bold text-uppercase" style={{ color: "#FFFFFF" }}>Education</h1>
                        </div>
                        {/* <!-- ACCORDION CONTENT  --> */}
                        <div class="row mt-5">
                            <div class="col-md-12">
                                <div class="accordion" id="accordionExample">
                                    {/* <!-- ACCORDION ITEM 1 --> */}
                                    <div class="accordion-item shadow mb-3">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                aria-expanded="false" aria-controls="collapseOne">
                                                Kansas State UniversityBachelor of Science in Blockchain Engineering
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample" style={{ textAlign: "left" }}>
                                            <div class="accordion-body">
                                                <div style={{ fontWeight: 'bold' }}>Kansas State University</div>
                                                <div style={{ display: 'flex', gap: '15px', paddingBottom: '10px' }}>
                                                    <div style={{ display: 'flex', gap: '10px' }}>
                                                        <div>
                                                            <i className="fas fa-calendar"></i>
                                                        </div>
                                                        <div>
                                                            2013-2018
                                                        </div>
                                                    </div>
                                                    <div style={{ display: 'flex', gap: '10px' }}>
                                                        <div>
                                                            <i className="fas fa-map"></i>
                                                        </div>
                                                        <div>
                                                            United States
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    Relevant Coursework: Cryptography, Data Structures, Computer
                                                    Networks, Operating Systems, Programming Languages, Smart
                                                    Contracts, and Blockchain Technologies.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="row text-center">
                            <h1 class="display-3 fw-bold text-uppercase" style={{ color: "#FFFFFF" }}>experience</h1>
                        </div>
                        <div class="row mt-5">
                            <div class="col-md-12">
                                <div class="accordion" id="accordionExample">
                                    {/* <!-- ACCORDION ITEM 3 --> */}
                                    <div class="accordion-item shadow mb-3">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Lead Blockchain Engineer
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample" style={{ textAlign: 'left' }}>
                                            <div class="accordion-body">
                                                <div style={{ fontWeight: 'bold' }}>RBR Company</div>
                                                <div style={{ display: 'flex', gap: '15px', paddingBottom: '10px' }}>
                                                    <div style={{ display: 'flex', gap: '10px' }}>
                                                        <div>
                                                            <i className="fas fa-calendar"></i>
                                                        </div>
                                                        <div>
                                                            4/2022-Present
                                                        </div>
                                                    </div>
                                                    <div style={{ display: 'flex', gap: '10px' }}>
                                                        <div>
                                                            <i className="fas fa-map"></i>
                                                        </div>
                                                        <div>
                                                            Canada
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <ul>
                                                        <li>
                                                            Developed a secure, distributed blockchain infrastructure of the
                                                            company's medical records platform, which resulted in an 80%
                                                            reduction in data breaches and an overall improvement in security of
                                                            over 50%.
                                                        </li>
                                                        <li>
                                                            Designed an innovative blockchain-based algorithm for authenticating
                                                            patient records, which increased accuracy in record keeping by 95%.
                                                        </li>
                                                        <li>
                                                            Developed an intuitive user interface that allowed healthcare
                                                            professionals to access patient records securely with just a few clicks,
                                                            streamlining the process and reducing access time by 30%.
                                                        </li>
                                                        <li>
                                                            Implemented a blockchain-based system that allowed healthcare
                                                            providers to share medical records among multiple hospitals and clinics,
                                                            resulting in a 40% increase in efficiency and cost savings of over $2
                                                            million.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- ACCORDION ITEM 4 --> */}
                                    <div class="accordion-item shadow mb-3">
                                        <h2 class="accordion-header" id="headingFour">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Senior Blockchain Engineer
                                            </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                            data-bs-parent="#accordionExample" style={{ textAlign: 'left' }}>
                                            <div class="accordion-body">
                                                <div style={{ fontWeight: 'bold' }}>BDC Company</div>
                                                <div style={{ display: 'flex', gap: '15px', paddingBottom: '10px' }}>
                                                    <div style={{ display: 'flex', gap: '10px' }}>
                                                        <div>
                                                            <i className="fas fa-calendar"></i>
                                                        </div>
                                                        <div>
                                                            04/2020 - 01/2022
                                                        </div>
                                                    </div>
                                                    <div style={{ display: 'flex', gap: '10px' }}>
                                                        <div>
                                                            <i className="fas fa-map"></i>
                                                        </div>
                                                        <div>
                                                            United States
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <ul>
                                                        <li>
                                                            Developed and launched a new blockchain-based platform for BDC, which improved the company's operational efficiency
                                                            by 15%.
                                                        </li>
                                                        <li>
                                                            Improved security of Praxis Technologies' existing blockchain-based
                                                            applications by implementing advanced encryption algorithms and
                                                            protocols, resulting in a 25% reduction in data breaches.
                                                        </li>
                                                        <li>
                                                            Created and implemented a smart contract system to automate the
                                                            settlement process for Praxis Technologies, resulting in ca cost savings
                                                            of $50000 annually.
                                                        </li>
                                                        <li>
                                                            Designed and built a distributed ledger technology (DLT) platform to
                                                            support Praxis Technologies’ business operations, resulting in a 40%
                                                            increase in transaction throughput.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////
      START SECTION 7 - THE PORTFOLIO  
      //////////////////////////////////////////////////////////////////////////////////////////////////////--> */}

            <section id="portfolio" class="portfolio">
                <div class="container">
                    <div class="row text-center mt-5">
                        <h1 class="display-3 fw-bold text-capitalize">Latest work</h1>
                        <div class="heading-line"></div>
                        <p class="lead">
                        Incepta sunt magna consequat. late quaeso visita.
                        </p>
                    </div>
                    {/* <!-- FILTER BUTTONS  --> */}
                    {/* <div class="row mt-5 mb-4 g-3 text-center">
                        <div class="col-md-12">
                            <button class="btn btn-outline-primary" type="button">All</button>
                            <button class="btn btn-outline-primary" type="button">websites</button>
                            <button class="btn btn-outline-primary" type="button">design</button>
                            <button class="btn btn-outline-primary" type="button">mockup</button>
                        </div>
                    </div> */}

                    {/* <!-- START THE PORTFOLIO ITEMS  --> */}
                    <div class="row">
                        <a class="col-lg-4 col-md-6" href="https://mozverse.com" target="_blank" style={{cursor: 'pointer'}}>
                            <div class="portfolio-box shadow">
                                <img src="/assets/images/portfolio/portfolio-1.jpg" alt="portfolio 1 image" title="portfolio 1 picture"
                                    class="img-fluid" />
                                <div class="portfolio-info">
                                    <div class="caption">
                                        <h4>project name goes here 1</h4>
                                        <p>category project</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="col-lg-4 col-md-6" href="https://www.highvibe.network" target="_blank" style={{cursor: 'pointer'}}>
                            <div class="portfolio-box shadow">
                                <img src="/assets/images/portfolio/portfolio-2.jpg" alt="portfolio 2 image" title="portfolio 2 picture"
                                    class="img-fluid" />
                                <div class="portfolio-info">
                                    <div class="caption">
                                        <h4>project name goes here 2</h4>
                                        <p>category project</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="col-lg-4 col-md-6" href="https://syscoin.org" target="_blank" style={{cursor: 'pointer'}}>
                            <div class="portfolio-box shadow">
                                <img src="/assets/images/portfolio/portfolio-3.jpg" alt="portfolio 3 image" title="portfolio 3 picture"
                                    class="img-fluid" />
                                <div class="portfolio-info">
                                    <div class="caption">
                                        <h4>project name goes here 3</h4>
                                        <p>category project</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="col-lg-4 col-md-6" href="https://portion.io" target="_blank" style={{cursor: 'pointer'}}>
                            <div class="portfolio-box shadow">
                                <img src="/assets/images/portfolio/portfolio-4.jpg" alt="portfolio 4 image" title="portfolio 4 picture"
                                    class="img-fluid" />
                                <div class="portfolio-info">
                                    <div class="caption">
                                        <h4>project name goes here 4</h4>
                                        <p>category project</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="col-lg-4 col-md-6" href="https://metadrop.com" target="_blank" style={{cursor: 'pointer'}}>
                            <div class="portfolio-box shadow">
                                <img src="/assets/images/portfolio/portfolio-5.jpg" alt="portfolio 5 image" title="portfolio 5 picture"
                                    class="img-fluid" />
                                <div class="portfolio-info">
                                    <div class="caption">
                                        <h4>project name goes here 5</h4>
                                        <p>category project</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="col-lg-4 col-md-6" href="https://graycraft.com" target="_blank" style={{cursor: 'pointer'}}>
                            <div class="portfolio-box shadow">
                                <img src="/assets/images/portfolio/portfolio-6.jpg" alt="portfolio 6 image" title="portfolio 6 picture"
                                    class="img-fluid" />
                                <div class="portfolio-info">
                                    <div class="caption">
                                        <h4>project name goes here 6</h4>
                                        <p>category project</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////
      START SECTION 8 - GET STARTED  
      /////////////////////////////////////////////////////////////////////////////////////////////////////////--> */}
            <section id="contact" class="get-started">
                <div class="container">
                    <div class="row text-center">
                        <h1 class="display-3 fw-bold text-capitalize">Get started</h1>
                        <div class="heading-line"></div>
                    </div>

                    {/* <!-- START THE CTA CONTENT  --> */}
                    <div class="row text-white">
                        <div class="col-12 col-lg-6 gradient shadow p-3">
                            <div class="cta-info w-100">
                                <h4 class="display-4 fw-bold">100% Satisfaction Guaranteed</h4>
                                <p class="lh-lg">
                                    I'm allways ready!
                                </p>
                                <h3 class="display-3--brief">What will be the next step?</h3>
                                <ul class="cta-info__list">
                                    <li>I'll prepare the proposal.</li>
                                    <li>I'll discuss it together.</li>
                                    <li>let's start the discussion.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 bg-white shadow p-3">
                            <div class="form w-100 pb-2">
                                <h4 class="display-3--title mb-5">start your project</h4>
                                <form onSubmit={handleSubmit} action="#" class="row">
                                    <div class="col-lg-6 col-md mb-3">
                                        <input type="text" onChange={(e) => {setFirstname(e.target.value)}} placeholder="First Name" id="inputFirstName" class="shadow form-control form-control-lg" />
                                    </div>
                                    <div class="col-lg-6 col-md mb-3">
                                        <input type="text" onChange={(e) => {setLastname(e.target.value)}} placeholder="Last Name" id="inputLastName" class="shadow form-control form-control-lg" />
                                    </div>
                                    <div class="col-lg-12 mb-3">
                                        <input type="email" onChange={(e) => {setSendEmail(e.target.value)}} placeholder="email address" id="inputEmail"
                                            class="shadow form-control form-control-lg" />
                                    </div>
                                    <div class="col-lg-12 mb-3">
                                        <textarea name="message" onChange={(e) => {setMessage(e.target.value)}} placeholder="message" id="message" rows="8"
                                            class="shadow form-control form-control-lg"></textarea>
                                    </div>
                                    <div class="text-center d-grid mt-1">
                                        <button type="submit" class="btn btn-primary rounded-pill pt-3 pb-3" style={{display:'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
                                            <div>send</div>
                                            <i class="fas fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ///////////////////////////////////////////////////////////////////////////////////////////
      START SECTION 9 - THE FOOTER  
      ///////////////////////////////////////////////////////////////////////////////////////////////--> */}
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        {/* <!-- CONTENT FOR THE MOBILE NUMBER  --> */}
                        <div class="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
                            <div class="contact-box__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" viewBox="0 0 24 24"
                                    stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                    <path d="M15 7a2 2 0 0 1 2 2" />
                                    <path d="M15 3a6 6 0 0 1 6 6" />
                                </svg>
                            </div>
                            <div class="contact-box__info">
                                <a href="#" class="contact-box__info--title">+1 728365413</a>
                                <p class="contact-box__info--subtitle"> Mon-Fri You can find me in Skype Telegram WhatsApp</p>
                            </div>
                        </div>
                        {/* <!-- CONTENT FOR EMAIL  --> */}
                        <div class="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
                            <div class="contact-box__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-opened" viewBox="0 0 24 24"
                                    stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="3 9 12 15 21 9 12 3 3 9" />
                                    <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                                    <line x1="3" y1="19" x2="9" y2="13" />
                                    <line x1="15" y1="13" x2="21" y2="19" />
                                </svg>
                            </div>
                            <div class="contact-box__info">
                                <a href="#" class="contact-box__info--title">russelwalter@gmail.com</a>
                                <p class="contact-box__info--subtitle">Online support</p>
                            </div>
                        </div>
                        {/* <!-- CONTENT FOR LOCATION  --> */}
                        <div class="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
                            <div class="contact-box__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2" viewBox="0 0 24 24"
                                    stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="18" y1="6" x2="18" y2="6.01" />
                                    <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
                                    <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
                                    <line x1="9" y1="4" x2="9" y2="17" />
                                    <line x1="15" y1="15" x2="15" y2="20" />
                                </svg>
                            </div>
                            <div class="contact-box__info">
                                <a href="#" class="contact-box__info--title">Montreal, Canada</a>
                                <p class="contact-box__info--subtitle">Qubeck, Montreal</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- START THE SOCIAL MEDIA CONTENT  --> */}

                {/* <!-- START THE CONTENT FOR THE CAMPANY INFO --> */}

                {/* <!-- START THE COPYRIGHT INFO  --> */}
                <div class="footer-bottom pt-5 pb-5">
                    <div class="container">
                        <div class="row text-center text-white">
                            <div class="col-12">
                                <div class="footer-bottom__copyright">
                                    &COPY; Copyright 2024 <a href="#">Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <!-- BACK TO TOP BUTTON  --> */}
            <a href="#" class="shadow btn-primary rounded-circle back-to-top">
                <i class="fas fa-chevron-up"></i>
            </a>
        </>
    )
}

export default Dashboard;