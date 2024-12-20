// components/GTM.jsx
import { useEffect } from 'react';

const GTM_ID = 'GTM-KQX6WRXC';  // Replace with your GTM ID

const GTM = () => {
    useEffect(() => {
        // Inject the Google Tag Manager script
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            const f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l !== 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', GTM_ID);
    }, []);

    return null; // No visual output
};

export default GTM;
