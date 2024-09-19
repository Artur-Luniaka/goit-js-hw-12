import{a as y,S as b,i as u}from"./assets/vendor-u8rapaCG.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const m=async s=>{const e=new URLSearchParams({key:"45941098-20d6b06978404a6b7356e16b7",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15});return(await y.get(`https://pixabay.com/api/?${e}`)).data},f=s=>s.map(({webformatURL:e,largeImageURL:n,tags:a,likes:t,views:o,comments:r,downloads:h})=>`<li class="gallery-item">
<a href="${n}">
<img src="${e}" class="img" alt="${a}" />
</a>
<div class="img-info">
    <div>
    <p class="img-info-amounts">Likes</p>
    <p class="img-info-amounts">${t}</p>
  </div>
  <div>
    <p class="img-info-amounts">Views</p>
    <p class="img-info-amounts">${o}</p>
  </div>
  <div>
      <p class="img-info-amounts">Comments</p>
      <p class="img-info-amounts">${r}</p>
  </div>
  <div>
      <p class="img-info-amounts">Downloads</p>
      <p class="img-info-amounts">${h}</p>
  </div>
</div>
</li>`),v=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector(".load-btn"),d=()=>document.querySelector("span").classList.toggle("loader"),p=()=>u.show({message:"Please fill a field",backgroundColor:"red",color:"white"}),w=()=>u.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",color:"white"}),L=()=>u.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"yellow",color:"white"}),g=new b(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});let i="";const S=s=>{if(s.preventDefault(),i=s.currentTarget.elements.query.value.toLowerCase().trim(),!i)return p();l.innerHTML="",c.style.display="none",d(),m(i).then(e=>{if(!e.hits.length)return w();l.insertAdjacentHTML("beforeend",f(e.hits).join("")),g.refresh(),c.style.display=e.totalHits>e.hits.length?"block":"none"}).catch(e=>{console.log(e)}).finally(()=>{d()})},q=s=>{if(!i)return p();d(),m(i).then(e=>{if(!e.totalHits.length)return L();l.insertAdjacentHTML("beforeend",f(e.hits).join("")),c.style.display=e.totalHits>l.children.length?"block":"none",g.refresh()}).catch(e=>{console.log(e)}).finally(()=>{d()})};v.addEventListener("submit",S);c.addEventListener("click",q);
//# sourceMappingURL=index.js.map
