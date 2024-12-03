import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MouseContext } from "../context/mouseContext";
import { Helmet } from 'react-helmet';

const Contact = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server for email processing
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  return (
    <React.Fragment>
      <Helmet>
        {/* SEO Page title tag */}
        <title>Contact Mavi - Personal Portfolio React Template</title>
        {/* Meta description */}
        <meta name="description" content="Bootstrap 5 Responsive Contact Mavi - Personal Portfolio React Template" />;

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://avstechnolabs.com/og-images/seo-banner.png" />
        <meta name="twitter:title" content="Contact Mavi - Personal Portfolio React Template" />
        <meta name="twitter:creator" content="@Contact mavi" />
        <meta name="twitter:site" content="@Contact mavi" />
        <meta name="twitter:description" content="Bootstrap 5 Responsive Contact Mavi - Personal Portfolio React Template" />

        {/* Facebook card meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavi.avstechnolabs.com/contact" />
        <meta property="og:title" content="Contact Mavi - Personal Portfolio React Template"
        />
        <meta property="og:description" content="Bootstrap 5 Responsive Contact Mavi - Personal Portfolio React Template"
        />
        <meta property="og:image" content="https://avstechnolabs.com/og-images/seo-banner.png"
        />
      </Helmet>
      {/* Contact section Start  */}
      <section id="contact" className="section active">
        <div className="homecolor-box"></div>
        <div className="common_bg animate__animated animate__zoomIn">
          <div className="container">
            {/* Contact-page Start  */}
            <div className="contact-section">
              {/* Contact-Section Title  */}
              <div className="row">
                <div className="col-12">
                  <div className="section-title animate__animated animate__fadeInDown animate__delay-1s">
                    <p className="common-desctiption">Feel Free To Contact Me Anytimes</p>
                    <h1 className="common-title">my <span>contact</span></h1>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>
              {/* Contact-Section Title End */}
              {/* Contact Form Start  */}
              <div className="contact-section">
                <div className="row">
                  {/* Contact form  */}
                  <div className="col-lg-7 col-12 ">
                    <form className="contact-form animate__animated animate__fadeInLeft animate__delay-2s" id="contact-form">
                      <h4 className="content-title">Contact Me</h4>
                      <div className="row">
                        <div className="col-12 col-md-6 form-group">
                          <input
                            className="form-control"
                            id="contact-name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12 col-md-6 form-group">
                          <input
                            className="form-control"
                            id="contact-email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12 form-group">
                          <input
                            className="form-control"
                            id="contact-subject"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12 form-group form-message">
                          <textarea
                            className="form-control"
                            id="contact-message"
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                        <div className="col-12 mb-4 form-submit">
                          <button
                            className="clickbtn button-main button-scheme"
                            id="contact-submit"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Contact form End  */}
                  {/* Contact info  */}
                  <div className="col-lg-5 col-12 ">
                    <div className="contact-info animate__animated animate__fadeInRight animate__delay-3s">
                      <h4 className="content-title">Contact Info</h4>
                      <p className="info-description">Always available for freelance work if the right project comes along,
                        Feel free to contact me!</p>
                      <ul className="list-unstyled list-info" style={{ display: 'inline-grid' }}>
                        <li>
                          <div className="media d-flex align-items-center"><span className="info-icon"><i
                            className="fas fa-user-alt"></i></span>
                            <div className="media-body info-details">
                              <h6 className="info-type">Name</h6><span className="info-value">Alex Smith</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media d-flex align-items-center"><span className="info-icon"><i
                            className="fas fa-map-pin"></i></span>
                            <div className="media-body info-details">
                              <h6 className="info-type">Location</h6><span className="info-value">4155 Mann Island, Liverpool,
                                United Kingdom.</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media d-flex align-items-center"><span className="info-icon"><i
                            className="fas fa-phone-alt"></i></span>
                            <div className="media-body info-details">
                              <h6 className="info-type">Call Me</h6><span className="info-value"><a href="tel:+441632967704" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>+44
                                1632 967704</a></span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media d-flex align-items-center"><span className="info-icon"><i
                            className="fas fa-envelope"></i></span>
                            <div className="media-body info-details">
                              <h6 className="info-type">Email Me</h6><span className="info-value"><a
                                href="mailto:Alex@example.com" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>Alex@example.com</a></span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* Social media icons */}
                    <div className="fixed-block d-flex animate__animated animate__jackInTheBox animate__delay-3s">
                      <ul className="list-unstyled social-icons p-3">
                        <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-facebook-square"></i></Link></li>
                        <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-linkedin"></i></Link></li>
                        <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-github-square"></i></Link></li>
                        <li><Link to={'/'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><i className="fab fa-instagram-square"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                  {/* Contact info End  */}
                </div>
              </div>
              {/* map  */}
              <div className="row">
                <div className="col-12">
                  <div className="map animate__animated animate__fadeInRight animate__delay-4s">
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19845.82732713224!2d-0.3162034543774074!3d51.55487883052924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876116207a6d0bd%3A0xaf7016a2cadb21e4!2sWembley%2C%20UK!5e0!3m2!1sen!2sin!4v1645179715804!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      width="600"
                      height="450"
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* map end  */}
              {/* Contact-Footer  */}
              <div className="row justify-content-center animate__animated animate__fadeInUp animate__delay-5s">
                <div className="col-lg-6 text-center">
                  <h5 className="footer">Copyright &copy; &#160;
                    {currentYear} <a onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}> Avs Technolabs</a>&#160;&#160;<i
                      className="fas fa-heart animate__animated animate__pulse animate__faster animate__infinite	infinite"></i>&#160;&#160;All
                    rigths reserved.</h5>
                </div>
              </div>
              {/* Contact-Footer End  */}
            </div>
            {/* Contact-page End  */}
          </div>
        </div>
      </section>
      {/* Contact section End  */}
    </React.Fragment>
  )
}

export default Contact