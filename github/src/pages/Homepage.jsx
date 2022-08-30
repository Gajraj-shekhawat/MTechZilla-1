import React from "react";
import { useState } from "react";
import styles from "../styles/homepage.module.css";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/github/actions";
import { useSelector } from "react-redux";
import Loader from "./Loader";
const Homepage = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const { isLoading,  data } = useSelector(
    (store) => store.github
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchData(query));
  };
  return (
    <>
      <div className={styles.inputBox}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter username here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {isLoading && <Loader />}

      {data&& (
        <div className={styles.infoConatiner}>
          <div className={styles.infoIMG}>
            <img src={data.avatar_url} alt="" />
          </div>
          <div className={styles.infoNames}>
            <p><b>Username</b> :{' '} {data.login}</p>
            <p><b>Name</b> :{' '} {data.name}</p>
          </div>
          <div className={styles.infoCounts}>
            <p><b>Public repos :</b> {data.public_repos}</p>
            <p><b>Public gists : </b>{" "}{data.public_gists}</p>
          </div>
          <div className={styles.infoDate}>
            <p>
              <b>Profile created :</b>{' '}{data.created_at.slice(0,10)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
