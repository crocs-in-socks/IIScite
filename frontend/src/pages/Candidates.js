import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "../styles/Candidates.css"
import selected_candidates from "../assets/sheets/selected_candidates.csv";

export default function Candidates() {
  const [parsedData, setParsedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(selected_candidates);

        if (!response.ok) {
          throw new Error('Failed to fetch CSV file');
        }

        const csvFile = await response.text();

        Papa.parse(csvFile, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            const rowsArray = [];
            const valuesArray = [];

            results.data.forEach((d) => {
              rowsArray.push(Object.keys(d));
              valuesArray.push(Object.values(d));
            });

            setParsedData(results.data);
          },
        });
      } catch (error) {
        console.error('Error fetching or parsing CSV file:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
        <div className="candidates-container">
            <div className="candidates-title">
                Candidates
            </div>
            <div className="candidates-text">
                <ul className="candidates-list">
                    {
                        parsedData.map((row, index) => (
                        <li>{`${row['Serial Number']}.    ${row['Name']}`}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </>
  );
}
