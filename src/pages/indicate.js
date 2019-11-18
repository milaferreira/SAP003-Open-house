import Button from '../components/button.js';
import Input from '../components/input.js';
import Menu from '../components/menu.js';

function Indicate() {
  const template = `
  <div class="template">
  <header class="header"><img class="logo" src="./Imagens/Logo.png"></header>
  <input type="checkbox" id="btn-menu"/>
  <label for="btn-menu">&#9776;</label>
  <nav class="menu">
    <ul>
    ${Menu({
      name: 'Home',
      link: Home,
    })}
    ${Menu({
      name: 'Sobre',
      link: About,
    })}
    ${Menu({
      name: 'Contato',
      link: Contact,
    })}
    </ul> 
  </nav>  
    <section class = "register-section">
      <h1 class="name-network">Indicação</h1>
      <h3 class="text-simple">Conhece ou participará de uma peça que ainda não está no site!</h3>
      <h4 class="text-simple">Envie para nós!</h4>
      <form class="forms">
        <label>Nome da peça :</label>      
        ${Input({
        class: 'name-input',
        placeholder: 'Peça 1',
        value:'',
        type: 'text',
        })}
        <label> nome da companhia:</label> 
        ${Input({
        class: 'job-input',
        placeholder: 'Teatro 1',
        value:'',
        type: 'text',
        })}
        <label>Contato :</label> 
        ${Input({
        class: 'email-input',
        placeholder:'exemplo@seudomínio.com',
        value:'',
        type: 'text',
        })}
        <label>Data da peça :</label> 
        ${Input({
        class: 'birth-date-input',
        placeholder: '',
        value:'',
        type: 'date',
        })}
      <p class="alert-message"></p>
          ${Button({
        id: 'btncreate-count',
        class:'',
        title: 'Enviar',
        onClick: sendIndicate,
      })}
    </form>
  </section>
</div>
  `;
  return template;
}

function sendIndicate() {
  console.log("oi")
}

function About() {
  window.location.hash = 'about'
};

function Contact() {
  window.location.hash = 'contact'
};

function Home() {
  window.location.hash = 'home'
}

export default Indicate;