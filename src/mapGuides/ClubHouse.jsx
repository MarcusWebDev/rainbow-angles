import MapGuide from "../components/MapGuide";

const ClubHouse = () => {
  return (
    <MapGuide
      header={"CLUB HOUSE"}
      headerImage={require("../images/ClubHouse.jpg")}
      floorNames={["B", "1st", "2nd"]}
      floorStart={[3, 7]}
      images={[
        [
          require("../images/clubHouse/B1_1.png"),
          require("../images/clubHouse/B1_2.png"),
          require("../images/clubHouse/B1_3.png"),
        ],
        [
          require("../images/clubHouse/B2_1.png"),
          require("../images/clubHouse/B2_2.png"),
          require("../images/clubHouse/B2_3.png"),
        ],
        [
          require("../images/clubHouse/B3_1.png"),
          require("../images/clubHouse/B3_2.png"),
          require("../images/clubHouse/B3_3.png"),
        ],
        [
          require("../images/clubHouse/1st1_1.png"),
          require("../images/clubHouse/1st1_2.png"),
          require("../images/clubHouse/1st1_3.png"),
        ],
        [
          require("../images/clubHouse/1st2_1.png"),
          require("../images/clubHouse/1st2_2.png"),
          require("../images/clubHouse/1st2_3.png"),
        ],
        [
          require("../images/clubHouse/1st3_1.png"),
          require("../images/clubHouse/1st3_2.png"),
          require("../images/clubHouse/1st3_3.png"),
        ],
        [
          require("../images/clubHouse/1st4_1.png"),
          require("../images/clubHouse/1st4_2.png"),
          require("../images/clubHouse/1st4_3.png"),
        ],
        [
          require("../images/clubHouse/2nd1_1.png"),
          require("../images/clubHouse/2nd1_2.png"),
        ],
        [
          require("../images/clubHouse/2nd2_1.png"),
          require("../images/clubHouse/2nd2_2.png"),
        ],
        [
          require("../images/clubHouse/2nd3_1.png"),
          require("../images/clubHouse/2nd3_2.png"),
        ],
      ]}
      text={[
        "Destroying the floor here allows you to see the doorway leading to the stairs in Basement. This could be good for attackers because it will allow you to check if anyone is watching the stairs before proceeding down. Be careful though, destroying the floor will also alert defenders.",
        "If you really want, you can destroy the floor in 1F kitchen and the top of the wall in B Armory and watch the hallway from above. This could trick attackers as they'll be looking through the hole in the wall to find people in basement, but you'll be watching from above.",
        "This angle allows you to see the entrance to B Church and the hallway leading to it. Having an attacker watch this angle while their team proceeds downstairs could be beneficial.",
        "If you destroy the garage door wall in 1F Bar and the wall adjacent to it, you can see the doorway to kitchen. If the objective is in basement, it is common for attackers to try to open the hatch in kitchen, this angle could catch them going in to open the hatch, or leaving after opening it.",
        "You can watch the northern entrance to 1F bar from the 2F Bathroom using this angle. The bar is a very high traffic area for both teams, so this angle could be potent.",
        "Catch attackers attempting to open this crucial hatch from above with this angle. Not only does this give you vision of the hatch, but it also allows you to see one of the doorways leading to it as well!",
        "There is a very small spot of breakable floor/ceiling in garage above the doorway. Use this as a defender to protect from flanking attackers or use this angle as an attacker to catch defenders using the door as cover.",
        "This angle lets you watch both the 2F Bedroom window and the 2F gym window from the comfort of your mattress.",
        "You can watch the 2F Construction window from 2F Office using this angle.",
        "This low profile angle will give you vision of your opponent's feet and give them vision of nothing! If you stand far enough back on the stairs the desk hides your body.",
      ]}
    />
  );
};

export default ClubHouse;
