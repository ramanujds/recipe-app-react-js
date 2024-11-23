import React, { useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import CategoryCard from './CategoryCard';
import useCategories from '../utils/useCategory';
import useConnectionStatus from '../utils/useConnectionStatus';
import UserContext from '../utils/UserContext';
import { Link } from 'react-router-dom';

const Body = () => {

    const connectionStatus = useConnectionStatus();

    const {user,setUser} = useContext(UserContext);

    return (
        <div className="row">
            {!connectionStatus ?  <h1>Sorry, you are offline</h1> :
            
            <div>
           
              {/* <input style={{marginLeft:10}} type="text" value={user} onChange={(e)=>setUser(e.target.value)} /> */}

                <h1>Easy Recipes</h1>
                <p>Choose a <Link to="/categories"> category</Link> to get started</p>
            </div>
            


            }
        </div>
    )

}

export default Body
