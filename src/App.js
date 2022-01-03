import { useState } from 'react'
import Card from './components/Card';
import Container from './components/Container';
import UserForm from './components/UserForm';

const App = () => {
const [users, setUsers] = useState([]);

  const submit = (user) => {
    setUsers([...users, user]);
  }

  return (
    <Container>
      <Card>
        <UserForm submit={submit}/>
      </Card>
      <Card>
        <ul>
          {users.map(user => 
            <li key={user.email}>{`${user.name} ${user.lastname}: ${user.email}`}</li>
          )}
        </ul>
      </Card>
    </Container>
  );
}

export default App;
