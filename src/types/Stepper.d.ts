interface StepperButtons {
  label: string;
  icon?: string;
  onClick?: () => Promise<void>;
  tooltip?: string;
  disabled?: boolean;
  inProgress?: boolean;
}
export interface StepperDataProps {
  step?: number;
  icon?: string;
  unSafe?: {
    visible: boolean;
    onClick: () => void;
  };
  descriptions: {
    labels: string;
    isSplit?: boolean;
    adjust?: string;
    onClick?: () => void;
    token1?: string;
    token2?: string;
  };
  buttons?: StepperButtons;
  actionCompleted?: boolean;
}
