import { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    const tawkToScript = document.createElement('script');
    tawkToScript.src = process.env.TAWKTO_SCRIPT_URL;
    tawkToScript.async = true;
    document.body.appendChild(tawkToScript);
    return () => {
      document.body.removeChild(tawkToScript);
    };
  }, []);

  return null;
};

export default TawkToWidget;
