import { createContext } from 'react';

const auth = { isUser: false, userName: '' };
const UserContext = createContext(auth);

export default UserContext;
