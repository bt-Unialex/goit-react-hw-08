import { toast } from 'react-toastify';

export const toastError = (msg) => {
  setTimeout(() => {
    toast.error(msg);
  }, 0);
  return null;
};
