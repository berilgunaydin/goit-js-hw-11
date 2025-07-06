import{a as f,S as m,i as l}from"./assets/vendor-BIn0hBn5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="50406529-48aaa3d05a76e0acf14414e94",g="https://pixabay.com/api/";function y(o){const i=`${g}?key=${h}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=20`;return f.get(i).then(r=>r).catch(r=>{throw new Error(r)})}const u=document.querySelector(".gallery");let v=new m(".image-li a",{captionDelay:250,captionsData:"alt"});function b(o){const i=o.map(({largeImageURL:r,webformatURL:s,tags:e,likes:t,views:n,comments:d,downloads:p})=>`<li class="image-li">
           <a href="${r}"> <img class="li-img" src="${s}" alt="${e.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${t}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${n}</div>
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
        </li>`).join("");u.insertAdjacentHTML("beforeend",i),v.refresh()}function L(){u.innerHTML=""}function $(){document.querySelector(".hidden").style.display="flex"}function a(){document.querySelector(".hidden").style.display="none"}const c=document.querySelector(".form"),S=document.querySelector('input[name="input"]');c.addEventListener("submit",o=>{o.preventDefault();const i=S.value.trim();if(L(),$(),!i)return a(),l.error({title:"Error",message:"Please enter a search term.",position:"topRight"});y(i).then(r=>{if(r.data.hits.length<=0){a(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.reset();return}b(r.data.hits),a(),c.reset()}).catch(r=>{a(),l.error({title:"Error",message:r.message,position:"topRight"})})});
//# sourceMappingURL=index.js.map
