const appendDataToDOM = (data) => {
  const fetchResultsContainer = document.querySelector(".search-results");

  let playerInformation = document.createElement("p");
  playerInformation.innerHTML = `${data[0].rank},
    ${data[0].wins},
    ${data[0].losses},
    ${data[0].summonerName}`;

  fetchResultsContainer.appendChild(playerInformation);
};

export default appendDataToDOM;
