import React, { useEffect } from 'react';
import { jobService } from './services/jobService';

const App: React.FC<any> = () => {
  useEffect(() => {
    jobService.loadTransaction('dhdfssdf').subscribe();
  }, []);

  return <div></div>;
};

export default App;
