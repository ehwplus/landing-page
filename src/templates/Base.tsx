import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Strings } from '../utils/Strings';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { CatHeader } from './HeaderWithCat';
import { TitleClaimAndAppStoreBadges } from './TitleClaimAndAppStoreBadges';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <CatHeader textInstallNow={Strings.install_now} />
    <TitleClaimAndAppStoreBadges />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
