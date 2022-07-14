type ILogoProps = {
  xl?: boolean;
  invert?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '36' : '26';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';
  const fontColor = props.invert ? 'text-gray-600' : 'text-gray-900';

  return (
    <span className={` inline-flex items-center ${fontStyle} ${fontColor}`}>
      <img
        src="/assets/images/logo.png"
        height={size}
        width={size}
        alt="EHW+ Logo"
      />
      &nbsp;
      <>
        {'EHW'}
        <span className="text-primary-500">+</span>
      </>
    </span>
  );
};

export { Logo };
