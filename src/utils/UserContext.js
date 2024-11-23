import { createContext } from "react";

const UserContext = createContext({
    user: 'Not Logged In'
});

export default UserContext;
