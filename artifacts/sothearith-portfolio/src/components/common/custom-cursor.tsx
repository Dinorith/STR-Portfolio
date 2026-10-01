import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false, mode: 'default' });

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarse = window.matchMedia('(pointer: coarse)');
    if (reduced.matches || coarse.matches) return;

    document.documentElement.classList.add('has-custom-cursor');

    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const target =
        event.target instanceof Element
          ? event.target.closest('[data-cursor],a,button')
          : null;
      let mode = 'default';
      if (target instanceof HTMLElement) mode = target.dataset.cursor ?? 'link';
      setCursor({ x: event.clientX, y: event.clientY, visible: true, mode });
    };

    const hide = (event: PointerEvent) => {
      if (event.relatedTarget === null) setCursor((value) => ({ ...value, visible: false }));
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerout', hide);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerout', hide);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`custom-cursor cursor-${cursor.mode}`}
      style={{ left: cursor.x, top: cursor.y, opacity: cursor.visible ? 1 : 0 }}
    >
      {cursor.mode === 'project' ? 'VIEW →' : cursor.mode === 'drag' ? 'DRAG' : ''}
    </div>
  );
}
