import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

function useMedia(query: string): [boolean, Dispatch<SetStateAction<boolean>>] {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return [match, setMatch];
}

export default useMedia;
