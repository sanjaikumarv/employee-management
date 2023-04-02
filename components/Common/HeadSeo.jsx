import Head from "next/head";

function HeadSeo({ meta = {} }) {
  return (
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='manifest' href='/manifest.json' />
      <title>{meta.meta_title || "HOD"}</title>
      <link rel='canonical' href={meta.canonical_url} />
      <meta name='title' content={meta.meta_title || ""} />
      <meta name='description' content={meta.meta_description || ""} />
      <meta name='keywords' content={meta.meta_keyword || ""} />
    </Head>
  );
}

export default HeadSeo;
