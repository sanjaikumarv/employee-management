import { useCallback, useState } from "react";
import jwtDecode from "jwt-decode";

function whenWillExpire(exp) {
  return Number(exp) - Number(Date.now().toString().slice(0, 10));
}

export default function useRefreshInterval() {
  const [intervalId, setIntervalId] = useState();
  const [intervalDone, setIntervalDone] = useState(false);

  const makeInterval = useCallback(
    (refreshToken) => {
      if (!refreshToken) {
        return;
      }
      const decoded = jwtDecode(refreshToken);
      if (intervalId) {
        clearInterval(intervalId);
      }
      console.log(
        "whenWillExpire",
        whenWillExpire(decoded.exp),
        whenWillExpire(decoded.exp) * 1000
      );

      const intId = setTimeout(() => {
        console.log("whenWillExpire Called");
        setIntervalDone(true);
      }, whenWillExpire(decoded.exp) * 1000 - 1000);

      console.log("Interval set:", intervalId);
      setIntervalId(intId);
    },
    [intervalId]
  );

  return [intervalDone, makeInterval];
}
