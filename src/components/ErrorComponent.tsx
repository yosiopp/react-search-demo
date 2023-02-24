type Props = {
  errors: string[];
};

const ErrorComponent = ({ errors }: Props) => {
  return (
    <>
      {errors && errors.length > 0 && (
        <ul>
          {errors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ErrorComponent;
