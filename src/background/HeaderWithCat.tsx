import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
};

const CatHeader = (props: IBackgroundProps) => (
  <div
    style={{
      backgroundImage: `url(https://ehwplus.web.app/assets/images/cat.jpeg)`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      width: '100%',
      maxHeight: '200',
    }}
  >
    {props.children}
  </div>
);

export { CatHeader };
