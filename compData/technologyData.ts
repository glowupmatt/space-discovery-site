export type TechnologyDataType = {
  name: string;
  desc: string;
  img: string;
};

export const technologyData: TechnologyDataType[] = [
  {
    name: "LAUNCH VEHICLE",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    img: "/starter-code/assets/technology/image-launch-vehicle-landscape.jpg",
  },
  {
    name: "SPACEPORT",
    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    img: "/starter-code/assets/technology/image-space-capsule-landscape.jpg",
  },
  {
    name: "SPACE CAPSULE",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img: "/starter-code/assets/technology/image-spaceport-landscape.jpg",
  },
];
