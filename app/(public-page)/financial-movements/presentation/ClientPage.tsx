
import React from 'react'
import { getAllMoviments } from '../application/get-all/getAllMovements'

import { TableMovements } from './components/tableMovements';

const ClientPage = async() => {
  
  const movementsGroupByMonth = await getAllMoviments();

  return (
    <div className="container mx-auto pb-[75px]">
      <TableMovements data={movementsGroupByMonth} /> 
    </div>
  );
}

export default ClientPage