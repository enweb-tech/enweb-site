import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer () {
	return (

		<div className="footer">
			
			<div className="social-icons">

				<a href="#"
					className="social-icon youtube">
					<FontAwesomeIcon icon={faYoutube} size="2x" />
				</a> 
				<a href="#"
					className="social-icon facebook">
					<FontAwesomeIcon icon={faFacebook} size="2x" />
				</a> 
				<a href="#"
					className="social-icon twitter">
					<FontAwesomeIcon icon={faTwitter} size="2x" />
				</a>

			</div>

			<div className="footer-credits">
				<p> Made with &nbsp;<div className="heart">&#10084;</div>&nbsp; by &nbsp; 
					<a target="_blank" href="https://www.linkedin.com/in/karamveersidhu/"> 
					Karamveer 
					</a>
				</p>
			</div>	
		</div>

	);
}

export default Footer;