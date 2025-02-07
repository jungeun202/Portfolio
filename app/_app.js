import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://www.statcounter.com/counter/counter.js';
    document.body.appendChild(script);

    const scriptContent = document.createElement('script');
    scriptContent.type = 'text/javascript';
    scriptContent.innerHTML = `
      var sc_project=13078514; 
      var sc_invisible=1; 
      var sc_security="56435565";
    `;
    document.body.appendChild(scriptContent);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(scriptContent);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
