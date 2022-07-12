import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  subtitle: ReactNode;
  description: ReactNode;
  command: String;
  badgeApple: ReactNode;
  badgeGoogle: ReactNode;
  badgeHuawei: ReactNode;
  badgeWebApp: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-6xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-3xl mt-4 mb-4">{props.subtitle}</div>
    <div className="text-xl mt-4 mb-4">{props.description}</div>
    <div className="text-2xl mt-8 mb-4">{props.command}</div>
    {props.badgeApple}
    &nbsp;
    {props.badgeGoogle}
    &nbsp;
    {props.badgeWebApp}
    &nbsp;
    {props.badgeHuawei}
  </header>
);

export { HeroOneButton };
