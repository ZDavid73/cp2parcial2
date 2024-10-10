import { Cuerpo } from '../types/types';

const API_URL = 'https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false';

export const fetchCuerpos = async (): Promise<Cuerpo[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error al obtener los cuerpos celestes. No se encuentran.');
  }
  const data = await response.json();
  return data.bodies as Cuerpo[];
};
