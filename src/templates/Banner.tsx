import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Sie möchten mitbekommen, wie sich EHW+ weiterentwickelt?"
      subtitle="Wie wäre es mit dem Newsletter per E-Mail?"
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Jetzt Newsletter abonnieren</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
