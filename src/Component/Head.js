import './index.css';
import './Head.css';
import logo from './imgs/imagem.svg';

function Head() {
  return (
    <>
    <div className="head">
			
			<div className="text">
				<h1>Lorem ipsum dolor sit amet</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
        <button id="btn">Botao</button>
      </div>
			
      <div className="image">
        <img src={logo} alt="logo" />
        
      </div>
		</div>
    </>
    
    
  );
}

export default Head;
