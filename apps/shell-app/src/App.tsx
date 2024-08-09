import { FC, lazy } from 'react';
import ShellProvider from './providers/ShellProvider';

const ExampleApp = lazy(() => import('app/App'));

const App: FC = () => (
  <ShellProvider>
    <div>Shell App</div>
    <ExampleApp />
  </ShellProvider>
);

export default App;
