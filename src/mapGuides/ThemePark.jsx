import MapGuide from "../components/MapGuide";

const ThemePark = () => {
  return (
    <MapGuide
      header={"THEME PARK"}
      headerPicture={require("../images/ThemePark.jpg")}
      floorNames={["1st", "2nd"]}
      floorStart={[6]}
      pictures={[
        [
          require("../images/themePark/1st1_1.png"),
          require("../images/themePark/1st1_2.png"),
        ],
        [
          require("../images/themePark/1st2_1.png"),
          require("../images/themePark/1st2_2.png"),
        ],
        [
          require("../images/themePark/1st3_1.png"),
          require("../images/themePark/1st3_2.png"),
        ],
        [
          require("../images/themePark/1st4_1.png"),
          require("../images/themePark/1st4_2.png"),
        ],
        [
          require("../images/themePark/1st5_1.png"),
          require("../images/themePark/1st5_2.png"),
        ],
        [
          require("../images/themePark/1st6_1.png"),
          require("../images/themePark/1st6_2.png"),
        ],
        [
          require("../images/themePark/2nd1_1.png"),
          require("../images/themePark/2nd1_2.png"),
        ],
        [
          require("../images/themePark/2nd2_1.png"),
          require("../images/themePark/2nd2_2.png"),
        ],
      ]}
      text={[
        "If you destroy the floor infront of the refrigerator in 2F Cafe, you can see the window in 1F Arcade Toilet. Attackers frequently open this window, making this a powerful angle to hold. However, attackers also frequently enter the building through 2F Cafe, so it is somewhat risky to hold this angle as well.",
        "Opening the floor infront of the entrance to 2F Cafe allows you two angles. One watching to doorway to 1F Arcade Toilet from the hallway, and one looking down into a common spot in 1F Drug Lab for defenders to be hiding.",
        "You can also watch the entrance to 1F Arcade Toilet from this angle in 2F Day Care.",
        "Opening the floor and proning under this desk in 2F Bunk lets you watch the window entrance to 1F Barrel Room.",
        "This well known angle lets you watch both south western entrances to 1F Arcade Entance from 2F Bunk Toilet.",
        "Destroying the floor infront of the northern entrance to 2F Bunk lets you watch 1F Service Corridor from above.",
        "If you create a hole in the west wall of 2F Initiation Room, you can see the south eastern entrance to 2F Rail Platform. This angle lets you see their feet before they even attempt to open the door.",
        "This angle is great if the objective is in 2F Offices. If they try to enter the room through the hallway, you'll be able to catch them with this angle.",
      ]}
    />
  );
};

export default ThemePark;
