import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({
  title, description, metaKeywords
}) {
  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      {title && <meta property="og:title" content={title} />}

      {description && (
      <meta property="og:description" content={description} />
      )}

      {title && <meta name="twitter:title" content={title} />}

      {description && (
      <meta name="twitter:description" content={description} />
      )}
    </Helmet>
  );
}
