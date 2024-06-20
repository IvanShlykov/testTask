import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container, FormControlLabel, Switch } from '@mui/material';

export default function Header({
  theme,
  setTheme,
}: {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={theme}
                  onChange={handleChange}
                  color="default"
                />
              }
              label={theme ? 'Black' : 'White'}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
