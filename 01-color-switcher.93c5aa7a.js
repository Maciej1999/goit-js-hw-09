const e=document.querySelector("body"),t=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");let a;t.addEventListener("click",(()=>{t.disabled=!0,a=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),r.addEventListener("click",(()=>{t.disabled=!1,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.93c5aa7a.js.map
