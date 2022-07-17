import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { TitleClaimAndAppStoreBadges } from './TitleClaimAndAppStoreBadges';

// https://developers.google.com/search/docs/advanced/structured-data/faqpage?hl=de

const FaqPage = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <TitleClaimAndAppStoreBadges />
    <Footer />
  </div>
);

export { FaqPage };
