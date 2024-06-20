import { User } from '../../../App/types';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

function CardUser({
  user,
  deleteUser,
}: {
  user: User;
  deleteUser: (user: User) => void;
}) {
  return user ? (
    <Card>
      <CardContent>
        <Typography>Name: {user.name}</Typography>
        <Typography>Username: {user.username}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteUser(user)}>Delete</Button>
      </CardActions>
    </Card>
  ) : (
    <div>Нет пользователей</div>
  );
}

export default CardUser;
