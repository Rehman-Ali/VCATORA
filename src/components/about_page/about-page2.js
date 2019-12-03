import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { loadScript } from '../utils/loadScripts';
import Footer2 from '../layout/Footer_2';
class AboutPage2 extends Component {
  UNSAFE_componentWillMount() {
    loadScript();
  }
  render() {
    return (
      <Fragment>
        {/* Paste this code after body tag */}
        {/* <div  className="se-pre-con"></div> */}

        {/* About-us Content  */}
        <section className='pro-content aboutus-content '>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='pro-heading-title'>
                <h1>WELCOME TO Katora</h1>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-md-7'>
                <p className='peragraph'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo.
                </p>
                <p className='peragraph'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et.
                </p>
              </div>
              <div className='col-12 col-md-5'>
                <video width='320' height='240' controls>
                  <source src='*.mp4' type='video/mp4' />
                  <source src='*.ogg' type='video/ogg' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className='container accordion-container'>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <div className='pro-heading-title'>
                  <h1>Our Vision</h1>
                </div>
                <section className='accordions'>
                  {/*Accordion wrapper */}
                  <div
                    className='accordion md-accordion'
                    id='accordionEx'
                    role='tablist'
                    aria-multiselectable='true'
                  >
                    {/* Accordion card  */}
                    <div className='card'>
                      {/* Card header  */}
                      <div className='card-header' role='tab' id='headingOne1'>
                        <Link
                          data-toggle='collapse'
                          data-parent='#accordionEx'
                          to='# collapseOne1'
                          aria-expanded='true'
                          aria-controls='collapseOne1'
                          className=''
                        >
                          <h5 className='mb-0'>WHO WE ARE</h5>
                        </Link>
                      </div>

                      {/* Card body  */}
                      <div
                        id='collapseOne1'
                        className='collapse show'
                        role='tabpanel'
                        aria-labelledby='headingOne1'
                        data-parent='#accordionEx'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo.
                        </div>
                      </div>
                    </div>
                    {/* Accordion card  */}

                    {/* Accordion card  */}
                    <div className='card'>
                      {/* Card header  */}
                      <div className='card-header' role='tab' id='headingTwo2'>
                        <Link
                          className='collapsed'
                          data-toggle='collapse'
                          data-parent='#accordionEx'
                          to='# collapseTwo2'
                          aria-expanded='false'
                          aria-controls='collapseTwo2'
                        >
                          <h5 className='mb-0'>WHAT WE WANT</h5>
                        </Link>
                      </div>

                      {/* Card body  */}
                      <div
                        id='collapseTwo2'
                        className='collapse'
                        role='tabpanel'
                        aria-labelledby='headingTwo2'
                        data-parent='#accordionEx'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo.
                        </div>
                      </div>
                    </div>
                    {/* Accordion card  */}

                    {/* Accordion card  */}
                    <div className='card'>
                      {/* Card header  */}
                      <div
                        className='card-header'
                        role='tab'
                        id='headingThree3'
                      >
                        <Link
                          className='collapsed'
                          data-toggle='collapse'
                          data-parent='#accordionEx'
                          to='# collapseThree3'
                          aria-expanded='false'
                          aria-controls='collapseThree3'
                        >
                          <h5 className='mb-0'>WHAT WE CAN GIVE</h5>
                        </Link>
                      </div>

                      {/* Card body  */}
                      <div
                        id='collapseThree3'
                        className='collapse'
                        role='tabpanel'
                        aria-labelledby='headingThree3'
                        data-parent='#accordionEx'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo.
                        </div>
                      </div>
                    </div>
                    {/* Accordion card  */}
                  </div>
                  {/* Accordion wrapper  */}
                </section>
              </div>
              <div className='col-12 col-md-6'>
                <div className='pro-heading-title'>
                  <h1>Our Offer</h1>
                </div>
                <p className='peragraph peragraph2'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo.
                </p>
                <p className='peragraph'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo.Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                </p>
              </div>
            </div>
          </div>

          <div className='conatiner-fluid '>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-12 col-lg-6'>
                  <div className='pro-heading-title'>
                    <h1> Our Team</h1>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div
                    className='aboutUs-carousel-js row'
                    style={{ marginBottom: '10px' }}
                  >
                    <div className='col-12 col-md-3'>
                      <div className='team-member'>
                        <article>
                          <div className='team-thumb'>
                            <img
                              className='img-fluid'
                              src='assets/images/about-us/14_01_about.jpg'
                              alt='Member '
                            />
                          </div>
                          <div className='team-info'>
                            <h3>Charlis</h3>
                            <p>Chief Officer</p>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className='col-12 col-md-3'>
                      <div className='team-member'>
                        <article>
                          <div className='team-thumb'>
                            <img
                              className='img-fluid'
                              src='assets/images/about-us/14_02_about.jpg'
                              alt='Member '
                            />
                          </div>
                          <div className='team-info'>
                            <h3>John Doe</h3>
                            <p>Sales Executive</p>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className='col-12 col-md-3'>
                      <div className='team-member'>
                        <article>
                          <div className='team-thumb'>
                            <img
                              className='img-fluid'
                              src='assets/images/about-us/14_03_about.jpg'
                              alt='Member '
                            />
                          </div>
                          <div className='team-info'>
                            <h3>Theresa May</h3>
                            <p>Markting Officer</p>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className='col-12 col-md-3'>
                      <div className='team-member'>
                        <article>
                          <div className='team-thumb'>
                            <img
                              className='img-fluid'
                              src='assets/images/about-us/14_04_about.jpg'
                              alt='Member '
                            />
                          </div>
                          <div className='team-info'>
                            <h3>Xavior</h3>
                            <p>Manager</p>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className='col-12 col-md-3'>
                      <div className='team-member'>
                        <article>
                          <div className='team-thumb'>
                            <img
                              className='img-fluid'
                              src='assets/images/about-us/14_05_about.jpg'
                              alt='Member '
                            />
                          </div>
                          <div className='team-info'>
                            <h3>Malissa</h3>
                            <p>Product Manager</p>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer Mobile  */}
        <Footer2 />
      </Fragment>
    );
  }
}

export default AboutPage2;
