const appendDataToDOM = (data) => {
  let rank = "";
  let tier = "";
  let wins = 0;
  let losses = 0;
  let total = 0;
  let winRate = 0;

  data.map((el) => {
    tier = el.tier;
    rank = el.rank;
    wins = el.wins;
    losses = el.losses;
  });

  total = losses + wins;
  winRate = parseFloat(((wins / total) * 100).toFixed(2)) + "%";

  let dataArray = [rank, wins, losses, total, winRate];

  dataArray.forEach((el) => {
    const fetchResultsContainer = document.querySelector(".search-results");
    const resultsElement = document.createElement("div");
    resultsElement.className = "result-container";
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `${el}`;
    paragraph.className = "info-" + dataArray.indexOf(el);
    resultsElement.appendChild(paragraph);
    fetchResultsContainer.appendChild(resultsElement);
  });
};

export default appendDataToDOM;
