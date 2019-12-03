import React, { Fragment, Component } from 'react';
import { loadScript } from '../utils/loadScripts';
import Footer2 from '../layout/Footer_2';

class AboutPage1 extends Component {
  UNSAFE_componentWillMount() {
    loadScript();
  }
  render() {
    return (
      <Fragment>
        {/* Paste this code after body tag  */}
        {/* <div className="se-pre-con"></div> */}

        {/* About-us Content */}
        <section className='pro-content aboutus-content'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='pro-heading-title'>
                <h1>WELCOME TO Katora</h1>
              </div>
            </div>
            <div className='row '>
              <div className='col-12'>
                <img
                  className='img-fluid'
                  src='assets/images/about-us/full-width.jpg'
                  alt='full banner'
                />
                <p style={{ marginTop: '15px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at
                  nisi eget eros pulvinar ultricies. Mauris finibus elit id nunc
                  interdum sollicitudin. Mauris a mi at diam feugiat facilisis a
                  ut nunc. Morbi sit amet erat vel ligula fermentum luctus.
                  Etiam sed sollicitudin justo. Vestibulum auctor aliquet dui, a
                  vestibulum nibh semper id. Sed non ornare lorem. Pellentesque
                  non consequat tellus. Ut lacinia, neque gravida sollicitudin
                  interdum, augue arcu bibendum purus, a accumsan tortor elit a
                  libero. In tristique, nunc rutrum sagittis porta, dolor leo
                  rutrum quam, et pharetra lectus velit sed lectus. Nullam vel
                  nisl eu leo placerat fringilla sed nec enim. Vestibulum at
                  lectus dapibus, pulvinar tellus sed, ultrices orci. Cras eros
                  diam, laoreet eget vestibulum a, convallis quis tortor.
                  Phasellus scelerisque purus eget vehicula maximus. Ut elit ex,
                  lacinia quis ultricies vel, eleifend et lacus. Pellentesque
                  hendrerit accumsan sapien eget interdum. Donec rhoncus felis a
                  lacus suscipit eleifend ornare scelerisque erat. Ut mollis
                  urna in lobortis tempus. Phasellus lobortis sed ipsum eu
                  molestie. Maecenas placerat enim vitae rutrum maximus. Sed
                  nunc urna, porta eget tristique eu, ornare at justo. Cras sit
                  amet nibh vel odio ornare accumsan. Sed maximus aliquam
                  porttitor. Morbi lacinia ipsum vel magna malesuada, at
                  malesuada massa convallis. Quisque tristique orci sem, non
                  molestie nulla vestibulum ut. Aenean ac fringilla lacus. Donec
                  aliquam hendrerit imperdiet. Morbi ut urna ligula. Duis ut
                  nibh a ligula consequat mattis sed at justo. Donec blandit
                  neque et nisl aliquam, non tempor purus feugiat. Integer sit
                  amet varius elit. Pellentesque pulvinar cursus nulla, non
                  rutrum risus iaculis sit amet. Quisque rhoncus nibh porta eros
                  sagittis, nec porta nibh pulvinar. Curabitur laoreet, quam
                  vehicula hendrerit pretium, ipsum sem feugiat eros, ut
                  vulputate nisi risus eget ante. Integer a massa id magna
                  condimentum eleifend. Praesent porta tellus sit amet efficitur
                  semper. In vitae est a ex tincidunt efficitur.
                </p>
              </div>
            </div>
          </div>
          <div className='container-fluid bg-media'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-md-6 media-col'>
                  <div className='media align-items-center'>
                    <img
                      src='assets/images/about-us/profile.png'
                      alt='profile'
                      className='rounded-circle'
                      style={{ width: '100px' }}
                    />
                    <div className='media-body'>
                      <h4>
                        Charlis <small>Chief Officer </small>
                      </h4>
                      <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='media align-items-center'>
                    <img
                      src='assets/images/about-us/profile.png'
                      alt='profile'
                      className='rounded-circle'
                      style={{ width: '100px' }}
                    />
                    <div className='media-body'>
                      <h4>
                        John Doe <small>Sales Executive</small>
                      </h4>
                      <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
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
                              alt='Member'
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
                              alt='Member'
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
                              alt='Member'
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
                              alt='Member'
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
        {/* Footer Section */}
        <Footer2 />
      </Fragment>
    );
  }
}

export default AboutPage1;
