import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
);
