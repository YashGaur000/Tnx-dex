import { ToastOptions } from 'react-toastify';

export const defaultToastOptions: ToastOptions = {
  position: 'bottom-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const showSuccessToast = async (
  message: string,
  options?: ToastOptions
) => {
  const { toast } = await import('react-toastify');
  return toast.success(message, { ...defaultToastOptions, ...options });
};

export const showErrorToast = async (
  message: string,
  options?: ToastOptions
) => {
  const { toast } = await import('react-toastify');
  return toast.error(message, { ...defaultToastOptions, ...options });
};
