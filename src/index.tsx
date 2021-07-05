import React, { FC, ReactPortal, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

export interface Props {
  children: JSX.Element;
  open: boolean;
  close: () => void;
}

export function ClientPortal({
  children,
}: {
  children: JSX.Element;
}): ReactPortal | null {
  const ref = useRef<HTMLDivElement | any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector('#modal');
    setMounted(true);
  }, []);

  return mounted ? createPortal(children, ref.current) : null;
}

export const Minimalized: FC<Props> = ({
  open,
  children,
  close,
}): JSX.Element | null => {
  if (!open) return null;

  return (
    <ClientPortal>
      <div className={styles.main}>
        <div className={styles.container} style={{}}>
          <div className={styles.wrapper}>
            <button
              onClick={() => close()}
              className={styles.closeBtn}
              style={{}}
            >
              X
            </button>
            {children}
          </div>
        </div>
      </div>
    </ClientPortal>
  );
};
