import { useCallback, useEffect, useState } from 'react';

export default function useSidebar() {
  const [isOpened, setIsOpened] = useState(true);

  const toggle = useCallback(() => setIsOpened(!isOpened), [isOpened]);
  const close = useCallback(() => setIsOpened(false), []);
  const open = useCallback(() => setIsOpened(true), []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024 && isOpened) {
        close();
      }

      if (window.innerWidth > 1024 && !isOpened) {
        open();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isOpened]);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      close();
    }
  }, []);

  return {
    isOpened,
    toggle,
    close,
    open,
  };
}
