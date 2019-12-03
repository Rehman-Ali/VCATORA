import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer2 from './layout/Footer_2';

const Wishlist = () => {
  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con" /> */}
      {/* //Header Style One */}
      {/* wishlist Content */}
      <div className='container-fuild'>
        <nav aria-label='breadcrumb'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='#'>Home</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Profile
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <section className='pro-content wishlist-content'>
        <div className='container'>
          <div className='row'>
            <div className='pro-heading-title'>
              <h1>Wishlist Page</h1>
            </div>
          </div>
          <div className='row'>
            <div className=' col-12 col-lg-3'>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link className='nav-link' to='/profile'>
                    <i className='fas fa-user' />
                    Profile
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link className='nav-link' to='/wishlist'>
                    <i className='fas fa-heart' />
                    Wishlist
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link className='nav-link' to='/orders'>
                    <i className='fas fa-shopping-cart' />
                    Orders
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link className='nav-link' to='/shipping-address'>
                    <i className='fas fa-map-marker-alt' />
                    Shipping Address
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link className='nav-link' to='#'>
                    <i className='fas fa-power-off' />
                    Logout
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link className='nav-link' to='/change-password'>
                    <i className='fas fa-unlock-alt' />
                    Change Password
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-12 col-lg-9 '>
              <div className='media'>
                <div className='media-thumb'>
                  <img
                    className='img-fluid'
                    src='assets/images/product_images/product_image_02.jpg'
                    alt='Product'
                  />
                </div>
                <div className='media-body'>
                  <div className='row'>
                    <div className='col-12 col-md-8'>
                      <h4>
                        <Link to='/product-page1'>
                          Crystal Water Drop Earrings
                        </Link>
                      </h4>
                      <div className='pro-price'>
                        <ins>$450</ins>
                      </div>
                      <p className='d-none d-lg-block d-xl-block'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className='buttons'>
                        <div className='input-group item-quantity'>
                          <input
                            type='text'
                            id='quantity1'
                            name='quantity'
                            className='form-control'
                            defaultValue={2}
                          />
                          <span className='input-group-btn'>
                            <button
                              type='button'
                              value='quantity1'
                              className='quantity-plus btn'
                              data-type='plus'
                              data-field
                            >
                              <span className='fas fa-plus' />
                            </button>
                            <button
                              type='button'
                              value='quantity1'
                              className='quantity-minus btn'
                              data-type='minus'
                              data-field
                            >
                              <span className='fas fa-minus' />
                            </button>
                          </span>
                        </div>
                        <Link
                          to='/cart-page1'
                          className='btn btn-secondary btn-lg swipe-to-top'
                        >
                          Add to Cart
                        </Link>
                      </div>
                    </div>
                    <div className='col-12 col-md-4 detail'>
                      <p>Edit: 25th April 2019</p>
                      <div className='share'>
                        <Link to='#'>
                          Share &nbsp;
                          <i className='fas fa-share' />
                        </Link>{' '}
                      </div>
                      <div className='share'>
                        <Link to='#'>
                          Remove &nbsp;
                          <i className='fas fa-trash-alt' />
                        </Link>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className='border-line' />
              <div className='media'>
                <div className='media-thumb'>
                  <img
                    className='img-fluid'
                    src='assets/images/product_images/product_image_03.jpg'
                    alt='Product'
                  />
                </div>
                <div className='media-body'>
                  <div className='row'>
                    <div className='col-12 col-md-8'>
                      <h4>
                        <Link to='/product-page1'>
                          Crytal Wedding Engagement Rings
                        </Link>
                      </h4>
                      <div className='pro-price'>
                        <ins>$85</ins>
                      </div>
                      <p className='d-none d-lg-block d-xl-block'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <div className='buttons'>
                        <div className='input-group item-quantity'>
                          <input
                            type='text'
                            id='quantity2'
                            name='quantity'
                            className='form-control'
                            defaultValue={5}
                          />
                          <span className='input-group-btn'>
                            <button
                              type='button'
                              value='quantity2'
                              className='quantity-plus btn'
                              data-type='plus'
                              data-field
                            >
                              <i className='fas fa-plus' />
                            </button>
                            <button
                              type='button'
                              value='quantity2'
                              className='quantity-minus btn'
                              data-type='minus'
                              data-field
                            >
                              <i className='fas fa-minus' />
                            </button>
                          </span>
                        </div>
                        <Link
                          to='/cart-page1'
                          className='btn btn-secondary btn-lg swipe-to-top'
                        >
                          Add to Cart
                        </Link>
                      </div>
                    </div>
                    <div className='col-12 col-md-4 detail'>
                      <p>Edit: 25th April 2019</p>
                      <div className='share'>
                        <Link to='#'>
                          Share &nbsp;
                          <i className='fas fa-share' />
                        </Link>{' '}
                      </div>
                      <div className='share'>
                        <Link to='#'>
                          Remove &nbsp;
                          <i className='fas fa-trash-alt' />
                        </Link>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className='border-line' />
              <div className='media'>
                <div className='media-thumb'>
                  <img
                    className='img-fluid'
                    src='assets/images/product_images/product_image_04.jpg'
                    alt='Product'
                  />
                </div>
                <div className='media-body'>
                  <div className='row'>
                    <div className='col-12 col-md-8 '>
                      <h4>
                        <Link to='/product-page1'>
                          Women Wedding Zircon Engagement Ring
                        </Link>
                      </h4>
                      <div className='pro-price'>
                        <del>$450</del>
                        <ins>$285</ins>
                      </div>
                      <p className='d-none d-lg-block d-xl-block'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua consectetur adipiscing elit.
                      </p>
                      <div className='buttons'>
                        <div className='input-group item-quantity'>
                          <input
                            type='text'
                            id='quantity3'
                            name='quantity3'
                            className='form-control'
                            defaultValue={4}
                          />
                          <span className='input-group-btn'>
                            <button
                              type='button'
                              value='quantity3'
                              className='quantity-plus btn'
                              data-type='plus'
                              data-field
                            >
                              <span className='fas fa-plus' />
                            </button>
                            <button
                              type='button'
                              value='quantity3'
                              className='quantity-minus btn'
                              data-type='minus'
                              data-field
                            >
                              <span className='fas fa-minus' />
                            </button>
                          </span>
                        </div>
                        <Link
                          to='/cart-page1'
                          className='btn btn-secondary btn-lg swipe-to-top'
                        >
                          Add to Cart
                        </Link>
                      </div>
                    </div>
                    <div className='col-12 col-md-4 detail'>
                      <p>Edit: 25th April 2019</p>
                      <div className='share'>
                        <Link to='#'>
                          Share &nbsp;
                          <i className='fas fa-share' />
                        </Link>{' '}
                      </div>
                      <div className='share'>
                        <Link to='#'>
                          Remove &nbsp;
                          <i className='fas fa-trash-alt' />
                        </Link>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className='border-line' />
              <div className='pagination justify-content-between '>
                <label className='col-form-label'>
                  Showing 1–<span className='showing_record'>1</span>
                  &nbsp;of&nbsp;<span className='showing_total_record'>23</span>
                  &nbsp;results.
                </label>
                <div className='col-12 col-sm-6'>
                  <ol className='loader-page'>
                    <li className='loader-page-item'>
                      <Link to='#'>
                        <i
                          className='fa fa-angle-double-left'
                          style={{ fontSize: 12 }}
                        />
                      </Link>
                    </li>
                    <li className='loader-page-item'>
                      <Link to='#'>1</Link>
                    </li>
                    <li className='loader-page-item'>
                      <Link to='#'>2</Link>
                    </li>
                    <li className='loader-page-item'>
                      <Link to='#'>3</Link>
                    </li>
                    <li className='loader-page-item'>
                      <Link to='#'>4</Link>
                    </li>
                    <li className='loader-page-item'>
                      <Link to='#'>
                        <i
                          className='fa fa-angle-double-right'
                          style={{ fontSize: 12 }}
                        />
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
              {/* ............the end..... */}
            </div>
          </div>
        </div>
      </section>
      {/* Footer Mobile */}
      <Footer2 />
    </Fragment>
  );
};

export default Wishlist;
