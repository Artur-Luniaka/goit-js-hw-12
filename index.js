import{S as d,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=s=>{const r=new URLSearchParams({key:"45941098-20d6b06978404a6b7356e16b7",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${r}`).then(o=>{if(!o.ok)throw new Error;return o.json()})},p=s=>s.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:i,downloads:u})=>`<li>
<a href="${o}">
<img src="${r}" class="img" alt="${n}" />
</a>
<div class="img-info">
    <div>
    <p class="img-info-amounts">Likes</p>
    <p class="img-info-amounts">${e}</p>
  </div>
  <div>
    <p class="img-info-amounts">Views</p>
    <p class="img-info-amounts">${t}</p>
  </div>
  <div>
      <p class="img-info-amounts">Comments</p>
      <p class="img-info-amounts">${i}</p>
  </div>
  <div>
      <p class="img-info-amounts">Downloads</p>
      <p class="img-info-amounts">${u}</p>
  </div>
</div>
</li>`),m=document.querySelector(".form"),a=document.querySelector(".gallery"),c=()=>document.querySelector("span").classList.toggle("loader"),g=()=>l.show({message:"Please fill a field",backgroundColor:"red",color:"white"}),h=()=>l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",color:"white"}),y=new d(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),b=s=>{s.preventDefault();const r=s.currentTarget.elements.query.value.toLowerCase().trim();if(!r)return g();a.innerHTML="",c(),f(r).then(o=>{if(!o.hits.length)return h();a.insertAdjacentHTML("beforeend",p(o.hits).join("")),y.refresh()}).catch(o=>{console.log(o)}).finally(()=>{c()}),m.reset()};m.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
