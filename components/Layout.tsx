import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};
const webTitle = 'Gala Batik - Premium Batik Art';
const Layout = ({ children, title = "Title" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{`${title} | ${webTitle}`}</title>
      <link rel="icon" type="image/png" href="/images/logo.png" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Gala Batik is a premium Batik originated in Surabaya."
      />
      <meta property="og:title" content={`${title} | Gala Batik - Premium Batik Art`} />
      <meta
        property="og:description"
        content="Gala Batik is a premium batik art originated in Surabaya."
      />
      <meta property="og:url" content="https://galabatik.biz.id/" />
      <meta property="og:type" content="website" />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ClothingStore",
                "name": "Gala Batik",
                "image": "images/logo.png",
                "@id": "https://galabatik.biz.id/",
                "url": "https://galabatik.biz.id/",
                "telephone": "",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Jl. Tenggilis Lama IVB/30",
                  "addressLocality": "SURABAYA",
                  "postalCode": "60292",
                  "addressCountry": "ID"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": -7.3160046,
                  "longitude": 112.76224
                },
                "sameAs": "https://www.instagram.com/galabatikboutique"
              },
              {
                "@type": "Product",
                "name": "Product1",
                "image": "1.png",
                "sku": "1",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5",
                  "ratingCount": "1",
                  "reviewCount": "1"
                }
              },
              {
                "@type": "Product",
                "name": "Product2",
                "image": "2.png",
                "sku": "2",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5",
                  "ratingCount": "1",
                  "reviewCount": "1"
                }
              }
            ]
          })
        }}
      />
  
    </Head>
    {children}
  </div>
);

export default Layout;
