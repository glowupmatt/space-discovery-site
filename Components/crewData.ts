export type CrewDataType = {
  title: string;
  name: string;
  desc: string;
  img: string;
};

export const crewData: CrewDataType[] = [
  {
    title: "Commander ",
    name: "Douglas Hurley",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: "/starter-code/assets/crew/image-douglas-hurley.png",
  },
  {
    title: "Mission Specialist ",
    name: "MARK SHUTTLEWORTH",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: "/starter-code/assets/crew/image-mark-shuttleworth.png",
  },
  {
    title: "PILOT",
    name: "Victor Glover",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    img: "/starter-code/assets/crew/image-victor-glover.png",
  },
  {
    title: "Flight Engineer",
    name: "Anousheh Ansari",
    desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    img: "/starter-code/assets/crew/image-anousheh-ansari.png",
  },
];
