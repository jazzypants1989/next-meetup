import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <description>{description}</description>
      <keywords>{keywords}</keywords>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Jesse's Meetup Site",
  keywords: "news, web, new, fun, cool, interesting, great, guy",
  description:
    "Jesse's Meetup Site is a totally operational news fetcher, I'm telling you. It's totally operational.",
};

export default Meta;
