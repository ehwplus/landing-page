import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { TitleClaimAndAppStoreBadges } from './TitleClaimAndAppStoreBadges';

// https://developers.google.com/search/docs/advanced/structured-data/faqpage?hl=de

const q1 = 'Wie oft muss ich Zählerstände ablesen';
const a1 =
  '<p>Zählerstände müssen nur bei Start und Ende des Vertrags abgelesen werden. Um jedoch Ihren Verbrauch besser einschätzen zu können, sollten Sie alle 1 bis 3 Monate ablesen.</p>';

const FaqPage = () => (
  <div className="antialiased text-gray-600">
    <Meta
      title={AppConfig.title}
      description={AppConfig.description}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: { q1 },
            acceptedAnswer: {
              '@type': 'Answer',
              text: { a1 },
            },
          },
        ],
      }}
    />
    <TitleClaimAndAppStoreBadges />
    <Footer />
  </div>
);

export { FaqPage };
