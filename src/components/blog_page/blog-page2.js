import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { loadScript } from '../utils/loadScripts';
import Footer2 from '../layout/Footer';

class BlogPage2 extends Component {
  UNSAFE_componentWillMount() {
    loadScript();
  }
  render() {
    return (
      <Fragment>
        {/* Paste this code after body tag */}
        {/* <div className="se-pre-con" /> */}
        {/* //Header Style One */}

        {/* Site Content */}
        <div className='container-fuild'>
          <nav aria-label='breadcrumb'>
            <div className='container'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <Link to='#'>Home</Link>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  Blog
                </li>
              </ol>
            </div>
          </nav>
        </div>
        <section className='pro-content blog-content'>
          <div className='container'>
            <div className='row'>
              <div className='pro-heading-title'>
                <h1>Blog Page</h1>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-lg-8'>
                <div className='blog-area'>
                  <div className='row'>
                    <div className='col-12 col-sm-12'>
                      <div className='blog'>
                        <div className='blog-thumbnail'>
                          <img
                            className='img-thumbnail'
                            src='assets/images/blogs/blog_post_1.jpg'
                            alt='Thumbnail'
                          />
                        </div>
                        <h4>
                          <Link to='/blog-single-post'>
                            Woman wearing Silver-colore ring pendant necklaces
                          </Link>
                          <br />
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,
                          voluptatem.
                          <span>18th October</span>
                        </p>
                      </div>
                    </div>
                    <div className='col-12 col-sm-12'>
                      <div className='blog'>
                        <div className='blog-thumbnail'>
                          <img
                            className='img-thumbnail'
                            src='assets/images/blogs/blog_post_2.jpg'
                            alt='Thumbnail'
                          />
                        </div>
                        <h4>
                          <Link to='/blog-single-post'>
                            White gold engagement rings for couples
                          </Link>
                          <br />
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,
                          voluptatem.
                          <span>18th October</span>
                        </p>
                      </div>
                    </div>
                    <div className='col-12 col-sm-12'>
                      <div className='blog'>
                        <div className='blog-thumbnail'>
                          <img
                            className='img-thumbnail'
                            src='assets/images/blogs/blog_post_3.jpg'
                            alt='Thumbnail'
                          />
                        </div>
                        <h4>
                          <Link to='/blog-single-post'>
                            Shallow focus photo of person putting gold-colored
                            ring
                          </Link>
                          <br />
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,
                          voluptatem.
                          <span>18th October</span>
                        </p>
                      </div>
                    </div>
                    <div className='col-12 col-sm-12'>
                      <div className='blog'>
                        <div className='blog-thumbnail'>
                          <img
                            className='img-thumbnail'
                            src='assets/images/blogs/blog_post_4.jpg'
                            alt='Thumbnail'
                          />
                        </div>
                        <h4>
                          <Link to='/blog-single-post'>
                            Pearl necklace jewelry treasure box
                          </Link>
                          <br />
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,
                          voluptatem.
                          <span>18th October</span>
                        </p>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='pagination justify-content-between '>
                        <label className='col-form-label'>
                          Showing 1–<span className='showing_record'>1</span>
                          &nbsp;of&nbsp;
                          <span className='showing_total_record'>23</span>
                          &nbsp;results.
                        </label>
                        <div className='col-12 col-sm-6'>
                          <ol className='loader-page'>
                            <li className='loader-page-item'>
                              <Link to='/index'>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4  d-lg-block d-xl-block blog-menu'>
                <div className='block'>
                  <div className='pro-heading-subtitle'>
                    <h4>Recent Posts</h4>
                  </div>
                  <div className='media'>
                    <img
                      src='assets/images/miscellaneous/avatar.jpg'
                      alt='Avatar'
                      style={{ width: 68, height: 68 }}
                    />
                    <div className='media-body'>
                      <h6>
                        <Link to='/blog-single-post'>
                          Gold bangle is worn on top of the engagement band
                        </Link>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </p>
                    </div>
                  </div>
                  <div className='media'>
                    <img
                      src='assets/images/miscellaneous/avatar.jpg'
                      alt='Avatar'
                      style={{ width: 68, height: 68 }}
                    />
                    <div className='media-body'>
                      <h6>
                        <Link to='/blog-single-post'>
                          Woman wearing all kind of silver colore jewelery
                        </Link>
                      </h6>
                      <p>
                        Lorem ipsum sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className='media'>
                    <img
                      src='assets/images/miscellaneous/avatar.jpg'
                      alt='Avatar'
                      style={{ width: 68, height: 68 }}
                    />
                    <div className='media-body'>
                      <h6>
                        <Link to='/blog-single-post'>
                          White gold engagement rings for couples
                        </Link>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='block'>
                  <div className='pro-heading-subtitle'>
                    <h4>Latest Comments</h4>
                  </div>
                  <div className='media'>
                    <i className='fas fa-comments' />
                    <div className='media-body'>
                      <p>
                        <Link to='/blog-single-post'>
                          Lorem ipsum dolor sit amet, consectetur aliqua.
                        </Link>
                      </p>
                      <span>
                        <i className='far fa-clock' />
                        Dec,25,2019
                      </span>
                    </div>
                  </div>
                  <div className='media'>
                    <i className='fas fa-comments' />
                    <div className='media-body'>
                      <p>
                        <Link to='/blog-single-post'>
                          Lorem ipsum dolor sit amet, ut labore et dolore magna
                          aliqua.
                        </Link>
                      </p>
                      <span>
                        <i className='far fa-clock' />
                        Dec,25,2019
                      </span>
                    </div>
                  </div>
                  <div className='media'>
                    <i className='fas fa-comments' />
                    <div className='media-body'>
                      <p>
                        <Link to='/blog-single-post'>
                          Adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </Link>
                      </p>
                      <span>
                        <i className='far fa-clock' />
                        Dec,25,2019
                      </span>
                    </div>
                  </div>
                </div>
                <div className='block'>
                  <div className='pro-socials'>
                    <h4>Stay Connected</h4>
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
        </section>
        {/* Footer Mobile */}
        <Footer2 />
      </Fragment>
    );
  }
}
export default BlogPage2;
