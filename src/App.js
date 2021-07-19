import Header from './components/Header';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Particles from 'react-particles-js';
import particlesOptions from './util.js';
import './App.css';

function App() {
  return (
    <div className="App">
    	<Particles id="particles-js" className = "particles" params={particlesOptions}/>

    	<div className="home">
	  		<Header/>

	  		<Cover/>

	  		<Footer/>
	  	</div>

    </div>
  );
}

export default App;
