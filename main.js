import './style.css'
import javascriptLogo from './javascript.svg'
import { UserApp } from './src/users/users-app'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>CRUD Vite!</h1>
    <div class="card">
      
    </div>
   
  </div>
`

UserApp(document.querySelector('.card'))
