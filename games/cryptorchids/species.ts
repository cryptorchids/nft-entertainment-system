import { BigNumber } from "@ethersproject/bignumber";
import { ImageURISource } from "react-native";

import theme from "./theme";
export const GROWTH_CYCLE_SECONDS = 10800;
export const WATERING_WINDOW_LENGTH_SECONDS = 600;
const MAX_TIMESTAMP = BigNumber.from(
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"
);

export function plantedDate(plantedAt: BigNumber): Date {
  if (plantedAt.eq(MAX_TIMESTAMP)) {
    return null;
  }

  return new Date(plantedAt.mul(1000).toNumber());
}

export enum Stage {
  "UNSOLD",
  "SEED",
  "FLOWERING",
  "DEAD",
}

export type OrchidSpecies = {
  name: string;
  latinName: string;
  image: ImageURISource;
  per10k: number;
  level: string;
  color: string;
  fontColor: string;
  imageTransparent: string;
  imageDead: ImageURISource;
};

export type OrchidItem = OrchidSpecies & {
  token: number;
  waterLevel: number;
  plantedAt: Date;
  alive?: boolean;
  stage: string;
};

const species: Record<string, OrchidSpecies> = {
  "phalaenopsis micholitzii": {
    name: "White Moth",
    latinName: "phalaenopsis micholitzii",
    image: require("./resources/white-moth.png"),
    per10k: 3074,
    level: "Common",
    color: theme.COLORS.shadow,
    fontColor: "white",
    imageTransparent: "/white-moth-transparent.png",
    imageDead: require("./resources/white-moth-dead.png"),
  },
  "guarianthe aurantiaca": {
    name: "Orange Cattelya",
    latinName: "guarianthe aurantiaca",
    image: require("./resources/orange-cattleya.png"),
    per10k: 3000,
    level: "Common",
    color: theme.COLORS.shadow,
    fontColor: "white",
    imageTransparent: "/orange-cattleya-transparent.png",
    imageDead: require("./resources/orange-cattleya-dead.png"),
  },
  "vanda coerulea": {
    name: "Blue Vanda",
    latinName: "vanda coerulea",
    image: require("./resources/blue-vanda.png"),
    per10k: 2000,
    level: "Uncommon",
    color: theme.COLORS.prussianBlue,
    fontColor: "white",
    imageTransparent: "/blue-vanda-transparent.png",
    imageDead: require("./resources/blue-vanda-dead.png"),
  },
  "cypripedium calceolus": {
    name: "Yellow Lady's Slipper",
    latinName: "cypripedium calceolus",
    image: require("./resources/lady-slipper.png"),
    per10k: 1000,
    level: "Uncommon",
    color: theme.COLORS.prussianBlue,
    fontColor: "white",
    imageTransparent: "/lady-slipper-transparent.png",
    imageDead: require("./resources/lady-slipper-dead.png"),
  },
  "paphiopedilum vietnamense": {
    name: "Vietnamese Paphiopedilum",
    latinName: "paphiopedilum vietnamense",
    image: require("./resources/vietnamese-paphiopedilum.png"),
    per10k: 500,
    level: "Rare",
    color: theme.COLORS.darkOliveGreen,
    fontColor: "white",
    imageTransparent: "/vietnamese-paphiopedilum-transparent.png",
    imageDead: require("./resources/vietnamese-paphiopedilum-dead.png"),
  },
  "miltonia kayasimae": {
    name: "Kayasima Miltonia",
    latinName: "miltonia kayasimae",
    image: require("./resources/miltonia-kayasimae.png"),
    per10k: 250,
    level: "Rare",
    color: theme.COLORS.darkOliveGreen,
    fontColor: "white",
    imageTransparent: "/miltonia-kayasimae-transparent.png",
    imageDead: require("./resources/miltonia-kayasimae-dead.png"),
  },
  "platanthera azorica": {
    name: "Hochstetter's Butterfly Orchid",
    latinName: "platanthera azorica",
    image: require("./resources/hochstetter-butterfly.png"),
    per10k: 100,
    level: "Super Rare",
    color: theme.COLORS.asparagus,
    fontColor: "white",
    imageTransparent: "/hochstetter-butterfly-transparent.png",
    imageDead: require("./resources/hochstetter-butterfly-dead.png"),
  },
  "dendrophylax lindenii": {
    name: "Ghost Orchid",
    latinName: "dendrophylax lindenii",
    image: require("./resources/ghost-orchid.png"),
    per10k: 50,
    level: "Super Rare",
    fontColor: "white",
    color: theme.COLORS.asparagus,
    imageTransparent: "/ghost-orchid-transparent.png",
    imageDead: require("./resources/ghost-orchid-dead.png"),
  },
  "paphiopedilum rothschildianum": {
    name: "Gold of Kinabalu",
    latinName: "paphiopedilum rothschildianum",
    image: require("./resources/gold-of-kinabalu.png"),
    per10k: 25,
    level: "Legendary",
    color: theme.COLORS.blizzardBlue,
    fontColor: theme.COLORS.prussianBlue,
    imageTransparent: "/gold-of-kinabalu-transparent.png",
    imageDead: require("./resources/gold-of-kinabalu-dead.png"),
  },
  "shenzhenica orchidaceae": {
    name: "Shenzhen Nongke Orchid",
    latinName: "shenzhenica orchidaceae",
    image: require("./resources/shenzen-nongke.png"),
    per10k: 1,
    level: "Legendary",
    color: theme.COLORS.blizzardBlue,
    fontColor: theme.COLORS.prussianBlue,
    imageTransparent: "/shenzen-nongke-transparent.png",
    imageDead: require("./resources/shenzen-nongke-dead.png"),
  },
  granum: {
    name: "Seed",
    latinName: "granum",
    image: require("./resources/granum.png"),
    per10k: 10_000,
    level: "Seed",
    color: "white",
    fontColor: "rgb(170, 151, 177)",
    imageTransparent: "/granum.png",
    imageDead: require("./resources/granum.png"),
  },
};

export default species;
