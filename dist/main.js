(()=>{"use strict";const e=async()=>{const e="api_key=RGAPI-6dc875e4-13ae-4984-828c-f52f2181f2e9";let s,a,c;s=await fetch(`https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${t}?${e}`),s=await s.json(),a=s.id,c=await fetch(`https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${a}?${e}`),c=await c.json(),console.log(c[0].losses),(e=>{let t="",s="",a=0,c=0,n=0,o=0;e.map((e=>{s=e.tier,t=e.rank,a=e.wins,c=e.losses})),n=c+a,o=parseFloat((a/n*100).toFixed(2))+"%";let r=[t,a,c,n,o];r.forEach((e=>{const t=document.querySelector(".search-results"),s=document.createElement("div");s.className="result-container";const a=document.createElement("p");a.innerHTML=`${e}`,a.className="info-"+r.indexOf(e),s.appendChild(a),t.appendChild(s)}))})(c)};let t;(()=>{const s=document.querySelector(".search-btn"),a=document.querySelector(".search-results"),c=document.querySelector(".search-module-container");s.addEventListener("click",(()=>{t=document.querySelector(".search-box").value,e(),c.classList.add("hidden"),a.classList.add("revealed")}))})()})();