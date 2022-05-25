import appendDataToDOM from "./appendApiData";
import { summonersName } from "./eventHandlers";

const fetchApiData = async () => {
  const api_key = "api_key=RGAPI-a43655ea-02f9-4a16-a162-7fa2f1665c61";

  let getPlayerDataBySummonersName;
  let playerEncryptedSummonerId;
  let getSummonersDetailedInfo;

  getPlayerDataBySummonersName = await fetch(
    `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonersName}?${api_key}`
  );

  getPlayerDataBySummonersName = await getPlayerDataBySummonersName.json();

  playerEncryptedSummonerId = getPlayerDataBySummonersName.id;

  getSummonersDetailedInfo = await fetch(
    `https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerEncryptedSummonerId}?${api_key}`
  );

  getSummonersDetailedInfo = await getSummonersDetailedInfo.json();

  appendDataToDOM(getSummonersDetailedInfo);
};

export default fetchApiData;
