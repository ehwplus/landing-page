import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

type IBackgroundProps = {
  textInstallNow: string;
};

const CatHeader = (props: IBackgroundProps) => (
  <div
    style={{
      backgroundImage: `url(https://ehwplus.web.app/assets/images/cat.jpeg)`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      width: '100%',
      maxHeight: '200',
    }}
  >
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl invert />}>
        <li>
          <Link href="https://ehwplus.page.link/install">
            <a target="_blank" className="text-black-500">
              {props.textInstallNow}
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
  </div>
);

export { CatHeader };
