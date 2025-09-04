import "./NavBar.scss";

const NavBar = ({ floorStart, slideIndex, floorNames, onClick }) => {
  const activateArray = [];

  //This block updates the activate array to only have the currently selected floor section have the 'floorNavButton-active' css class. It's then passed into the two nav creators below
  const activate = (i) => {
    if (i === 0) {
      //is this the first nav button? If so, is the current slide's index less than the next floor's starting slide index? If so, make that nav button have the active styling. If not, make it have the deactivated styling
      slideIndex < floorStart[0]
        ? activateArray.push("active")
        : activateArray.push("");
    } else if (i === floorNames.length - 1) {
      //is this the last nav button? If so, is the current slide's index equal to or greater than the last floor's starting slide index? If so, make that nav button have the active styling. If not, make it have the deactivated styling
      slideIndex >= floorStart[floorStart.length - 1]
        ? activateArray.push("active")
        : activateArray.push("");
    } else {
      //is this nav button somewhere between the first and last nav buttons? If so, is the current slide's index greater than or equal to this button's starting slide index and less than the next button's starting slide index? If so, make it have the active styling, if not make it have the deactivated styling
      slideIndex >= floorStart[i - 1] && slideIndex < floorStart[i]
        ? activateArray.push("active")
        : activateArray.push("");
    }
  };

  const desktopNav = floorNames.map((button, i) => {
    const skew =
      i === floorNames.length - 1
        ? "desktop-unskewed-nav-button"
        : "desktop-skewed-nav-button";
    const desktopBorder =
      i === 0 || i === floorNames.length - 1
        ? " full-border"
        : " no-left-border";
    const navigateToSection = i === 0 ? 0 : floorStart[i - 1]; //i - 1 here because the bottom floor will always be at index 0
    activate(i); //each button reads it's index in the activateArray array and activates or deactivates based on that index's value.
    return (
      <li
        className={`floor-nav-button ${skew} ${desktopBorder} ${activateArray[i]}`}
        onClick={() => onClick(navigateToSection)}
      >
        <a>{floorNames[i]}</a>
      </li>
    );
  });

  const mobileNav = floorNames.map((_, i) => {
    const skew =
      i === 0
        ? "bottom-floor-skew"
        : i === floorNames.length - 1
          ? "top-floor-skew"
          : "";
    const mobileBorder = "full-border";
    const navigateToSection = i === 0 ? 0 : floorStart[i - 1];

    activate(i); //each button reads it's index in the activateArray array and activates or deactivates based on that index's value.

    return (
      <li
        className={`floor-nav-button ${skew} ${mobileBorder} ${activateArray[i]}`}
        onClick={() => onClick(navigateToSection)}
      >
        <a>{floorNames[i]}</a>
      </li>
    );
  });
  return (
    <div className="NavBar">
      <nav className="floor-nav-mobile phone">{mobileNav}</nav>
      <nav className="floor-nav desktop">{desktopNav}</nav>
    </div>
  );
};

export default NavBar;
