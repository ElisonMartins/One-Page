import './index.css';
import './CardTop.css';


function CardTop() {
  return (
    <>
    <div className="Cards">
      <div className="Card">
          <div className="image-color" id="color-1">
          </div> 
          <div className="text-card">
              <h2>Titulo do Card</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa.</p>
          </div>   
      </div>    

      <div className="Card">
          <div className="image-color" id="color-2">
          </div> 
          <div className="text-card">
              <h2>Titulo do Card</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa.</p>
          </div>   
      </div>    

      <div className="Card">
          <div className="image-color" id="color-3">
          </div> 
          <div className="text-card">
              <h2>Titulo do Card</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa.</p>
          </div>   
      </div>    
    </div>   
    </>
    
    
  );
}

export default CardTop;