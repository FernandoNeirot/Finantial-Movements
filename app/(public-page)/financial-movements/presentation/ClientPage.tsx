
import React from 'react'
import { getAllMoviments } from '../application/get-all/getAllMovements'

import { TableMovements } from './components/tableMovements';
import { getDolarBlue } from '../application/get/get';

const ClientPage = async() => {
  
  const movementsGroupByMonth = await getAllMoviments();
  const dolarBlue = await getDolarBlue();
  return (
    <div className="container mx-auto pb-[75px]">
      <TableMovements data={movementsGroupByMonth} dolarBlue={dolarBlue}/> 
    </div>
  );
}

export default ClientPage