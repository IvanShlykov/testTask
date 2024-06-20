import { useEffect, useState } from 'react';
import './App.css';
import Listbox from '../features/Listbox/components/Listbox';
import CardUser from '../features/Card/components/Card';
import type { User } from './types';
import Header from '../features/Header/components/Header';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const url = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [theme, setTheme] = useState(false);
  
  const darkTheme = createTheme({
    palette: {
      mode: theme ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  const deleteUser = (userDelete: User): void => {
    setUsers(users.filter((user) => user.id !== userDelete.id));
  };
  

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header theme={theme} setTheme={setTheme} />
        <Container sx={{mt: 10}}>
          <CardUser user={users[0]} deleteUser={deleteUser} />
          <Listbox users={users} deleteUser={deleteUser} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
