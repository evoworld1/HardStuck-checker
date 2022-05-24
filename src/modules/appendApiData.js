import arrayOfIcons from "../modules/iconsData";

const appendDataToDOM = (data) => {
  let tier = "";
  let wins = 0;
  let losses = 0;
  let total = 0;
  let winRate = 0;
  let winScore = "";
  let lossesScore = "";

  data.map((el) => {
    tier = el.tier;
    wins = el.wins;
    losses = el.losses;
    winScore = "WINS:" + "<br />" + el.wins;
    lossesScore = "LOSSES:" + "<br />" + el.losses;
  });

  total = losses + wins;
  winRate = parseFloat(((wins / total) * 100).toFixed(2));

  let dataArray = [winScore, tier, lossesScore];

  dataArray.forEach((el) => {
    const fetchResultsContainer = document.querySelector(".results-wrapper");
    const resultsElement = document.createElement("div");
    resultsElement.className = "result-container";
    if (el === tier) {
      arrayOfIcons.forEach((icon) => {
        if (icon.tier === tier) {
          const tierIcon = document.createElement("img");
          tierIcon.src = icon.src;
          tierIcon.className = "icon";
          resultsElement.appendChild(tierIcon);
        }
      });
    }
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `${el}`;
    paragraph.className = "info-" + dataArray.indexOf(el);
    resultsElement.appendChild(paragraph);
    fetchResultsContainer.appendChild(resultsElement);
  });

  const evaluationContainer = document.querySelector(".evalutaion-container");

  const createSeparateDivForTotalAndWinrate = () => {
    const totalAndWinrateCointainer = document.createElement("div");
    totalAndWinrateCointainer.className = "bottom-line";
    const totalMatches = document.createElement("p");
    totalMatches.innerHTML = "TOTAL GAMES PLAYED:" + "<br />" + total;
    const matchWinRate = document.createElement("p");
    matchWinRate.innerHTML = "YOUR WIN RATE IS:" + "<br />" + winRate + "%";
    totalAndWinrateCointainer.appendChild(totalMatches);
    totalAndWinrateCointainer.appendChild(matchWinRate);
    evaluationContainer.insertBefore(
      totalAndWinrateCointainer,
      evaluationContainer.firstChild
    );
  };

  const evaluateData = () => {
    const answer = document.getElementById("score");
    if (winRate < 55 && winRate > 50) {
      answer.innerHTML = "RESULT:" + "<br />" + "YOU ARE HARDSTUCK";
    } else if (winRate > 60) {
      answer.innerHTML = "RESULT:" + "<br />" + "LOWKEY SMURFIN'";
    } else if (winRate < 50) {
      answer.innerHTML =
        "RESULT:" +
        "<br />" +
        "YOU'RE SLOWLY SINKING INTO THE DEPTHS OF ELO HELL...";
    } else if (winRate > 55 && winRate < 60) {
      answer.innerHTML =
        "RESULT:" +
        "<br />" +
        "JUST THE AVERAGE JOE - YOU COULD PUT SOME EFFORT THOUGH";
    }
  };
  createSeparateDivForTotalAndWinrate();
  evaluateData();
};

export default appendDataToDOM;
