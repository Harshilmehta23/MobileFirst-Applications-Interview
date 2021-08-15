import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Jokes from "./Jokes";
import * as jokesActions from "../redux";

const JokesContainer = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.jokes.loading);
  const jokes = useSelector((state) => state.jokes.jokes);

  const fetchJokes = useCallback(() => {
    dispatch(jokesActions.fetchJokes());
  }, [dispatch]);

  useEffect(() => {
    fetchJokes();
  }, [fetchJokes]);

  return <Jokes loading={loading} jokes={jokes} fetchJokes={fetchJokes} />;
};

export default JokesContainer;
