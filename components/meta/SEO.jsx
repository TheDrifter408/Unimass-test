// components/SEO.jsx
import React from 'react';
import PropTypes from 'prop-types';
import FontPreloader from "@/components/meta/FontPreloader";
import {usePathname} from "next/navigation";

const SEO = ({
                 title,
                 description,
                 keywords,
                 author,
                 url,
                 image,
                 twitterHandle,
                 facebookVerification,
                 googleVerification,
                 canonical
             }) => {

    const pathName = usePathname();


    return (



        <head>
            {/* Basic Meta Tags */}
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="author" content={author}/>

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>
            <meta property="og:url" content={url}/>
            <meta property="og:type" content="website"/>

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image}/>
            <meta name="twitter:site" content={twitterHandle}/>
            <meta name="twitter:creator" content={twitterHandle}/>

            {/* Favicon and Apple Touch Icon */}
            <link rel="icon" type="image/png" href="/images/static/fav.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/static/fav.png"/>

            <FontPreloader/>
            {/* Canonical Link */}
            {canonical && <link rel="canonical" href={canonical}/>}

            {/* Additional Meta Tags */}
            {facebookVerification && (
                <meta name="facebook-domain-verification" content={facebookVerification}/>
            )}
            {googleVerification && (
                <meta name="google-site-verification" content={googleVerification}/>
            )}


            <title>{title}</title>




        </head>
    )
};

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    twitterHandle: PropTypes.string,
    facebookVerification: PropTypes.string,
    googleVerification: PropTypes.string,
    canonical: PropTypes.string
};

SEO.defaultProps = {
    keywords: '',
    author: '',
    twitterHandle: '',
    facebookVerification: '',
    googleVerification: '',
    canonical: ''
};

export default React.memo(SEO);
