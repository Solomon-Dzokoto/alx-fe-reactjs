import {useContext} from 'react';
import {context} from './UserContext'


function UserDetails() {
  const userData = useContext(context);

    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;