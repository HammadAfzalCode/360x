const SchemaMarkup = ({
  altText,
  certification,
  type,
  headline,
  description,
  datePublished,
  dateModified,
  author,
  tech,
  connect,
}) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://360xpertsolutions.com/",
        "@type": type,
        headline: headline,
        description: description,
        datePublished: datePublished,
        dateModified: dateModified,

        author: {
          "@type": "Person",
          name: author,
        },
        alt: {
          "@type": "alt",
          name: altText,
        },
        certification: {
          "@type": "certificate",
          name: certification,
        },
        language: {
          "@type": "languages",
          name: tech,
        },
        social: {
          "@type": "socialURl",
          name: connect,
        },
        // },
      }),
    }}
  />
);

export default SchemaMarkup;
