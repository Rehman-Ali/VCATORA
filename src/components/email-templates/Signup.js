
import React, {Fragment} from 'react'
import './css/Signup.css';
const Signup = () => {
	return (
		<Fragment>
			
	<center style={{width: '100%', backgroundColor: '#f1f1f1'}}>
  <div style={{display: 'none', fontSize: 1, maxHeight: 0, maxWidth: 0, opacity: 0, overflow: 'hidden', msoHide: 'all', fontFamily: 'sans-serif'}}>
    ‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
  </div>
  <div style={{maxWidth: 600, margin: '0 auto'}} className="email-container">
    {/* BEGIN BODY */}
    <table align="center" role="presentation" cellSpacing={0} cellPadding={0} border={0} width="100%" style={{margin: 'auto'}}>
      <tbody><tr>
          <td valign="top" className="bg_white" style={{padding: '1em 2.5em 0 2.5em'}}>
            <table role="presentation" border={0} cellPadding={0} cellSpacing={0} width="100%">
              <tbody><tr>
                  <td className="logo" style={{textAlign: 'center'}}>
                    <a href="#"><img src="assets/images/logo/logo.png" alt="logo" /></a>
                  </td>
                </tr>
              </tbody></table>
          </td>
        </tr>{/* end tr */}
        <tr>
          <td valign="middle" className="hero bg_white" style={{padding: '3em 0 2em 0'}}>
            <img src="./images/email.png" alt style={{width: 300, maxWidth: 600, height: 'auto', margin: 'auto', display: 'block'}} />
          </td>
        </tr>{/* end tr */}
        <tr>
          <td valign="middle" className="hero bg_white" style={{padding: '2em 0 4em 0'}}>
            <table>
              <tbody><tr>
                  <td>
                    <div className="text" style={{padding: '0 2.5em', textAlign: 'center'}}>
                      <h2>Please verify your email</h2>
                      <h3>Amazing deals, updates, interesting news right in your inbox</h3>
                      <p><a href="#" className="btn btn-primary">Yes! Subscribe Me</a></p>
                    </div>
                  </td>
                </tr>
              </tbody></table>
          </td>
        </tr>{/* end tr */}
        {/* 1 Column Text + Button : END */}
      </tbody></table>
    <table align="center" role="presentation" cellSpacing={0} cellPadding={0} border={0} width="100%" style={{margin: 'auto'}}>
      <tbody><tr>
          <td valign="middle" className="bg_light footer email-section">
            <table>
              <tbody><tr>
                  <td valign="top" width="33.333%" style={{paddingTop: 20}}>
                    <table role="presentation" cellSpacing={0} cellPadding={0} border={0} width="100%">
                      <tbody><tr>
                          <td style={{textAlign: 'left', paddingRight: 10}}>
                            <h3 className="heading">About</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id euismod ex, eget cursus felis. Aliquam erat volutpat.</p>
                          </td>
                        </tr>
                      </tbody></table>
                  </td>
                  <td valign="top" width="33.333%" style={{paddingTop: 20}}>
                    <table role="presentation" cellSpacing={0} cellPadding={0} border={0} width="100%">
                      <tbody><tr>
                          <td style={{textAlign: 'left', paddingLeft: 5, paddingRight: 5}}>
                            <h3 className="heading">Contact Info</h3>
                            <ul>
                              <li><span className="text">1223, Main Street, Anytown New York, 38000 USA</span></li>
                              <li><span className="text">(888 - 963 - 600)</span></li>
                            </ul>
                          </td>
                        </tr>
                      </tbody></table>
                  </td>
                  <td valign="top" width="33.333%" style={{paddingTop: 20}}>
                    <table role="presentation" cellSpacing={0} cellPadding={0} border={0} width="100%">
                      <tbody><tr>
                          <td style={{textAlign: 'left', paddingLeft: 10}}>
                            <h3 className="heading">Useful Links</h3>
                            <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">Top Sales</a></li>
                              <li><a href="#">Trending</a></li>
                              <li><a href="#">Blogs</a></li>
                            </ul>
                          </td>
                        </tr>
                      </tbody></table>
                  </td>
                </tr>
              </tbody></table>
          </td>
        </tr>{/* end: tr */}
        <tr>
          <td className="bg_light" style={{textAlign: 'center'}}>
            <p>No longer want to receive these email? You can <a href="#" style={{color: 'rgba(0,0,0,.8)'}}>Unsubscribe here</a></p>
          </td>
        </tr>
      </tbody></table>
  </div>
</center>


</Fragment>
	)
}

export default Signup

