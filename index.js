import{a as m,S as f,i as l}from"./assets/vendor-BIn0hBn5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="50406529-48aaa3d05a76e0acf14414e94",y="https://pixabay.com/api/";async function g(o){try{return(await m.get(`${y}`,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20}})).data}catch(r){throw new Error(`Pixabay API hatası: ${r.message}`)}}const u=document.querySelector(".gallery");let v=new f(".image-li a",{captionDelay:250,captionsData:"alt"});function b(o){const r=o.map(({largeImageURL:i,webformatURL:n,tags:e,likes:t,views:s,comments:d,downloads:p})=>`<li class="image-li">
           <a href="${i}"> <img class="li-img" src="${n}" alt="${e.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${t}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${s}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${d}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${p}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");u.insertAdjacentHTML("beforeend",r),v.refresh()}function L(){u.innerHTML=""}function S(){document.querySelector(".hidden").style.display="flex"}function a(){document.querySelector(".hidden").style.display="none"}const c=document.querySelector(".form"),$=document.querySelector('input[name="input"]');c.addEventListener("submit",o=>{o.preventDefault();const r=$.value.trim();if(L(),S(),!r)return a(),l.error({title:"Error",message:"Please enter a search term.",position:"topRight"});g(r).then(i=>{if(i.hits.length<=0){a(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.reset();return}b(i.hits),a(),c.reset()}).catch(i=>{a(),l.error({title:"Error",message:i.message,position:"topRight"})})});
//# sourceMappingURL=index.js.map
