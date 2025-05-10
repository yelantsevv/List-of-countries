import { use, useState } from 'react';
import { json } from './api';
import { Capital, List, Name, Population, Region } from './components';

function App() {
  const [data, setData] = useState(use(json));
  return (
    <div className="table-container">
      <table className="country-table">
        <thead>
          <tr className="table-header">
            <th>Flag</th>
            <Name className="name" data={data} setData={setData} />
            <Capital className="capital" data={data} setData={setData} />
            <Region className="region" setData={setData} />
            <Population className="population" data={data} setData={setData} />
          </tr>
        </thead>
        <tbody>
          {data.map((country) => (
            <List key={country.cca2} country={country} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
