import{a as b,S as v,i}from"./assets/vendor-39ba3523.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const w="https://pixabay.com/api/",x="43527026-7407a6885caf79748912d7a12";async function p(s,t){return(await b.get(`${w}`,{params:{key:x,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}function h(s){return s.map(({webformatURL:t,largeImageURL:a,tags:n,likes:e,views:r,comments:o,downloads:L})=>`<li class="gallery-item">
            <a class="gallery-link" href="${a}">
                <img 
                    class="gallery-image" 
                    src="${t}"
                    alt="${n}"
                    width="360px"
                    height="152px"/>
            </a>
    <ul class="img-text-container"> 
    <li class="img-text">Likes<p class="img-data">${e}</p></li>
    <li class="img-text">Views<p class="img-data">${r}</p></li>
    <li class="img-text">Comments<p class="img-data">${o}</p></li>
    <li class="img-text">Downloads<p class="img-data">${L}</p></li>
    </ul>
   </li>`).join("")}const f=document.querySelector(".search-form"),m=document.querySelector(".gallery"),l=document.querySelector(".gallery-loader"),g=document.querySelector(".gallery-load-btn");let c=1,d=null,u,q=15;const y=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});f.addEventListener("submit",P);async function P(s){if(s.preventDefault(),l.classList.toggle("loader"),g.classList.add("hidden"),m.innerHTML="",c=1,d=s.target.elements.text.value.trim(),!d){l.classList.remove("loader"),i.error({message:"Please enter a search query!"});return}try{const t=await p(d);t.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(m.innerHTML=h(t.hits),y.refresh(),u=Math.ceil(t.totalHits/q),u>1&&g.classList.remove("hidden"))}catch(t){i.error({message:"Oops! There was a problem loading the images. Please try again later!"}),alert(t.message)}finally{f.reset(),l.classList.toggle("loader")}}g.addEventListener("click",S);async function S(){c+=1,l.classList.toggle("loader");try{const s=await p(d,c);m.insertAdjacentHTML("beforeend",h(s.hits)),y.refresh();const a=document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"}),u===c&&(g.classList.add("hidden"),i.info({message:"We are sorry, but you have reached the end of search results"}))}catch(s){i.error({message:"Oops! There was a problem loading the images. Please try again later!"}),alert(s.message)}finally{l.classList.toggle("loader")}}
//# sourceMappingURL=commonHelpers.js.map
