import React from "react";

const tableStyles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  thead: {
    backgroundColor: "#3498db",
    color: "white",
    fontSize: "16px",
  },
  th: {
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "left",
  },
  td: {
    padding: "12px",
    border: "1px solid #ddd",
  },
  tr: {
    borderBottom: "1px solid #ddd",
  },
};

export const Table = ({ headers, data, renderActions }) => {
  return (
    <table style={tableStyles.table}>
      <thead>
        <tr style={tableStyles.thead}>
          {headers.map((header, index) => (
            <th key={index} style={tableStyles.th}>{header}</th>
          ))}
          {renderActions && <th style={tableStyles.th}>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} style={tableStyles.tr}>
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex} style={tableStyles.td}>{cell}</td>
            ))}
            {renderActions && <td style={tableStyles.td}>{renderActions(row)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
