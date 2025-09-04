import MapGuide from "../components/MapGuide";

const Skyscraper = () => {
  return (
    <MapGuide
      header={"SKYSCRAPER"}
      headerImage={require("../images/Skyscraper.jpg")}
      floorNames={["1st", "2nd"]}
      floorStart={[5]}
      images={[
        [
          require("../images/skyscraper/1st1_1.png"),
          require("../images/skyscraper/1st1_2.png"),
        ],
        [
          require("../images/skyscraper/1st2_1.png"),
          require("../images/skyscraper/1st2_2.png"),
        ],
        [
          require("../images/skyscraper/1st3_1.png"),
          require("../images/skyscraper/1st3_2.png"),
        ],
        [
          require("../images/skyscraper/1st4_1.png"),
          require("../images/skyscraper/1st4_2.png"),
        ],
        [
          require("../images/skyscraper/1st5_1.png"),
          require("../images/skyscraper/1st5_2.png"),
        ],
        [
          require("../images/skyscraper/2nd1_1.png"),
          require("../images/skyscraper/2nd1_2.png"),
        ],
      ]}
      text={[
        "You can see the middle of 1F Restaurant form 2F Tea Room using this angle.",
        "This angle lets you watch the eastern entrance to 1F Pantry from 2F Taiko. This is a good angle to hold if the objective is in 1F Kitchen.",
        "It's possible to watch the doorway entrance to 1F House Lobby from 2F Exhibition using this angle. However, it is rather risky as the window that you're standing infront of in 2F Exhibition is a common place for attackers to enter from.",
        "Destroying some of the floor on the southern side of 2F Exhibition lets you watch the doorway entrance to 1F Bedroom. This is a good angle to hold if the objective is in 1F Bedroom.",
        "This is a very powerful angle to hold. You can see 1F Main Stairs from 2F Tea Room using this angle. If the objective is in 2F Tea Room, holding this angle denies the attackers of one of the primary ways to get to 2F Tea Room.",
        "This angle watches the entrance to 2F Lounge from 2F Terrace. The bamboo covers much of your body and this angle is powerful if the objective is in 2F Work Office.",
      ]}
    />
  );
};

export default Skyscraper;
