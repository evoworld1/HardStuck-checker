const init = () => {
  const api_key = "api_key=RGAPI-fdc618fd-8395-4879-98c5-26177082d958";
  let summonersName;
  let playerEncryptedSummonerId;

  const getSummonerInformation = () => {
    const userInput = document.querySelector(".search-box");
    const evaluateButton = document.querySelector(".search-btn");

    userInput.addEventListener("change", (e) => {
      userInput.textContent = e.target.value;
      summonersName = userInput.textContent;
    });

    evaluateButton.addEventListener("click", () => {
      fetchApiData();
    });
  };

  const fetchApiData = async () => {
    try {
      const linkForPlayerData = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonersName}?${api_key}`;
      let getPlayerDataBySummonersName = await fetch(linkForPlayerData);

      if (!getPlayerDataBySummonersName.ok) {
        throw new Error(
          `Failed to fetch user data: ${getPlayerDataBySummonersName.status}`
        );
      }

      getPlayerDataBySummonersName = await getPlayerDataBySummonersName.json();

      playerEncryptedSummonerId = getPlayerDataBySummonersName.id;
      const linkForSummonersDetailedInfo = `https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerEncryptedSummonerId}?${api_key}`;

      console.log(playerEncryptedSummonerId);

      let getSummonersDetailedInfo = await fetch(linkForSummonersDetailedInfo);
      getSummonersDetailedInfo = await getSummonersDetailedInfo.json();

      console.log(getSummonersDetailedInfo);
    } catch (e) {
      console.log(e);
    }
  };

  getSummonerInformation();
};

init();

export default init;
