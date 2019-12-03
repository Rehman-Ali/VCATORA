import React, { Fragment, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { loadCss, loadScript } from '../utils/loadScripts';



class Home_3 extends Component {
  
  componentWillMount() {
    loadCss();
  }
  componentDidMount() {
    loadScript();
  }
  
  render() {
    return (
      <Fragment>
        {/* Paste this code after body tag */}
        {/* <div className="se-pre-con" /> */}

        {/* Revolution Layer Slider */}
        <div className='carousel-content carousel-content-home-page-3'>
          <div className='container-fuild'>
            <div
              id='rev_slider_1077_1_wrapper'
              className='rev_slider_wrapper fullscreen-container'
              data-alias='scroll-effect136'
              data-source='gallery'
              style={{ padding: 0 }}
            >
              {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
              <div
                id='rev_slider_1077_1'
                className='rev_slider fullscreenbanner'
                style={{ display: 'none' }}
                data-version='5.4.1'
              >
                <ul>
                  {/* SLIDE  */}
                  <li
                    data-index='rs-3044'
                    data-transition='slideoverhorizontal'
                    data-slotamount='default'
                    data-hideafterloop={0}
                    data-hideslideonmobile='off'
                    data-easein='Power4.easeInOut'
                    data-easeout='Power4.easeInOut'
                    data-masterspeed={1000}
                    data-thumb
                    data-rotate={0}
                    data-saveperformance='off'
                    data-title='Beauty Here'
                    data-param1
                    data-param2
                    data-param3
                    data-param4
                    data-param5
                    data-param6
                    data-param7
                    data-param8
                    data-param9
                    data-param10
                    data-description
                  >
                    {/* MAIN IMAGE */}
                    <img
                      src='assets/images/revolution_layer_slider_demo_3/Slider_01_03.jpg'
                      alt="slider"
                      data-bgposition='center center'
                      data-bgfit='cover'
                      data-bgrepeat='no-repeat'
                      data-bgparallax={10}
                      className='rev-slidebg'
                      data-no-retina
                    />
                    {/* LAYERS */}
                    <div className='container' style={{ position: 'relative' }}>
                      {/* LAYER NR. 7 */}
                      <div
                        className='tp-caption BigBold-Title   tp-resizeme'
                        id='slide-3044-layer-1'
                        data-x="['left','left','left','right']"
                        data-hoffset="['600','300','300','20']"
                        data-y="['top','top','top','top']"
                        data-voffset="['110','40','30','20']"
                        data-fontsize="['70','50','40','30']"
                        data-lineheight="['120','90','60','30']"
                        data-width="['none','none','none','400']"
                        data-height='none'
                        data-whitespace="['nowrap','nowrap','nowrap','normal']"
                        data-type='text'
                        data-basealign='slide'
                        data-responsive_offset='off'
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];","speed":1500,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;","ease":"Power2.easeInOut"}]'
                        data-textalign="['left','left','left','right']"
                        data-paddingtop='[10,10,10,10]'
                        data-paddingright='[0,0,0,0]'
                        data-paddingbottom='[0,0,10,10]'
                        data-paddingleft='[0,0,0,0]'
                        style={{
                          zIndex: 6,
                          color: '#212121',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Jeans New Arrival
                      </div>
                      {/* LAYER NR. 8 */}
                      <div
                        className='tp-caption BigBold-SubTitle  '
                        id='slide-3044-layer-2'
                        data-x="['left','left','left','right']"
                        data-hoffset="['600','300','300','20']"
                        data-y="['top','top','top','top']"
                        data-voffset="['230','110','110','60']"
                        data-fontsize="['22','15','18','16']"
                        data-lineheight="['24','24','24','20']"
                        data-width="['410','410','410','280']"
                        data-height="['60','100','100','50']"
                        data-whitespace='normal'
                        data-type='text'
                        data-basealign='slide'
                        data-responsive_offset='off'
                        data-responsive='off'
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"}]'
                        data-textalign="['left','left','left','right']"
                        data-paddingtop='[0,0,0,0]'
                        data-paddingright='[0,0,0,0]'
                        data-paddingbottom='[0,0,0,0]'
                        data-paddingleft='[0,0,0,0]'
                        style={{
                          zIndex: 7,
                          whiteSpace: 'normal',
                          color: '#212121'
                        }}
                      >
                        Fine weather all year round
                      </div>
                      {/* LAYER NR. 9 */}
                      <div
                        className='tp-caption BigBold-Button rev-btn swipe-to-top'
                        id='slide-3044-layer-3'
                        data-x="['left','left','left','right']"
                        data-hoffset="['600','300','300','20']"
                        data-y="['top','top','top','top']"
                        data-voffset="['300','170','170','120']"
                        data-width="['180','none','none','none']"
                        data-height='none'
                        data-whitespace='nowrap'
                        data-type='button'
                        data-actions='[{"event":"click","action":"simplelink","target": "_self","url":"shop-page2.html"}]'
                        data-basealign='slide'
                        data-responsive_offset='off'
                        data-responsive='off'
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
                        data-textalign="['left','left','left','right']"
                        data-paddingtop='[15,15,15,15]'
                        data-paddingright='[50,50,50,50]'
                        data-paddingbottom='[15,15,15,15]'
                        data-paddingleft='[50,50,50,50]'
                        style={{
                          zIndex: 8,
                          whiteSpace: 'nowrap',
                          outline: 'none',
                          boxSizing: 'border-box',
                          MozBoxSizing: 'border-box',
                          WebkitBoxSizing: 'border-box',
                          cursor: 'pointer'
                        }}
                      >
                        Shop Now
                      </div>
                    </div>
                  </li>
                  {/* SLIDE  */}
                  <li
                    data-index='rs-3043'
                    data-transition='slideoverhorizontal'
                    data-slotamount='default'
                    data-hideafterloop={0}
                    data-hideslideonmobile='off'
                    data-easein='Power4.easeInOut'
                    data-easeout='Power4.easeInOut'
                    data-masterspeed={1000}
                    data-thumb
                    data-rotate={0}
                    data-saveperformance='off'
                    data-title='NEW ELEGENCE'
                    data-param1
                    data-param2
                    data-param3
                    data-param4
                    data-param5
                    data-param6
                    data-param7
                    data-param8
                    data-param9
                    data-param10
                    data-description
                  >
                    {/* MAIN IMAGE */}
                    <img
                      src='assets/images/revolution_layer_slider_demo_3/Slider_01_02.jpg'
                      alt="slider"
                      data-bgposition='center center'
                      data-bgfit='cover'
                      data-bgparallax={10}
                      className='rev-slidebg'
                      data-no-retina
                    />
                    {/* LAYERS */}
                    <div className='container' style={{ position: 'relative' }}>
                      {/* LAYER NR. 4 */}
                      <div
                        className='tp-caption BigBold-Title   tp-resizeme'
                        id='slide-3043-layer-1'
                        data-x="['left','center','left','left']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['top','top','top','top']"
                        data-voffset="['110','40','30','20']"
                        data-fontsize="['70','50','40','30']"
                        data-lineheight="['120','90','60','30']"
                        data-width="['100%','410','100%','100%']"
                        data-height='none'
                        data-whitespace="['nowrap','nowrap','nowrap','normal']"
                        data-type='text'
                        data-basealign='slide'
                        data-responsive_offset='off'
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop='[10,10,10,10]'
                        data-paddingright='[0,0,0,0]'
                        data-paddingbottom='[10,10,10,10]'
                        data-paddingleft='[0,0,0,0]'
                        style={{
                          zIndex: 11,
                          whiteSpace: 'nowrap',
                          color: '#fff'
                        }}
                      >
                        Women Fashion Collection
                      </div>
                      {/* LAYER NR. 5 */}
                      <div
                        className='tp-caption BigBold-SubTitle  '
                        id='slide-3043-layer-2'
                        data-x="['left','left','left','left']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['top','top','top','top']"
                        data-voffset="['230','110','110','60']"
                        data-fontsize="['22','20','18','16']"
                        data-lineheight="['24','24','24','20']"
                        data-width="['100%','100%','100%','100%']"
                        data-height="['60','100','100','50']"
                        data-whitespace='normal'
                        data-type='text'
                        data-basealign='slide'
                        data-responsive_offset='off'
                        data-responsive='off'
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"}]'
                        data-textalign="['center','center','center','center']"
                        data-paddingtop='[0,0,0,0]'
                        data-paddingright='[0,0,0,0]'
                        data-paddingbottom='[0,0,0,0]'
                        data-paddingleft='[0,0,0,0]'
                        style={{
                          zIndex: 12,
                          whiteSpace: 'normal',
                          color: '#fff'
                        }}
                      >
                        New Season dresses to update your wardrobe
                      </div>
                      {/* LAYER NR. 6 */}
                      <div
                        className='tp-caption BigBold-Button rev-btn swipe-to-top'
                        id='slide-3043-layer-3'
                        data-x="['left','center','left','left'] "
                        data-hoffset="['0','0','0','0']"
                        data-y="['top','top','top','top']"
                        data-voffset="['300','170','170','120']"
                        data-width="['180','none','none','none']"
                        data-height='none'
                        data-whitespace='nowrap'
                        data-type='button'
                        data-actions='[{"event":"click","action":"simplelink","target": "_self","url":"shop-page2.html"}]'
                        data-basealign='slide'
                        data-responsive_offset='off'
                        data-responsive='off'
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
                        data-textalign="['center','right','center','center']"
                        data-paddingtop='[15,15,15,15]'
                        data-paddingright='[50,50,50,50]'
                        data-paddingbottom='[15,15,15,15]'
                        data-paddingleft='[50,50,50,50]'
                        style={{
                          zIndex: 13,
                          whiteSpace: 'nowrap',
                          outline: 'none',
                          boxSizing: 'border-box',
                          MozBoxSizing: 'border-box',
                          WebkitBoxSizing: 'border-box',
                          cursor: 'pointer'
                        }}
                      >
                        Shop Now
                      </div>
                    </div>
                  </li>
                  {/* SLIDE  */}
                  <li
                    data-index='rs-3042'
                    data-transition='slideoverhorizontal'
                    data-slotamount='default'
                    data-hideafterloop={0}
                    data-hideslideonmobile='off'
                    data-easein='Power4.easeInOut'
                    data-easeout='Power4.easeInOut'
                    data-masterspeed={1000}
                    data-thumb
                    data-rotate={0}
                    data-fstransition='fade'
                    data-fsmasterspeed={1500}
                    data-fsslotamount={7}
                    data-saveperformance='off'
                    data-title='Big & Bold'
                    data-param1
                    data-param2
                    data-param3
                    data-param4
                    data-param5
                    data-param6
                    data-param7
                    data-param8
                    data-param9
                    data-param10
                    data-description
                  >
                    {/* MAIN IMAGE */}
                    <img
                      src='assets/images/revolution_layer_slider_demo_3/Slider_01_01.jpg'
                      alt="slider"
                      data-bgposition='center center'
                      data-bgfit='cover'
                      data-bgrepeat='no-repeat'
                      data-bgparallax={10}
                      className='rev-slidebg'
                      data-no-retina
                    />
                    {/* LAYERS */}
                    <div className='container' style={{ position: 'relative' }}>
                      {/* LAYER NR. 1 */}
                      <div
                        className='tp-caption BigBold-Title  tp-resizeme'
                        id='slide-3042-layer-1'
                        data-x="['left','left','left','left']"
                        data-hoffset="['23','23','18','20']"
                        data-y="['top','top','top','top']"
                        data-voffset="['110','40','30','20']"
                        data-fontsize="['70','50','40','30']"
                        data-lineheight="['120','90','60','30']"
                        data-width="['none','none','none','400']"
                        data-height='none'
                        data-whitespace="['nowrap','nowrap','nowrap','normal']"
                        data-type='text'
                        data-basealign='slide'
                        data-responsive_offset='off'
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];","speed":1500,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;","ease":"Power2.easeInOut"}]'
                        data-textalign="['left','left','left','left']"
                        data-paddingtop='[10,10,10,10]'
                        data-paddingright='[0,0,0,0]'
                        data-paddingbottom='[0,0,10,10]'
                        data-paddingleft='[0,0,0,0]'
                        style={{
                          zIndex: 6,
                          color: '#212121',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Stylish Sunglasses
                      </div>
                      {/* LAYER NR. 2 */}
                      <div
                        className='tp-caption BigBold-SubTitle  '
                        id='slide-3042-layer-2'
                        data-x="['left','left','left','left']"
                        data-hoffset="['23','23','18','20']"
                        data-y="['top','top','top','top']"
                        data-voffset="['230','110','110','60']"
                        data-fontsize="['22','20','18','16']"
                        data-lineheight="['24','24','24','20']"
                        data-width="['410','410','410','280']"
                        data-height="['60','100','100','50']"
                        data-whitespace='normal'
                        data-type='text'
                        data-basealign='slide'
                        data-responsive_offset='off'
                        data-responsive='off'
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"}]'
                        data-textalign="['left','left','left','left']"
                        data-paddingtop='[0,0,0,0]'
                        data-paddingright='[0,0,0,0]'
                        data-paddingbottom='[0,0,0,0]'
                        data-paddingleft='[0,0,0,0]'
                        style={{
                          zIndex: 7,
                          whiteSpace: 'normal',
                          color: '#212121'
                        }}
                      >
                        2019 Best Collections
                      </div>
                      {/* LAYER NR. 3 */}
                      <div
                        className='tp-caption BigBold-Button rev-btn swipe-to-top'
                        id='slide-3042-layer-3'
                        data-x="['left','left','left','left']"
                        data-hoffset="['23','23','18','20']"
                        data-y="['top','top','top','top']"
                        data-voffset="['300','170','170','120']"
                        data-width="['180','none','none','none']"
                        data-height='none'
                        data-whitespace='nowrap'
                        data-type='button'
                        data-actions='[{"event":"click","action":"simplelink","target": "_self","url":"shop-page2.html"}]'
                        data-basealign='slide'
                        data-responsive_offset='off'
                        data-responsive='off'
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
                        data-textalign="['center','left','left','left']"
                        data-paddingtop='[15,15,15,15]'
                        data-paddingright='[50,50,50,50]'
                        data-paddingbottom='[15,15,15,15]'
                        data-paddingleft='[50,50,50,50]'
                        style={{
                          zIndex: 8,
                          whiteSpace: 'nowrap',
                          outline: 'none',
                          boxSizing: 'border-box',
                          MozBoxSizing: 'border-box',
                          WebkitBoxSizing: 'border-box',
                          cursor: 'pointer'
                        }}
                      >
                        Shop Now
                      </div>
                    </div>
                  </li>
                </ul>
                <div
                  className='tp-bannertimer tp-bottom'
                  style={{ visibility: 'hidden !important' }}
                />{' '}
              </div>
            </div>
            {/* END REVOLUTION SLIDER */}
          </div>
        </div>
        {/* Products Tabs */}
        <section className='pro-content pro-tab-content '>
          <div className='container'>
            <div className='products-area'>
              <div className='row justify-content-center'>
                <div className='col-12 col-lg-6'>
                  <div className='pro-heading-title'>
                    <h1> Best Products</h1>
                  </div>
                </div>
              </div>
              {/* ..........tabs start ......... */}
              <div className='row '>
                <div className='col-md-12'>
                  <div className='nav' role='tablist' id='tabCarousel'>
                    <a
                      className='nav-link  active'
                      data-toggle='tab'
                      href='#all'
                      role='tab'
                      aria-controls='all'
                      aria-selected='true'
                    >
                      All Categories
                    </a>
                    <a
                      className='nav-link'
                      data-toggle='tab'
                      href='#all'
                      //href='#men'
                      role='tab'
                      aria-controls='men'
                      aria-selected='true'
                    >
                      Men Fashion
                    </a>
                    <a
                      className='nav-link'
                      data-toggle='tab'
                      href='#all'
                      //  href='#women'
                      role='tab'
                      aria-controls='women'
                      aria-selected='true'
                    >
                      Women Fashion
                    </a>
                    <a
                      className='nav-link'
                      data-toggle='tab'
                      href='#all'
                      //  href='#kids'
                      role='tab'
                      aria-controls='kids'
                      aria-selected='true'
                    >
                      Kids
                    </a>
                  </div>
                  {/* Tab panes */}
                  <div className='tab-content'>
                    <div
                      role='tabpanel'
                      className='tab-pane fade active show'
                      id='all'
                    >
                      <div className='tab-carousel-js row'>
                        <div className='col-12 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_06.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_06_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag bg-success'>NEW</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Winter Wear</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Printed chiffon coat
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <ins>$450</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_13.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_13_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Girl Dresses</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Princess Flower Girl Dress
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <ins>$85</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_11.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_11_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag'>Sale</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Tops</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Strip Tshirt for Women
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$120</del>
                                  <ins>$85</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_08.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_08_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag bg-success'>NEW</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Bottoms</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Double Tank Trouser
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$852</del>
                                  <ins>$452</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_01.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_01_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag bg-success'>NEW</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Men Jeans</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Carrot Fitt Jeans
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$120</del>
                                  <ins>$85</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                      {/* 1st tab */}
                    </div>
                    <div role='tabpanel' className='tab-pane fade' id='men'>
                      <div className='tab-carousel-js row'>
                        <div className='col-12 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_06.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_06_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag bg-primary'>
                                  Featured
                                </div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Winter Wear</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Printed chiffon coat
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <ins>$450</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_01.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_01_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag'>Sale</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Men Jeans</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Carrot Fitt Jeans
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$120</del>
                                  <ins>$85</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_04.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_04.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag bg-success'>NEW</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>T-Shirts</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Basketball Style Tshirt
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$50</del>
                                  <ins>$20</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_02_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Men Jeans</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Denim Jeans for Men
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <ins>$185</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_05.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_05_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag'>Sale</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Winter Wear</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Classic Curves Long Jacket
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$120</del>
                                  <ins>$85</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_03.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_03_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag bg-success'>NEW</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Shirts</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Men Polo Casual Shirt
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$90</del>
                                  <ins>$45</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                      {/* 2nd tab */}
                    </div>
                    <div role='tabpanel' className='tab-pane fade' id='women'>
                      <div className='tab-carousel-js row'>
                        <div className='col-12 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_07.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_07_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag'>Sale</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Bottoms</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Denim Skirt for Women
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$420</del>
                                  <ins>$342</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_12.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_12_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Winter Wear</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Straight Long Coat
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <ins>$455</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_11.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_11_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag bg-primary'>
                                  Featured
                                </div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Tops</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Strip Tshirt for Women
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$120</del>
                                  <ins>$85</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_08.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_08_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag bg-success'>NEW</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Bottoms</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Double Tank Trouser
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$852</del>
                                  <ins>$452</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_09.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_09_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag'>Sale</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Tops</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Flower Dress for Women
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$1000</del>
                                  <ins>$950</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_10.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_10_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag bg-success'>NEW</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Winter Wear</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Flowing blazer with rolled-up sleeves
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$800</del>
                                  <ins>$452</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                      {/* 3rd tab */}
                    </div>
                    <div role='tabpanel' className='tab-pane fade' id='kids'>
                      <div className='tab-carousel-js row'>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_13.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_13_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Girl Dresses</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Princess Flower Girl Dress
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <ins>$85</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_14.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_14_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag bg-success'>NEW</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Girl Dresses</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Bow Print Long Sleeve Princess Dress
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$20</del>
                                  <ins>$15</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_15.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_15_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag'>Sale</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Shoes</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Casual Breathable Outdoor Kids Sneakers
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$200</del>
                                  <ins>$175</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_16.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_16_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag bg-success'>NEW</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Shoes</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Kids Sport Shoes Boys
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$120</del>
                                  <ins>$85</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_17.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Boy Dresses</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Casual Tracksuit Children Boy
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <ins>$252</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                          <div className='product'>
                            <article>
                              <div className='pro-thumb '>
                                <Link to='/product-page1'>
                                  <span className='pro-image'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_18.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                  <span className='pro-image-hover swipe-to-top'>
                                    <img
                                      className='img-fluid'
                                      src='assets/images/product_images_demo_3/product_image_18_02.jpg'
                                      alt='Product'
                                    />
                                  </span>
                                </Link>
                                <div className='pro-buttons'>
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
                                  <Link
                                    to='/shop-page1'
                                    className='btn btn-secondary btn-block swipe-to-top'
                                  >
                                    Add to Cart
                                  </Link>
                                </div>
                                <div className='pro-tag bg-success'>NEW</div>
                              </div>
                              <div className='pro-description'>
                                <span className='pro-info'>Girl Dresses</span>
                                <h2 className='pro-title'>
                                  <Link to='/product-page1'>
                                    Cosplay Minnie Mouse Dress
                                  </Link>
                                </h2>
                                <div className='pro-price'>
                                  <del>$150</del>
                                  <ins>$120</ins>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                      {/* 4th tab */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner category */}
        <div className='pro-content categories-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-4'>
                <div className='banner-category swipe-to-top'>
                  <img
                    className='img-fluid'
                    src='assets/images/banners_demo_3/banner_1.jpg'
                    alt='Product'
                  />
                  <Link
                    to='#'
                    className='btn btn-secondary btn-lg swipe-to-top'
                  >
                    New
                  </Link>
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <div className='banner-category  swipe-to-top'>
                  <img
                    className='img-fluid'
                    src='assets/images/banners_demo_3/banner_2.jpg'
                    alt='Product'
                  />
                  <Link
                    to='#'
                    className='btn btn-secondary btn-lg swipe-to-top'
                  >
                    Trending
                  </Link>
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <div className='banner-category  swipe-to-top'>
                  <img
                    className='img-fluid'
                    src='assets/images/banners_demo_3/banner_3.jpg'
                    alt='Product'
                  />
                  <Link
                    to='#'
                    className='btn btn-secondary btn-lg swipe-to-top '
                  >
                    Sale
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Products Tabs */}
        <section className='pro-content pro-bc-content'>
          <div className='container'>
            <div className='products-area'>
              <div className='row'>
                <div className='col-12 col-md-6'>
                  <div className='pro-main'>
                    <figure className='banner-image'>
                      <Link to='/shop-page1'>
                        <img
                          className='img-fluid'
                          src='assets/images/banners_demo_3/banner_5.jpg'
                          alt='Banner Image'
                        />
                      </Link>
                    </figure>
                    <div className='pro-description'>
                      <h2 className='pro-title'>Sunglasses</h2>
                      <p>Discover the new collection.</p>
                      <Link
                        to='#'
                        className='btn btn-secondary swipe-to-top'
                        tabIndex={0}
                      >
                        Discover Now!
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='pro-main'>
                    <figure className='banner-image'>
                      <Link to='/shop-page1'>
                        <img
                          className='img-fluid'
                          src='assets/images/banners_demo_3/banner_4.jpg'
                          alt='Banner Image'
                        />
                      </Link>
                    </figure>
                    <div className='pro-description'>
                      <h2 className='pro-title'>Sneakers</h2>
                      <p>Protect your every step.</p>
                      <Link
                        to='#'
                        className='btn btn-secondary swipe-to-top'
                        tabIndex={0}
                      >
                        Discover Now!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonails */}
        <section className='pro-content testimonails-content'>
          <div className='container'>
            {/* heading */}
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-6'>
                <div className='pro-heading-title'>
                  <h1> Testimonials our clients</h1>
                </div>
              </div>
            </div>
            <div className='testimonials-carousel-js row'>
              <div className='col-12'>
                <figure className='banner-image'>
                  <img
                    className='img-fluid'
                    src='assets/images/about-us/profile.png'
                    alt='Profile Image'
                  />
                </figure>
                <div className='pro-detail'>
                  <h2>
                    <Link to='/blog-page1'>Jeny Martinez</Link>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incdidunt
                    ut labore et dolore magna aliqua [....]
                  </p>
                  <Link to='#' className='pro-readmore' tabIndex={0}>
                    Read more
                  </Link>
                </div>
              </div>
              <div className='col-12'>
                <figure className='banner-image'>
                  <img
                    className='img-fluid'
                    src='assets/images/about-us/profile.png'
                    alt='Banner Image'
                  />
                </figure>
                <div className='pro-detail'>
                  <h2>
                    <Link to='/blog-page1'>
                      Why to choose this app for your Project?
                    </Link>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incdidunt
                    ut labore et dolore magna aliqua [....]
                  </p>
                  <Link to='#' className='pro-readmore' tabIndex={0}>
                    Read more
                  </Link>
                </div>
              </div>
              <div className='col-12'>
                <figure className='banner-image'>
                  <img
                    className='img-fluid'
                    src='assets/images/about-us/profile.png'
                    alt='Banner Image'
                  />
                </figure>
                <div className='pro-detail'>
                  <h2>
                    <Link to='/blog-page1'>
                      Why to choose this app for your Project?
                    </Link>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incdidunt
                    ut labore et dolore magna aliqua [....]
                  </p>
                  <Link to='#' className='pro-readmore' tabIndex={0}>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='pro-content pro-logo-slik'>
          <div className='container'>
            <div className='brand-carousel-js row'>
              <div className='col-6 col-md-3'>
                <img
                  className='img-fluid'
                  src='assets/images/brands/Gucci.jpg'
                  alt='brands'
                />
              </div>
              <div className='col-6 col-md-3'>
                <img
                  className='img-fluid'
                  src='assets/images/brands/boss.jpg'
                  alt='brands'
                />
              </div>
              <div className='col-6 col-md-3'>
                <img
                  className='img-fluid'
                  src='assets/images/brands/lacoste.jpg'
                  alt='brands'
                />
              </div>
              <div className='col-6 col-md-3'>
                <img
                  className='img-fluid'
                  src='assets/images/brands/nike.jpg'
                  alt='brands'
                />
              </div>
              <div className='col-6 col-md-3'>
                <img
                  className='img-fluid'
                  src='assets/images/brands/pandora.jpg'
                  alt='brands'
                />
              </div>
              <div className='col-6 col-md-3'>
                <img
                  className='img-fluid'
                  src='assets/images/brands/zara.jpg'
                  alt='brands'
                />
              </div>
              <div className='col-6 col-md-3'>
                <img
                  className='img-fluid'
                  src='assets/images/brands/Gucci.jpg'
                  alt='brands'
                />
              </div>
              <div className='col-6 col-md-3'>
                <img
                  className='img-fluid'
                  src='assets/images/brands/boss.jpg'
                  alt='brands'
                />
              </div>
              <div className='col-6 col-md-3'>
                <img
                  className='img-fluid'
                  src='assets/images/brands/lacoste.jpg'
                  alt='brands'
                />
              </div>
              <div className='col-6 col-md-3'>
                <img
                  className='img-fluid'
                  src='assets/images/brands/nike.jpg'
                  alt='brands'
                />
              </div>
            </div>
          </div>
        </div>
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
                                src='assets/images/gallery_demo_3/preview/Product_image_01.jpg'
                                alt='brands'
                              />
                            </div>
                            <div className='carousel-item'>
                              <img
                                className='img-fluid'
                                src='assets/images/gallery_demo_3/preview/Product_image_02.jpg'
                                alt='brands'
                              />
                            </div>
                            <div className='carousel-item'>
                              <img
                                className='img-fluid'
                                src='assets/images/gallery_demo_3/preview/Product_image_03.jpg'
                                alt='brands'
                              />
                            </div>
                            <div className='carousel-item'>
                              <img
                                className='img-fluid'
                                src='assets/images/gallery_demo_3/preview/Product_image_04.jpg'
                                alt='brands'
                              />
                            </div>
                          </div>
                          {/* Left and right controls */}
                          <Link
                            className='carousel-control-prev'
                            to='#quickViewCarousel'
                            data-slide='prev'
                          >
                            <span className='fas fa-angle-left ' />
                          </Link>
                          <Link
                            className='carousel-control-next'
                            to='#quickViewCarousel'
                            data-slide='next'
                          >
                            <span className='fas fa-angle-right ' />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='col-12 col-md-6'>
                      <div className='pro-description'>
                        <h2 className='pro-title'>Leather Pent for Women</h2>
                        <div className='pro-price'>
                          <del>$484</del>
                          <ins>$300</ins>
                        </div>
                        <div className='pro-infos'>
                          <div className='pro-single-info'>
                            <b>Product ID :</b>1004
                          </div>
                          <div className='pro-single-info'>
                            <b>Categroy :</b>
                            <Link to='#'>Women Fashion</Link>
                          </div>
                          <div className='pro-single-info'>
                            <b>Tags :</b>
                            <ul>
                              <li>
                                <Link to='#'>Tops</Link>
                              </li>
                              <li>
                                <Link to='#'>Bottoms</Link>
                              </li>
                              <li>
                                <Link to='#'>Skirts</Link>
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
                              className='form-control '
                              defaultValue={10}
                            />
                            <span className='input-group-btn'>
                              <button
                                type='button'
                                value='quantity1'
                                className='quantity-plus btn'
                                data-type='minus'
                                data-field
                              >
                                <i className='fas fa-plus' />
                              </button>
                              <button
                                type='button'
                                value='quantity1'
                                className='quantity-minus btn'
                                data-type='plus'
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
                        <Link to='/'>
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
        {/* //footer style three */}
        <footer
          id='footerThree'
          className='footer-area footer-three footer-desktop d-none d-lg-block d-xl-block'
        >
          <div className='container'>
            <div className='footer-top-content'>
              <div className='row'>
                <div className='col-12 col-lg-7'>
                  <h4>SIGN UP FOR NEWSLETTER &amp; GET ALL UPDATES</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry.
                  </p>
                </div>
                <div className='col-12 col-lg-5'>
                  <form className='form-inline'>
                    <div className='search'>
                      <input type='search' placeholder='Your Email ...' />
                      <button
                        className='btn btn-secondary swipe-to-top'
                        type='submit'
                      >
                        SUBSCRIBE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-lg-4'>
                <div className='single-footer'>
                  <div className='pro-about'>
                    <h5>Store</h5>
                    <ul className='pl-0 mb-0'>
                      <li>
                        <Link
                          to='/index'
                          className='logo'
                          data-toggle='tooltip'
                          data-placement='bottom'
                          title='logo'
                        >
                          <img
                            className='img-fuild'
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
              <div className='col-12 col-md-6 col-lg-2'>
                <div className='single-footer'>
                  <h5>Social Network</h5>
                  <ul className='pl-0 mb-0'>
                    <li>
                      {' '}
                      <Link to='/shop-page1'>Facebook</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/orders'>Twitter</Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/cart-page1'>Instagram </Link>{' '}
                    </li>
                    <li>
                      {' '}
                      <Link to='/wishlist'>Linkedin</Link>{' '}
                    </li>
                  </ul>
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
        <div className='mobile-overlay' />
        <Link
          to='#'
          id='back-to-top'
          className='swipe-to-top'
          title='Back to top'
        >
          ↑
        </Link>
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
            <i className='fa fa-cogs' aria-hidden='true' />
          </button>
          <Link to='#' className='swticher-rtl'>
            <div className='text '>Use demo with RTL</div>
            <div className='toggle'>
              <span className='circle ' />
            </div>
          </Link>
          <Link to='#' className='swticher-boxed '>
            <div className='text '>Use demo with Box</div>
            <div className='toggle'>
              <span className='circle' />
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
        <div
          className='modal fade show'
          id='newsletterModal'
          tabIndex={-1}
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
                            alt='brands'
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
                            action='https://gmail.us4.list-manage.com/subscribe/post?u=21417d2ee6c5baa7f24295f6b&id=2eccfe3aa7'
                            method='post'
                            id='mc-embedded-subscribe-form'
                            name='mc-embedded-subscribe-form'
                            className='validate'
                            target='_blank'
                            noValidate
                          >
                            <div id='mc_embed_signup_scroll'>
                              <div className='mc-field-group'>
                                <input
                                  type='email'
                                  defaultValue
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
                                />
                                <div
                                  className='response'
                                  id='mce-success-response'
                                  style={{ display: 'none' }}
                                />
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
                                tabIndex={-1}
                                defaultValue
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
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Home_3);
