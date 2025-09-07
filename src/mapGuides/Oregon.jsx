import MapGuide from "../components/MapGuide";

const Oregon = () => {
  return (
    <MapGuide
      header={"OREGON"}
      headerImage={require("../images/Oregon.jpg")}
      floorNames={["B", "1st", "2nd"]}
      floorStartingIndices={[1, 4]}
      images={[
        [
          require("../images/oregon/B1_1.png"),
          require("../images/oregon/B1_2.png"),
        ],
        [
          require("../images/oregon/1st1_1.png"),
          require("../images/oregon/1st1_2.png"),
        ],
        [
          require("../images/oregon/1st2_1.png"),
          require("../images/oregon/1st2_2.png"),
        ],
        [
          require("../images/oregon/1st3_1.png"),
          require("../images/oregon/1st3_2.png"),
        ],
        [
          require("../images/oregon/2nd1_1.png"),
          require("../images/oregon/2nd1_2.png"),
        ],
        [
          require("../images/oregon/2nd2_1.png"),
          require("../images/oregon/2nd2_2.png"),
        ],
      ]}
      descriptions={[
        "Opening the floor at the top of 1F Main Stairs lets you watch the B Laundry Stairs. This a good angle for both attackers and defenders.",
        "You can watch the hatch in 1F Lobby from 2F Master Bedroom using this angle. This hatch is the most frequently opened hatch by attackers, so being able to watch it from above is incredibly powerful.",
        "This angle lets you watch the hallway connecting 1F Diing Hall Corridor to 1F Bathroom Corridor.",
        "This angle lets you watch the hallway leading from 1F Bathroom Corridor to 1F Lobby.",
        "Creating a hole in the western wall of 2F Armory lets you see down the entirety of 2F Armory Corridor and 2F Dorm Main Hall. This is a very powerful angle to hold as an attacker as it locks down the entirety of 2F.",
        "Creating a small hole in the south eastern corner of 3F Watch Tower lets you watch the southern window of 2F Watch Tower without being vulnerable from anywhere except for the windows on 3F Watchtower.",
      ]}
    />
  );
};

export default Oregon;
