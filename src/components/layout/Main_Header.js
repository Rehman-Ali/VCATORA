import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

//import {notificationCart} from '../../assets/js/scripts';

const Main_Header = ({ logout }) => {
  return (
    <Fragment>
      <header
        id='headerOne'
        className='header-area header-one header-desktop d-none d-lg-block d-xl-block'
      >
        <div className='header-mini bg-top-bar'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-12 col-md-5'>
                <div className='navbar-lang'>
                  <div className='dropdown'>
                    <button className='btn dropdown-toggle' type='button'>
                      English
                    </button>
                    <div className='dropdown-menu'>
                      <Link className='dropdown-item' to='#'>
                        English
                      </Link>
                      <Link className='dropdown-item' to='#'>
                        Arabic
                      </Link>
                    </div>
                  </div>

                  <div className='dropdown'>
                    <button className='btn dropdown-toggle' type='button'>
                      USD
                    </button>
                    <div className='dropdown-menu'>
                      <Link className='dropdown-item' to='#'>
                        USD
                      </Link>
                      <Link className='dropdown-item' to='#'>
                        AED
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-12 col-md-7'>
                <ul className='pro-header-options'>
                  <li>
                    <div>Welcome&nbsp;User !</div>
                  </li>
                  <li className='dropdown'>
                    <button className='btn dropdown-toggle' type='button'>
                      My Account
                    </button>
                    <div className='dropdown-menu'>
                      <Link className='dropdown-item' to='/profile'>
                        Profile
                      </Link>
                      <Link className='dropdown-item' to='/wishlist'>
                        Wishlist&nbsp;(3)
                      </Link>
                      <Link className='dropdown-item' to='/compare'>
                        Compare&nbsp;(2)
                      </Link>
                      <Link className='dropdown-item' to='/orders'>
                        Orders
                      </Link>
                      <Link className='dropdown-item' to='/shipping-address'>
                        Shipping Address
                      </Link>
                      <Link onClick={logout} className='dropdown-item' to='#!'>
                        Logout
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='header-maxi bg-header-bar'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-12 col-md-12 col-lg-3'>
                <Link
                  to='/'
                  className='logo'
                  data-toggle='tooltip'
                  data-placement='bottom'
                  title='logo'
                >
                  <img
                    className='img-fluid'
                    src='assets/images/logo/logo.png'
                    alt='logo here'
                  />
                </Link>
              </div>

              <div className='col-12 col-sm-7 '>
                <div className='header-navbar bg-menu-bar'>
                  <div className='container'>
                    <form className='form-inline'>
                      <div className='search-field-module'>
                        <div className='search-field-select'>
                          <select
                            className=''
                            style={{
                              outline: 'none',
                              border: 'none',
                              margin: '15px',
                              color: '#6c757d'
                            }}
                          >
                            <option>All Categories</option>
                            <option>Rings &nbsp;</option>
                            <option>Earrings&nbsp;</option>
                            <option>Crowns&nbsp;</option>
                            <option>Necklace&nbsp;</option>
                            <option>Bracelet&nbsp;</option>
                            <option>Anklet (ankle bracelets)&nbsp;</option>
                            <option>Hairpin&nbsp;</option>
                            <option>Bangle&nbsp;</option>
                          </select>
                        </div>
                        <div className='search-field-wrap'>
                          <input
                            type='search'
                            placeholder='Search Products...'
                            data-toggle='tooltip'
                            data-placement='bottom'
                            title='search item'
                          />
                          <button
                            className='btn btn-secondary swipe-to-top'
                            data-toggle='tooltip'
                            data-placement='bottom'
                            title='Search Products'
                          >
                            <i className='fa fa-search' />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
                <ul className='pro-header-right-options'>
                  <li>
                    <Link
                      to='/wishlist'
                      className='btn'
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Wishlist'
                    >
                      <i className='far fa-heart'></i>
                      <span className='badge badge-secondary'>3</span>
                    </Link>
                  </li>

                  <li
                    className='dropdown'
                    data-toggle='tooltip'
                    data-placement='bottom'
                    title='cart'
                  >
                    <button
                      className='btn dropdown-toggle'
                      type='button'
                      id='headerOneCartButton'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <i className='fas fa-shopping-cart'></i>
                      <span className='badge badge-secondary'>2</span>
                    </button>
                    <div
                      className='dropdown-menu dropdown-menu-right'
                      aria-labelledby='headerOneCartButton'
                    >
                      <ul className='shopping-cart-items'>
                        <li>
                          <div className='item-thumb'>
                            <div className='image'>
                              <img
                                className='img-fluid'
                                src='assets/images/product_images/product_image_03.jpg'
                                alt='Product'
                              />
                            </div>
                          </div>
                          <div className='item-detail'>
                            <h2>Crystal Water Drop Earrings</h2>
                            <div className='item-s'>
                              2 x $285.00 <i className='fas fa-trash'></i>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className='item-thumb'>
                            <div className='image'>
                              <img
                                className='img-fluid'
                                src='assets/images/product_images/product_image_03.jpg'
                                alt='Product'
                              />
                            </div>
                          </div>
                          <div className='item-detail'>
                            <h2>Crytal Wedding Engagement Rings</h2>
                            <span className='item-s'>
                              4 x $85.00 <i className='fas fa-trash'></i>
                            </span>
                          </div>
                        </li>
                        <li>
                          <span className='item-summary'>
                            Total&nbsp;:&nbsp;<span>$910.00</span>
                          </span>
                        </li>
                        <li>
                          <Link
                            className='btn btn-link btn-block '
                            to='/cart-page1'
                          >
                            View Cart
                          </Link>
                          <Link
                            className='btn btn-secondary btn-block  swipe-to-top'
                            to='/checkout'
                          >
                            Checkout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='header-navbar bg-menu-bar'>
          <div className='container'>
            <nav
              id='headerOneNavbar'
              className='navbar navbar-expand-lg bg-nav-bar'
            >
              <div className='navbar-collapse'>
                <ul className='navbar-nav'>
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle'
                      href='JavaSrcipt:Void(0);'
                    >
                      Home
                    </a>
                    <div className='dropdown-menu'>
                      <Link className='dropdown-item' to='/'>
                        Home 1
                      </Link>
                      <Link className='dropdown-item' to='/index-2'>
                        Home 2
                      </Link>
                      <Link className='dropdown-item' to='/index-3'>
                        Home 3
                      </Link>
                    </div>
                  </li>

                  <li className='nav-item dropdown mega-dropdown'>
                    <Link className='nav-link dropdown-toggle' to='#'>
                      Mega Menu
                      <span className='badge badge-secondary'>New</span>
                    </Link>
                    <div className='dropdown-menu mega-dropdown-menu row '>
                      <div className='col-12'>
                        <div className='row'>
                          <div className='col-md-2'>
                            <ul>
                              <li className='dropdown-header'>Categories</li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Rings
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Earrings
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Crowns
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Necklace
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Bracelet
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Anklet (ankle bracelets)
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Hairpin
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Bangle
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className='col-md-2'>
                            <ul>
                              <li className='dropdown-header'>Departments</li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Fine Jewelry
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Bridal Jewelry
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Timeless Classics
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Men's Jewelry
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Women's Jewelry
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Baby Jewelry
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' to='#'>
                                  Charitable Jewelry
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className='col-md-2'>
                            <ul>
                              <li>
                                <Link
                                  className='dropdown-item dropdown-header'
                                  to='#'
                                >
                                  Shop Instagram
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className='dropdown-item dropdown-header'
                                  to='#'
                                >
                                  Shop By Brands
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className='dropdown-item dropdown-header'
                                  to='#'
                                >
                                  Repair & Cleaning
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className='dropdown-item dropdown-header'
                                  to='#'
                                >
                                  Sell Your Jewellery
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className='col-md-6'>
                            <div className='row'>
                              <div className='col-6 col-lg-6'>
                                <div className='product'>
                                  <article>
                                    <div className='pro-thumb '>
                                      <Link to='/product-page1'>
                                        <span className='pro-image'>
                                          <img
                                            className='img-fluid'
                                            src='assets/images/product_images/product_image_01.jpg'
                                            alt='Product '
                                          />
                                        </span>
                                        <span className='pro-image-hover swipe-to-top'>
                                          <img
                                            className='img-fluid'
                                            src='assets/images/product_images/product_image_01_02.jpg'
                                            alt='Product '
                                          />
                                        </span>
                                      </Link>
                                      <div className='pro-buttons d-none d-lg-block d-xl-block'>
                                        <div className='pro-icons'>
                                          <Link
                                            to='/wishlist'
                                            className='icon active swipe-to-top'
                                          >
                                            <i className='fas fa-heart'></i>
                                          </Link>
                                          <div
                                            className='icon swipe-to-top'
                                            data-toggle='modal'
                                            data-target='#quickViewModal'
                                          >
                                            <i className='fas fa-eye'></i>
                                          </div>
                                          <Link
                                            to='/compare'
                                            className='icon swipe-to-top'
                                          >
                                            <i
                                              className='fas fa-align-right'
                                              data-fa-transform='rotate-90'
                                            ></i>
                                          </Link>
                                        </div>

                                        <button
                                          type='button'
                                          className='btn btn-secondary btn-block swipe-to-top'
                                          //onClick={notificationCart()}
                                        >
                                          Add to Cart
                                        </button>
                                      </div>
                                      <div className='pro-tag'>Sale</div>
                                    </div>
                                    <div className='pro-description'>
                                      <h2 className='pro-title'>
                                        <Link to='/product-page1'>
                                          Austrian Crystals Jewelry Ring
                                        </Link>
                                      </h2>
                                    </div>
                                  </article>
                                </div>
                              </div>
                              <div className='col-6  col-lg-6'>
                                <div className='product'>
                                  <article>
                                    <div className='pro-thumb '>
                                      <Link to='/product-page1'>
                                        <span className='pro-image'>
                                          <img
                                            className='img-fluid'
                                            src='assets/images/product_images/product_image_02.jpg'
                                            alt='Product '
                                          />
                                        </span>
                                        <span className='pro-image-hover swipe-to-top'>
                                          <img
                                            className='img-fluid'
                                            src='assets/images/product_images/product_image_02_02.jpg'
                                            alt='Product '
                                          />
                                        </span>
                                      </Link>
                                      <div className='pro-buttons d-none d-lg-block d-xl-block'>
                                        <div className='pro-icons'>
                                          <Link
                                            to='/wishlist'
                                            className='icon active swipe-to-top'
                                          >
                                            <i className='fas fa-heart'></i>
                                          </Link>
                                          <div
                                            className='icon swipe-to-top'
                                            data-toggle='modal'
                                            data-target='#quickViewModal'
                                          >
                                            <i className='fas fa-eye'></i>
                                          </div>
                                          <Link
                                            to='/compare'
                                            className='icon swipe-to-top'
                                          >
                                            <i
                                              className='fas fa-align-right'
                                              data-fa-transform='rotate-90'
                                            ></i>
                                          </Link>
                                        </div>

                                        <button
                                          type='button'
                                          className='btn btn-secondary btn-block swipe-to-top'
                                          //onClick={notificationCart()}
                                        >
                                          Add to Cart
                                        </button>
                                      </div>
                                      <div className='pro-tag bg-success'>
                                        NEW
                                      </div>
                                    </div>
                                    <div className='pro-description'>
                                      <h2 className='pro-title'>
                                        <Link to='/product-page1'>
                                          Crystal Water Drop Earrings
                                        </Link>
                                      </h2>
                                    </div>
                                  </article>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className='nav-item dropdown'>
                    <Link className='nav-link dropdown-toggle' to='#'>
                      Shop
                    </Link>
                    <div className='dropdown-menu'>
                      <Link className='dropdown-item' to='/shop-page1'>
                        Top Bar
                      </Link>
                      <Link className='dropdown-item' to='/shop-page2'>
                        Right Sidebar
                      </Link>
                      <Link className='dropdown-item' to='/shop-page3'>
                        Top and Right Sidebar
                      </Link>
                      <Link className='dropdown-item' to='/shop-page4'>
                        Left Sidebar
                      </Link>
                      <Link className='dropdown-item' to='/shop-page5'>
                        Top and left Sidebar
                      </Link>
                    </div>
                  </li>
                  <li className='nav-item dropdown'>
                    <Link className='nav-link dropdown-toggle' to='#'>
                      Product
                    </Link>
                    <div className='dropdown-menu'>
                      <Link className='dropdown-item' to='/product-page1'>
                        Left Carousel
                      </Link>
                      <Link className='dropdown-item' to='/product-page2'>
                        Right Carousel
                      </Link>
                      <Link className='dropdown-item' to='/product-page3'>
                        Vertical Thumbnail Carousel
                      </Link>
                      <Link className='dropdown-item' to='/product-page4'>
                        Right Banner
                      </Link>
                      <Link className='dropdown-item' to='/product-page5'>
                        Best Seller left Sidebar
                      </Link>
                      <Link className='dropdown-item' to='/product-page6'>
                        Best Seller right Sidebar
                      </Link>
                    </div>
                  </li>
                  <li className='nav-item dropdown'>
                    <Link className='nav-link dropdown-toggle' to='#'>
                      Pages
                    </Link>
                    <div className='dropdown-menu'>
                      <div className='dropdown-submenu'>
                        <Link className='dropdown-item' to='/404'>
                          404 Page
                        </Link>
                      </div>
                      <div className='dropdown-submenu'>
                        <Link className='dropdown-item' to='#'>
                          About Us
                          <i className='fas fa-chevron-right'></i>
                        </Link>
                        <div className='dropdown-menu'>
                          <Link className='dropdown-item' to='/about-page1'>
                            About Us Page 1
                          </Link>
                          <Link className='dropdown-item' to='/about-page2'>
                            About Us Page 2
                          </Link>
                        </div>
                      </div>
                      <div className='dropdown-submenu'>
                        <Link className='dropdown-item' to='#'>
                          Contact Us
                          <i className='fas fa-chevron-right'></i>
                        </Link>
                        <div className='dropdown-menu'>
                          <Link className='dropdown-item' to='/contact-page1'>
                            Contact Us Page 1
                          </Link>
                          <Link className='dropdown-item' to='/contact-page2'>
                            Contact Us Page 2
                          </Link>
                        </div>
                      </div>
                      <div className='dropdown-submenu'>
                        <Link className='dropdown-item' to='#'>
                          Registration
                          <i className='fas fa-chevron-right'></i>
                        </Link>
                        <div className='dropdown-menu'>
                          <Link className='dropdown-item' to='/signup'>
                            Signup Page
                          </Link>
                          <Link className='dropdown-item' to='/login-page1'>
                            Login Page 1
                          </Link>
                          <Link className='dropdown-item' to='/login-page2'>
                            Login Page 2
                          </Link>
                        </div>
                      </div>

                      <div className='dropdown-submenu'>
                        <Link className='dropdown-item' to='#'>
                          Blog
                          <i className='fas fa-chevron-right'></i>
                        </Link>
                        <div className='dropdown-menu'>
                          <Link className='dropdown-item' to='/blog-page1'>
                            Blog Page 1
                          </Link>
                          <Link className='dropdown-item' to='/blog-page2'>
                            Blog Page 2
                          </Link>
                        </div>
                      </div>

                      <div className='dropdown-submenu'>
                        <Link className='dropdown-item' to='#'>
                          Shopping Cart
                          <i className='fas fa-chevron-right'></i>
                        </Link>
                        <div className='dropdown-menu'>
                          <Link className='dropdown-item' to='/cart-page1'>
                            Cart Page 1
                          </Link>
                          <Link className='dropdown-item' to='/cart-page2'>
                            Cart Page 2
                          </Link>
                        </div>
                      </div>

                      <div className='dropdown-submenu'>
                        <Link className='dropdown-item' to='/checkout'>
                          Checkout
                        </Link>
                      </div>

                      {/* <div className='dropdown-submenu'>
                          <Link className='dropdown-item' to='#'>
                            Email Templates
                            <i className='fas fa-chevron-right'></i>
                          </Link>
                          <div className='dropdown-menu'>
                            <Link
                              className='dropdown-item'
                              to='/email-templates/amazing-deals'
                            >
                              Amazing Deals
                            </Link>
                            <Link
                              className='dropdown-item'
                              to='/email-templates/new-arrival'
                            >
                              New Arrival
                            </Link>
                            <Link
                              className='dropdown-item'
                              to='/email-templates/overall-sale'
                            >
                              Overall Sale
                            </Link>
                            <Link
                              className='dropdown-item'
                              to='/email-templates/winter-sale'
                            >
                              Winter Sale
                            </Link>
                            <Link
                              className='dropdown-item'
                              to='/email-templates/signup'
                            >
                              Signup
                            </Link>
                            <Link
                              className='dropdown-item'
                              to='/email-templates/forgot-password'
                            >
                              Forgot Password
                            </Link>
                          </div>
                        </div> */}
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

Main_Header.propTypes = {
  logout: PropTypes.func.isRequired
  // auth: PropTypes.object.isRequired
};

export default connect(null, { logout })(Main_Header);
