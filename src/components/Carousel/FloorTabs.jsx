import React from "react";
import "./FloorTabs.scss";

const FloorTabs = ({
  floorStartingIndices,
  slideIndex,
  floorNames,
  onClick,
}) => {
  // This function determines if the floor tab at the passed in index is active
  const isActiveFloor = React.useCallback(
    (floorNameIndex) => {
      if (floorNameIndex === 0) {
        // Is this the first nav button? If so, is the current slide's index less than the next floor's starting slide index? If so, make that nav button have the active styling.
        return slideIndex < floorStartingIndices[0];
      } else if (floorNameIndex === floorNames.length - 1) {
        // Is this the last nav button? If so, is the current slide's index equal to or greater than the last floor's starting slide index? If so, make that nav button have the active styling.
        return (
          slideIndex >= floorStartingIndices[floorStartingIndices.length - 1]
        );
      } else {
        // Is this nav button somewhere between the first and last nav buttons? If so, is the current slide's index greater than or equal to this button's starting slide index and less than the next button's starting slide index? If so, make it have the active styling, if not make it have the deactivated styling
        return (
          slideIndex >= floorStartingIndices[floorNameIndex - 1] &&
          slideIndex < floorStartingIndices[floorNameIndex]
        );
      }
    },
    [slideIndex, floorStartingIndices, floorNames],
  );

  const tabs = floorNames.map((_, i) => {
    const skew =
      i === floorNames.length - 1
        ? "desktop-unskewed-nav-button"
        : "desktop-skewed-nav-button";
    const border =
      i === 0 || i === floorNames.length - 1
        ? " full-border"
        : " no-left-border";

    // i - 1 here because the bottom floor will always be at index 0, so it is omitted from the array.
    const floorStartingIndex = i === 0 ? 0 : floorStartingIndices[i - 1];

    return (
      <div
        className={`floor-tab ${skew} ${border} ${isActiveFloor(i) ? "active" : ""}`}
        onClick={() => onClick(floorStartingIndex)}
      >
        <a>{floorNames[i]}</a>
      </div>
    );
  });

  return <nav className="FloorTabs">{tabs}</nav>;
};

export default FloorTabs;
