
import { MovementEntity } from "../../../domain/entities/Movement.entity";
import { db } from "../../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const mockMovementEntity: MovementEntity[] = [
  {
    account: 'banco_galicia',
    type: 'income',
    description: 'Sueldo GT',
    currency: '$',
    category: 'sueldo',
    paid: true,
    date: '2024-05-30 08:33:12',
    amount: 15000,
    id: '7HMJPKmnsEixUtL86wYm'
  }, 
  {
    account: 'banco_galicia',
    type: 'income',
    description: 'Sueldo GT',
    currency: 'USD',
    category: 'sueldo',
    paid: true,
    date: '2024-05-30 08:33:12',
    amount: 1500,
    id: '7HMJPKmnsEixUtL86wYm'
  },
  {
    account: 'banco_galicia',
    type: 'income',
    description: 'Sueldo GT',
    currency: 'USD',
    category: 'sueldo',
    paid: true,
    date: '2024-06-30 08:33:12',
    amount: 1500,
    id: '7HMJPKmnsEixUtL86wYm'
  }, {
    account: 'banco_galicia',
    type: 'income',
    description: 'Sueldo GT',
    currency: 'USD',
    category: 'sueldo',
    paid: false,
    date: '2024-07-30 08:33:12',
    amount: 1500,
    id: '7HMJPKmnsEixUtL86wYm'
  }, {
    account: 'banco_galicia',
    type: 'income',
    description: 'Sueldo GT',
    currency: 'USD',
    category: 'sueldo',
    paid: true,
    date: '2024-06-30 08:33:12',
    amount: 1500,
    id: '7HMJPKmnsEixUtL86wYm'
  },
]

export const getAllDocsFirebase = async (collectionValue: string) => {
  // const docsRef = collection(db, collectionValue);
  // const response = await getDocs(docsRef);
  // const array: MovementEntity[] = [];
  // response.forEach((doc) => {
  //   const data = doc.data() as MovementEntity;
  //   data.id = doc.id;
  //   array.push(data);
  // });
  // console.log(array)
  return mockMovementEntity;
};
