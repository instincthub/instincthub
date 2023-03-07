import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

/* 
    <SeoHeader
        title={data.title}
        description={data.overview}
        type="webapp"
        name={(data.author) && `${data.author.user.first_name} ${data.author.user.last_name}`}
        thumbnail={data.thumbnail}
        url={window.location.href}
      />
*/

export const SeoHeader = ({ title, description, type, name, thumbnail, url }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:url" content={url} />
        <meta name="twitter:creator" content={name} />
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};