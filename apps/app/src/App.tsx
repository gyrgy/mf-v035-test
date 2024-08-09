import { FC } from 'react';
import { useShellContext } from 'shell/ShellProvider';

const App: FC = () => {
  const { authenticated } = useShellContext();

  return (
    <div>
      <div>App</div>
      <div>
        Auth Status: {authenticated ? 'authenticated' : 'not authenticated'}
      </div>
    </div>
  );
};

export default App;
