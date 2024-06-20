import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import { User } from '../../../App/types';
import DeleteIcon from '@mui/icons-material/Delete';

function Listbox({
  users,
  deleteUser,
}: {
  users: User[];
  deleteUser: (user: User) => void;
}) {
  return (
    <List>
      {users.map((user) => (
        <ListItem
          key={user.id}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteUser(user)}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={user.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default Listbox;
