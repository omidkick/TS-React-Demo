interface StarShip {
  name: string;
  isMember: boolean;
  type: "Explorer" | "Freighter" | "Fighter";
}

const starShips: Record<string, StarShip> = {
  Name1: { name: "Galactic Voyager", isMember: true, type: "Explorer" },
  name2: { name: "Star Hauler", isMember: false, type: "Freighter" },
  name3: { name: "Cosmic Defender", isMember: true, type: "Fighter" },
};
export default starShips;
