import{j as e,u as w,r as o}from"./index-652570b9.js";const D="https://nda17.github.io/YBS-spa/assets/video-laptop-1-13c09cab.mp4",B="https://nda17.github.io/YBS-spa/assets/video-laptop-2-b5de1e89.webm",I=()=>e.jsxs("div",{className:"bgVideoForm",children:[e.jsx("div",{className:"bgGradientForm"}),e.jsxs("video",{className:"bgVideoForm",autoPlay:!0,muted:!0,playsInline:!0,loop:!0,children:[e.jsx("source",{src:D}),e.jsx("source",{src:B})]})]});const L=()=>e.jsxs("article",{className:"alertForm",children:[e.jsx("p",{className:"alertFormRu",children:"YBS"}),e.jsx("p",{className:"alertFormEn"})]});const G=()=>{const{t:c,i18n:V}=w(),[x,M]=o.useState(0),[E,k]=o.useState(0),[N,F]=o.useState("Не выбран"),[r,h]=o.useState("Не выбраны"),[s,f]=o.useState("Не выбраны"),p=t=>{N==="Не выбран"?(F(t.target.value),k(t.target.getAttribute("data-price")),n(t.target.getAttribute("data-price"))):(n(t.target.getAttribute("data-price")-E),k(t.target.getAttribute("data-price")))},i=t=>{if(r==="Не выбраны")h([t.target.value]),n(t.target.getAttribute("data-price"));else if(r!=="Не выбраны"&&!r.includes(t.target.value))h([...r,t.target.value]),n(t.target.getAttribute("data-price"));else if(r!=="Не выбраны"&&r.includes(t.target.value)){const l=r.filter(a=>a!==t.target.value);h(l),n(-t.target.getAttribute("data-price"))}},u=t=>{if(s==="Не выбраны")f([t.target.value]),n(t.target.getAttribute("data-price"));else if(s!=="Не выбраны"&&!s.includes(t.target.value))f([...s,t.target.value]),n(t.target.getAttribute("data-price"));else if(s!=="Не выбраны"&&s.includes(t.target.value)){const l=s.filter(a=>a!==t.target.value);f(l),n(-t.target.getAttribute("data-price"))}},n=t=>{M(x+Number(t))};o.useEffect(()=>{const t=m=>{m.forEach(y=>{y.isIntersecting&&y.target.classList.add("show")})};let l={threshold:[0]},a=new IntersectionObserver(t,l),d=document.querySelectorAll(".formWrapper");for(let m of d)a.observe(m)},[]);const[j,C]=o.useState(""),[g,O]=o.useState(""),[v,T]=o.useState(""),S=document.querySelector(".form-calc"),P=()=>{let t=!0,l=!0,a=!0,d=!0;return/[^0-9][a-zA-Z0-9\-]*$/.test(j)?(document.querySelector(".form-control-username").style.outline="2px green solid",l=!0):(document.querySelector(".form-control-username").style.outline="2px tomato solid",l=!1),/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(g)?(document.querySelector(".form-control-email").style.outline="2px green solid",a=!0):(document.querySelector(".form-control-email").style.outline="2px tomato solid",a=!1),/^(\+7|8)?(\d{10})$/.test(v)?(document.querySelector(".form-control-tel").style.outline="2px green solid",d=!0):(document.querySelector(".form-control-tel").style.outline="2px tomato solid",d=!1),l&&a&&d?t=!0:t=!1,t},b=t=>{t.key==="Enter"&&t.preventDefault()},A=t=>{t.preventDefault(),P()&&fetch("https://formspree.io/f/xpzgzken",{method:"POST",body:JSON.stringify({"Необходимый тип сайта:":N,"Необходимые опции:":r.length===0?h("Не выбраны"):r,"Необходимые маркетинговые услуги:":s.length===0?f("Не выбраны"):s,"Рассчитанная стоимость услуг":`${x} р.`,"Имя клиента:":j,"Email клиента:":g,"Телефон клиента:":v}),headers:{Accept:"application/json"}}).then(l=>{const a=document.querySelector(".alertForm"),d=document.querySelector(".alertFormRu"),m=document.querySelector(".alertFormEn");l.ok?(d.innerText="Заявка отправлена.",m.innerText="Application sent.",a.classList.add("alertFormOpen"),S.reset(),document.querySelector(".form-control-username").style.outline="none",document.querySelector(".form-control-email").style.outline="none",document.querySelector(".form-control-tel").style.outline="none",setTimeout(()=>a.classList.remove("alertFormOpen"),2800)):(d.innerText="Ошибка 404 (Not found), попробуйте позже.",m.innerText="ERROR 404 (Not found), try later.",a.classList.add("alertFormOpen"),S.reset(),document.querySelector(".form-control-username").style.outline="none",document.querySelector(".form-control-email").style.outline="none",document.querySelector(".form-control-tel").style.outline="none",setTimeout(()=>a.classList.remove("alertFormOpen"),2800))}).catch(console.error)},[q,R]=o.useState(!1);return o.useEffect(()=>{const t=document.querySelector(".title");setTimeout(()=>{R(!0),t.style.opacity="1"},1e3)},[q]),e.jsxs(e.Fragment,{children:[e.jsxs("h3",{className:"title",children:[c("formMainTitleA.text"),e.jsx("br",{}),c("formMainTitleB.text")]}),e.jsxs("article",{className:"row main-form-block formWrapper container-lg",children:[e.jsx(I,{}),e.jsxs("div",{className:"col-lg-7 col-md-9 col-sm-10 col-xs-12 service-calc",children:[e.jsx(L,{}),e.jsx("form",{className:"form-calc",onSubmit:A,children:e.jsxs("div",{className:"accordion",id:"accordionExample",children:[e.jsxs("div",{className:"accordion-item",children:[e.jsx("h2",{className:"accordion-header",id:"headingOne",children:e.jsx("button",{className:"accordion-button accordion-button-a",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:c("formMainSelectTypeSite.text")})}),e.jsx("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:e.jsxs("div",{className:"accordion-body",children:[e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input input-radio-type-product",type:"radio",name:"flexRadioDefault",id:"type-product-a-a",value:"Одностраничный сайт","data-price":"15000","data-old-price":"",onClick:p}),e.jsx("label",{className:"form-check-label form-check-label-a-a",htmlFor:"type-product-a-a",children:c("formMainSelectA.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input input-radio-type-product",type:"radio",name:"flexRadioDefault",id:"type-product-a-b",value:"Многостраничный сайт","data-price":"25000",onClick:p}),e.jsx("label",{className:"form-check-label form-check-label-a-b",htmlFor:"type-product-a-b",children:c("formMainSelectB.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input input-radio-type-product",type:"radio",name:"flexRadioDefault",id:"type-product-a-c",value:"Корпоративный сайт","data-price":"70000",onClick:p}),e.jsx("label",{className:"form-check-label form-check-label-a-c",htmlFor:"type-product-a-c",children:c("formMainSelectC.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input input-radio-type-product",type:"radio",name:"flexRadioDefault",id:"type-product-a-d",value:"Интернет-витрина (без интеграции 1С)","data-price":"35000",onClick:p}),e.jsx("label",{className:"form-check-label form-check-label-a-d",htmlFor:"type-product-a-d",children:c("formMainSelectD.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input input-radio-type-product",type:"radio",name:"flexRadioDefault",id:"type-product-a-e",value:"Интернет-магазин","data-price":"50000",onClick:p}),e.jsx("label",{className:"form-check-label form-check-label-a-e",htmlFor:"type-product-a-e",children:c("formMainSelectE.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input input-radio-type-product",type:"radio",name:"flexRadioDefault",id:"type-product-a-f",value:"Онлайн школа","data-price":"120000",onClick:p}),e.jsx("label",{className:"form-check-label form-check-label-a-f",htmlFor:"type-product-a-f",children:c("formMainSelectF.text")})]})]})})]}),e.jsxs("div",{className:"accordion-item",children:[e.jsx("h2",{className:"accordion-header",id:"headingTwo",children:e.jsx("button",{className:"accordion-button collapsed accordion-button-b",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:c("formMainSelectOptions.text")})}),e.jsx("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:e.jsxs("div",{className:"accordion-body checkbox-options",children:[e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"type-product-b-a",type:"checkbox",value:"Индивидуальный дизаин","data-price":"20000",onClick:i}),e.jsx("label",{className:"form-check-label form-check-label-b-a",htmlFor:"type-product-b-a",children:c("formMainSelectOptionsA.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"type-product-b-b",type:"checkbox",value:"Регистрация домена на ваше имя и подключение к сайту","data-price":"1000",onClick:i}),e.jsx("label",{className:"form-check-label form-check-label-b-b",htmlFor:"type-product-b-b",children:c("formMainSelectOptionsB.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"type-product-b-c",type:"checkbox",value:"Настройка доменной почты","data-price":"1000",onClick:i}),e.jsx("label",{className:"form-check-label form-check-label-b-c",htmlFor:"type-product-b-c",children:c("formMainSelectOptionsC.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"type-product-b-d",type:"checkbox",value:"Подключение платежной системы","data-price":"2000",onClick:i}),e.jsx("label",{className:"form-check-label form-check-label-b-d",htmlFor:"type-product-b-d",children:c("formMainSelectOptionsD.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"type-product-b-e",type:"checkbox",value:"Подключение CRM","data-price":"2000",onClick:i}),e.jsx("label",{className:"form-check-label form-check-label-b-e",htmlFor:"type-product-b-e",children:c("formMainSelectOptionsE.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"type-product-b-f",type:"checkbox",value:"SEO-оптимизация","data-price":"30000",onClick:i}),e.jsx("label",{className:"form-check-label form-check-label-b-f",htmlFor:"type-product-b-f",children:c("formMainSelectOptionsF.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"type-product-b-g",type:"checkbox",value:"Составление ТЗ","data-price":"4000",onClick:i}),e.jsx("label",{className:"form-check-label form-check-label-b-g",htmlFor:"type-product-b-g",children:c("formMainSelectOptionsG.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"type-product-b-h",type:"checkbox",value:"Аудит сайта","data-price":"7000",onClick:i}),e.jsx("label",{className:"form-check-label form-check-label-b-h",htmlFor:"type-product-b-h",children:c("formMainSelectOptionsH.text")})]})]})})]}),e.jsxs("div",{className:"accordion-item accordion-item-style",children:[e.jsx("h2",{className:"accordion-header",id:"headingThree",children:e.jsx("button",{className:"accordion-button accordion-button-style collapsed accordion-button-c",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:c("formMainSelectMarketing.text")})}),e.jsx("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:e.jsxs("div",{className:"accordion-body",children:[e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"type-product-c-a",type:"checkbox",value:"Конкурентный анализ","data-price":"10000",onClick:u}),e.jsx("label",{className:"form-check-label form-check-label-c-a",htmlFor:"type-product-c-a",children:c("formMainSelectMarketingA.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"type-product-c-b",type:"checkbox",value:"Разработка маркетинговых мероприятий","data-price":"5000",onClick:u}),e.jsx("label",{className:"form-check-label form-check-label-c-b",htmlFor:"type-product-c-b",children:c("formMainSelectMarketingB.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"type-product-c-c",type:"checkbox",value:"SWOT анализ, ABC анализ","data-price":"15000",onClick:u}),e.jsx("label",{className:"form-check-label form-check-label-c-c",htmlFor:"type-product-c-c",children:c("formMainSelectMarketingC.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"type-product-c-d",type:"checkbox",value:"Повышение конверсий отдела продаж","data-price":"120000",onClick:u}),e.jsx("label",{className:"form-check-label form-check-label-c-d",htmlFor:"type-product-c-d",children:c("formMainSelectMarketingD.text")})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",id:"type-product-c-e",type:"checkbox",value:"Увеличение воронки лидов","data-price":"70000",onClick:u}),e.jsx("label",{className:"form-check-label form-check-label-c-e",htmlFor:"type-product-c-e",children:c("formMainSelectMarketingE.text")})]})]})})]}),e.jsxs("div",{className:"final-price",children:[e.jsx("span",{className:"final-price-lang",children:c("formMainCost.text")}),x," ₽"]}),e.jsxs("div",{className:"form-contacts",children:[e.jsx("div",{className:"form-group",children:e.jsx("input",{onChange:t=>C(t.target.value),required:!0,onKeyDown:b,type:"text",className:"form-control form-control-username",id:"exampleInputName","aria-describedby":"nameHelp",placeholder:c("formMainName.text")})}),e.jsx("div",{className:"form-group",children:e.jsx("input",{onChange:t=>O(t.target.value),required:!0,onKeyDown:b,type:"text",autoComplete:"on",className:"form-control form-control-email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:c("formMainEmail.text")})}),e.jsx("div",{className:"form-group",children:e.jsx("input",{onChange:t=>T(t.target.value),required:!0,onKeyDown:b,type:"text",autoComplete:"on",className:"form-control form-control-tel",id:"exampleInputPhone",placeholder:c("formMainPhone.text")})}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-form-calc",children:c("formMainButtonSubmit.text")})]})]})})]})]})]})},X=()=>e.jsx(G,{});export{X as default};
