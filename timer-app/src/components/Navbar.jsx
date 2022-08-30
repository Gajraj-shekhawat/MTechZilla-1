import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, userLogout } from "../redux/auth/actions";
import styles from '../styles/navbar.module.css'
import Loader from "./Loader";

const Navbar = () => {
  const { id, user, isLoading } = useSelector(
    (store) => store.auth
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData(id));
  }, [dispatch, id]);

const handleLogout=()=>{
    dispatch(userLogout())
}

  return <div className={styles.conatiner}>
    <div>
        {isLoading?<Loader/>:<div><h3>Name :{" "}{user.name}</h3>
       <h3>Email : {" "}{user.email}</h3></div>}
    </div>
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  </div>;
};

export default Navbar;
