import { useEffect, useState } from 'react';
import { fetchCuerpos } from '../service/api';
import { Cuerpo } from '../types/types';

export const useCuerpoData = () => {
  const [cuerpos, setCuerpos] = useState<Cuerpo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCuerpos = async () => {
      try {
        const data = await fetchCuerpos();
        setCuerpos(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Error: ${err.message}`);
        } else {
          setError('Error desconocido al cargar los datos de los cuerpos celestes.');
        }
      } finally {
        setLoading(false);
      }
    };
    getCuerpos();
  }, []);

  return { cuerpos, loading, error };
};

