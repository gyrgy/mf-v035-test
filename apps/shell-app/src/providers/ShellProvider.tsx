import {
  FC,
  createContext,
  useContext,
  useMemo,
  ReactNode,
  useState,
  useEffect,
} from 'react';

const ShellContext = createContext<ShellContextProps>({
  authenticated: false,
});

interface ShellProviderProps {
  children: ReactNode;
}

const ShellProvider: FC<ShellProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setAuthenticated(true);
  }, []);

  const values = useMemo(
    () => ({
      authenticated,
    }),
    [authenticated],
  );

  return (
    <ShellContext.Provider value={values}>{children}</ShellContext.Provider>
  );
};
export default ShellProvider;

export const useShellContext = () => useContext(ShellContext);
