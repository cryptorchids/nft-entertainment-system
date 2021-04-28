import { Contract } from "@ethersproject/contracts";
import { Wallet } from "@ethersproject/wallet";

import { abi, address } from "./deployments";
import species, { OrchidItem, plantedDate, Stage } from "./species";

const fetcher = (signer: Wallet) => (...args) => {
  if (!signer) return Promise.reject();
  const [method, ...params] = args;
  const contract = new Contract(address, abi, signer);
  return contract[method](...params);
};

export const tokenFetcher = (signer: Wallet) => async () => {
  const orchids: OrchidItem[] = [];
  const contract = new Contract(address, abi, signer);
  const count = await contract.balanceOf(signer.address);

  for (let index = 0; index < count.toNumber(); index++) {
    const token = await contract.tokenOfOwnerByIndex(signer.address, index);
    const stageInt = await contract.growthStage(token);

    const {
      0: latinName,
      1: plantedAt,
      2: waterLevel,
    } = await contract.getTokenMetadata(token);

    orchids.push({
      token: token.toNumber(),
      latinName,
      stage: Stage[stageInt],
      plantedAt: plantedDate(plantedAt),
      waterLevel: waterLevel.toNumber(),
      ...species[latinName],
    });
  }
  return Promise.resolve(orchids);
};

export default fetcher;
