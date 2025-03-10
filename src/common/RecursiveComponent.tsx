import React, { Fragment } from "react";

const RecursiveComponent = ({ data }) => {
  const isObject = (x: unknown) => typeof x === "object" && x !== null;

  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <Fragment>
      {pairs.map(([key, value]) => (
        <li key={key}>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </Fragment>
  );
};

export default RecursiveComponent;
