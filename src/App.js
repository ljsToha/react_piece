import React, { useState } from 'react';
import './App.scss';
import { Paper } from '@mui/material';
import Excels from './components/Excels';

const App = () => {
  const [excelData, setExcelData] = useState([]); //엑셀 데이터
  console.log(excelData);
  return (
    <div className='App'>
      <Paper elevation={9} className='Paper'>
        <Excels setExcelData={setExcelData} />
      </Paper>
    </div>
  );
};

export default App;
