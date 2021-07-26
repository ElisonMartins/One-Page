import './index.css';
import './Form.css';

function Form() {
  return (
    <>
    <div className="Area-form">
        <h1>Entre em contato</h1>
        <input type="text" placeholder="Nome" className="Form" />
        <input type="email" placeholder="Email" className="Form" />
        <input type="tel" placeholder="Telefone" className="Form" />
        <input type="textarea" placeholder="Mensagem..." id="area-text" className="Form" />
        <button className="btn-form"  >Enviar mensagem</button>
        
	</div>
    </>
  );
}

export default Form;