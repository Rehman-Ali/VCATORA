import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
const Footer = () => {
  return <Fragment>
    {/* Footer Mobile */}
    <footer
          id='footerMobile'
          className='footer-area footer-mobile d-lg-none d-xl-none'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-3'>
                <div className='single-footer'>
                  <div className='pro-about'>
                    <h5>Store</h5>
                    <ul className='pl-0 mb-0'>
                      <li>
                        <Link to='/index'>
                          <img
                            src='assets/images/logo/logo.png'
                            alt='logo here'
                          />
                        </Link>
                      </li>
                      <li>
                        {' '}
                        <span>
                          1223, Main Street, Anytown New York, 38000 USA
                        </span>{' '}
                      </li>
                      <li>
                        <span>(888 - 963 - 600)</span>
                        <span>
                          <Link to='#'>info@example.com</Link>{' '}
                        </span>{' '}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4 col-lg-2'>
                <div className='single-footer'>
                  <h5>Info</h5>
                  <ul className='pl-0 mb-0'>
                    <li>
                      {' '}
                      <Link to='/index'>Home</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/blog-page1'>Blog</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/about-page1'>About Us</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/contact-page1'>Contact Us</Link>{' '}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-md-4 col-lg-2'>
                <div className='single-footer'>
                  <h5>Our Polices</h5>
                  <ul className='pl-0 mb-0'>
                    <li>
                      {' '}
                      <Link to='#'>FAQs</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/privacy'>Privacy Policy</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/refund'>Refund Policy</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/term'>Terms of Service</Link>{' '}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-md-4 col-lg-2'>
                <div className='single-footer'>
                  <h5>My Account</h5>
                  <ul className='pl-0 mb-0'>
                    <li>
                      {' '}
                      <Link to='/shop-page1'>Shop</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/orders'>Orders</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/cart-page1'>Shopping Cart</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/wishlist'>Wishlist</Link>{' '}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-lg-3'>
                <div className='single-footer'>
                  <div className='pro-newsletter'>
                    <h5>Newsletter</h5>
                    <form className='form-inline'>
                      <div className='search'>
                        <input type='search' placeholder='Your Email ...' />
                        <button type='button' className='btn btn-secondary'>
                          <i className='fas fa-location-arrow' />
                        </button>
                      </div>
                    </form>
                    <p>
                      By entering your email, you agree to our Terms of Service
                      and Privacy Policy.
                    </p>
                  </div>
                  <div className='pro-socials'>
                    <h5>Follow Us</h5>
                    <ul>
                      <li>
                        <Link to='#' className='fab fb fa-facebook-square' />
                      </li>
                      <li>
                        <Link to='#' className='fab tw fa-twitter-square' />
                      </li>
                      <li>
                        <Link to='#' className='fab sk fa-skype' />
                      </li>
                      <li>
                        <Link to='#' className='fab ln fa-linkedin' />
                      </li>
                      <li>
                        <Link to='#' className='fab ig fa-instagram' />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid p-0'>
            <div className='copyright-content'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-12 col-sm-12'>
                    <div className='footer-info'>
                      ©&nbsp;2019 Company, Inc.{' '}
                      <Link to='/privacy'>Privacy</Link>
                      &nbsp;•&nbsp;<Link to='/term'>Terms</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer
          id='footerTwo'
          className='footer-area footer-two footer-desktop d-none d-lg-block d-xl-block'
        >
          <div className='container-fluid'>
            <div className='newsletter-content'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-12 col-lg-8'>
                    <div className='pro-heading-title'>
                      <h1> Newsletter</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi venenatis felis tempus feugiat maximus. Aliquam
                        erat volutpat. Aenean eget viverra mi. Duis pulvinar
                        elit massa, vitae posuere urna blandit sed. Praesent ut
                        dignissim risus.{' '}
                      </p>
                    </div>
                    <div className='newsletter-form'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Your Email...'
                      />
                      <button className='btn btn-secondary btn-lg swipe-to-top'>
                        Subcribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-3'>
                <div className='single-footer'>
                  <div className='pro-about'>
                    <h5>Get the app</h5>
                    <ul className='pl-0 mb-0'>
                      <li>
                        {' '}
                        <span>
                          ekommerce App is now available on Google Play &amp;
                          App Store. Get it now.
                        </span>{' '}
                      </li>
                      <li>
                        <Link to='#'>
                          <img
                            className='img-fluid'
                            src='assets/images/miscellaneous/google-play-btn.png'
                            width={120}
                            alt='Button'
                          />
                        </Link>
                        <Link to='#'>
                          <img
                            className='img-fluid'
                            src='assets/images/miscellaneous/app-store-btn.png'
                            width={120}
                            alt='Button'
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-2'>
                <div className='single-footer'>
                  <h5>Info</h5>
                  <ul className='pl-0 mb-0'>
                    <li>
                      {' '}
                      <Link to='/index'>Home</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/blog-page1'>Blog</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/about-page1'>About Us</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/contact-page1'>Contact Us</Link>{' '}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-2'>
                <div className='single-footer'>
                  <h5>Our Polices</h5>
                  <ul className='pl-0 mb-0'>
                    <li>
                      {' '}
                      <Link to='#'>FAQs</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/privacy'>Privacy Policy</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/refund'>Refund Policy</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/term'>Terms of Service</Link>{' '}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-2'>
                <div className='single-footer'>
                  <h5>My Account</h5>
                  <ul className='pl-0 mb-0'>
                    <li>
                      {' '}
                      <Link to='/shop-page1'>Shop</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/orders'>Orders</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/cart-page1'>Shopping Cart</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/wishlist'>Wishlist</Link>{' '}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-lg-3'>
                <div className='single-footer'>
                  <div className='pro-socials'>
                    <h5>Contact Us</h5>
                    <p>
                      Hotline Free 24/24:
                      <br />
                      <strong>(888 - 963 - 600)</strong>
                    </p>
                    <p>
                      1223, Main Street, Anytown New York, 38000 USA.
                      info@example.com
                    </p>
                    <ul>
                      <li>
                        <Link to='#' className='fab fb fa-facebook-square' />
                      </li>
                      <li>
                        <Link to='#' className='fab tw fa-twitter-square' />
                      </li>
                      <li>
                        <Link to='#' className='fab sk fa-skype' />
                      </li>
                      <li>
                        <Link to='#' className='fab ln fa-linkedin' />
                      </li>
                      <li>
                        <Link to='#' className='fab ig fa-instagram' />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid p-0'>
            <div className='copyright-content'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-12 col-sm-12'>
                    <div className='footer-info'>
                      ©&nbsp;2019 Company, Inc.{' '}
                      <Link to='/privacy'>Privacy</Link>
                      &nbsp;•&nbsp;<Link to='/term'>Terms</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className='mobile-overlay'></div>
        <a
          href='#'
          id='back-to-top'
          className='swipe-to-top'
          title='Back to top'
        >
          &uarr;
        </a>
        <div className='notifications' id='notificationCart'>
          Product Added To Cart
        </div>
        <div className='notifications' id='notificationWishlist'>
          Product Added To Wishlist
        </div>
        <div className='notifications' id='notificationCompare'>
          Product Added To Compare
        </div>
        <div className='switcher'>
          <button type='button' className='btn slide-toggle'>
            <i className='fa fa-cogs' aria-hidden='true'></i>
          </button>
          <a href='#' className='swticher-rtl'>
            <div className='text '>Use demo with RTL</div>
            <div className='toggle'>
              <span className='circle '></span>
            </div>
          </a>
          <Link to='#' className='swticher-boxed '>
            <div className='text '>Use demo with Box</div>
            <div className='toggle'>
              <span className='circle'></span>
            </div>
          </Link>

          <div className='swicher-color'>
            <div className='text '>
              <b>Use demo with Colors</b>
            </div>
            <ul id='switchColor'>
              <li className='active'>
                <Link to='#' id='default'>
                  <img src='assets/images/colors/default.png' alt='icon' />
                </Link>
              </li>
              <li>
                <Link to='#' id='yellow'>
                  <img src='assets/images/colors/yellow.png' alt='icon' />
                </Link>
              </li>
              <li>
                <Link to='#' id='blue'>
                  <img src='assets/images/colors/blue.png' alt='icon' />
                </Link>
              </li>
              <li>
                <Link to='#' id='green'>
                  <img src='assets/images/colors/green.png' alt='icon' />
                </Link>
              </li>
              <li>
                <Link to='#' id='navy-blue'>
                  <img src='assets/images/colors/navy-blue.png' alt='icon' />
                </Link>
              </li>
              <li>
                <Link to='#' id='red'>
                  <img src='assets/images/colors/red.png' alt='icon' />
                </Link>
              </li>
              <li>
                <Link to='#' id='pink'>
                  <img src='assets/images/colors/pink.png' alt='icon' />
                </Link>
              </li>
            </ul>
            <div className='text mt-2 mb-0'>
              Note: Template built with sass, you can use desire primary and
              secondary colors of your choice.
            </div>
          </div>
        </div>
        {/* Newsletter Modal */}
        <div
          className='modal fade show'
          id='newsletterModal'
          tabindex='-1'
          role='dialog'
          aria-hidden='false'
        >
          <div className='modal-dialog modal-lg' role='document'>
            <div className='modal-content'>
              <div className='modal-body'>
                <div className='container'>
                  <div className='row align-items-center'>
                    <div className='col-12 col-md-6'>
                      <div className='row '>
                        <div className='pro-image'>
                          <img
                            className='img-fluid'
                            src='assets/images/gallery/preview/Product_image_01.jpg'
                            alt='Product'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-12 col-md-6'>
                      <div className='promo-box'>
                        <div className='text-01'>
                          Sign Up for Our Newsletter
                        </div>
                        <div className='text-03'>
                          Be the first to learn about our latest trends and get
                          exclusive offers.
                        </div>

                        {/* Begin Mailchimp Signup Form */}
                        <div id='mc_embed_signup'>
                          <form
                            action='https://gmail.us4.list-manage.com/subscribe/post?u=21417d2ee6c5baa7f24295f6b&amp;id=2eccfe3aa7'
                            method='post'
                            id='mc-embedded-subscribe-form'
                            name='mc-embedded-subscribe-form'
                            className='validate'
                            target='_blank'
                            novalidate
                          >
                            <div id='mc_embed_signup_scroll'>
                              <div className='mc-field-group'>
                                <input
                                  type='email'
                                  value=''
                                  name='EMAIL'
                                  className='required email form-control'
                                  id='mce-EMAIL'
                                  placeholder='Enter Your Email Address...'
                                />
                              </div>
                              <div id='mce-responses' className='clear'>
                                <div
                                  className='response'
                                  id='mce-error-response'
                                  style={{ display: 'none' }}
                                ></div>
                                <div
                                  className='response'
                                  id='mce-success-response'
                                  style={{ display: 'none' }}
                                ></div>
                              </div>
                            </div>

                            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                            <div
                              style={{ position: 'absolute', left: '-5000px' }}
                              aria-hidden='true'
                            >
                              <input
                                type='text'
                                name='b_21417d2ee6c5baa7f24295f6b_2eccfe3aa7'
                                tabindex='-1'
                                value=''
                              />
                            </div>
                            <button
                              type='submit'
                              value='Subscribe'
                              name='subscribe'
                              id='mc-embedded-subscribe'
                              className='btn btn-secondary swipe-to-top'
                            >
                              Subscribe!
                            </button>
                          </form>
                        </div>

                        {/* <script src='js/mc-validate.js'></script><script >(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='KSUBCRIBE';ftypes[3]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script> */}
                        {/*End mc_embed_signup*/}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
  </Fragment>;
};

export default Footer;
