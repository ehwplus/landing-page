import Link from 'next/link';

import { Background } from '../background/Background';
import { Badge, HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const height: number = 60;
const maxWidth: number = height * 3.4;
const dims = {
  height,
  width: maxWidth,
};
const badges: Badge[] = [
  {
    href: 'https://apps.apple.com/app/id1548922124',
    src: '/assets/badges/apple-appstore-de.png',
    alt: 'EHW+ im Apple App Store',
    ...dims,
  },
  {
    href: 'https://play.google.com/store/apps/details?id=com.ehwplus',
    src: '/assets/badges/google-playstore-de.png',
    alt: 'EHW+ im Google PlayStore',
    ...dims,
  },
  {
    href: 'https://appgallery.huawei.com/#/app/C103698699',
    src: '/assets/badges/huawei-appgallery-en.png',
    alt: 'EHW+ in der Huawei AppGallery',
    ...dims,
  },
  {
    href: 'https://ehwplus.web.app',
    src: '/assets/badges/webapp-badge-de.png',
    alt: 'EHW+ im Browser nutzen',
    ...dims,
  },
];

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'EHW'}
            <span className="text-primary-500">+</span>
          </>
        }
        subtitle={
          <>
            {'Die Nebenkosten steigen, die EHW'}
            <span className="text-primary-500">+</span>
            {' Zählerstands-App hilft beim Sparen!'}
          </>
        }
        description={
          <>
            {'Hezrlich Willkommen bei EHW'}
            <span className="text-primary-500">+</span>
            {
              ', Ihrer Zählerstands-App für Elektrizität, Heizung und Wasser. Mit uns können Sie kostenlos und unkompliziert nachvollziehen, wie viel zu verbrauchen und was es kostet.'
            }
          </>
        }
        command="Jetzt die App holen:"
        badges={badges}
      />
    </Section>
  </Background>
);

export { Hero };
