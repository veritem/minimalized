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
      <div
        className={styles.test}
        style={{
          display: 'flex',
          top: '0px',
          bottom: '0px',
          left: '0px',
          zIndex: 999999,
          opacity: '0.2',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <div style={{ display: 'relative', background: '#fff' }}>
            <button
              className={styles.test}
              onClick={() => close()}
              style={{ position: 'absolute', right: '2rem', top: '2rem' }}
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
