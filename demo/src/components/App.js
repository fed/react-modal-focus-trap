import React, { useState, useCallback, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from './Dialog';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <Fragment>
      <Button variant="contained" onClick={handleOpen}>
        Show modal
      </Button>
      <Dialog isOpen={isOpen} onClose={handleClose} />
    </Fragment>
  );
}
