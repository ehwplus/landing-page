import { ReactNode } from 'react';

// import Image from 'next/image';
import Link from 'next/link';

// import { noOpLoader } from '../image_loaders';

export type Badge = {
  height: number;
  width: number;
  src: string;
  alt: string;
  href: string;
};

type IHeroOneButtonProps = {
  title: ReactNode;
  subtitle: ReactNode;
  description: ReactNode;
  command: String;
  badges: Badge[];
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  const { title, subtitle, badges, description, command } = props;
  return (
    <header className="text-center">
      <h1 className="text-6xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {title}
      </h1>
      <div className="text-3xl mt-4 mb-4">{subtitle}</div>
      <div className="text-xl mt-4 mb-4">{description}</div>
      <div className="text-2xl mt-8 mb-4">{command}</div>
      <div
        className={'flex flex-row gap-2 justify-center flex-wrap'}
        style={{ paddingLeft: '2.5%', paddingRight: '2.5%' }}
      >
        {badges.map((badge: Badge, index: number) => {
          const { href, src, alt, height, width } = badge;
          return (
            <Link key={`badge-${index}`} href={href}>
              <a>
                <img
                  src={src}
                  alt={alt}
                  height={height}
                  width={width}
                  // loader={noOpLoader}
                  // unoptimized={true}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export { HeroOneButton };
