
import React from 'react'
import { getAllMoviments } from '../application/get-all/getAllMovements'

import { TableMovements } from './components/tableMovements';
import { IoIosAddCircle } from 'react-icons/io';

const ClientPage = async() => {
  
  const movementsGroupByMonth = await getAllMoviments();

  return (
    <div className="container mx-auto">
      <TableMovements data={movementsGroupByMonth} /> 
    </div>
  );
}

export default ClientPage