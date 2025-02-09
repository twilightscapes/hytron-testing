import React from 'react'
import { Link } from 'gatsby'
import { FaFacebookSquare, FaLinkedin} from 'react-icons/fa'
// import ScrollAnimation from 'react-animate-on-scroll'


/*
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
*/




const Footer = class extends React.Component {
  render() {
    return (
	  
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          



 



<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', margin:'3rem 0'}}>
  <li><h3 className="socialtext">We&apos;re<br />Social:</h3></li>
<li><a className="social"  href="https://www.facebook.com/hytronmfg/" alt="Facebook" title="Facebook"><FaFacebookSquare /><span>Facebook</span></a></li>
<li><a className="social" href="https://linkedin.com/company/hytronmanufacturing/" alt="LinkIn" title="LinkedIn"><FaLinkedin /><span>LinkedIn</span></a></li>

</ul>

<div style={{textAlign: 'center', margin: '2rem 0 1rem 0', justifyContent: 'center', fontSize: '90%'}}><Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/cookie-policy/">Cookie Policy</Link></div>



<div style={{textAlign: 'center', margin: '0 0 1rem 0', justifyContent: 'center', fontSize: '70%'}}>Copyright &copy; {(new Date().getFullYear())} Hytron Manufacturing</div>
        </div>
      </footer>
 
    )
  }
}

export default Footer

