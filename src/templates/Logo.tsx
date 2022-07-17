type ILogoProps = {
  xl?: boolean;
  invert?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '36' : '26';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';
  const fontColor = props.invert ? 'text-black-500' : 'text-gray-900';

  return (
    <span className={` inline-flex items-center ${fontStyle}`}>
      <img
        src="/assets/images/logo.png"
        height={size}
        width={size}
        alt="EHW+ Logo"
        title="EHW plus Logo"
      />
      &nbsp;
      <>
        <span className={`${fontColor}`}>
          <strong>EHW</strong>
        </span>
        <span className="text-primary-500">
          <strong>+</strong>
        </span>
      </>
    </span>
  );
};

export { Logo };
