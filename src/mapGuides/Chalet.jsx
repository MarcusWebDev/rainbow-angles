import MapGuide from "../components/MapGuide/MapGuide";

const Chalet = () => {
  return (
    <MapGuide
      header={"CHALET"}
      headerPicture={require("../images/Chalet.jpg")}
      floorNames={["B", "1st", "2nd"]}
      floorStart={[3, 6]}
      pictures={[
        [
          require("../images/chalet/B1_1.png"),
          require("../images/chalet/B1_2.png"),
        ],
        [
          require("../images/chalet/B2_1.png"),
          require("../images/chalet/B2_2.png"),
        ],
        [
          require("../images/chalet/B3_1.png"),
          require("../images/chalet/B3_2.png"),
        ],
        [
          require("../images/chalet/1st1_1.png"),
          require("../images/chalet/1st1_2.png"),
        ],
        [
          require("../images/chalet/1st2_1.png"),
          require("../images/chalet/1st2_2.png"),
        ],
        [
          require("../images/chalet/1st3_1.png"),
          require("../images/chalet/1st3_2.png"),
        ],
        [
          require("../images/chalet/2nd1_1.png"),
          require("../images/chalet/2nd1_2.png"),
        ],
        [
          require("../images/chalet/2nd2_1.png"),
          require("../images/chalet/2nd2_2.png"),
        ],
        [
          require("../images/chalet/2nd3_1.png"),
          require("../images/chalet/2nd3_2.png"),
        ],
      ]}
      text={[
        "This angle works great for both attackers and defenders. For attackers you can use it to destroy Bandit traps and Mute jammers. As a defender you can hold this angle since it is very common for attackers to breach through the basement garage door.",
        "If you open the hatch in 1F Dining Room, you can watch the doorway into the wine room in basement. This is a very common place for attackers to try to enter basement from, so holding an angle on this doorway from above is very powerful!",
        "This angle allows you to watch the door in the small car garage in basement. It is common for people to breach through the western garage door in that room as well, so be wary of that as you won't have as good of an angle if they approach from there.",
        "You can watch the hallway leading into 1F Dining Room from this angle.",
        "Opening the hatch in the 2F hallway on lets you watch the entrance near 1F Game Room",
        "This angle isn't the greatest, but if you know they're coming through the lobby window you can watch it from here.",
        "This is a good angle to hold if the objective is in 2F Library. You can see the window through the display case, all while keeping low profile and having the opaqueness of the glass hide your head.",
        "This angle is really good because you can see all three entrances to 2F Master Bedroom from here. It's also a pretty unexpected place for you to be shooting from in lower ranks.",
        "This angle is good for checking the 2F hallway because it hardly exposes you and you can see the entire hallway leading north.",
      ]}
    />
  );
};

export default Chalet;
