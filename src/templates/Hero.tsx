import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const height: number = 60;
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
        badgeApple={
          <Link href="https://apps.apple.com/app/id1548922124">
            <a>
              <input
                type="image"
                src="/assets/badges/apple-appstore-de.png"
                height={height}
              />
            </a>
          </Link>
        }
        badgeGoogle={
          <Link href="https://play.google.com/store/apps/details?id=com.ehwplus">
            <a>
              <input
                type="image"
                src="/assets/badges/google-playstore-de.png"
                height={height}
              />
            </a>
          </Link>
        }
        badgeHuawei={
          <Link href="https://appgallery.huawei.com/#/app/C103698699">
            <a>
              <input
                type="image"
                src="/assets/badges/huawei-appgallery-en.png"
                height={height}
              />
            </a>
          </Link>
        }
        badgeWebApp={
          <Link href="https://ehwplus.web.app">
            <a>
              <input
                type="image"
                src="/assets/badges/webapp-badge-de.png"
                height={height}
              />
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
