// components/FontPreloader.jsx
import React from 'react';

const fonts = ["Graphik-Medium", "Graphik-Regular", "Graphik-Semibold"];

const FontPreloader = () => (
    <>
        {fonts.map(font => (
            <React.Fragment key={font}>
                <link rel="preload" href={`/fonts/${font}.woff2`} as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href={`/fonts/${font}.woff`} as="font" type="font/woff" crossOrigin="anonymous" />
            </React.Fragment>
        ))}
    </>
);

export default React.memo(FontPreloader);
