import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Jokes from "./Jokes";
import * as jokesActions from "../redux";

const JokesContainer: React.FC = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state: any) => state.jokes.loading);
  const jokes = useSelector((state: any) => state.jokes.jokes);

  const fetchJokes = useCallback(() => {
    dispatch(jokesActions.fetchJokes());
  }, [dispatch]);

  useEffect(() => {
    fetchJokes();
  }, [fetchJokes]);

  return <Jokes loading={loading} jokes={jokes} fetchJokes={fetchJokes} />;
};

export default JokesContainer;
