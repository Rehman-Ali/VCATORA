import React, { Fragment, Component } from 'react';
import Main_Header from './Main_Header';
import Mobile_Header from './Mobile_Header';
import Sticky_Header from './Sticky_Header';
// import '../../assets/js/custom';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        {/* //Header Style One  */}
        <Main_Header />
        {/* //Sticky Header  */}
        <Sticky_Header />
        {/* //Mobile Header  */}
        <Mobile_Header />
        <div>{this.props.children}</div>
      </Fragment>
    );
  }
}
export default Layout;
