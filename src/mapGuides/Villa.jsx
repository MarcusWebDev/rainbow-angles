import MapGuide from "../components/MapGuide/MapGuide";

const Villa = () => {
  return (
    <MapGuide
      header={"VILLA"}
      headerPicture={require("../images/Villa.jpg")}
      floorNames={["B", "1st", "2nd"]}
      floorStart={[1, 3]}
      pictures={[
        [
          require("../images/villa/B1_1.png"),
          require("../images/villa/B1_2.png"),
        ],
        [
          require("../images/villa/1st1_1.png"),
          require("../images/villa/1st1_2.png"),
        ],
        [
          require("../images/villa/1st2_1.png"),
          require("../images/villa/1st2_2.png"),
        ],
        [
          require("../images/villa/2nd1_1.png"),
          require("../images/villa/2nd1_2.png"),
        ],
        [
          require("../images/villa/2nd2_1.png"),
          require("../images/villa/2nd2_2.png"),
        ],
        [
          require("../images/villa/2nd3_1.png"),
          require("../images/villa/2nd3_2.png"),
        ],
      ]}
      text={[
        "This angle is good for anchoring on the objective in B Art Storage. Vault onto the pile of boxes in the north western section of 2F Art Storage and then prone to hold this angle on the eastern doorway entrance to the room. The corner you're prone in is very dark, hiding your body.",
        "This angle lets you watch the doorway into 1F China Room from 2F Trophy Room. This is a good angle to hold if the objective is in 1F Kitchen.",
        "If you destroy the floor on the southern end of 2F Classical Hall, you can watch the doorway at 1F Main Entrance. Attackers frequently enter the building through this doorway, making this angle very powerful to hold.",
        "Opening the floor infront of the southern doorway in 2F Study lets you hold an angle on that doorway from below in 1F Main Entrance. This doorway is the most common place for attackers to try to enter the building from if the objective is in 2F Study, making this a very powerful angle.",
        "This angle holds the eastern window of 2F Study from below in 1F Art Studio, similar to the previous angle.",
        "If you destroy the floor infront of the window in 2F Master Bathroom, you can watch that window from 1F Kitchen.",
      ]}
    />
  );
};

export default Villa;
