import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top"> 
      <div className="topLeft">
       
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            {user ?
            <Link className="link" to="/">
              HOME
            </Link>:
            <Link className="link" to="/login">
            
          </Link>
}
          </li>
         
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/topPosts">
              TOP-POSTS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/login">
              <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}  
          </li>
            </Link>
          </li>
         
        </ul>
      </div>
      
    </div>
  );
}


