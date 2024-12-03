import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Simple from '../../images/profile/simple.jpg'
import { MouseContext } from "../context/mouseContext";
import { Helmet } from 'react-helmet';

const Home = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <React.Fragment>
      <Helmet>
        {/* SEO Page title tag */}
        <title>Mavi - Personal Portfolio React Template</title>
        {/* Meta description */}
        <meta name="description" content="Bootstrap 5 Responsive Mavi - Personal Portfolio React Template" />;

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://avstechnolabs.com/og-images/seo-banner.png" />
        <meta name="twitter:title" content="Mavi - Personal Portfolio React Template" />
        <meta name="twitter:creator" content="@mavi" />
        <meta name="twitter:site" content="@mavi" />
        <meta name="twitter:description" content="Bootstrap 5 Responsive Mavi - Personal Portfolio React Template" />

        {/* Facebook card meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavi.avstechnolabs.com/" />
        <meta property="og:title" content="Mavi - Personal Portfolio React Template"
        />
        <meta property="og:description" content="Bootstrap 5 Responsive Mavi - Personal Portfolio React Template"
        />
        <meta property="og:image" content="https://avstechnolabs.com/og-images/seo-banner.png"
        />
      </Helmet>
      {/* Index-page Start  */}
      <section id="home" className="section active">
        <div className="homecolor-box"></div>
        <div className="common_bg animate__animated animate__zoomIn">
          <div className="container m-auto">
            <div className="row align-items-center">
              {/* Profile-Pic */}
              <div className=" col-xl-5 col-lg-6 col-md-6 col-12">
                <div className="home-profile animate__animated animate__fadeInLeft animate__delay-1s">
                  <img src={Simple} alt="home-profile" />
                </div>
              </div>
              {/* Profile-Pic End */}
              {/* Profile-Information  */}
              <div className="col-xl-7 col-lg-6 col-md-6 col-12">
                <div className="home-content">
                  <p className="common-desctiption animate__animated animate__fadeInDown animate__delay-1s">Get to know me
                  </p>
                  <h1 className="common-title animate__animated animate__fadeInDown animate__delay-1s">Alex Smith</h1>
                  <div className="animated-bar animate__animated animate__fadeInDown animate__delay-2s"></div>
                  <div className="animated-text animate__animated animate__fadeInDown animate__delay-2s">
                    <h3>Web Developer</h3>
                    <h3>UI - UX Designer</h3>
                    <h3>Software Engineer</h3>
                  </div>
                  {/* Social media icons */}
                  <div className="fixed-block animate__animated animate__jackInTheBox animate__delay-2-5s">
                    <ul className="list-unstyled social-icons">
                      <li onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                      <li onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><Link to="/"><i className="fab fa-facebook-square "></i></Link></li>
                      <li onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><Link to="/"><i className="fab fa-linkedin "></i></Link></li>
                      <li onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><Link to="/"><i className="fab fa-github-square "></i></Link></li>
                      <li onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}><Link to="/"><i className="fab fa-instagram-square"></i></Link></li>
                    </ul>
                  </div>
                  <p className="lorem-text animate__animated animate__zoomIn animate__delay-2-5s">I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
                  </p>
                  <div className="home-btn">
                    <Link to={"/contact"} className="clickbtn hire-me animate__animated animate__fadeInTopLeft animate__delay-3s" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>Hire me</Link>
                    <Link to="/about" className="clickbtn about-us animate__animated animate__fadeInTopRight animate__delay-3s" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>about me </Link>
                  </div>
                </div>
              </div>
              {/* Profile-Information End  */}
            </div>
          </div>
        </div>
      </section>
      {/* Index-page End */}
    </React.Fragment>
  )
}

export default Home