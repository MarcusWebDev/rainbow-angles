import MapGuide from "../components/MapGuide";

const Coastline = () => {
  return (
    <MapGuide
      header={"COASTLINE"}
      headerImage={require("../images/Coastline.jpg")}
      floorNames={["1st", "2nd"]}
      floorStartingIndices={[3]}
      images={[
        [
          require("../images/coastline/1st1_1.png"),
          require("../images/coastline/1st1_2.png"),
          require("../images/coastline/1st1_3.png"),
        ],
        [
          require("../images/coastline/1st2_1.png"),
          require("../images/coastline/1st2_2.png"),
          require("../images/coastline/1st2_3.png"),
        ],
        [
          require("../images/coastline/1st3_1.png"),
          require("../images/coastline/1st3_2.png"),
          require("../images/coastline/1st3_3.png"),
        ],
        [
          require("../images/coastline/2nd1_1.png"),
          require("../images/coastline/2nd1_2.png"),
        ],
        [
          require("../images/coastline/2nd2_1.png"),
          require("../images/coastline/2nd2_2.png"),
        ],
        [
          require("../images/coastline/2nd3_1.png"),
          require("../images/coastline/2nd3_2.png"),
        ],
      ]}
      text={[
        "You can watch every entrance to 1F Blue Bar from 2F Billiards as demostrated by the next 3 angles. This angle allows you to watch the northern doorway entrance.",
        "This angle allows you to watch the southern entrance to 1F Blue Bar.",
        "You can also watch the window in 1F Blue Bar from above as well using this angle.",
        "This angle allows you to hold a long distance angle on the connector hallway between 2F VIP Lounge and 2F Penthouse. The bookcase also helps make you less visible.",
        "This angle lets you watch the window to 2F Billiards from far away. However, it does leave you pretty vulnerable as you can be shot from the roof, the hallway, and also from 2F VIP Lounge. The hole in the wall also leaves your team vulnerable if the objective is in 2F Billiards.",
        "You can watch both the hallway and both doorway entrances to 2F VIP lounge using this angle.",
      ]}
    />
  );
};

export default Coastline;
