import { CountdownTimeDeltaFormatted } from "react-countdown";

const map = {
  days: "d",
  hours: "h",
  minutes: "m",
  seconds: "s",
};

export default (timeObj: CountdownTimeDeltaFormatted): string =>
  Object.entries(timeObj).reduce((str, [unit, value]) => {
    if (parseInt(value, 10) > 0) return str.concat(`${value}${map[unit]}`);
    return str;
  }, "");
