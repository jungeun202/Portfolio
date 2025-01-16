import { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://www.statcounter.com/counter/counter.js';
    script.setAttribute('data-sc_project', '13078514');
    script.setAttribute('data-sc_invisible', '1');
    script.setAttribute('data-sc_security', '56435565');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
