import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadScript } from '../utils/loadScripts';
import Footer2 from '../layout/Footer_2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllProducts } from '../../actions/product';
import { SERVER_URI } from '../utils/config';

const ShopPage1 = props => {
  // UNSAFE_componentWillMount(){
  //   loadScript();
  // }
  // render(){

  const [formData, setFormData] = useState({
    page_number: 1,
    language_id: 1,
    currency_code: 'usd'
  });

  const { page_number, language_id, currency_code } = formData;

  useEffect(() => {
    props.getAllProducts({ page_number, language_id, currency_code });
    loadScript();
  }, []);

  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con" /> */}
      {/* Shop Page One content */}
      <div className='container-fuild'>
        <nav aria-label='breadcrumb'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='#'>Home</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Shop
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <section className='pro-content shop-content shop-special'>
        <div className='container'>
          <div className='row'>
            <div className='pro-heading-title'>
              <h1>Shop Page</h1>
            </div>
          </div>
          <div className='products-area'>
            <div className='top-bar'>
              <div className='row'>
                <div className='col-12 col-lg-12'>
                  <div className='row'>
                    <div className='col-12 col-lg-2'>
                      <div className='block'>
                        <label>Display</label>
                        <label>
                          <a href='javascript:void(0);' id='grid_4column'>
                            <i className='fas fa-th-large' />
                          </a>
                          <a href='javascript:void(0);' id='list_4column'>
                            <i className='fas fa-list' />
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                      <form className='form-inline justify-content-center'>
                        <div className='form-group mx-sm-1'>
                          <select className='form-control '>
                            <option selected>Select Categories</option>
                            <option value={1}>Rings</option>
                            <option value={1}>Earrings</option>
                            <option value={1}>Crowns</option>
                            <option value={1}>Necklace</option>
                          </select>
                        </div>
                        <div className='form-group mx-sm-1 '>
                          <select className='form-control '>
                            <option selected>Price Range</option>
                            <option value={1}>1500-2500</option>
                          </select>
                        </div>
                        <div className='form-group mx-sm-1 '>
                          <select className='form-control '>
                            <option selected>Select Size</option>
                            <option value={1}>Large</option>
                            <option value={1}>Small</option>
                            <option value={1}>Medium</option>
                          </select>
                        </div>
                        <div className='form-group mx-sm-1'>
                          <select className='form-control '>
                            <option selected>Brands</option>
                            <option value={1}>Cartier</option>
                            <option value={1}>Chopard</option>
                            <option value={1}>Graf</option>
                            <option value={1}>Buccellati</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div className='col-12 col-lg-4'>
                      <form className='form-inline justify-content-center'>
                        <label>Sort by</label>
                        <div className='form-group'>
                          <select className='form-control '>
                            <option selected>Newest</option>
                            <option value={1}>Old</option>
                          </select>
                        </div>
                        <label>Items</label>
                        <div className='form-group'>
                          <select className='form-control '>
                            <option selected>15</option>
                            <option value={1}>1</option>
                          </select>
                        </div>
                        <label>per page</label>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div id='swap' className='col-12 col-sm-12'>
                <div className='row'>
                  {props.allProduct !== undefined && props.allProduct.length > 0
                    ? props.allProduct.slice(0, 8).map((product, index) => {
                        return (
                          <div
                            className='col-12 col-sm-6 col-md-4 col-lg-3'
                            key={index}
                          >
                            <div className='product'>
                              <article>
                                <div className='pro-thumb '>
                                  <div className='pro-icons mobile-pro-icons d-lg-none d-xl-none'>
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
                                    <Link
                                      to='/compare'
                                      className='icon swipe-to-top'
                                    >
                                      <i
                                        className='fas fa-align-right'
                                        data-fa-transform='rotate-90'
                                      />
                                    </Link>
                                  </div>
                                  <Link
                                    to={'/product-page1/' + product.products_id}
                                  >
                                    <span className='pro-image'>
                                      <img
                                        className='img-fluid'
                                        src={
                                          SERVER_URI + product.products_image
                                        }
                                        alt='Product'
                                      />
                                    </span>
                                    <span className='pro-image-hover swipe-to-top  d-none d-lg-block d-xl-block'>
                                      <img
                                        className='img-fluid'
                                        src={
                                          SERVER_URI + product.products_image
                                        }
                                        alt='Product'
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
                                      <Link
                                        to='/compare'
                                        className='icon swipe-to-top'
                                      >
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
                                  <span className='pro-info'>
                                    {product.categories[0].categories_name}
                                  </span>
                                  <h2 className='pro-title'>
                                    <Link
                                      to={
                                        '/product-page1/' + product.products_id
                                      }
                                    >
                                      {product.products_name}
                                    </Link>
                                  </h2>
                                  <div className='pro-price'>
                                    <ins>${product.products_price}</ins>
                                  </div>
                                  <div className='list2'>
                                    <div className='pro-options'>
                                      <div className='color-selection'>
                                        <h4>
                                          Color: <span>Silver</span>
                                        </h4>
                                        <ul>
                                          <li className='active'>
                                            <a
                                              className='green '
                                              href='javascript:void(0);'
                                              tabIndex={0}
                                            />
                                          </li>
                                          <li>
                                            <a
                                              className='red '
                                              href='javascript:void(0);'
                                              tabIndex={0}
                                            />
                                          </li>
                                          <li>
                                            <a
                                              className='yellow '
                                              href='javascript:void(0);'
                                              tabIndex={0}
                                            />
                                          </li>
                                        </ul>
                                      </div>
                                      <div className='size-selection'>
                                        <h4>
                                          Size: <span>28</span>
                                        </h4>
                                        <ul>
                                          <li className='active'>
                                            <a
                                              href='javascript:void(0);'
                                              tabIndex={0}
                                            >
                                              28
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href='javascript:void(0);'
                                              tabIndex={0}
                                            >
                                              32
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href='javascript:void(0);'
                                              tabIndex={0}
                                            >
                                              36
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
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
                        );
                      })
                    : 'null'}
                </div>
              </div>
            </div>
          </div>
          <div className='pagination justify-content-between '>
            <label className='col-form-label'>
              Showing 1–<span className='showing_record'>1</span>&nbsp;of&nbsp;
              <span className='showing_total_record'>23</span>&nbsp;results.
            </label>
            <div className='col-12 col-sm-6'>
              <ol className='loader-page'>
                <li className='loader-page-item '>
                  <Link to='#'>
                    <i
                      className='fa fa-angle-double-left '
                      style={{ fontSize: 12 }}
                    />
                  </Link>
                </li>
                <li className='loader-page-item '>
                  <Link to='#'>1</Link>
                </li>
                <li className='loader-page-item '>
                  <Link to='#'>2</Link>
                </li>
                <li className='loader-page-item '>
                  <Link to='#'>3</Link>
                </li>
                <li className='loader-page-item '>
                  <Link to='#'>4</Link>
                </li>
                <li className='loader-page-item '>
                  <Link to='#'>
                    <i
                      className='fa fa-angle-double-right '
                      style={{ fontSize: 12 }}
                    />
                  </Link>
                </li>
              </ol>
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
                              src='assets/images/gallery/preview/Product_image_01.jpg'
                              alt='Product'
                            />
                          </div>
                          <div className='carousel-item'>
                            <img
                              className='img-fluid'
                              src='assets/images/gallery/preview/Product_image_02.jpg'
                              alt='Product'
                            />
                          </div>
                          <div className='carousel-item'>
                            <img
                              className='img-fluid'
                              src='assets/images/gallery/preview/Product_image_03.jpg'
                              alt='Product'
                            />
                          </div>
                          <div className='carousel-item'>
                            <img
                              className='img-fluid'
                              src='assets/images/gallery/preview/Product_image_04.jpg'
                              alt='Product'
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

ShopPage1.propTypes = {
  //setAlert: PropTypes.func.isRequired,
  getAllProducts: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  Message: PropTypes.string,
  allProduct: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  Message: state.product.message,
  allProduct: state.product.allProduct
});

export default connect(
  mapStateToProps,
  { getAllProducts }
)(ShopPage1);
