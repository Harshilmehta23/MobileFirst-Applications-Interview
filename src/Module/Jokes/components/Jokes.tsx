import React from "react";
import BlockUi from "react-block-ui";

import classes from "./Jokes.module.scss";

interface Props {
  loading: boolean;
  jokes: string[];
  fetchJokes: any;
}

const Jokes = ({ loading, jokes, fetchJokes }: Props) => {
  const blockingClasses = `${classes.wrapper} ${
    loading ? classes.loading : ""
  }`;

  return (
    <BlockUi
      tag="div"
      blocking={loading}
      message="Loading, please wait"
      className={blockingClasses}
    >
      <div className={classes.container}>
        {jokes.length > 0 &&
          !loading &&
          jokes.map((joke: any) => {
            return (
              <div className={classes.card} key={joke.id}>
                <p className={classes.setup}>{joke.setup}</p>
                <p className={classes.punchline}>{joke.punchline}</p>
              </div>
            );
          })}
        {jokes.length > 0 && !loading && (
          <div className={classes.card} key="fetch-new">
            <p className={classes.fetchnew}>😂</p>
            <p className={classes.punchline}>
              Fetch New Jokes
              <span className={classes.click} onClick={fetchJokes}>
                Click here!
              </span>
            </p>
          </div>
        )}
        {jokes.length === 0 && !loading && (
          <div className={classes.card} key="no-jokes">
            <p className={classes.fetchnew}>🧐</p>
            <p className={classes.punchline}>
              No Jokes Found
              <span className={classes.click}>Try Again Later</span>
            </p>
          </div>
        )}
      </div>
    </BlockUi>
  );
};

export default Jokes;
