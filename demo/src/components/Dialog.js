import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Modal from './Modal';

export default function DialogWrapper(props) {
  return (
    <Dialog open={props.isOpen} maxWidth="xs" onClose={props.onClose} fullWidth>
      <DialogTitle>Modal with Focus Trap</DialogTitle>
      <DialogContent>
        {props.isOpen && <Modal onClose={props.onClose} />}
      </DialogContent>
    </Dialog>
  );
}
