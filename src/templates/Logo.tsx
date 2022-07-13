type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '36' : '26'; // '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <input type="image" src="/assets/images/logo.png" height={size} />
      &nbsp;
      <>
        {'EHW'}
        <span className="text-primary-500">+</span>
      </>
    </span>
  );
};

export { Logo };
