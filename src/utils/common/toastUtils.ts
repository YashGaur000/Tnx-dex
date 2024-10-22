import { ToastOptions } from 'react-toastify';

export const defaultToastOptions: ToastOptions = {
  style: {
    background: 'linear-gradient(200deg, #47FF99 7.44%, #3EACFC 86.34%)',
    lineHeight: '17.94px',
    fontSize: '16px',
    fontWeight: 300,
    padding: '10px',
    borderRadius: '8px',
    position: 'relative',
    fontFamily: 'Kanit, sans-serif',
    transition: '0.3s',
    opacity: 1,
    color: '#ffffff',
  },

  position: 'bottom-center',

  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const defaultToastErrorOptions: ToastOptions = {
  style: {
    background: 'linear-gradient(200deg, #47FF99 7.44%, #3EACFC 86.34%)',
    lineHeight: '17.94px',
    fontSize: '16px',
    fontWeight: 300,
    padding: '10px',
    borderRadius: '8px',
    position: 'relative',
    fontFamily: 'Kanit, sans-serif',
    transition: '0.3s',
    opacity: 1,
    color: '#ffffff',
  },

  position: 'bottom-center',

  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  //progress: undefined,
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
