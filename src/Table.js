import React from "react";
import "./table.css";

const TableComponent = ({ data }) => {
  return (
    <div className="tableContainer">
      <table
        className="table"
        role="table"
        aria-label="Funding Data Table"
        tabIndex="0"
      >
        <thead>
          <tr className="headerRow">
            <th
              className="headerCell"
              scope="col"
              tabIndex="0"
              aria-label="Serial Number"
            >
              S.No.
            </th>
            <th
              className="headerCell"
              scope="col"
              tabIndex="0"
              aria-label="Percentage Funded"
            >
              Percentage Funded
            </th>
            <th
              className="headerCell"
              scope="col"
              tabIndex="0"
              aria-label="Amount Pledged"
            >
              Amount Pledged
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="row"
              role="row"
              tabIndex="0"
              aria-label={`Row ${index + 1}`}
            >
              <td
                className="cell"
                role="cell"
                tabIndex="0"
                aria-label={`Serial number: ${item["s.no"]}`}
              >
                {item["s.no"]}
              </td>
              <td
                className="cell"
                role="cell"
                tabIndex="0"
                aria-label={`Percentage funded: ${item["percentage.funded"]}%`}
              >
                {item["percentage.funded"]}%
              </td>
              <td
                className="cell"
                role="cell"
                tabIndex="0"
                aria-label={`Amount pledged: $${item["amt.pledged"]}`}
              >
                ${item["amt.pledged"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
