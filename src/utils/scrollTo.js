import { scroller } from "react-scroll";

const scrollTo = ({
  target,
  duration = 800,
  smooth = "easeInOut",
  offset = -72,
  ...options
}) => {
  scroller.scrollTo(target, {
    duration,
    smooth,
    offset,
    ...options,
  });
};

export default scrollTo;
