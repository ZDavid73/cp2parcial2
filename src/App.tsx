import React, { useState } from 'react';
import Home from './pages/home';
import Detail from './pages/detail';
import { Cuerpo } from './types/types';
import { useCuerpoData } from './hooks/hooks';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  const { cuerpos, loading, error } = useCuerpoData();
  const [selectedCuerpo, setSelectedCuerpo] = useState<Cuerpo | null>(null);

  const handleSelectCuerpo = (cuerpo: Cuerpo) => {
    setSelectedCuerpo(cuerpo);
  };

  const handleBack = () => {
    setSelectedCuerpo(null);
  };

  return (
    <Router>
      <div>
        {selectedCuerpo ? (
          <Detail body={selectedCuerpo} onBack={handleBack} />
        ) : (
          <Home cuerpos={cuerpos} loading={loading} error={error} onSelectCuerpo={handleSelectCuerpo} />
        )}
      </div>
    </Router>
  );
};

export default App;


