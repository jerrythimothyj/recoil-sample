import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { TodosContainer } from './modules/todos';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <TodosContainer />
        </React.Suspense>
      </RecoilRoot>
    </div>
  );
}

export default App;
