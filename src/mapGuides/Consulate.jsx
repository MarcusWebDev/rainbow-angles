import MapGuide from "../components/MapGuide";

const Consulate = () => {
  return (
    <MapGuide
      header={"CONSULATE"}
      headerPicture={require("../images/Consulate.jpg")}
      floorNames={["B", "1st", "2nd"]}
      floorStart={[4, 6]}
      pictures={[
        [
          require("../images/consulate/B1_1.png"),
          require("../images/consulate/B1_2.png"),
        ],
        [
          require("../images/consulate/B2_1.png"),
          require("../images/consulate/B2_2.png"),
        ],
        [
          require("../images/consulate/B3_1.png"),
          require("../images/consulate/B3_2.png"),
        ],
        [
          require("../images/consulate/B4_1.png"),
          require("../images/consulate/B4_2.png"),
        ],
        [
          require("../images/consulate/1st1_1.png"),
          require("../images/consulate/1st1_2.png"),
          require("../images/consulate/1st1_3.png"),
        ],
        [
          require("../images/consulate/1st2_1.png"),
          require("../images/consulate/1st2_2.png"),
          require("../images/consulate/1st2_3.png"),
        ],
        [
          require("../images/consulate/2nd1_1.png"),
          require("../images/consulate/2nd1_2.png"),
        ],
        [
          require("../images/consulate/2nd2_1.png"),
          require("../images/consulate/2nd2_2.png"),
        ],
        [
          require("../images/consulate/2nd3_1.png"),
          require("../images/consulate/2nd3_2.png"),
        ],
      ]}
      text={[
        "This angle is excellent for defending B Archives. It allows you to watch the western entrance to the room, as well as the spiral staircase and the hallway to garage. Also, the only visible part of your body is your head. You do need to destroy the computer and the folder holder on the desks infront of this angle, however.",
        "This angle could catch players coming from 1F Service Stairs into kitchen.",
        "The shelves and boxes infront of this angle do a good job of hiding your body just long enough for you to get the kill on anyone who walks into B Storage Room.",
        "This is a great way to watch B Garage from above. Attackers frequently breach the garage door and you'll be able to shoot them through the holes they create or as they're coming in. If you're an attack you can also use this angle to clear Bandit traps and Mute jammers.",
        "You can watch the doorway entrance to 1F Visa Office from 2F Administration Office from this angle. This is another very common entrance for attackers.",
        "Opening the floor right infront of the windows on 2F Meeting Room allows you to view the front door to the entire building, in 1F Lobby. This is a great angle to hold if the objective is in 1F Lobby.",
        "This angle lets you watch the Service Stairs coming from 1F Visa Office while being all the way in 2F Consul Office. I do recommend reinforcing the wall here so that you have some kind of cover if they do happen to see you on the way up.",
        "This angle watches over the Exit Stairs (Yellow Stairs), from 2F Waiting Room. This angle gives you the couch as cover, but really relies on catching your opponent off guard since this will likely be the direction they look when they come up the stairs.",
        "Getting on top of the desk on the north eastern side of 2F Administration Office allows you to watch all three window entrances to the room while also hiding all of your body except for your head.",
      ]}
    />
  );
};

export default Consulate;
