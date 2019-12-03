import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { loadScript, loadCss, MobileMenu } from '../utils/loadScripts';

class Mobile_Header extends Component {
  // componentWillMount() {
  //   loadCss();

  //   // loadScript();
  // }
  UNSAFE_componentWillMount() {
    MobileMenu();

    //loadScript();
  }

  render() {
    return (
      <Fragment>
        <header
          id='headerMobile'
          className='header-area header-mobile d-lg-none d-xl-none'
        >
          <div className='header-mini bg-top-bar'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-12'>
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
              </div>
            </div>
          </div>
          <div className='header-maxi bg-header-bar'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-2 pr-0'>
                  <div className='navigation-mobile-container'>
                    <a
                      href='JavaScript:void(0);'
                      className='navigation-mobile-toggler'
                    >
                      <span className='fas fa-bars' />
                    </a>
                    <nav id='navigation-mobile'>
                      <div className='logout-main'>
                        <div className='welcome' style={{ float: 'left' }}>
                          <span>Welcome&nbsp;Guest !</span>
                        </div>

                        {/* <div className='logout'>
                          <Link to='#' className=''>
                            Logout
                          </Link>
                        </div> */}
                        <div id='dis' style={{ marginLeft: '90px' }}>
                          <i className='fas fa-arrow-left'></i>
                        </div>
                      </div>
                      <a
                        className='main-manu btn'
                        data-toggle='collapse'
                        href='#homepages'
                        role='button'
                        aria-expanded='false'
                        aria-controls='shoppages'
                      >
                        Home
                      </a>
                      <div
                        className='sub-manu collapse multi-collapse'
                        id='homepages'
                      >
                        <ul className='unorder-list'>
                          <li className=''>
                            <Link to='/' className='btn main-manu'>
                              Home Page 1
                            </Link>
                            <Link to='/index-2' className='btn main-manu'>
                              Home Page 2
                            </Link>
                            <Link to='/index-3' className='btn main-manu'>
                              Home Page 3
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <a
                        className='main-manu btn'
                        data-toggle='collapse'
                        href='#shoppages'
                        role='button'
                        aria-expanded='false'
                        aria-controls='shoppages'
                      >
                        Shop
                      </a>
                      <div
                        className='sub-manu collapse multi-collapse'
                        id='shoppages'
                      >
                        <ul className='unorder-list'>
                          <li className=''>
                            <Link to='/shop-page1' className='btn main-manu'>
                              Top Bar
                            </Link>
                            <Link to='/shop-page2' className='btn main-manu'>
                              Right Sidebar
                            </Link>
                            <Link to='/shop-page3' className='btn main-manu'>
                              Top and Right Sidebar
                            </Link>
                            <Link to='/shop-page4' className='btn main-manu'>
                              Left Sidebar
                            </Link>
                            <Link to='/shop-page5' className='btn main-manu'>
                              Top and Left Sidebar
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <a
                        className=' main-manu btn'
                        data-toggle='collapse'
                        href='#productpages'
                        role='button'
                        aria-expanded='false'
                        aria-controls='productpages'
                      >
                        Product
                      </a>
                      <div
                        className='sub-manu collapse multi-collapse'
                        id='productpages'
                      >
                        <ul className='unorder-list'>
                          <li className=''>
                            <Link to='/product-page1' className='btn main-manu'>
                              Left Carousel
                            </Link>
                            <Link to='/product-page2' className='btn main-manu'>
                              Right Carousel
                            </Link>
                            <Link to='/product-page3' className='btn main-manu'>
                              Vertical Thumbnail Carousel
                            </Link>
                            <Link to='/product-page4' className='btn main-manu'>
                              Right Banner
                            </Link>
                            <Link to='/product-page5' className='btn main-manu'>
                              Best Seller Left Sidebar
                            </Link>
                            <Link to='/product-page6' className='btn main-manu'>
                              Best Seller Right Sidebar
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <a
                        className='main-manu btn'
                        data-toggle='collapse'
                        href='#staticpages'
                        role='button'
                        aria-expanded='false'
                        aria-controls='staticpages'
                      >
                        Pages
                      </a>
                      <div
                        className='sub-manu collapse multi-collapse'
                        id='staticpages'
                      >
                        <ul className='unorder-list'>
                          <li className=''>
                            <a
                              className='main-manu btn '
                              data-toggle='collapse'
                              href='#staticabout'
                              role='button'
                              aria-expanded='false'
                              aria-controls='staticabout'
                            >
                              About Us
                            </a>
                            <div
                              className='sub-manu1 collapse multi-collapse'
                              id='staticabout'
                            >
                              <ul className='unorder-list'>
                                <li className=''>
                                  <Link
                                    to='/about-page1'
                                    className='btn main-manu'
                                  >
                                    About Us Page 1
                                  </Link>
                                  <Link
                                    to='/about-page2'
                                    className='btn main-manu'
                                  >
                                    About Us Page 2
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <a
                              className='main-manu btn '
                              data-toggle='collapse'
                              href='#staticcontact'
                              role='button'
                              aria-expanded='false'
                              aria-controls='staticcontact'
                            >
                              Contact Us
                            </a>
                            <div
                              className='sub-manu1 collapse multi-collapse'
                              id='staticcontact'
                            >
                              <ul className='unorder-list'>
                                <li className=''>
                                  <Link
                                    to='/contact-page1'
                                    className='btn main-manu'
                                  >
                                    Contact Us Page 1
                                  </Link>
                                  <Link
                                    to='/contact-page2'
                                    className='btn main-manu'
                                  >
                                    Contact Us Page 2
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <a
                              className='main-manu btn'
                              data-toggle='collapse'
                              href='#staticlogin'
                              role='button'
                              aria-expanded='false'
                              aria-controls='staticlogin'
                            >
                              Login
                            </a>
                            <div
                              className='sub-manu1 collapse multi-collapse'
                              id='staticlogin'
                            >
                              <ul className='unorder-list'>
                                <li className=''>
                                  <Link
                                    to='/login-page1'
                                    className='btn main-manu'
                                  >
                                    Login Page 1
                                  </Link>
                                  <Link
                                    to='/login-page2'
                                    className='btn main-manu'
                                  >
                                    Login Page 2
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <a
                              className='main-manu btn '
                              data-toggle='collapse'
                              href='#staticblog'
                              role='button'
                              aria-expanded='false'
                              aria-controls='staticblog'
                            >
                              Blogs
                            </a>
                            <div
                              className='sub-manu1 collapse multi-collapse'
                              id='staticblog'
                            >
                              <ul className='unorder-list'>
                                <li className=''>
                                  <Link
                                    to='/blog-page1'
                                    className='btn main-manu'
                                  >
                                    Blog Page 1
                                  </Link>
                                  <Link
                                    to='/blog-page2'
                                    className='btn main-manu'
                                  >
                                    Blog Page 2
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <a
                              className='main-manu btn '
                              data-toggle='collapse'
                              href='#staticcart'
                              role='button'
                              aria-expanded='false'
                              aria-controls='staticcart'
                            >
                              Shopping Cart
                            </a>
                            <div
                              className='sub-manu1 collapse multi-collapse'
                              id='staticcart'
                            >
                              <ul className='unorder-list'>
                                <li className=''>
                                  <Link
                                    to='/cart-page1'
                                    className='btn main-manu'
                                  >
                                    Cart Page 1
                                  </Link>
                                  <Link
                                    to='/cart-page2'
                                    className='btn main-manu'
                                  >
                                    Cart Page 2
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <Link to='/checkout' className='main-manu btn '>
                              Checkout
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <Link to='/profile' className='main-manu btn '>
                        Profile
                      </Link>
                      <Link to='/wishlist' className='main-manu btn '>
                        Wishlist (8)
                      </Link>
                      <Link to='/compare' className='main-manu btn '>
                        Compare
                      </Link>
                      <Link to='/orders' className='main-manu btn '>
                        Orders
                      </Link>
                      <Link to='/shipping-address' className='main-manu btn '>
                        Shipping Address
                      </Link>
                    </nav>
                  </div>
                </div>
                <div className='col-8'>
                  <Link
                    to='/'
                    className='logo'
                    data-toggle='tooltip'
                    data-placement='bottom'
                    title
                    data-original-title='logo'
                  >
                    <img
                      className='img-fluid'
                      src='assets/images/logo/logo.png'
                      alt='logo here'
                    />
                  </Link>
                </div>
                <div className='col-2 pl-0'>
                  <div className='cart-dropdown dropdown'>
                    <a
                      className='cart-dropdown-toggle'
                      href='#'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <i className='fas fa-shopping-cart' aria-hidden='true' />
                      <span className='badge badge-secondary'>2</span>
                    </a>
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
                                src='assets/images/product_images/product_image_02.jpg'
                                alt='Product'
                              />
                            </div>
                          </div>
                          <div className='item-detail'>
                            <h2>Crystal Water Drop Earrings</h2>
                            <div className='item-s'>
                              2 x $285.00 <i className='fas fa-trash' />
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
                              4 x $85.00 <i className='fas fa-trash' />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='header-navbar bg-menu-bar'>
            <div className='container'>
              <form className='form-inline'>
                <div className='search-field-module'>
                  <div className='search-field-select'>
                    <select className='form-control'>
                      <option selected>All Categories</option>
                      <option value={1}>Rings &nbsp;</option>
                      <option value={1}>Earrings&nbsp;</option>
                      <option value={1}>Crowns&nbsp;</option>
                      <option value={1}>Necklace&nbsp;</option>
                      <option value={1}>Bracelet&nbsp;</option>
                      <option value={1}>Anklet (ankle bracelets)&nbsp;</option>
                      <option value={1}>Hairpin&nbsp;</option>
                      <option value={2}>Bangle&nbsp;</option>
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
        </header>
      </Fragment>
    );
  }
}
export default Mobile_Header;
