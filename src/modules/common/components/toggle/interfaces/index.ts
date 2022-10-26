export interface IToggleProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string;
  onChange?: (event: any) => void;
  label?: string;
  icon?: React.ReactNode;
  onClickIcon?: () => void;
  hasError?: boolean;
  errorMessage?: string;
}