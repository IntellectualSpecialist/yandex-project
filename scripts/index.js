var _=document.querySelector(".slider__current-slide"),v=document.querySelector(".slider--special"),p=document.querySelector(".slider--base");if(document.documentElement.clientWidth<1366){let t=function(){e=(e-1+o)%o,n(),l()},d=function(){e=(e+1)%o,n(),l()},S=function(){e=(e+1)%o,n(),l(),setInterval(d,4e3)},n=function(){u.forEach((i,c)=>{c===e?i.style.display="block":i.style.display="none"})},l=function(){_.textContent=e+1},r=v,a=r.querySelector(".slider__arrow--prev"),f=r.querySelector(".slider__arrow--next"),u=Array.from(r.querySelectorAll(".slider__item")),o=u.length,e=-1;_.textContent=e+1,a.addEventListener("click",t),f.addEventListener("click",d),n(),l(),t(),d(),S()}if(document.documentElement.clientWidth<1366){let d=function(){t=(t-1+e)%e,n(),l(),c(),i(),m()},S=function(){t=(t+1)%e,n(),l(),i(),c(),m()},n=function(){u.forEach((s,y)=>{y===t?s.style.display="block":s.style.display="none"})},l=function(){o.forEach((s,y)=>{y===t?s.classList.add("slider__toggle-button--current"):s.classList.remove("slider__toggle-button--current")})},i=function(){t>0?a.classList.remove("slider__arrow--disabled"):a.classList.add("slider__arrow--disabled")},c=function(){t===e-1?f.classList.add("slider__arrow--disabled"):f.classList.remove("slider__arrow--disabled")},m=function(){_.textContent=t+1},r=p,a=r.querySelector(".slider__arrow--prev"),f=r.querySelector(".slider__arrow--next"),u=Array.from(r.querySelectorAll(".slider__item")),o=Array.from(r.querySelectorAll(".slider__toggle-button")),e=u.length,t=0;_.textContent=t+1,a.addEventListener("click",d),f.addEventListener("click",S);for(let s=0;s<e;s++){let y=function(){t=s,n(),l(),i(),c()};o&&o[s].addEventListener("click",y)}n(),l(),i(),c(),m()}if(document.documentElement.clientWidth>=1366){let t=function(){e=(e-1+o)%o,e<2&&(e=2),n(),l()},d=function(){e=(e+1)%o,e<2&&(e=2),n(),l()},S=function(){e<2&&(e=2),setInterval(d,4e3)},n=function(){u.forEach((i,c)=>{c<=e&&c>e-3?i.style.display="block":i.style.display="none"})},l=function(){_.textContent=e+1},r=v,a=r.querySelector(".slider__arrow--prev"),f=r.querySelector(".slider__arrow--next"),u=Array.from(r.querySelectorAll(".slider__item")),o=u.length,e=0;_.textContent=e+1,a.addEventListener("click",t),f.addEventListener("click",d),n(),l(),t(),d(),S()}
