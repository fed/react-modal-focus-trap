import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import useFocusTrap from '../../../src/index';

export default function Modal(props) {
  const ref = useFocusTrap();

  return (
    <div ref={ref}>
      <Box position="absolute" right={10} top={10}>
        <Button variant="contained" color="primary" onClick={props.onClose}>
          Close
        </Button>
      </Box>
      <Box>
        <TextField label="Form input" variant="outlined" fullWidth />
      </Box>
      <Box mt={2}>
        <Button variant="contained">Button</Button>
      </Box>
    </div>
  );
}
