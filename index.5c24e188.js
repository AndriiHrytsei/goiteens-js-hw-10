!function(){var t=document.querySelector("#value"),e=document.querySelector("button[data-action='increment']"),n=document.querySelector("button[data-action='decrement']"),o=0,r=document.querySelector("#name-input"),c=document.querySelector("#name-output");var u=document.querySelector(".color"),a=document.querySelector(".change-color"),d=document.querySelector("body");e.addEventListener("click",(function(){o+=1,t.textContent=o})),n.addEventListener("click",(function(){o-=1,t.textContent=o})),r.addEventListener("input",(function(t){c.textContent=t.currentTarget.value.trim(),""===t.currentTarget.value.trim()&&(c.textContent="Anonymous")})),a.addEventListener("click",(function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));d.style.backgroundColor=t,u.textContent=t}))}();
//# sourceMappingURL=index.5c24e188.js.map
