import React from 'react';
import { Cuerpo } from '../types/types';

interface DetailProps {
  body: Cuerpo;
  onBack: () => void;
}

const Detail: React.FC<DetailProps> = ({ body, onBack }) => {
  return (
    <div>
      <h1>{body.englishName || body.name}</h1>
      <p>Gravedad: {body.gravity} m/s²</p>
      <p>Densidad: {body.density} g/cm³</p>
      <p>Radio: {body.meanRadius} km</p>
      <button onClick={onBack}>Volver</button>
    </div>
  );
};

export default Detail;


