import MapGuide from "../components/MapGuide";

const KafeDostoyevsky = () => {
  return (
    <MapGuide
      header={"KAFE DOSTOYEVSKY"}
      headerImage={require("../images/KafeDostoyevsky.jpg")}
      floorNames={["1st", "2nd", "3rd"]}
      floorStartingIndices={[3, 7]}
      images={[
        [
          require("../images/kafeDostoyevsky/1st1_1.png"),
          require("../images/kafeDostoyevsky/1st1_2.png"),
        ],
        [
          require("../images/kafeDostoyevsky/1st2_1.png"),
          require("../images/kafeDostoyevsky/1st2_2.png"),
        ],
        [
          require("../images/kafeDostoyevsky/1st3_1.png"),
          require("../images/kafeDostoyevsky/1st3_2.png"),
        ],
        [
          require("../images/kafeDostoyevsky/2nd1_1.png"),
          require("../images/kafeDostoyevsky/2nd1_2.png"),
        ],
        [
          require("../images/kafeDostoyevsky/2nd2_1.png"),
          require("../images/kafeDostoyevsky/2nd2_2.png"),
        ],
        [
          require("../images/kafeDostoyevsky/2nd3_1.png"),
          require("../images/kafeDostoyevsky/2nd3_2.png"),
        ],
        [
          require("../images/kafeDostoyevsky/2nd4_1.png"),
          require("../images/kafeDostoyevsky/2nd4_2.png"),
        ],
        [
          require("../images/kafeDostoyevsky/3rd1_1.png"),
          require("../images/kafeDostoyevsky/3rd1_2.png"),
        ],
      ]}
      descriptions={[
        "Opening the floor near the Chimney in 2F Fireplace Hall lets you watch the doorway leading from 1F Cold Room Corridor to 1F Kitchen Pick Up. You'll be watching from the Kitchen side. Great angle to hold if the objective is in 1F Kitchen Grill.",
        "You can watch 1F Front Stairs (Red Stairs) from 2F Museum Entrance using this angle.",
        "This angle lets you watch the intersection between 1F Cold Room Corridor, 1F Main Corridor, and 1F Dining Room.",
        "Opening the floor just south of the north eastern most desk in 3F Cocktail Lounge lets you watch the northern entrance to 2F Library. This angle will leave you vulnerable to attackers peeking down the skylight from the Roof, however, and there are many different directions attackers can approach you from on 3F while watching this angle.",
        "This is a great angle for attackers if the objective is in 2F Train Museum. Defenders frequently try to hide in the green train in 2F Train Museum, and this angle lets you look right into it. You'll need to have a quick reaction time after making the hole in 3F Cigar Lounge, however, to get the kill before they look up after hearing you make the hole.",
        "You can actually watch the whole length of 1F Main Corridor using this angle. You are still vulnerable from the skylight and from 3F Cigar Shop, 3F Cigar Lounge, and 3F Cocktail Lounge, however.",
        "It is possible to see the 2F Reading Room Corridor leading to 2F Back Stairs (White Stairs) using this angle. Attackers frequently approach through Back Stairs, making this a good angle to hold.",
        "Proning behind the coffee table in 3F Cigar Lounge gives you the perfect angle to watch the south western window entrance to 3F Cigar Lounge.",
      ]}
    />
  );
};

export default KafeDostoyevsky;
