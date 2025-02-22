import React from 'react';


const UserContext = React.createContext({
    userData:null,
    setUserData:()=>{}
});

export default UserContext;

