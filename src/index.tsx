import React, {
  FC,
  HTMLAttributes,
  ReactChild,
  ReactPortal,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: JSX.Element;
  open: boolean;
  close: () => void;
}

export function ClientPortal({
  children,
}: {
  children: JSX.Element;
}): ReactPortal | null {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector('#__next');
    setMounted(true);
  }, []);

  return mounted ? createPortal(children, ref.current) : null;
}

export const Minimalized: FC<Props> = ({
  open,
  children,
}): JSX.Element | null => {
  if (!open) return null;
  return (
    <ClientPortal>
      <div>{children}</div>
    </ClientPortal>
  );
};
