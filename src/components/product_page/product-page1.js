import React, { Fragment, useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { loadScript, loadCss } from '../utils/loadScripts';
import Footer2 from '../layout/Footer_2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductById } from '../../actions/product';
import { SERVER_URI } from '../utils/config';
import img1 from '../../assets/images/gallery/preview/Product_image_02.jpg';
const ProductPage1 = props => {
  // UNSAFE_componentWillMount(){
  //   loadCss();
  // }
  // componentDidMount() {
  //     loadScript();
  //  }
  // render(){
  const [formData, setFormData] = useState({
    products_id: props.match.params.products_id,
    language_id: 1,
    currency_code: 'usd'
  });
  const { language_id, products_id, currency_code } = formData;
  console.log(
    'the product data image:',
    SERVER_URI + props.Product.products_image
  );

  useEffect(() => {
    props.getProductById({ language_id, products_id, currency_code });
    loadCss();

    setTimeout(() => {
      loadScript();
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      loadCss();
      loadScript();
    };
  }, []);
  // render(){
  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con" /> */}

      <div className='container-fuild'>
        <nav aria-label='breadcrumb'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='#'>Home</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Product Page
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <section className='pro-content product-content'>
        <div className='container'>
          <div className='product-detail-info'>
            <div className='row'>
              <div className='col-12 col-sm-12'>
                <div className='row'>
                  <div className='col-12 col-lg-6'>
                    <div className='slider-wrapper'>
                      <div className='slider-for'>
                        <Link
                          className='slider-for__item ex1 fancybox-button'
                          to={img1}
                          data-fancybox-group='fancybox-button'
                          title='Lorem ipsum dolor sit amet'
                        >
                          <img
                            src={SERVER_URI + props.Product.products_image}
                            alt='Zoom'
                          />
                        </Link>
                        {/* <Link
                          className='slider-for__item ex1 fancybox-button'
                          to='/images/gallery/preview/Product_image_02.jpg'
                          data-fancybox-group='fancybox-button'
                          title='Lorem ipsum dolor sit amet'
                        >
                          <img
                            //  src={SERVER_URI + props.Product.products_image}
                            alt='Zoom'
                          />
                        </Link> */}
                        {/* <Link
                          className='slider-for__item ex1 fancybox-button'
                          to='/images/gallery/preview/Product_image_03.jpg'
                          data-fancybox-group='fancybox-button'
                          title='Lorem ipsum dolor sit amet'
                        >
                          <img
                            src='assets/images/gallery/preview/Product_image_03.jpg'
                            alt='Zoom'
                          />
                        </Link>
                        <Link
                          className='slider-for__item ex1 fancybox-button'
                          to='/images/gallery/preview/Product_image_04.jpg'
                          data-fancybox-group='fancybox-button'
                          title='Lorem ipsum dolor sit amet'
                        >
                          <img
                            src='assets/images/gallery/preview/Product_image_04.jpg'
                            alt='Zoom'
                          />
                        </Link>
                        <Link
                          className='slider-for__item ex1 fancybox-button'
                          to='/images/gallery/preview/Product_image_05.jpg'
                          data-fancybox-group='fancybox-button'
                          title='Lorem ipsum dolor sit amet'
                        >
                          <img
                            src='assets/images/gallery/preview/Product_image_05.jpg'
                            alt='Zoom'
                          />
                        </Link> */}
                      </div>
                      {/* <div className='slider-nav'>
                        <div className='slider-nav__item'>
                          <img
                            // src={SERVER_URI + props.Product.products_image}
                            alt='Zoom'
                          />
                        </div>
                        <div className='slider-nav__item'>
                          <img
                             src={SERVER_URI + props.Product.products_image}
                            alt='Zoom'
                          />
                        </div>
                        <div className='slider-nav__item'>
                          <img
                            src={SERVER_URI + props.Product.products_image}
                            alt='Zoom'
                          />
                        </div>
                        <div className='slider-nav__item'>
                          <img
                             src={SERVER_URI + props.Product.products_image}
                            alt='Zoom'
                          />
                        </div>
                        <div className='slider-nav__item'>
                          <img
                            src={SERVER_URI + props.Product.products_image}
                            alt='Zoom'
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className='col-12 col-lg-6'>
                    <div className='row'>
                      <div className='col-12 col-md-12'>
                        <div className='pro-badges'>
                          <div className='badge badge-info'>New</div>
                        </div>
                        <h1 className='pro-title'>
                          {props.Product.products_name}
                        </h1>
                        <div className='pro-price'>
                          <h2>
                            <del>$120</del>
                            {props.Product.products_price}
                          </h2>
                        </div>
                        <div className='pro-rating'>
                          <i className='fas fa-star' />
                          <i className='fas fa-star' />
                          <i className='fas fa-star' />
                          <i className='fas fa-star' />
                          <i className='fas fa-star-half-alt' />
                          <Link to='#review' className='btn-link'>
                            2 reviews
                          </Link>
                        </div>
                        <div className='pro-infos'>
                          <div className='pro-single-info'>
                            <b>Product ID :</b>1004
                          </div>
                          <div className='pro-single-info'>
                            <b>Categroy :</b>
                            <Link to='#'>Rings</Link>
                          </div>
                          <div className='pro-single-info'>
                            <b>Tags :</b>
                            <ul>
                              <li>
                                <Link to='#'>bracelets</Link>
                              </li>
                              <li>
                                <Link to='#'>diamond</Link>
                              </li>
                              <li>
                                <Link to='#'>ring</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='pro-single-info'>
                            <b>Available :</b>
                            <span className='text-secondary'>InStock</span>
                          </div>
                          <div className='pro-single-info'>
                            <b>Min Order Limit :</b>
                            <Link to='#'>5</Link>
                          </div>
                        </div>
                        <div className='pro-options'>
                          <div className='color-selection'>
                            <h4>
                              <b>Color : </b>Silver
                            </h4>
                            <ul>
                              <li className='active'>
                                <a
                                  className='green'
                                  href='javascript:void(0);'
                                />
                              </li>
                              <li>
                                <a className='red' href='javascript:void(0);' />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='pro-counter'>
                          <div className='input-group item-quantity'>
                            <input
                              type='text'
                              id='quantity1'
                              name='quantity'
                              className='form-control'
                              defaultValue={10}
                            />
                            <span className='input-group-btn'>
                              <button
                                type='button'
                                value='quantity1'
                                className='quantity-plus btn'
                                data-type='plus'
                                data-field
                              >
                                <i className='fas fa-plus' />
                              </button>
                              <button
                                type='button'
                                value='quantity1'
                                className='quantity-minus btn'
                                data-type='minus'
                                data-field
                              >
                                <i className='fas fa-minus' />
                              </button>
                            </span>
                          </div>
                          <button
                            type='button'
                            className='btn btn-secondary btn-lg swipe-to-top'
                            onclick='notificationCart();'
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div className='pro-sub-buttons'>
                          <div className='buttons'>
                            <button
                              type='button'
                              className='btn  btn-link'
                              onclick='notificationWishlist();'
                            >
                              <i className='fas fa-heart' />
                              Add to Wishlist
                            </button>
                            <button
                              type='button'
                              className='btn btn-link'
                              onclick='notificationCompare();'
                            >
                              <i className='fas fa-align-right' />
                              Add to Compare
                            </button>
                          </div>
                          {/* AddToAny BEGIN */}
                          <div className='a2a_kit a2a_kit_size_32 a2a_default_style'>
                            <Link
                              className='a2a_dd'
                              to='/https://www.addtoany.com/share'
                            />
                            <Link className='a2a_button_facebook' />
                            <Link className='a2a_button_twitter' />
                            <Link className='a2a_button_email' />
                          </div>
                          {/* AddToAny END */}
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12 col-md-12'>
                        <div className='nav nav-pills' role='tablist'>
                          <a
                            className='nav-link nav-item  active'
                            href='#description'
                            id='description-tab'
                            data-toggle='pill'
                            role='tab'
                          >
                            Description
                          </a>
                          <a
                            className='nav-link nav-item '
                            href='#additionalInfo'
                            id='additional-info-tab'
                            data-toggle='pill'
                            role='tab'
                          >
                            Additional information
                          </a>
                          <a
                            className='nav-link nav-item'
                            href='#review'
                            id='review-tab'
                            data-toggle='pill'
                            role='tab'
                          >
                            Reviews
                          </a>
                        </div>
                        <div className='tab-content'>
                          <div
                            role='tabpanel'
                            className='tab-pane fade active show'
                            id='description'
                            aria-labelledby='description-tab'
                          >
                            <p>{props.Product.products_description}</p>
                          </div>
                          <div
                            role='tabpanel'
                            className='tab-pane fade'
                            id='additionalInfo'
                            aria-labelledby='additional-info-tab'
                          >
                            <table className='table table-striped table-borderless'>
                              <tbody>
                                <tr>
                                  <th scope='row'>Brand Name:</th>
                                  <td>lindoMetals</td>
                                </tr>
                                <tr>
                                  <th scope='row'>Metals Type:</th>
                                  <td>Silver</td>
                                </tr>
                                <tr>
                                  <th scope='row'>Main Stone:</th>
                                  <td>Pearl</td>
                                </tr>
                                <tr>
                                  <th scope='row'>Style:</th>
                                  <td>Trendy</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            role='tabpanel'
                            className='tab-pane fade '
                            id='review'
                            aria-labelledby='review-tab'
                          >
                            <div className='reviews'>
                              <div className='review-bubbles'>
                                <h2>Customer Reviews</h2>
                                <div className='review-bubble-single'>
                                  <div className='review-bubble-bg'>
                                    <div className='pro-rating'>
                                      <i className='fas fa-star' />
                                      <i className='fas fa-star' />
                                      <i className='fas fa-star' />
                                      <i className='fas fa-star' />
                                      <i className='fas fa-star-half-alt' />
                                    </div>
                                    <h4>Good</h4>
                                    <span>Sep 20, 2019</span>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation
                                    </p>
                                  </div>
                                </div>
                                <div className='review-bubble-single'>
                                  <div className='review-bubble-bg'>
                                    <div className='pro-rating'>
                                      <i className='fas fa-star' />
                                      <i className='fas fa-star' />
                                      <i className='fas fa-star' />
                                      <i className='fas fa-star' />
                                      <i className='fas fa-star-half-alt' />
                                    </div>
                                    <h4>NICE WORK!!!</h4>
                                    <span>Sep 20, 2019</span>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className='write-review'>
                                <h2>Write a Review</h2>
                                <div className='write-review-box'>
                                  <div className='from-group row mb-3'>
                                    <div className='col-12'>
                                      {' '}
                                      <label htmlFor='inlineFormInputGroup0'>
                                        Name
                                      </label>
                                    </div>
                                    <div className='input-group col-12'>
                                      <input
                                        type='text'
                                        className='form-control'
                                        id='inlineFormInputGroup0'
                                        placeholder='Enter Your Name'
                                      />
                                    </div>
                                  </div>
                                  <div className='from-group row mb-3'>
                                    <div className='col-12'>
                                      {' '}
                                      <label htmlFor='inlineFormInputGroup1'>
                                        Email Address
                                      </label>
                                    </div>
                                    <div className='input-group col-12'>
                                      <input
                                        type='text'
                                        className='form-control'
                                        id='inlineFormInputGroup1'
                                        placeholder='Enter Your Email'
                                      />
                                    </div>
                                  </div>
                                  <div className='from-group row mb-3'>
                                    <div className='col-12'>
                                      {' '}
                                      <label htmlFor='inlineFormInputGroup2'>
                                        Rating
                                      </label>
                                    </div>
                                    <div className='pro-rating  col-12'>
                                      <i className='fas fa-star' />
                                      <i className='fas fa-star' />
                                      <i className='fas fa-star' />
                                      <i className='fas fa-star' />
                                      <i className='fas fa-star-half-alt' />
                                    </div>
                                  </div>
                                  <div className='from-group row mb-3'>
                                    <div className='col-12'>
                                      {' '}
                                      <label htmlFor='inlineFormInputGroup2'>
                                        Review Title
                                      </label>
                                    </div>
                                    <div className='input-group col-12'>
                                      <input
                                        type='text'
                                        className='form-control'
                                        id='inlineFormInputGroup2'
                                        placeholder='Title of Review'
                                      />
                                    </div>
                                  </div>
                                  <div className='from-group row mb-3'>
                                    <div className='col-12'>
                                      {' '}
                                      <label htmlFor='inlineFormInputGroup3'>
                                        Review Body
                                      </label>
                                    </div>
                                    <div className='input-group col-12'>
                                      <textarea
                                        className='form-control'
                                        id='inlineFormInputGroup3'
                                        placeholder='Write Your Review'
                                        defaultValue={''}
                                      />
                                    </div>
                                  </div>
                                  <div className='from-group'>
                                    <button
                                      type='button'
                                      className='btn btn-secondary swipe-to-top'
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='related-product-content'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-6'>
                <div className='pro-heading-title'>
                  <h1> Related Products</h1>
                </div>
              </div>
            </div>
            <div className='tab-carousel-js row'>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <div className='product'>
                  <article>
                    <div className='pro-icons mobile-pro-icons d-lg-none d-xl-none'>
                      <Link to='/wishlist' className='icon active swipe-to-top'>
                        <i className='fas fa-heart' />
                      </Link>
                      <div
                        className='icon swipe-to-top'
                        data-toggle='modal'
                        data-target='#quickViewModal'
                      >
                        <i className='fas fa-eye' />
                      </div>
                      <Link to='/compare' className='icon swipe-to-top'>
                        <i
                          className='fas fa-align-right'
                          data-fa-transform='rotate-90'
                        />
                      </Link>
                    </div>
                    <div className='pro-thumb '>
                      <div className='pro-tag'>NEW</div>
                      <Link to='/product-page1'>
                        <span className='pro-image'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                        <span className='pro-image-hover swipe-to-top  d-none d-lg-block d-xl-block'>
                          <img
                            className='img-fluid'
                            src={img1}
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
                            <i className='fas fa-heart' />
                          </Link>
                          <div
                            className='icon swipe-to-top'
                            data-toggle='modal'
                            data-target='#quickViewModal'
                          >
                            <i className='fas fa-eye' />
                          </div>
                          <Link to='/compare' className='icon swipe-to-top'>
                            <i
                              className='fas fa-align-right'
                              data-fa-transform='rotate-90'
                            />
                          </Link>
                        </div>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className='pro-description'>
                      <span className='pro-info'>Ring Collection</span>
                      <h2 className='pro-title'>
                        <Link to='/product-page1'>
                          Austrian Crystals Jewelry Ring
                        </Link>
                      </h2>
                      <div className='pro-price'>
                        <ins>$285</ins>
                      </div>
                      <div className='pro-mobile-buttons d-lg-none d-xl-none'>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <div className='product'>
                  <article>
                    <div className='pro-icons mobile-pro-icons d-lg-none d-xl-none'>
                      <Link to='/wishlist' className='icon active swipe-to-top'>
                        <i className='fas fa-heart' />
                      </Link>
                      <div
                        className='icon swipe-to-top'
                        data-toggle='modal'
                        data-target='#quickViewModal'
                      >
                        <i className='fas fa-eye' />
                      </div>
                      <Link to='/compare' className='icon swipe-to-top'>
                        <i
                          className='fas fa-align-right'
                          data-fa-transform='rotate-90'
                        />
                      </Link>
                    </div>
                    <div className='pro-thumb '>
                      <div className='pro-tag'>NEW</div>
                      <Link to='/product-page1'>
                        <span className='pro-image'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                        <span className='pro-image-hover swipe-to-top  d-none d-lg-block d-xl-block'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                      </Link>
                      <div className='pro-buttons d-none d-lg-block d-xl-block'>
                        <div className='pro-icons'>
                          <Link
                            to='/wishlist'
                            className='icon active swipe-to-top'
                          >
                            <i className='fas fa-heart' />
                          </Link>
                          <div
                            className='icon swipe-to-top'
                            data-toggle='modal'
                            data-target='#quickViewModal'
                          >
                            <i className='fas fa-eye' />
                          </div>
                          <Link to='/compare' className='icon swipe-to-top'>
                            <i
                              className='fas fa-align-right'
                              data-fa-transform='rotate-90'
                            />
                          </Link>
                        </div>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className='pro-description'>
                      <span className='pro-info'>Earrings</span>
                      <h2 className='pro-title'>
                        <Link to='/product-page1'>
                          Crystal Water Drop Earrings
                        </Link>
                      </h2>
                      <div className='pro-price'>
                        <del>$450</del>
                        <ins>$285</ins>
                      </div>
                      <div className='pro-mobile-buttons d-lg-none d-xl-none'>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <div className='product'>
                  <article>
                    <div className='pro-icons mobile-pro-icons d-lg-none d-xl-none'>
                      <Link to='/wishlist' className='icon active swipe-to-top'>
                        <i className='fas fa-heart' />
                      </Link>
                      <div
                        className='icon swipe-to-top'
                        data-toggle='modal'
                        data-target='#quickViewModal'
                      >
                        <i className='fas fa-eye' />
                      </div>
                      <Link to='/compare' className='icon swipe-to-top'>
                        <i
                          className='fas fa-align-right'
                          data-fa-transform='rotate-90'
                        />
                      </Link>
                    </div>
                    <div className='pro-thumb '>
                      <div className='pro-tag'>NEW</div>
                      <Link to='/product-page1'>
                        <span className='pro-image'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                        <span className='pro-image-hover swipe-to-top d-none d-lg-block d-xl-block'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                      </Link>
                      <div className='pro-buttons d-none d-lg-block d-xl-block'>
                        <div className='pro-icons'>
                          <Link
                            to='/wishlist'
                            className='icon active swipe-to-top'
                          >
                            <i className='fas fa-heart' />
                          </Link>
                          <div
                            className='icon swipe-to-top'
                            data-toggle='modal'
                            data-target='#quickViewModal'
                          >
                            <i className='fas fa-eye' />
                          </div>
                          <Link to='/compare' className='icon swipe-to-top'>
                            <i
                              className='fas fa-align-right'
                              data-fa-transform='rotate-90'
                            />
                          </Link>
                        </div>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className='pro-description'>
                      <span className='pro-info'>Ring Collection</span>
                      <h2 className='pro-title'>
                        <Link to='/product-page1'>
                          Crytal Wedding Engagement Rings
                        </Link>
                      </h2>
                      <div className='pro-price'>
                        <del>$120</del>
                        <ins>$85</ins>
                      </div>
                      <div className='pro-mobile-buttons d-lg-none d-xl-none'>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <div className='product'>
                  <article>
                    <div className='pro-icons mobile-pro-icons d-lg-none d-xl-none'>
                      <Link to='/wishlist' className='icon active swipe-to-top'>
                        <i className='fas fa-heart' />
                      </Link>
                      <div
                        className='icon swipe-to-top'
                        data-toggle='modal'
                        data-target='#quickViewModal'
                      >
                        <i className='fas fa-eye' />
                      </div>
                      <Link to='/compare' className='icon swipe-to-top'>
                        <i
                          className='fas fa-align-right'
                          data-fa-transform='rotate-90'
                        />
                      </Link>
                    </div>
                    <div className='pro-thumb '>
                      <div className='pro-tag'>NEW</div>
                      <Link to='/product-page1'>
                        <span className='pro-image'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                        <span className='pro-image-hover swipe-to-top  d-none d-lg-block d-xl-block'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                      </Link>
                      <div className='pro-buttons d-none d-lg-block d-xl-block'>
                        <div className='pro-icons'>
                          <Link
                            to='/wishlist'
                            className='icon active swipe-to-top'
                          >
                            <i className='fas fa-heart' />
                          </Link>
                          <div
                            className='icon swipe-to-top'
                            data-toggle='modal'
                            data-target='#quickViewModal'
                          >
                            <i className='fas fa-eye' />
                          </div>
                          <Link to='/compare' className='icon swipe-to-top'>
                            <i
                              className='fas fa-align-right'
                              data-fa-transform='rotate-90'
                            />
                          </Link>
                        </div>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className='pro-description'>
                      <span className='pro-info'>Rings</span>
                      <h2 className='pro-title'>
                        <Link to='/product-page1'>
                          Women Wedding Zircon Engagement Ring
                        </Link>
                      </h2>
                      <div className='pro-price'>
                        <del>$120</del>
                        <ins>$110</ins>
                      </div>
                      <div className='pro-mobile-buttons d-lg-none d-xl-none'>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <div className='product'>
                  <article>
                    <div className='pro-icons mobile-pro-icons d-lg-none d-xl-none'>
                      <Link to='/wishlist' className='icon active swipe-to-top'>
                        <i className='fas fa-heart' />
                      </Link>
                      <div
                        className='icon swipe-to-top'
                        data-toggle='modal'
                        data-target='#quickViewModal'
                      >
                        <i className='fas fa-eye' />
                      </div>
                      <Link to='/compare' className='icon swipe-to-top'>
                        <i
                          className='fas fa-align-right'
                          data-fa-transform='rotate-90'
                        />
                      </Link>
                    </div>
                    <div className='pro-thumb '>
                      <div className='pro-tag'>NEW</div>
                      <Link to='/product-page1'>
                        <span className='pro-image'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                        <span className='pro-image-hover swipe-to-top  d-none d-lg-block d-xl-block'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                      </Link>
                      <div className='pro-buttons d-none d-lg-block d-xl-block'>
                        <div className='pro-icons'>
                          <Link
                            to='/wishlist'
                            className='icon active swipe-to-top'
                          >
                            <i className='fas fa-heart' />
                          </Link>
                          <div
                            className='icon swipe-to-top'
                            data-toggle='modal'
                            data-target='#quickViewModal'
                          >
                            <i className='fas fa-eye' />
                          </div>
                          <Link to='/compare' className='icon swipe-to-top'>
                            <i
                              className='fas fa-align-right'
                              data-fa-transform='rotate-90'
                            />
                          </Link>
                        </div>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className='pro-description'>
                      <span className='pro-info'>Bangle</span>
                      <h2 className='pro-title'>
                        <Link to='/product-page1'>
                          Viennois Rose Gold Circle Bangle
                        </Link>
                      </h2>
                      <div className='pro-price'>
                        <del>$220</del>
                        <ins>$185</ins>
                      </div>
                      <div className='pro-mobile-buttons d-lg-none d-xl-none'>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <div className='product'>
                  <article>
                    <div className='pro-icons mobile-pro-icons d-lg-none d-xl-none'>
                      <Link to='/wishlist' className='icon active swipe-to-top'>
                        <i className='fas fa-heart' />
                      </Link>
                      <div
                        className='icon swipe-to-top'
                        data-toggle='modal'
                        data-target='#quickViewModal'
                      >
                        <i className='fas fa-eye' />
                      </div>
                      <Link to='/compare' className='icon swipe-to-top'>
                        <i
                          className='fas fa-align-right'
                          data-fa-transform='rotate-90'
                        />
                      </Link>
                    </div>
                    <div className='pro-thumb '>
                      <div className='pro-tag'>NEW</div>
                      <Link to='/product-page1'>
                        <span className='pro-image'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                        <span className='pro-image-hover swipe-to-top  d-none d-lg-block d-xl-block'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                      </Link>
                      <div className='pro-buttons d-none d-lg-block d-xl-block'>
                        <div className='pro-icons'>
                          <Link
                            to='/wishlist'
                            className='icon active swipe-to-top'
                          >
                            <i className='fas fa-heart' />
                          </Link>
                          <div
                            className='icon swipe-to-top'
                            data-toggle='modal'
                            data-target='#quickViewModal'
                          >
                            <i className='fas fa-eye' />
                          </div>
                          <Link to='/compare' className='icon swipe-to-top'>
                            <i
                              className='fas fa-align-right'
                              data-fa-transform='rotate-90'
                            />
                          </Link>
                        </div>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className='pro-description'>
                      <span className='pro-info'>Bracelet</span>
                      <h2 className='pro-title'>
                        <Link to='/product-page1'>
                          Bracelet for Women Metal Chain
                        </Link>
                      </h2>
                      <div className='pro-price'>
                        <del>$140</del>
                        <ins>$81</ins>
                      </div>
                      <div className='pro-mobile-buttons d-lg-none d-xl-none'>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <div className='product'>
                  <article>
                    <div className='pro-icons mobile-pro-icons d-lg-none d-xl-none'>
                      <Link to='/wishlist' className='icon active swipe-to-top'>
                        <i className='fas fa-heart' />
                      </Link>
                      <div
                        className='icon swipe-to-top'
                        data-toggle='modal'
                        data-target='#quickViewModal'
                      >
                        <i className='fas fa-eye' />
                      </div>
                      <Link to='/compare' className='icon swipe-to-top'>
                        <i
                          className='fas fa-align-right'
                          data-fa-transform='rotate-90'
                        />
                      </Link>
                    </div>
                    <div className='pro-thumb '>
                      <div className='pro-tag'>NEW</div>
                      <Link to='/product-page1'>
                        <span className='pro-image'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                        <span className='pro-image-hover swipe-to-top  d-none d-lg-block d-xl-block'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                      </Link>
                      <div className='pro-buttons d-none d-lg-block d-xl-block'>
                        <div className='pro-icons'>
                          <Link
                            to='/wishlist'
                            className='icon active swipe-to-top'
                          >
                            <i className='fas fa-heart' />
                          </Link>
                          <div
                            className='icon swipe-to-top'
                            data-toggle='modal'
                            data-target='#quickViewModal'
                          >
                            <i className='fas fa-eye' />
                          </div>
                          <Link to='/compare' className='icon swipe-to-top'>
                            <i
                              className='fas fa-align-right'
                              data-fa-transform='rotate-90'
                            />
                          </Link>
                        </div>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className='pro-description'>
                      <span className='pro-info'>Crown</span>
                      <h2 className='pro-title'>
                        <Link to='/product-page1'>
                          Gold Rhinestone Pageant Crown
                        </Link>
                      </h2>
                      <div className='pro-price'>
                        <del>$120</del>
                        <ins>$85</ins>
                      </div>
                      <div className='pro-mobile-buttons d-lg-none d-xl-none'>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <div className='product'>
                  <article>
                    <div className='pro-icons mobile-pro-icons d-lg-none d-xl-none'>
                      <Link to='/wishlist' className='icon active swipe-to-top'>
                        <i className='fas fa-heart' />
                      </Link>
                      <div
                        className='icon swipe-to-top'
                        data-toggle='modal'
                        data-target='#quickViewModal'
                      >
                        <i className='fas fa-eye' />
                      </div>
                      <Link to='/compare' className='icon swipe-to-top'>
                        <i
                          className='fas fa-align-right'
                          data-fa-transform='rotate-90'
                        />
                      </Link>
                    </div>
                    <div className='pro-thumb '>
                      <div className='pro-tag'>NEW</div>
                      <Link to='/product-page1'>
                        <span className='pro-image'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                        <span className='pro-image-hover swipe-to-top  d-none d-lg-block d-xl-block'>
                          <img className='img-fluid' src={img1} alt='Product' />
                        </span>
                      </Link>
                      <div className='pro-buttons d-none d-lg-block d-xl-block'>
                        <div className='pro-icons'>
                          <Link
                            to='/wishlist'
                            className='icon active swipe-to-top'
                          >
                            <i className='fas fa-heart' />
                          </Link>
                          <div
                            className='icon swipe-to-top'
                            data-toggle='modal'
                            data-target='#quickViewModal'
                          >
                            <i className='fas fa-eye' />
                          </div>
                          <Link to='/compare' className='icon swipe-to-top'>
                            <i
                              className='fas fa-align-right'
                              data-fa-transform='rotate-90'
                            />
                          </Link>
                        </div>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className='pro-description'>
                      <span className='pro-info'>Necklace</span>
                      <h2 className='pro-title'>
                        <Link to='/product-page1'>
                          Hollow Heart Pendant Necklace for Women
                        </Link>
                      </h2>
                      <div className='pro-price'>
                        <ins>$85</ins>
                      </div>
                      <div className='pro-mobile-buttons d-lg-none d-xl-none'>
                        <button
                          type='button'
                          className='btn btn-secondary btn-block swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Modal */}
      <div
        className='modal fade'
        id='quickViewModal'
        tabIndex={-1}
        role='dialog'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-12 col-md-6'>
                    <div className='row '>
                      <div
                        id='quickViewCarousel'
                        className='carousel slide'
                        data-ride='carousel'
                      >
                        {/* The slideshow */}
                        <div className='carousel-inner'>
                          <div className='carousel-item active'>
                            <img
                              className='img-fluid'
                              src={img1}
                              alt='Product_image_01'
                            />
                          </div>
                          <div className='carousel-item'>
                            <img
                              className='img-fluid'
                              src={img1}
                              alt='Product_image_01'
                            />
                          </div>
                          <div className='carousel-item'>
                            <img
                              className='img-fluid'
                              src={img1}
                              alt='Product_image_01'
                            />
                          </div>
                          <div className='carousel-item'>
                            <img
                              className='img-fluid'
                              src={img1}
                              alt='Product_image_01'
                            />
                          </div>
                        </div>
                        {/* Left and right controls */}
                        <a
                          className='carousel-control-prev'
                          href='#quickViewCarousel'
                          data-slide='prev'
                        >
                          <span className='fas fa-angle-left ' />
                        </a>
                        <a
                          className='carousel-control-next'
                          href='#quickViewCarousel'
                          data-slide='next'
                        >
                          <span className='fas fa-angle-right ' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className='pro-description'>
                      <h2 className='pro-title'>
                        Stylish Necklace Women Kolye Heart
                      </h2>
                      <div className='pro-price'>
                        <del>$120</del>
                        <ins>$110</ins>
                      </div>
                      <div className='pro-infos'>
                        <div className='pro-single-info'>
                          <b>Product ID :</b>1004
                        </div>
                        <div className='pro-single-info'>
                          <b>Categroy :</b>
                          <Link to='#'>Rings</Link>
                        </div>
                        <div className='pro-single-info'>
                          <b>Tags :</b>
                          <ul>
                            <li>
                              <Link to='#'>bracelets</Link>
                            </li>
                            <li>
                              <Link to='#'>diamond</Link>
                            </li>
                            <li>
                              <Link to='#'>ring</Link>
                            </li>
                          </ul>
                        </div>
                        <div className='pro-single-info'>
                          <b>Available :</b>
                          <span className='text-secondary'>InStock</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor.
                      </p>
                      <div className='pro-counter'>
                        <div className='input-group item-quantity'>
                          <input
                            type='text'
                            id='quantity2'
                            name='quantity'
                            className='form-control '
                            defaultValue={10}
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
                        <button
                          type='button'
                          className='btn btn-secondary btn-lg swipe-to-top'
                          onclick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
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
                <span aria-hidden='true'>×</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Mobile */}
      <Footer2 />
    </Fragment>
  );
};
//}

ProductPage1.propTypes = {
  //setAlert: PropTypes.func.isRequired,
  getProductById: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  Message: PropTypes.string,
  Product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  Message: state.product.message,
  Product: state.product.product
});

export default connect(
  mapStateToProps,
  { getProductById }
)(ProductPage1);

//export default ProductPage1;
