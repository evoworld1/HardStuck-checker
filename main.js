(() => {
  "use strict";
  const e = [
      { tier: "IRON", src: "../src/assets/Emblem_Iron.png" },
      { tier: "BRONZE", src: "../src/assets/Emblem_Bronze.png" },
      { tier: "SILVER", src: "../src/assets/Emblem_Silver.png" },
      { tier: "GOLD", src: "../src/assets/Emblem_Gold.png" },
      { tier: "PLATINUM", src: "../src/assets/Emblem_Platinum.png" },
      { tier: "DIAMOND", src: "../src/assets/Emblem_Diamond.png" },
      { tier: "MASTER", src: "../src/assets/Emblem_Master.png" },
      { tier: "GRANDMASTER", src: "../src/assets/Emblem_Grandmaster.png" },
      { tier: "CHALLENGER", src: "../src/assets/Emblem_Challenger.png" },
    ],
    s = async () => {
      const s = "api_key=RGAPI-6fd9e8a6-9ea6-4667-83a3-14fba2fee819";
      let r, n, c;
      (r = await fetch(
        `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${t}?${s}`
      )),
        (r = await r.json()),
        (n = r.id),
        (c = await fetch(
          `https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${n}?${s}`
        )),
        (c = await c.json()),
        ((s) => {
          let t = "",
            r = 0,
            n = 0,
            c = 0,
            a = 0,
            o = "",
            i = "";
          s.map((e) => {
            (t = e.tier),
              (r = e.wins),
              (n = e.losses),
              (o = "WINS:<br />" + e.wins),
              (i = "LOSSES:<br />" + e.losses);
          }),
            (c = n + r),
            (a = parseFloat(((r / c) * 100).toFixed(2)));
          let l = [o, t, i];
          l.forEach((s) => {
            const r = document.querySelector(".results-wrapper"),
              n = document.createElement("div");
            (n.className = "result-container"),
              s === t &&
                e.forEach((e) => {
                  if (e.tier === t) {
                    const s = document.createElement("img");
                    (s.src = e.src), (s.className = "icon"), n.appendChild(s);
                  }
                });
            const c = document.createElement("p");
            (c.innerHTML = `${s}`),
              (c.className = "info-" + l.indexOf(s)),
              n.appendChild(c),
              r.appendChild(n);
          });
          const m = document.querySelector(".evalutaion-container");
          (() => {
            const e = document.createElement("div");
            e.className = "bottom-line";
            const s = document.createElement("p");
            s.innerHTML = "TOTAL GAMES PLAYED:<br />" + c;
            const t = document.createElement("p");
            (t.innerHTML = "YOUR WIN RATE IS:<br />" + a + "%"),
              e.appendChild(s),
              e.appendChild(t),
              m.insertBefore(e, m.firstChild);
          })(),
            (() => {
              const e = document.getElementById("score");
              a < 55 && a > 50
                ? (e.innerHTML = "RESULT:<br />YOU ARE HARDSTUCK")
                : a > 60
                ? (e.innerHTML = "RESULT:<br />LOWKEY SMURFIN'")
                : a < 50
                ? (e.innerHTML =
                    "RESULT:<br />YOU'RE SLOWLY SINKING INTO THE DEPTHS OF ELO HELL...")
                : a > 55 &&
                  a < 60 &&
                  (e.innerHTML =
                    "RESULT:<br />JUST THE AVERAGE JOE - YOU COULD PUT SOME EFFORT THOUGH");
            })();
        })(c);
    };
  let t;
  (() => {
    const e = document.querySelector(".search-btn"),
      r = document.querySelector(".search-results"),
      n = document.querySelector(".search-module-container");
    e.addEventListener("click", () => {
      (t = document.querySelector(".search-box").value),
        s(),
        n.classList.add("hidden"),
        r.classList.add("revealed");
    });
  })();
})();
