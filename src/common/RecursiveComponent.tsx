import { Fragment } from "react";

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

type Props = {
  data: JSONValue;
};

const RecursiveComponent = ({ data }: Props) => {
  const isObject = (x: JSONValue): x is { [key: string]: JSONValue } =>
    typeof x === "object" && x !== null && !Array.isArray(x);

  if (!isObject(data)) {
    return <li>{String(data)}</li>;
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
