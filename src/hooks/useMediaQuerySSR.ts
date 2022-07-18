import { useLayoutEffect, useEffect, useState, useCallback } from 'react';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useMediaQuerySSR = (queryStr: string) => {
  const [targetW, setTargetW] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetW(true);
    } else {
      setTargetW(false);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    const media = window.matchMedia(queryStr);

    media.addEventListener('change', updateTarget);

    if (media.matches) {
      setTargetW(true);
    }

    return () => media.removeEventListener('change', updateTarget);
  }, []);

  return targetW;
};