import React from 'react';
import { Cuerpo } from '../types/types';
import Cuerpocarta from '../componentes/carta/carta';

interface HomeProps {
  cuerpos: Cuerpo[];
  loading: boolean;
  error: string | null;
  onSelectCuerpo: (cuerpo: Cuerpo) => void;
}

const Home: React.FC<HomeProps> = ({ cuerpos, loading, error, onSelectCuerpo }) => {
  if (loading) return <p>Cargando cuerpos celestes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Cuerpos Celestes del Sistema Solar</h1>
      <div>
        {cuerpos.map((body) => (
          <div key={body.id} onClick={() => onSelectCuerpo(body)}>
            <Cuerpocarta body={body} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


