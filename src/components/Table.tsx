import React from "react";

type TableColumn<T> = {
  header: string;
  accessor: keyof T | ((data: T) => React.ReactNode);
  className?: string;
};

type TableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
  className?: string;
  tableClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
};

function Table<T extends object>({
  data,
  columns,
  className = "",
  tableClassName = "",
  headerClassName = "",
  bodyClassName = "",
  rowClassName = "",
  cellClassName = "",
}: TableProps<T>) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table
        className={`min-w-full divide-y divide-gray-200 ${tableClassName}`}
      >
        <thead className={`bg-gray-50 ${headerClassName}`}>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.className || ""
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={`bg-white divide-y divide-gray-200 ${bodyClassName}`}>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowClassName}>
              {columns.map((column, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-6 py-4 whitespace-nowrap ${cellClassName}`}
                >
                  {typeof column.accessor === "function"
                    ? column.accessor(row)
                    : (row[column.accessor] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
