import Link from 'next/link';

import { CatHeader } from '../background/HeaderWithCat';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Logo } from './Logo';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <CatHeader>
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl invert />}>
          <li>
            <Link href="https://ehwplus.page.link/install">
              <a target="_blank" className="text-black-500">
                JETZT INSTALLIEREN
              </a>
            </Link>
          </li>
        </NavbarTwoColumns>
        <Section>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Section>
      </Section>
    </CatHeader>
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
