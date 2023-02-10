(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const C=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
\r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let w;const L=new Uint8Array(16);function S(){if(!w&&(w=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!w))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return w(L)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function E(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const P=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:P};function k(e,t,a){if(T.randomUUID&&!t&&!e)return T.randomUUID();e=e||{};const d=e.random||(e.rng||S)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){a=a||0;for(let o=0;o<16;++o)t[a+o]=d[o];return t}return E(d)}class u{constructor(t){this.id=k(),this.description=t,this.done=!1,this.createdAt=new Date}}const i={All:"all",Completed:"completed",Pending:"pending"},s={todos:[new u("Piedra del alma"),new u("Piedra del mente"),new u("Piedra del tiempo"),new u("Piedra del poder"),new u("Piedra del realidad"),new u("Piedra del espacio")],filter:i.All},A=()=>{v(),console.log("init store")},v=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=i.All}=JSON.parse(localStorage.getItem("state"));s.todos=e,s.filter=t},f=()=>{localStorage.setItem("state",JSON.stringify(s))},I=(e=i.All)=>{switch(e){case i.All:return[...s.todos];case i.Completed:return s.todos.filter(t=>t.done);case i.Pending:return s.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid`)}},U=e=>{if(!e)throw new Error("Description is required");s.todos.push(new u(e)),f()},x=e=>{s.todos=s.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},q=e=>{s.todos=s.todos.filter(t=>t.id!==e),f()},D=()=>{s.todos=s.todos.filter(e=>!e.done),f()},F=(e=i.All)=>{s.filter=e,f()},M=()=>s.filter,c={initStore:A,loadStore:v,getTodos:I,addTodo:U,toggleTodo:x,deleteTodo:q,deleteCompleted:D,setFilter:F,getCurrentFilter:M,Filters:i},N=e=>{if(!e)throw new Error("A ToDo object is required");const{done:t,description:a,id:d}=e,o=`
                    <div class="view">
                        <input class="toggle" type="checkbox" ${t?"checked":""}>
                        <label>${a}</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Create a TodoMVC template">
                `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",d),t&&n.classList.add("completed"),n};let h;const H=(e,t=[])=>{if(h||(h=document.querySelector(e)),!h)throw new Error(`Element ${h.id} not found`);h.innerHTML="",t.forEach(a=>{h.append(N(a))})};let b;const O=e=>{if(b||(b=document.querySelector(e)),!b)throw new Error(`Element ${e} not found`);b.innerHTML=c.getTodos(i.Pending).length},g={ClearCompleted:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},V=e=>{const t=()=>{const l=c.getTodos(c.getCurrentFilter());H(g.TodoList,l),a()},a=()=>{O(g.PendingCountLabel)};(()=>{const l=document.createElement("div");l.innerHTML=C,document.querySelector(e).append(l),t()})();const d=document.querySelector(g.NewTodoInput),o=document.querySelector(g.TodoList),n=document.querySelector(g.ClearCompleted),p=document.querySelectorAll(g.TodoFilters);d.addEventListener("keyup",l=>{l.keyCode===13&&l.target.value.trim().length!==0&&(c.addTodo(l.target.value),t(),l.target.value="")}),o.addEventListener("click",l=>{const m=l.target.closest("[data-id]");c.toggleTodo(m.getAttribute("data-id")),t()}),o.addEventListener("click",l=>{const m=l.target.className==="destroy",y=l.target.closest("[data-id]");!y||!m||(c.deleteTodo(y.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{c.deleteCompleted(),t()}),p.forEach(l=>{l.addEventListener("click",m=>{switch(p.forEach(y=>y.classList.remove("selected")),m.target.classList.add("selected"),m.target.text){case"Todos":c.setFilter(i.All);break;case"Pendientes":c.setFilter(i.Pending);break;case"Completados":c.setFilter(i.Completed);break}t()})})};c.initStore();V("#app");
