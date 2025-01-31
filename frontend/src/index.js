import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    fetchData();
  }, [sortBy, order]);

  const fetchData = () => {
    let url = "http://127.0.0.1:8000/api/mock_health-data";
    if (sortBy) {
      url += `?sort_by=${sortBy}&order=${order}`;
    }

    axios
      .get(url)
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Predictive Health Risk AI</h1>
      <div>
        <label>Sort By:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">None</option>
          <option value="steps">Steps</option>
          <option value="sleep_hours">Sleep Hours</option>
          <option value="stress_level">Stress Level</option>
        </select>

        <label>Order:</label>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Steps</th>
              <th>Sleep Hours</th>
              <th>Stress Level</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.steps}</td>
                <td>{item.sleep_hours}</td>
                <td>{item.stress_level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
