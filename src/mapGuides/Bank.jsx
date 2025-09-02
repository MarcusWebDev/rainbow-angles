import MapGuide from "../components/MapGuide";

const Bank = () => {
  return (
    <MapGuide
      header={"BANK"}
      headerPicture={require("../images/Bank.jpg")}
      floorNames={["B", "1st", "2nd"]}
      floorStart={[1, 4]}
      pictures={[
        [
          require("../images/bank/B1_1.png"),
          require("../images/bank/B1_2.png"),
        ],
        [
          require("../images/bank/1st1_1.png"),
          require("../images/bank/1st1_2.png"),
        ],
        [
          require("../images/bank/1st2_1.png"),
          require("../images/bank/1st2_2.png"),
        ],
        [
          require("../images/bank/1st3_1.png"),
          require("../images/bank/1st3_2.png"),
        ],
        [
          require("../images/bank/2nd1_1.png"),
          require("../images/bank/2nd1_2.png"),
        ],
        [
          require("../images/bank/2nd2_1.png"),
          require("../images/bank/2nd2_2.png"),
        ],
      ]}
      text={[
        "This angle lets you watch the doorway to B CCTV Room from B Lockers. The angle does leave you somewhat vulnerable however, since this is the first directions attackers will be looking as they come through the door. This angle works better with the holes being Mira walls for that reason.",
        "Destroying the left side of the western wall of 2F Hallway lets you watch over two windows on the west side of 1F Lobby that are common entry points for attackers.",
        "This is a great angle to hold if the objective is in 1F Open Area as it watches the hallway attackers must go through if they approach from the eastern window of 1F Open Area. If the attackers decide to repel to 2F, however, you will be vulnerable as it is common for attackers to enter through the window you'll be standing infront of for this angle.",
        "This is a very powerful angle for attackers if the objective is in 1F Teller's Office or 1F Archives. It's a good way to check if anyone is holding an angle using the northern doorway to 1F Teller's office.",
        "If you create a small hole on the left side of the eastern wall of 2F Conference Room you can watch the doorway to 2F Janitor Closet. You'll be able to catch attackers who are clearing that room or any attackers that try to walk past the doorway as they make their way down 2F Hallway.",
        "This is a good angle to hold if the objective is in 2F Executive Lounge. It gives you vision of the doorway to 2F Front Desk, which is one way attackers may try to make their way to the objective.",
      ]}
    />
  );
};

export default Bank;
