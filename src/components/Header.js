import "./Header.css";

function Header () {
	return (
		<div className="header">
			<div className="title">
				<h1> Enweb </h1>
			</div>
			<div className="links">
				<ul>
					<li> HOME </li>
					<li> ABOUT </li>
					<li> PROJECTS </li>
					<li> CONTACT </li>
				</ul>
			</div>
		</div>
	);
}

export default Header;