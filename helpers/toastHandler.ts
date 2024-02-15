import { notification } from 'antd';

export const toastHandler = {
  error: (data: string | object) => {
    return typeof data === 'object'
      ? Object.values(data)
          .flat(Infinity)
          .map((item) => toastHandler.showNotification(String(item), 'error'))
      : toastHandler.showNotification(data, 'error');
  },
  success: (data: string) => {
    return typeof data === 'object'
      ? Object.values(data)
          .flat(Infinity)
          .map((item) => toastHandler.showNotification(String(item), 'success'))
      : toastHandler.showNotification(data, 'success');
  },
  warn: (data: string) => {
    return typeof data === 'object'
      ? Object.values(data)
          .flat(Infinity)
          .map((item) => toastHandler.showNotification(String(item), 'warn'))
      : toastHandler.showNotification(data, 'warn');
  },
  showNotification: (message: string, toastType: string) => {
    if (typeof window !== 'undefined') {
      const config = {
        error: { message: 'Error!', description: message },
        success: { message: 'Success', description: message },
        warn: { message: 'Warning', description: message },
      };

      const notificationConfig = config[toastType];

      if (notificationConfig && message) {
        return notification[toastType](notificationConfig);
      } else {
        return null;
      }
    } else {
      console.log('');
    }
  },
};


