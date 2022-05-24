import appendDataToDOM from "./appendApiData";
import { summonersName } from "./eventHandlers";

const fetchApiData = async () => {
  const api_key = "api_key=RGAPI-6dc875e4-13ae-4984-828c-f52f2181f2e9";

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
  console.log(getSummonersDetailedInfo[0].losses);
  appendDataToDOM(getSummonersDetailedInfo);
};

export default fetchApiData;
