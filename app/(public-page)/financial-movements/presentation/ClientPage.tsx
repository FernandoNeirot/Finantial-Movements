
import React from 'react'
import { getAllMoviments } from '../application/get-all/getAllMovements'

import { TableMovements } from './components/tableMovements';
import { MovementViewModel } from '../domain/entities/Movement.entity'; // Add this line
import { IoIosAddCircle } from 'react-icons/io';
import { Footer } from './components/footer';
const ClientPage = async() => {
  
  const movements = await getAllMoviments();
 
  return (
    <div className="container mx-auto">
      <TableMovements movements={movements} /> 
    </div>
  );
}

export default ClientPage