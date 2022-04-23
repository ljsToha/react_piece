import React, { useState } from 'react';
import './App.scss';
import { Paper, Input } from '@mui/material';
import * as XLSX from 'xlsx';

const App = () => {
  const [excelData, setExcelData] = useState([]); //엑셀 데이터

  const readExcel = (file) => {
    const promise = new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: 'buffer' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        res(data);
      };
      fileReader.onerror = (error) => {
        rej(error);
      };
    });
    promise.then((d) => {
      setExcelData(d);
    });
  };
  console.log(excelData);
  return (
    <div className='App'>
      <Paper elevation={9} className='Paper'>
        <Input
          type='file'
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
      </Paper>
    </div>
  );
};

export default App;
