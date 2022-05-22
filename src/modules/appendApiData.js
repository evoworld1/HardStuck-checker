const appendDataToDOM = (data) => {
  const resultsContainer = document.getElementById("search-results");

  let playerInformation = document.createElement("p");
  playerInformation.innerHTML = `${data[0].rank},
    ${data[0].wins},
    ${data[0].losses},
    ${data[0].summonerName}`;

  resultsContainer.appendChild(playerInformation);
};

export default appendDataToDOM;
