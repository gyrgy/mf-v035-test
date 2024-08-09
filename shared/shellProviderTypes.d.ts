interface ShellContextProps {
  authenticated: boolean;
}

declare module "shell/ShellProvider" {
  export const useShellContext: () => ShellContextProps;
}
