import { FieldErrors } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
interface Props {
  errors: FieldErrors;
  name: string;
}

const Error: React.FC<Props> = (props) => {
  return (
    <ErrorMessage
      errors={props.errors}
      name={props.name}
      render={({ message }) => (
        <p className="text-start text-sm text-[red] mb-0 before:inline">
          {"⚠ "}
          {message}
        </p>
      )}
    />
  );
};

export default Error;
