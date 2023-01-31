(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const w="/javascript_moderno_udemy_crud/assets/javascript-8dac5379.svg";class y{constructor({id:t,isActive:a,balance:r,avatar:n,firstName:s,lastName:c,gender:m}){this.id=t,this.isActive=a,this.balance=r,this.avatar=n,this.firstName=s,this.lastName=c,this.gender=m}}const h=e=>{const{avatar:t,balance:a,first_name:r,gender:n,id:s,isActive:c,last_name:m}=e;return new y({avatar:t,balance:a,firstName:r,gender:n,id:s,isActive:c,lastName:m})},L=async e=>{const t=`http://localhost:3001/users/${e}`,r=await(await fetch(t)).json();return h(r)};const P=`\r
<div class="modal-dialog">\r
    <form novalidate>\r
        <span>User</span>\r
        <input type="text" name="firstName" placeholder="First Name" />\r
        <input type="text" name="lastName" placeholder="Last Name" />\r
        <input type="number" name="balance" placeholder="Balance" />\r
\r
        <div>\r
            <input type="checkbox" id="is-active" name="isActive" />\r
            <label for="is-active">is active?</label>\r
        </div>\r
\r
        <button type="submit">\r
            Save\r
        </button>\r
\r
    </form>\r
\r
</div>`;let i,l,f={};const b=async e=>{if(i==null||i.classList.remove("hide-modal"),f={},!e)return;const t=await L(e);S(t)},v=()=>{i==null||i.classList.add("hide-modal"),l==null||l.reset()},S=e=>{l.querySelector('[name="firstName"]').value=e.firstName,l.querySelector('[name="balance"]').value=e.balance,l.querySelector('[name="lastName"]').value=e.lastName,l.querySelector('[name="isActive"]').checked=e.isActive,f=e},T=(e,t)=>{i||(i=document.createElement("div"),i.innerHTML=P,i.className="modal-container hide-modal",l=i.querySelector("form"),i.addEventListener("click",a=>{a.target.className==="modal-container"&&v()}),l.addEventListener("submit",async a=>{a.preventDefault();let r=new FormData;r.append("firstName",l.querySelector('[name="firstName"]').value),r.append("balance",l.querySelector('[name="balance"]').value),r.append("lastName",l.querySelector('[name="lastName"]').value),r.append("isActive",l.querySelector('[name="isActive"]').checked);const n={...f};for(const[s,c]of r){if(console.log([s,c]),s=="balance"){n[s]=+c;continue}n[s]=c}await t(n),v()}),e.append(i))};const $=e=>{const t=document.createElement("button");t.innerText="+",t.classList.add("fab-button"),e.append(t),t.addEventListener("click",()=>{b()})};const g=async(e=1)=>{const t=`http://localhost:3001/users?_page=${e}`;return(await(await fetch(t)).json()).map(h)},o={currentPage:0,users:[]},E=async()=>{const e=await g(o.currentPage+1);e.length!==0&&(o.currentPage+=1,o.users=e)},N=async()=>{if(o.currentPage==1)return;const e=await g(o.currentPage-1);o.currentPage-=1,o.users=e},U=e=>{let t=!1;o.users=o.users.map(a=>a.id===e.id?(t=!0,e):a),o.users.length<10&&!t&&o.users.push(e)},A=async()=>{const e=await g(o.currentPage);if(e.length===0){await N();return}o.users=e},d={loadNextPage:E,loadPreviousPage:N,onUserChanged:U,reloadPage:A,getUsers:()=>[...o.users],getCurrentPage:()=>o.currentPage},q=async e=>{const t=`http://localhost:3001/users/${e}`;return await(await fetch(t,{method:"DELETE"})).json(),!0};let u;const M=()=>{const e=document.createElement("table"),t=document.createElement("thead");t.innerHTML=`
    <tr>
        <th>#ID</th>
        <th>Balanace</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>
    `;const a=document.createElement("tbody");return e.append(t,a),e},x=e=>{const t=e.target.closest(".select-user");if(!t)return;const a=t.getAttribute("data-id");b(a)},k=async e=>{const t=e.target.closest(".delete-user");if(!t)return;const a=t.getAttribute("data-id");await q(a),await d.reloadPage(),document.querySelector("#current-page").innerText=d.getCurrentPage(),p()},p=e=>{const t=d.getUsers();u||(u=M(),e.append(u),u.addEventListener("click",x),u.addEventListener("click",k));let a="";t.forEach(r=>{a+=`<tr>
            <td>${r.id}</td>
            <td>${r.balance}</td>
            <td>${r.firstName}</td>
            <td>${r.lastName}</td>
            <td>${r.isActive}</td>
            <td>
                <a href="#/" class="select-user"data-id="${r.id}">Select</a>
                |
                <a href="#/" class="delete-user"data-id="${r.id}">Delete</a>
            </td>
        </tr>`}),u.querySelector("tbody").innerHTML=a},B=e=>{const t=document.createElement("button");t.innerText=" Next >";const a=document.createElement("button");a.innerText=" < Prev";const r=document.createElement("span");r.id="current-page",r.innerHTML=d.getCurrentPage(),e.append(a,r,t),t.addEventListener("click",async()=>{await d.loadNextPage(),r.innerText=d.getCurrentPage(),p(e)}),a.addEventListener("click",async()=>{await d.loadPreviousPage(),r.innerText=d.getCurrentPage(),p(e)})},j=e=>{const{avatar:t,balance:a,firstName:r,gender:n,id:s,isActive:c,lastName:m}=e;return{avatar:t,balance:a,first_name:r,gender:n,id:s,isActive:c,last_name:m}},C=async e=>{const t=new y(e);if(!t.firstName||!t.lastName)throw"Are required";const a=j(t);let r;return t.id?r=await _(a):r=await H(a),h(r)},H=async e=>await(await fetch("http://localhost:3001/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json(),_=async e=>{const t=`http://localhost:3001/users/${e.id}`;return await(await fetch(t,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json()},D=async e=>{e.innerHTML="Loading...",await d.loadNextPage(),e.innerHTML="",p(e),B(e),$(e),T(e,async t=>{console.log(t);const a=await C(t);d.onUserChanged(a),p()})};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${w}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>CRUD Vite!</h1>
    <div class="card">
      
    </div>
   
  </div>
`;D(document.querySelector(".card"));
