import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <meta property="og:title" content="EHW+ Zählerstandsapp" />
        <meta
          property="og:description"
          content="Die Nebenkosten steigen. Haben Sie Verbrauch und Kosten im Blick? Mit EHW+ schon."
        />
        <meta
          property="og:image"
          content="https://image.winudf.com/v2/image1/Y29tLmVod3BsdXNfc2NyZWVuX3poLUNOXzFfMTYxMDIyNTI1OV8wOTA/screen-1.jpg?fakeurl=1&type=.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': ['SoftwareApplication', 'MobileApplication'],
              applicationCategory: 'UtilitiesApplication',
              name: 'EHW+ App',
              description:
                'Die Nebenkosten steigen. Haben Sie den Verbrauch im Blick? Mit der EHW+ Zählerstands-App schon.',
              operatingSystem: ['Android', 'iOS', 'Windows', 'OSX', 'Linux'],
              image: [
                'https://image.winudf.com/v2/image1/Y29tLmVod3BsdXNfc2NyZWVuX3poLUNOXzFfMTYxMDIyNTI1OV8wOTA/screen-1.jpg?fakeurl=1&type=.jpg',
              ],
              brand: {
                '@type': 'Brand',
                name: 'EHW+',
              },
              offers: {
                '@type': 'Offer',
                price: '0',
              },
              email: 'mailto:info@ehwplus.com',
              url: 'https://www.ehwplus.com',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '312',
                itemReviewed: {
                  '@type': 'Thing',
                  url: 'https://play.google.com/store/apps/details?id=com.ehwplus',
                  alternateName: 'EHW+ Android',
                },
              },
            }),
          }}
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
