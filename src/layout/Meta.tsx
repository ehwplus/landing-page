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
        <meta property="og:title" content="EHW+ Zählerstands-App" />
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
                priceCurrency: 'EUR',
              },
              email: 'mailto:info@ehwplus.com',
              url: 'https://www.ehwplus.com',
              review: [
                {
                  '@type': 'Review',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                  },
                  datePublished: '2022-01-15',
                  reviewBody:
                    'Eigentlich bleiben bei dieser App kaum Wünsche offen um den privaten Energieverbrauch Transparenz zu verleihen. Intuitive kurze Einarbeitung! Die wichtigsten Features kostenlos und trotzdem quasi keine Werbung. Sehr Übersichtlich offline nutzbar und an nahezu alle Verbrauchssituationen gedacht. Wer den Excel-Export braucht, für den sind einmalige 3,99 € für diese App absolut fair. Ob man für diese Zwecke ein Abo braucht? Sehe ich dann doch eher nicht. Aber alles in allem sehr gelungen. Danke!',
                  author: {
                    '@type': 'Person',
                    name: 'Marco Hilbich',
                  },
                },
                {
                  '@type': 'Review',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                  },
                  datePublished: '2021-12-17',
                  reviewBody:
                    'Für mich perfekt. Sehr schnelle und intuitive Bedienung. Statistikkurve sehr übersichtlich. Hatte schon andere Apps für diesen Zweck. Alle deinstalliert da zu überladen und unübersichtlich. Zudem besteht die Möglichkeit der Mitgestaltung über ein Voting. Absolut empfehlenswert',
                  author: {
                    '@type': 'Person',
                    name: 'Bernd Bratsch',
                  },
                },
                {
                  '@type': 'Review',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                  },
                  datePublished: '2021-05-31',
                  reviewBody:
                    'Tolle App für den Privatbereich, um Verbrauchsdaten im Überblick zu halten. Für mich sehr nützlich ist die Funktion, die Daten und Statistiken als Excel zu exportieren, um sie zb an Vermieter weiterzureichen. Ich kopiere die Daten in mein eigenes Excel template. Das ermöglicht mir geniale Auswertungsmöglichkeiten. Die App selbst ist übersichtlich gestaltet und hat einen professionellen Look. Positiv auch der nette Kontakt zum Entwickler. Berücksichtigt Wünsche und Anregungen der Nutzer! 👍',
                  author: {
                    '@type': 'Person',
                    name: 'Carbon Racer',
                  },
                },
                {
                  '@type': 'Review',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                  },
                  datePublished: '2021-03-01',
                  reviewBody:
                    'Es macht Spaß diese App zu nutzen. Sie ist einfach zu verstehen und sehr schön übersichtlich. Für mich genau das Richtige. Ich nutze sie für Strom, Warmwasser und Heizung. Schon beim eingeben kann ich erkennen, ob ich mehr oder weniger verbraucht habe. Sehr hilfreich, da ich für letztes Jahr sehr viel nachzahlen musste. Der Kontakt zum Entwickler ist sehr angenehm. Probleme werden quasi sofort gelöst. Und das völlig entspannt und es wird alles sehr gut erklärt.',
                  author: {
                    '@type': 'Person',
                    name: 'Takera',
                  },
                },
              ],
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
