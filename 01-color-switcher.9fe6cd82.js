const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");let d=null;e.addEventListener("click",function(){e.setAttribute("disabled",!0),r.removeAttribute("disabled"),d=setInterval(()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3)}),r.addEventListener("click",()=>{clearInterval(d),r.setAttribute("disabled",!0),e.removeAttribute("disabled")});
//# sourceMappingURL=01-color-switcher.9fe6cd82.js.map