import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';
import OwlCarousel from 'react-owl-carousel';
import FunFactsBox from './FunFactsBox';
import { MouseContext } from "../context/mouseContext";
import Simple from '../../images/profile/simple.jpg'
import Wrap from '../../images/profile/wrap.jpg'
import Partical from '../../images/profile/partical.jpg'
import Water from '../../images/profile/water.jpg'
import Glitch from '../../images/profile/glitch.jpg'
import { Helmet } from 'react-helmet';

const About = () => {

  const { cursorChangeHandler } = useContext(MouseContext);

  const [options, setOptions] = useState({
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });

  const downloadPdf = () => {
    // Replace 'filename.pdf' with the actual name of your PDF file
    const pdfFileName = 'filename.pdf';

    // Construct the path to the PDF file
    const pdfPath = process.env.PUBLIC_URL + '/pdfs/' + pdfFileName;

    // Fetch the PDF file
    fetch(pdfPath)
      .then((response) => response.blob())
      .then((blob) => {
        // Save the blob as a file using file-saver
        saveAs(blob, pdfFileName);
      })
      .catch((error) => console.error('Error fetching or saving the file:', error));
  };

  // Single Item Data
  const servicesData = [
    {
      id: 1,
      icon: 'fas fa-laptop-code',
      title: 'web design',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      icon: 'fas fa-palette',
      title: 'design',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      icon: 'fas fa-object-ungroup',
      title: 'product design',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 4,
      icon: 'far fa-object-ungroup',
      title: 'UI/UX design',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 5,
      icon: 'fas fa-radiation',
      title: 'animation',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 6,
      icon: 'fas fa-code',
      title: 'web development',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 7,
      icon: 'fas fa-arrows-alt',
      title: 'fully responsive',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 8,
      icon: 'fas fa-dharmachakra',
      title: 'management',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  // Testimonials Data
  const testimonialsData = [
    {
      id: 1,
      image: Glitch,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid',
      rating: 5,
    },
    {
      id: 2,
      image: Wrap,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid',
      rating: 5,
    },
    {
      id: 3,
      image: Water,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid',
      rating: 5,
    },
    {
      id: 4,
      image: Partical,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid',
      rating: 5,
    },
  ];

  return (
    <React.Fragment>
      <Helmet>
        {/* SEO Page title tag */}
        <title>About US Mavi - Personal Portfolio React Template</title>
        {/* Meta description */}
        <meta name="description" content="Bootstrap 5 Responsive About US Mavi - Personal Portfolio React Template" />;

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://avstechnolabs.com/og-images/seo-banner.png" />
        <meta name="twitter:title" content="About US Mavi - Personal Portfolio React Template" />
        <meta name="twitter:creator" content="@About US mavi" />
        <meta name="twitter:site" content="@About US mavi" />
        <meta name="twitter:description" content="Bootstrap 5 Responsive About US Mavi - Personal Portfolio React Template" />

        {/* Facebook card meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavi.avstechnolabs.com/about" />
        <meta property="og:title" content="About US Mavi - Personal Portfolio React Template"
        />
        <meta property="og:description" content="Bootstrap 5 Responsive About US Mavi - Personal Portfolio React Template"
        />
        <meta property="og:image" content="https://avstechnolabs.com/og-images/seo-banner.png"
        />
      </Helmet>
      {/* About Section Start  */}
      <section id="about" className="section active">
        <div className="homecolor-box"></div>
        <div className="common_bg animate__animated animate__fadeInDown">
          <div className="container">
            <div className="about-content">
              {/* About Title Start */}
              <div className="row ">
                <div className="col-12 ">
                  <div className="section-title animate__animated animate__fadeInDown animate__delay-1s">
                    <p className="common-desctiption">My Intro</p>
                    <h1 className="common-title">About <span>Me</span></h1>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>
              {/* About Title End  */}
              {/* About-Me  */}
              <div className="row single-section">
                <div className="col-lg-4 profile-photo animate__animated animate__fadeInLeft animate__delay-2s ">
                  <div className="row">
                    <div className="col-12 d-block col-sm-none">
                      <img src={Simple} className="img-fluid main-img-mobile" alt="my picture" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="row personal-info animate__animated animate__fadeInRight animate__delay-2s">

                    <div className="col-12">
                      <h5 className="personal-title">who am <span>i ?</span></h5>
                      <h3 className="personal-title">I'm Alex Smith, a visual <span>UX/UI Designer</span> and <span>Web
                        Developer</span></h3>
                      <p className="info">I am a freelancer based in the United Kingdom and i have been building noteworthy
                        UX/UI designs and websites for years, which comply with the latest design trends. I help convert
                        a
                        vision and an idea into meaningful and useful products. Having a sharp eye for product evolution
                        helps me prioritize tasks, iterate fast and deliver faster.</p>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <h3 className="personal-infotitle">personal <span>informations</span></h3>
                      </div>

                      <div className="col-lg-6">
                        <ul className="about-you ">
                          <li>
                            <span className="title">first name :</span>
                            <span className="value">Alex</span>
                          </li>
                          <li>
                            <span className="title">last name :</span>
                            <span className="value">Smith</span>
                          </li>
                          <li>
                            <span className="title">address :</span>
                            <span className="value">98 Some Street, Some Town</span>
                          </li>
                          <li>
                            <span className="title">From :</span>
                            <span className="value">San Francisco, USA</span>
                          </li>
                          <li>
                            <span className="title">Age :</span>
                            <span className="value">24 years</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="about-you ">
                          <li>
                            <span className="title">E-mail :</span>
                            <span className="value"><Link href="mailto:info@example.com" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>info@example.com</Link></span>
                          </li>
                          <li>
                            <span className="title">Phone :</span>
                            <span className="value"><Link href="tel:(+01)123-456-789" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>(+01) 123-456-789</Link></span>
                          </li>
                          <li>
                            <span className="title">skype :</span>
                            <span className="value">steve.milner</span>
                          </li>
                          <li>
                            <span className="title">Langages :</span>
                            <span className="value">English, German</span>
                          </li>
                          <li>
                            <span className="title">Freelance :</span>
                            <span className="value"> Available</span>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-12">
                        <div className="About-btn">
                          <button onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} onClick={downloadPdf} className="clickbtn download-cv">Download CV <i className="fa fa-download"
                            aria-hidden="true"></i></button>
                          {/* Social media icons */}
                          <div className="col-lg-7 col-sm-6 col-12">
                            <ul className="list-unstyled social-icons">
                              <li><Link to="/" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-twitter"></i></Link></li>
                              <li><Link to="/" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-facebook-square"></i></Link></li>
                              <li><Link to="/" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-linkedin"></i></Link></li>
                              <li><Link to="/" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-github-square"></i></Link></li>
                              <li><Link to="/" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-instagram-square"></i></Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              {/* About-Me End  */}
              {/* Resume section Start  */}
              <div className="resume-section ">
                {/* Resume title */}
                <div className="row">
                  <div className="col-12">
                    <div className="section-title animate__animated animate__fadeInUp animate__delay-3s">
                      <p className="common-desctiption">Check out my Resume</p>
                      <h1 className="common-title ">my <span>Resume</span></h1>
                      <div className="animated-bar "></div>
                    </div>
                  </div>
                </div>
                {/* Resume title End */}
                {/* Resume Content  */}
                <div className="row">
                  {/* Education part */}
                  <div className="col-md-6 col-12 ">
                    <div className=" col-block education ">
                      <h3 className="about-subtitle">Education</h3>
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Bachelor of Science in Information Technology</h5><span
                          className="item-details">Cambridge University / 2004 - 2007</span>
                        <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                          repudiandae.</p>
                      </div>
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Master of Science in Information Technology</h5><span
                          className="item-details">Cambridge University / 2007 - 2009</span>
                        <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                          repudiandae.</p>
                      </div>
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Diploma In Web Design</h5><span className="item-details">Cambridge University
                          /
                          2009 - 2010</span>
                        <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                          repudiandae.</p>
                      </div>
                    </div>
                  </div>
                  {/* Experience part */}
                  <div className="col-md-6 col-12 ">
                    <div className=" col-block education">
                      <h3 className="about-subtitle">Experience</h3>
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Lead Ui/Ux Designer</h5><span className="item-details">Google / 2016 -
                          Current</span>
                        <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                          repudiandae.</p>
                      </div>
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Senior Ui/Ux Designer</h5><span className="item-details">Adobe / 2013 -
                          2016</span>
                        <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                          repudiandae.</p>
                      </div>
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Junior Ui/Ux Designer</h5><span className="item-details">Google / 2011 -
                          2013</span>
                        <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                          repudiandae.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Resume ContentEnd  */}
              </div>
              {/* / Resume section End */}
              {/* Skill Bar Section  */}
              <div className="skill-section">
                <div className="row">
                  <div className="col-12 ">
                    <div className="section-title animate__animated animate__fadeInUp animate__delay-3s">
                      <p className="common-desctiption">My level of knowledge in some tools</p>
                      <h1 className="common-title">my <span>skills</span></h1>
                      <div className="animated-bar"></div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 ">
                    <h3 className="about-subtitle">Design <span>Skills</span></h3>
                    <div className="skill-bars">
                      <div className="bar">
                        <div className="info">
                          <span>Photoshop</span>
                        </div>
                        <div className="progress-line Photoshop">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Illustrator</span>
                        </div>
                        <div className="progress-line Illustrator">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Figma</span>
                        </div>
                        <div className="progress-line Figma">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Indesign</span>
                        </div>
                        <div className="progress-line Indesign">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Sketch</span>
                        </div>
                        <div className="progress-line Sketch">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 ">
                    <h3 className="about-subtitle">Coding <span>Skills</span></h3>
                    <div className="skill-bars">
                      <div className="bar">
                        <div className="info">
                          <span>HTML</span>
                        </div>
                        <div className="progress-line html">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>CSS</span>
                        </div>
                        <div className="progress-line css">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>jQuery</span>
                        </div>
                        <div className="progress-line jquery">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Python</span>
                        </div>
                        <div className="progress-line python">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>MySQL</span>
                        </div>
                        <div className="progress-line mysql">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* / Skill Bar Section  */}
              {/* service section   */}
              <div className="services-section text-center ">
                <div className="row ">
                  <div className="col-12">
                    <div className="section-title  animate__animated animate__fadeInUp animate__slower animate__delay-3s ">
                      <p className="common-desctiption">Services i offer to my clients</p>
                      <h1 className="common-title">My <span>Services</span></h1>
                      <div className="animated-bar"></div>
                    </div>
                    <p className="service-text">Lorem Ipsum is simply dummy text of the printing and type setting industry.
                      Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s, when an unknown
                      book.
                    </p>
                  </div>
                </div>
                <div className="row animate__animated animate__zoomIn animate__slower animate__delay-3s">
                  {/* Single Item  */}
                  {servicesData.map((service) => (
                    <div key={service.id} className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                      <div className="service-item">
                        <i className={service.icon}></i>
                        <h4><span className="service-line">{service.title}</span></h4>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  ))}
                  {/* End Single Item  */}
                </div>
              </div>
              {/* / service section  */}
              {/* Testimonials  */}
              <div className="row">
                <div className="col-12 animate__animated animate__fadeInDown animate__delay-3s">
                  <div className="section-title">
                    <p className="common-desctiption">what our clients say</p>
                    <h1 className="common-title">My<span>Testimonial</span></h1>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <OwlCarousel className="owl-theme" id="testimonial" {...options}>
                  {testimonialsData.map((testimonial) => (
                    <div key={testimonial.id} className="item">
                      <div className="testimonial-item">
                        <div className="quote">
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div className="testimonial-img">
                          <img src={testimonial.image} alt={`testimonial-${testimonial.id}`} />
                        </div>
                        <p>{testimonial.text}</p>
                        <div className="rating">
                          {Array.from({ length: testimonial.rating }, (_, index) => (
                            <i key={index} className="fas fa-3x fa-star"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
              {/* End Testimonials section  */}
              {/* Fun Fact Section  */}
              <div className="funfacts-section">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <p className="common-desctiption">This are my strongest sides</p>
                      <h1 className="common-title">fun <span>facts</span></h1>
                      <div className="animated-bar"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="funfacts-box">
                      <FunFactsBox endValue={10} />
                      <p className="fun-text">years of <span>experience</span></p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="funfacts-box">
                      <FunFactsBox endValue={499} />
                      <p className="fun-text">happy Clients</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="funfacts-box">
                      <FunFactsBox endValue={101} />
                      <p className="fun-text">completed projects</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="funfacts-box">
                      <FunFactsBox endValue={20} />
                      <p className="fun-text">awards win</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End  */}
    </React.Fragment>
  )
}

export default About