import React from 'react';
import { Link } from 'react-router-dom';
import { Cuerpo } from '../../types/types';

interface CuerpoProps {
  body: Cuerpo;
}

const Cuerpocarta: React.FC<CuerpoProps> = ({ body }) => {
  return (
    <div>
      <h3>{body.englishName || body.name}</h3>
      <p>Gravedad: {body.gravity} m/s²</p>
      <p>Densidad: {body.density} g/cm³</p>
      <p>Radio: {body.meanRadius} km</p>
      <Link to={`/cuerpo/${body.id}`}>Ver detalles</Link>
    </div>
  );
};

export default Cuerpocarta;


