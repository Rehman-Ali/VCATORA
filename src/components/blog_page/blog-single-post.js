import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { loadScript } from '../utils/loadScripts';
import Footer2 from '../layout/Footer_2';

class BlogSinglePost extends Component {
  UNSAFE_componentWillMount() {
    loadScript();
  }
  render() {
    return (
      <Fragment>
        {/* Paste this code after body tag */}
        <div className='se-pre-con' />
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
                <h1>Blog Single Page</h1>
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
                            className='img-fluid'
                            src='assets/images/blogs/blog_post_1.jpg'
                            alt='Thumbnail'
                          />
                        </div>
                        <span>18th October</span>
                        <h1>
                          <Link to='#'>
                            Woman wearing Silver-colore ring pendant necklaces
                          </Link>
                          <br />
                        </h1>
                        <p className='text-wrap'>
                          orem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed sit amet diam tristique, porttitor metus in,
                          vehicula nisl. Vestibulum vel urna vel dolor euismod
                          placerat. Nam at ex euismod, accumsan velit ut,
                          pretium mi. Fusce sit amet consequat nisi, vitae
                          venenatis leo. Duis pellentesque vulputate commodo.
                          Vivamus vel ligula fermentum, malesuada augue ut,
                          luctus lacus. Donec lacinia scelerisque magna eu
                          malesuada. Pellentesque mollis finibus massa. Donec
                          sed ultricies ex. Phasellus vel lorem eget nulla
                          sagittis posuere.
                          <br />
                          Sed convallis magna in tortor fermentum, sit amet
                          accumsan diam malesuada. Aliquam urna turpis, sodales
                          et tempor nec, dignissim eu odio. Vivamus et mattis
                          urna. Praesent ullamcorper ut est non lobortis.
                          Praesent dignissim et erat a luctus. Pellentesque
                          imperdiet, lacus quis euismod elementum, est quam
                          sagittis tellus, sit amet ullamcorper erat nibh a
                          dolor. Proin tincidunt eu sapien quis sollicitudin. In
                          a turpis sed tortor semper imperdiet. Duis eu interdum
                          enim.
                          <br />
                          Donec rutrum nunc eros. Vivamus eu massa dignissim,
                          interdum dolor ac, commodo nibh. Phasellus ipsum
                          justo, ullamcorper nec fringilla ut, condimentum vel
                          elit. Mauris tincidunt dui eu velit dapibus, tempor
                          blandit massa accumsan. Sed vitae ante ultricies,
                          dapibus diam at, congue quam. Aliquam at eros turpis.
                          Sed molestie feugiat tristique. Duis molestie eu
                          tortor ut pretium. Duis risus felis, pretium ut porta
                          id, mattis a tellus. Quisque convallis urna in
                          pharetra cursus. Maecenas vitae vulputate lorem.
                          Vivamus vestibulum imperdiet lacus, sit amet vehicula
                          justo placerat non. Maecenas cursus lorem nibh, a
                          efficitur nulla facilisis in.
                          <br />
                          Curabitur ac quam sed neque mattis fringilla. Proin
                          arcu justo, vehicula ac eros placerat, efficitur
                          scelerisque eros. Nulla ut mollis enim. Proin lobortis
                          aliquet ultrices. Donec varius sem ut feugiat
                          convallis. Aliquam sodales nibh pulvinar risus
                          aliquam, vitae consectetur dolor efficitur.
                          Suspendisse aliquam dolor eget nulla finibus tincidunt
                          eget in eros. Integer pharetra posuere dolor in
                          aliquet. Nulla nec gravida dolor. Mauris imperdiet
                          quis risus sed consectetur. Aenean in ante ultrices
                          dui elementum interdum ac in nunc. Etiam aliquet
                          accumsan nunc ac rhoncus. Vivamus auctor lectus sed
                          sem rhoncus, id dignissim risus fermentum. Duis at
                          libero porta, pharetra neque at, egestas est. Praesent
                          sem odio, fermentum eu suscipit in, sollicitudin quis
                          libero.
                        </p>
                        <h2>sit amet accumsan diam malesuada.</h2>
                        <p className='text-wrap'>
                          orem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed sit amet diam tristique, porttitor metus in,
                          vehicula nisl. Vestibulum vel urna vel dolor euismod
                          placerat. Nam at ex euismod, accumsan velit ut,
                          pretium mi. Fusce sit amet consequat nisi, vitae
                          venenatis leo. Duis pellentesque vulputate commodo.
                          Vivamus vel ligula fermentum, malesuada augue ut,
                          luctus lacus. Donec lacinia scelerisque magna eu
                          malesuada. Pellentesque mollis finibus massa. Donec
                          sed ultricies ex. Phasellus vel lorem eget nulla
                          sagittis posuere.
                          <br />
                          Sed convallis magna in tortor fermentum, sit amet
                          accumsan diam malesuada. Aliquam urna turpis, sodales
                          et tempor nec, dignissim eu odio. Vivamus et mattis
                          urna. Praesent ullamcorper ut est non lobortis.
                          Praesent dignissim et erat a luctus. Pellentesque
                          imperdiet, lacus quis euismod elementum, est quam
                          sagittis tellus, sit amet ullamcorper erat nibh a
                          dolor. Proin tincidunt eu sapien quis sollicitudin. In
                          a turpis sed tortor semper imperdiet. Duis eu interdum
                          enim. Donec rutrum nunc eros. Vivamus eu massa
                          dignissim, interdum dolor ac, commodo nibh. Phasellus
                          ipsum justo, ullamcorper nec fringilla ut, condimentum
                          vel elit. Mauris tincidunt dui eu velit dapibus,
                          tempor blandit massa accumsan. Sed vitae ante
                          ultricies, dapibus diam at, congue quam. Aliquam at
                          eros turpis. Sed molestie feugiat tristique. Duis
                          molestie eu tortor ut pretium. Duis risus felis,
                          pretium ut porta id, mattis a tellus. Quisque
                          convallis urna in pharetra cursus. Maecenas vitae
                          vulputate lorem. Vivamus vestibulum imperdiet lacus,
                          sit amet vehicula justo placerat non. Maecenas cursus
                          lorem nibh, a efficitur nulla facilisis in.
                        </p>
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
                        <Link to='#'>
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
                        <Link to='#'>
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
                        <Link to='#'>
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
                        <Link to='#'>
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
                        <Link to='#'>
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
                        <Link to='#'>
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

export default BlogSinglePost;
