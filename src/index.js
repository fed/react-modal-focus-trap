import { useRef, useEffect } from 'react';
import focusTrap from 'modal-focus-trap';

export default function useFocusTrap() {
  const ref = useRef(null);

  // Create on didMount.
  useEffect(() => {
    const destroy = focusTrap(ref.current);

    // Destroy on willUnmount.
    return destroy;
  }, []);

  return ref;
}
