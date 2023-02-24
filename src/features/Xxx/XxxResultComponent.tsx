import { XxxResult } from "./model";

type Props = {
  results: XxxResult[];
};

const XxxResultComponent = ({ results }: Props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>timestamp</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 &&
            results.map((r) => (
              <tr key={r.id}>
                <th>{r.id}</th>
                <th>{r.name}</th>
                <th>{new Date(r.timestamp).toLocaleString()}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default XxxResultComponent;
