import MapGuide from "../components/MapGuide";

const Border = () => {
  return (
    <MapGuide
      header={"Border"}
      headerImage={require("../images/Border.jpg")}
      floorNames={["1st", "2nd"]}
      floorStartingIndices={[4]}
      images={[
        [
          require("../images/border/1st1_1.png"),
          require("../images/border/1st1_2.png"),
          require("../images/border/1st1_3.png"),
        ],
        [
          require("../images/border/1st2_1.png"),
          require("../images/border/1st2_2.png"),
        ],
        [
          require("../images/border/1st3_1.png"),
          require("../images/border/1st3_2.png"),
        ],
        [
          require("../images/border/1st4_1.png"),
          require("../images/border/1st4_2.png"),
        ],
        [
          require("../images/border/2nd1_1.png"),
          require("../images/border/2nd1_2.png"),
        ],
        [
          require("../images/border/2nd2_1.png"),
          require("../images/border/2nd2_2.png"),
        ],
        [
          require("../images/border/2nd3_1.png"),
          require("../images/border/2nd3_2.png"),
        ],
      ]}
      descriptions={[
        "Opening the hatch in 2F Offices lets you watch over 1F Tellers, which is also an objective site for all three game modes. It is possible to see the entire room, except for the window from this angle.",
        "If you create a hole in the eastern wall of 2F Break Room, you can look out over all of the lobby and even see part of the hallway on 2F.",
        "This angle will allow you to catch anyone coming from the lobby or the bathroom hallway on first floor. You'll need to be careful of people coming from western side of the hallway and the security room, however.",
        "This is angle watches over a common window for attackers to come through if the objective is here. The room you're in while holding this angle is pretty safe as long as the walls on the west side of the room are reinforced. The top of the wall can still be destroyed without hard breachers, so be wary of that.",
        "This is a very risky angle to hold because you can be vulnerable from so many different directions. However, if you clear CCTV and know that nobody is coming down the hallway, this can be a good way to catch the defenders off guard if they're in armory.",
        "In order to get on the cabinet for this angle, you have to vault onto the computer that is the desk in this room. After doing that, if you align yourself with the right corner of the cabinet and wiggle left and right while holding forward, eventually you'll get ontop of the cabinet and have access to this angle. If needed, you can even vault through the hole in the wall that this angle peaks through to get into 2F Offices.",
        "You're pretty vulnerable with this angle as well because attackers coming through the hallway will easily be able to see the destroyed wall and react to it before you see them. However, if you know that nobody is coming down the hallway, you may be able to surprise an attacker who is coming up the western stairs with this angle.",
      ]}
    />
  );
};

export default Border;
