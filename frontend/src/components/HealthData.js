import React, { useEffect, useState } from "react";
import axios from "axios";

const HealthData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/mock_health-data")
            .then((response) => setData(response.data.data))
            .catch((error) => console.error("Error fetching health data:", error));
    }, []);

    return (
        <div>
            <h1>Health Data</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {item.name}: {item.steps} steps, {item.sleep_hours} hours sleep, Stress: {item.stress_level}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HealthData;
