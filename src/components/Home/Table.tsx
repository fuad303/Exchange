import React from "react";
import data from "../data/data.json"; // Adjust the path if necessary

interface DataRow {
  id: number;
  name: string;
  phone: string;
  type: string;
  currency: string;
  amount: string;
  date: string;
  by: string;
}
const tdStyle = "py-2 px-4 border text-center";
const thStyle = "py-2 px-4 border";
const Table: React.FC<DataRow> = () => {
  return (
    <div className="overflow-x-auto" dir="rtl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg ">آخرین معاملات</h2>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-white text-gray-600">
            <th className={`${thStyle}`}>شماره</th>
            <th className={`${thStyle}`}>نام و تخلص</th>
            <th className={`${thStyle}`}>شماره تماس</th>
            <th className={`${thStyle}`}>نوعیت</th>
            <th className={`${thStyle}`}>واحد پول</th>
            <th className={`${thStyle}`}>مقدار</th>
            <th className={`${thStyle}`}>تاریخ</th>
            <th className={`${thStyle}`}>توسط</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={`hover:bg-gray-100 ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <td className={`${tdStyle}`}>{row.id}</td>
              <td className={`${tdStyle}`}>{row.name}</td>
              <td className={`${tdStyle}`}>{row.phone}</td>
              <td className={`${tdStyle}`}>{row.type}</td>
              <td className={`${tdStyle}`}>{row.currency}</td>
              <td className={`${tdStyle}`}>{row.amount}</td>
              <td className={`${tdStyle}`}>{row.date}</td>
              <td className={`${tdStyle}`}>{row.by}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
