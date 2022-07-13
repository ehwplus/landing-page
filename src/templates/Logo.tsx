type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '36' : '26';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
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
