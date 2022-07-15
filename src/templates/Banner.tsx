import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title={
        <>
          {'Schon viele tausend Nutzer schwören auf EHW'}
          <span className="text-primary-500">+</span>
          {'.'}
        </>
      }
      subtitle="Sie auch?"
      button={
        <Link href="https://ehwplus.page.link/install">
          <a target="_blank">
            <Button>Jetzt installieren</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
