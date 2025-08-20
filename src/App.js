import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Banner } from "./components/Banner/Banner";
import Homepage from "./components/Homepage/Homepage";
import MapGuide from "./components/MapGuide/MapGuide";
import { toTargetSlide } from "./containers/actions";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Banner />
          <div className="contentContainer">
            <Route path="/" exact component={Homepage} />
            <Route
              path="/bank/"
              render={() => (
                <MapGuide
                  header={"BANK"}
                  headerPicture={require("./images/Bank.jpg")}
                  floorNames={["B", "1st", "2nd"]}
                  floorStart={[1, 4]}
                  pictures={[
                    [
                      require("./images/bank/B1_1.png"),
                      require("./images/bank/B1_2.png"),
                    ],
                    [
                      require("./images/bank/1st1_1.png"),
                      require("./images/bank/1st1_2.png"),
                    ],
                    [
                      require("./images/bank/1st2_1.png"),
                      require("./images/bank/1st2_2.png"),
                    ],
                    [
                      require("./images/bank/1st3_1.png"),
                      require("./images/bank/1st3_2.png"),
                    ],
                    [
                      require("./images/bank/2nd1_1.png"),
                      require("./images/bank/2nd1_2.png"),
                    ],
                    [
                      require("./images/bank/2nd2_1.png"),
                      require("./images/bank/2nd2_2.png"),
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
              )}
            ></Route>
            <Route
              path="/border/"
              render={() => (
                <MapGuide
                  header={"Border"}
                  headerPicture={require("./images/Border.jpg")}
                  floorNames={["1st", "2nd"]}
                  floorStart={[4]}
                  pictures={[
                    [
                      require("./images/border/1st1_1.png"),
                      require("./images/border/1st1_2.png"),
                      require("./images/border/1st1_3.png"),
                    ],
                    [
                      require("./images/border/1st2_1.png"),
                      require("./images/border/1st2_2.png"),
                    ],
                    [
                      require("./images/border/1st3_1.png"),
                      require("./images/border/1st3_2.png"),
                    ],
                    [
                      require("./images/border/1st4_1.png"),
                      require("./images/border/1st4_2.png"),
                    ],
                    [
                      require("./images/border/2nd1_1.png"),
                      require("./images/border/2nd1_2.png"),
                    ],
                    [
                      require("./images/border/2nd2_1.png"),
                      require("./images/border/2nd2_2.png"),
                    ],
                    [
                      require("./images/border/2nd3_1.png"),
                      require("./images/border/2nd3_2.png"),
                    ],
                  ]}
                  text={[
                    "Opening the hatch in 2F Offices lets you watch over 1F Tellers, which is also an objective site for all three game modes. It is possible to see the entire room, except for the window from this angle.",
                    "If you create a hole in the eastern wall of 2F Break Room, you can look out over all of the lobby and even see part of the hallway on 2F.",
                    "This angle will allow you to catch anyone coming from the lobby or the bathroom hallway on first floor. You'll need to be careful of people coming from western side of the hallway and the security room, however.",
                    "This is angle watches over a common window for attackers to come through if the objective is here. The room you're in while holding this angle is pretty safe as long as the walls on the west side of the room are reinforced. The top of the wall can still be destroyed without hard breachers, so be wary of that.",
                    "This is a very risky angle to hold because you can be vulnerable from so many different directions. However, if you clear CCTV and know that nobody is coming down the hallway, this can be a good way to catch the defenders off guard if they're in armory.",
                    "In order to get on the cabinet for this angle, you have to vault onto the computer that is the desk in this room. After doing that, if you align yourself with the right corner of the cabinet and wiggle left and right while holding forward, eventually you'll get ontop of the cabinet and have access to this angle. If needed, you can even vault through the hole in the wall that this angle peaks through to get into 2F Offices.",
                    "You're pretty vulnerable with this angle as well because attackers coming through the hallway will easily be able to see the destroyed wall and react to it before you see them. However, if you know that nobody is coming down the hallway, you may be able to surprise an attacker who is coming up the western stairs with this angle.",
                  ]}
                />
              )}
            ></Route>
            <Route
              path="/chalet/"
              render={() => (
                <MapGuide
                  header={"CHALET"}
                  headerPicture={require("./images/Chalet.jpg")}
                  floorNames={["B", "1st", "2nd"]}
                  floorStart={[3, 6]}
                  pictures={[
                    [
                      require("./images/chalet/B1_1.png"),
                      require("./images/chalet/B1_2.png"),
                    ],
                    [
                      require("./images/chalet/B2_1.png"),
                      require("./images/chalet/B2_2.png"),
                    ],
                    [
                      require("./images/chalet/B3_1.png"),
                      require("./images/chalet/B3_2.png"),
                    ],
                    [
                      require("./images/chalet/1st1_1.png"),
                      require("./images/chalet/1st1_2.png"),
                    ],
                    [
                      require("./images/chalet/1st2_1.png"),
                      require("./images/chalet/1st2_2.png"),
                    ],
                    [
                      require("./images/chalet/1st3_1.png"),
                      require("./images/chalet/1st3_2.png"),
                    ],
                    [
                      require("./images/chalet/2nd1_1.png"),
                      require("./images/chalet/2nd1_2.png"),
                    ],
                    [
                      require("./images/chalet/2nd2_1.png"),
                      require("./images/chalet/2nd2_2.png"),
                    ],
                    [
                      require("./images/chalet/2nd3_1.png"),
                      require("./images/chalet/2nd3_2.png"),
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
              )}
            ></Route>
            <Route
              path="/club_house/"
              render={() => (
                <MapGuide
                  header={"CLUB HOUSE"}
                  headerPicture={require("./images/ClubHouse.jpg")}
                  floorNames={["B", "1st", "2nd"]}
                  floorStart={[3, 7]}
                  pictures={[
                    [
                      require("./images/clubHouse/B1_1.png"),
                      require("./images/clubHouse/B1_2.png"),
                      require("./images/clubHouse/B1_3.png"),
                    ],
                    [
                      require("./images/clubHouse/B2_1.png"),
                      require("./images/clubHouse/B2_2.png"),
                      require("./images/clubHouse/B2_3.png"),
                    ],
                    [
                      require("./images/clubHouse/B3_1.png"),
                      require("./images/clubHouse/B3_2.png"),
                      require("./images/clubHouse/B3_3.png"),
                    ],
                    [
                      require("./images/clubHouse/1st1_1.png"),
                      require("./images/clubHouse/1st1_2.png"),
                      require("./images/clubHouse/1st1_3.png"),
                    ],
                    [
                      require("./images/clubHouse/1st2_1.png"),
                      require("./images/clubHouse/1st2_2.png"),
                      require("./images/clubHouse/1st2_3.png"),
                    ],
                    [
                      require("./images/clubHouse/1st3_1.png"),
                      require("./images/clubHouse/1st3_2.png"),
                      require("./images/clubHouse/1st3_3.png"),
                    ],
                    [
                      require("./images/clubHouse/1st4_1.png"),
                      require("./images/clubHouse/1st4_2.png"),
                      require("./images/clubHouse/1st4_3.png"),
                    ],
                    [
                      require("./images/clubHouse/2nd1_1.png"),
                      require("./images/clubHouse/2nd1_2.png"),
                    ],
                    [
                      require("./images/clubHouse/2nd2_1.png"),
                      require("./images/clubHouse/2nd2_2.png"),
                    ],
                    [
                      require("./images/clubHouse/2nd3_1.png"),
                      require("./images/clubHouse/2nd3_2.png"),
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
              )}
            ></Route>
            <Route
              path="/coastline/"
              render={() => (
                <MapGuide
                  header={"COASTLINE"}
                  headerPicture={require("./images/Coastline.jpg")}
                  floorNames={["1st", "2nd"]}
                  floorStart={[3]}
                  pictures={[
                    [
                      require("./images/coastline/1st1_1.png"),
                      require("./images/coastline/1st1_2.png"),
                      require("./images/coastline/1st1_3.png"),
                    ],
                    [
                      require("./images/coastline/1st2_1.png"),
                      require("./images/coastline/1st2_2.png"),
                      require("./images/coastline/1st2_3.png"),
                    ],
                    [
                      require("./images/coastline/1st3_1.png"),
                      require("./images/coastline/1st3_2.png"),
                      require("./images/coastline/1st3_3.png"),
                    ],
                    [
                      require("./images/coastline/2nd1_1.png"),
                      require("./images/coastline/2nd1_2.png"),
                    ],
                    [
                      require("./images/coastline/2nd2_1.png"),
                      require("./images/coastline/2nd2_2.png"),
                    ],
                    [
                      require("./images/coastline/2nd3_1.png"),
                      require("./images/coastline/2nd3_2.png"),
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
              )}
            ></Route>
            <Route
              path="/consulate/"
              render={() => (
                <MapGuide
                  header={"CONSULATE"}
                  headerPicture={require("./images/Consulate.jpg")}
                  floorNames={["B", "1st", "2nd"]}
                  floorStart={[4, 6]}
                  pictures={[
                    [
                      require("./images/consulate/B1_1.png"),
                      require("./images/consulate/B1_2.png"),
                    ],
                    [
                      require("./images/consulate/B2_1.png"),
                      require("./images/consulate/B2_2.png"),
                    ],
                    [
                      require("./images/consulate/B3_1.png"),
                      require("./images/consulate/B3_2.png"),
                    ],
                    [
                      require("./images/consulate/B4_1.png"),
                      require("./images/consulate/B4_2.png"),
                    ],
                    [
                      require("./images/consulate/1st1_1.png"),
                      require("./images/consulate/1st1_2.png"),
                      require("./images/consulate/1st1_3.png"),
                    ],
                    [
                      require("./images/consulate/1st2_1.png"),
                      require("./images/consulate/1st2_2.png"),
                      require("./images/consulate/1st2_3.png"),
                    ],
                    [
                      require("./images/consulate/2nd1_1.png"),
                      require("./images/consulate/2nd1_2.png"),
                    ],
                    [
                      require("./images/consulate/2nd2_1.png"),
                      require("./images/consulate/2nd2_2.png"),
                    ],
                    [
                      require("./images/consulate/2nd3_1.png"),
                      require("./images/consulate/2nd3_2.png"),
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
              )}
            ></Route>
            <Route
              path="/hereford/"
              render={() => (
                <MapGuide
                  header={"HEREFORD"}
                  headerPicture={require("./images/Hereford.jpg")}
                  floorNames={["B", "1st", "2nd", "3rd"]}
                  floorStart={[2, 4, 5]}
                  pictures={[
                    [
                      require("./images/hereford/B1_1.png"),
                      require("./images/hereford/B1_2.png"),
                    ],
                    [
                      require("./images/hereford/B2_1.png"),
                      require("./images/hereford/B2_2.png"),
                    ],
                    [
                      require("./images/hereford/1st1_1.png"),
                      require("./images/hereford/1st1_2.png"),
                    ],
                    [
                      require("./images/hereford/1st2_1.png"),
                      require("./images/hereford/1st2_2.png"),
                    ],
                    [
                      require("./images/hereford/2nd1_1.png"),
                      require("./images/hereford/2nd1_2.png"),
                    ],
                    [
                      require("./images/hereford/3rd1_1.png"),
                      require("./images/hereford/3rd1_2.png"),
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
              )}
            ></Route>
            <Route
              path="/kafe_dostoyevsky/"
              render={() => (
                <MapGuide
                  header={"KAFE DOSTOYEVSKY"}
                  headerPicture={require("./images/KafeDostoyevsky.jpg")}
                  floorNames={["1st", "2nd", "3rd"]}
                  floorStart={[3, 7]}
                  pictures={[
                    [
                      require("./images/kafeDostoyevsky/1st1_1.png"),
                      require("./images/kafeDostoyevsky/1st1_2.png"),
                    ],
                    [
                      require("./images/kafeDostoyevsky/1st2_1.png"),
                      require("./images/kafeDostoyevsky/1st2_2.png"),
                    ],
                    [
                      require("./images/kafeDostoyevsky/1st3_1.png"),
                      require("./images/kafeDostoyevsky/1st3_2.png"),
                    ],
                    [
                      require("./images/kafeDostoyevsky/2nd1_1.png"),
                      require("./images/kafeDostoyevsky/2nd1_2.png"),
                    ],
                    [
                      require("./images/kafeDostoyevsky/2nd2_1.png"),
                      require("./images/kafeDostoyevsky/2nd2_2.png"),
                    ],
                    [
                      require("./images/kafeDostoyevsky/2nd3_1.png"),
                      require("./images/kafeDostoyevsky/2nd3_2.png"),
                    ],
                    [
                      require("./images/kafeDostoyevsky/2nd4_1.png"),
                      require("./images/kafeDostoyevsky/2nd4_2.png"),
                    ],
                    [
                      require("./images/kafeDostoyevsky/3rd1_1.png"),
                      require("./images/kafeDostoyevsky/3rd1_2.png"),
                    ],
                  ]}
                  text={[
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
              )}
            ></Route>
            <Route
              path="/oregon/"
              render={() => (
                <MapGuide
                  header={"OREGON"}
                  headerPicture={require("./images/Oregon.jpg")}
                  floorNames={["B", "1st", "2nd"]}
                  floorStart={[1, 4]}
                  pictures={[
                    [
                      require("./images/oregon/B1_1.png"),
                      require("./images/oregon/B1_2.png"),
                    ],
                    [
                      require("./images/oregon/1st1_1.png"),
                      require("./images/oregon/1st1_2.png"),
                    ],
                    [
                      require("./images/oregon/1st2_1.png"),
                      require("./images/oregon/1st2_2.png"),
                    ],
                    [
                      require("./images/oregon/1st3_1.png"),
                      require("./images/oregon/1st3_2.png"),
                    ],
                    [
                      require("./images/oregon/2nd1_1.png"),
                      require("./images/oregon/2nd1_2.png"),
                    ],
                    [
                      require("./images/oregon/2nd2_1.png"),
                      require("./images/oregon/2nd2_2.png"),
                    ],
                  ]}
                  text={[
                    "Opening the floor at the top of 1F Main Stairs lets you watch the B Laundry Stairs. This a good angle for both attackers and defenders.",
                    "You can watch the hatch in 1F Lobby from 2F Master Bedroom using this angle. This hatch is the most frequently opened hatch by attackers, so being able to watch it from above is incredibly powerful.",
                    "This angle lets you watch the hallway connecting 1F Diing Hall Corridor to 1F Bathroom Corridor.",
                    "This angle lets you watch the hallway leading from 1F Bathroom Corridor to 1F Lobby.",
                    "Creating a hole in the western wall of 2F Armory lets you see down the entirety of 2F Armory Corridor and 2F Dorm Main Hall. This is a very powerful angle to hold as an attacker as it locks down the entirety of 2F.",
                    "Creating a small hole in the south eastern corner of 3F Watch Tower lets you watch the southern window of 2F Watch Tower without being vulnerable from anywhere except for the windows on 3F Watchtower.",
                  ]}
                />
              )}
            ></Route>
            <Route
              path="/skyscraper/"
              render={() => (
                <MapGuide
                  header={"SKYSCRAPER"}
                  headerPicture={require("./images/Skyscraper.jpg")}
                  floorNames={["1st", "2nd"]}
                  floorStart={[5]}
                  pictures={[
                    [
                      require("./images/skyscraper/1st1_1.png"),
                      require("./images/skyscraper/1st1_2.png"),
                    ],
                    [
                      require("./images/skyscraper/1st2_1.png"),
                      require("./images/skyscraper/1st2_2.png"),
                    ],
                    [
                      require("./images/skyscraper/1st3_1.png"),
                      require("./images/skyscraper/1st3_2.png"),
                    ],
                    [
                      require("./images/skyscraper/1st4_1.png"),
                      require("./images/skyscraper/1st4_2.png"),
                    ],
                    [
                      require("./images/skyscraper/1st5_1.png"),
                      require("./images/skyscraper/1st5_2.png"),
                    ],
                    [
                      require("./images/skyscraper/2nd1_1.png"),
                      require("./images/skyscraper/2nd1_2.png"),
                    ],
                  ]}
                  text={[
                    "You can see the middle of 1F Restaurant form 2F Tea Room using this angle.",
                    "This angle lets you watch the eastern entrance to 1F Pantry from 2F Taiko. This is a good angle to hold if the objective is in 1F Kitchen.",
                    "It's possible to watch the doorway entrance to 1F House Lobby from 2F Exhibition using this angle. However, it is rather risky as the window that you're standing infront of in 2F Exhibition is a common place for attackers to enter from.",
                    "Destroying some of the floor on the southern side of 2F Exhibition lets you watch the doorway entrance to 1F Bedroom. This is a good angle to hold if the objective is in 1F Bedroom.",
                    "This is a very powerful angle to hold. You can see 1F Main Stairs from 2F Tea Room using this angle. If the objective is in 2F Tea Room, holding this angle denies the attackers of one of the primary ways to get to 2F Tea Room.",
                    "This angle watches the entrance to 2F Lounge from 2F Terrace. The bamboo covers much of your body and this angle is powerful if the objective is in 2F Work Office.",
                  ]}
                />
              )}
            ></Route>
            <Route
              path="/theme_park/"
              render={() => (
                <MapGuide
                  header={"THEME PARK"}
                  headerPicture={require("./images/ThemePark.jpg")}
                  floorNames={["1st", "2nd"]}
                  floorStart={[6]}
                  pictures={[
                    [
                      require("./images/themePark/1st1_1.png"),
                      require("./images/themePark/1st1_2.png"),
                    ],
                    [
                      require("./images/themePark/1st2_1.png"),
                      require("./images/themePark/1st2_2.png"),
                    ],
                    [
                      require("./images/themePark/1st3_1.png"),
                      require("./images/themePark/1st3_2.png"),
                    ],
                    [
                      require("./images/themePark/1st4_1.png"),
                      require("./images/themePark/1st4_2.png"),
                    ],
                    [
                      require("./images/themePark/1st5_1.png"),
                      require("./images/themePark/1st5_2.png"),
                    ],
                    [
                      require("./images/themePark/1st6_1.png"),
                      require("./images/themePark/1st6_2.png"),
                    ],
                    [
                      require("./images/themePark/2nd1_1.png"),
                      require("./images/themePark/2nd1_2.png"),
                    ],
                    [
                      require("./images/themePark/2nd2_1.png"),
                      require("./images/themePark/2nd2_2.png"),
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
              )}
            ></Route>
            <Route
              path="/villa/"
              render={() => (
                <MapGuide
                  header={"VILLA"}
                  headerPicture={require("./images/Villa.jpg")}
                  floorNames={["B", "1st", "2nd"]}
                  floorStart={[1, 3]}
                  pictures={[
                    [
                      require("./images/villa/B1_1.png"),
                      require("./images/villa/B1_2.png"),
                    ],
                    [
                      require("./images/villa/1st1_1.png"),
                      require("./images/villa/1st1_2.png"),
                    ],
                    [
                      require("./images/villa/1st2_1.png"),
                      require("./images/villa/1st2_2.png"),
                    ],
                    [
                      require("./images/villa/2nd1_1.png"),
                      require("./images/villa/2nd1_2.png"),
                    ],
                    [
                      require("./images/villa/2nd2_1.png"),
                      require("./images/villa/2nd2_2.png"),
                    ],
                    [
                      require("./images/villa/2nd3_1.png"),
                      require("./images/villa/2nd3_2.png"),
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
              )}
            ></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
