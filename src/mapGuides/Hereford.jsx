import MapGuide from "../components/MapGuide";

const Hereford = () => {
  return (
    <MapGuide
      header={"HEREFORD"}
      headerImage={require("../images/Hereford.jpg")}
      floorNames={["B", "1st", "2nd", "3rd"]}
      floorStartingIndices={[2, 4, 5]}
      images={[
        [
          require("../images/hereford/B1_1.png"),
          require("../images/hereford/B1_2.png"),
        ],
        [
          require("../images/hereford/B2_1.png"),
          require("../images/hereford/B2_2.png"),
        ],
        [
          require("../images/hereford/1st1_1.png"),
          require("../images/hereford/1st1_2.png"),
        ],
        [
          require("../images/hereford/1st2_1.png"),
          require("../images/hereford/1st2_2.png"),
        ],
        [
          require("../images/hereford/2nd1_1.png"),
          require("../images/hereford/2nd1_2.png"),
        ],
        [
          require("../images/hereford/3rd1_1.png"),
          require("../images/hereford/3rd1_2.png"),
        ],
      ]}
      text={[
        "This angle allows you to watch the doorway to B Brewery from B Barrel Storage. The pots on the bricks help cover your body.",
        "You can watch the western doorway entrance to B Barrel Storage from 1F Piano Room using this angle. Great angle to hold if the objective is in B Barrel Storage.",
        "With two small holes in the western wall of 1F Kitchen, you can watch both entrances to 1F Garage; the window and the garage door.",
        "Creating a small hoole in the western wall of 1F Living Room gives you vision of the blue stairs. This angle is great for catching people coming down the stairs. However, it will be significantly less effective against people coming up the stairs, as the hole is visible on the way up.",
        "This angle allows you to watch the entrance allows you to watch the doorway connecting 2F Bathroom to 2F Kid's Room. 2F Bathroom is a very common place for attackers to try to enter the building from, especially if the objective is in 2F Kid's room. Making this a great angle to hold.",
        "Vaulting onto the boxes on the east side of 3F Attic allows you to watch the southern doorway entrance to 3F Attic by peering over the fence.",
      ]}
    />
  );
};

export default Hereford;
