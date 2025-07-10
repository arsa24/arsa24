type FormInputType = {
  label: string;
  name: string;
  useTextArea?: boolean;
  inputOptions?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  textareaOptions?: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
};

export default function FormInput({
  label,
  name,
  inputOptions,
  useTextArea = false,
}: FormInputType) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      {useTextArea ? (
        <textarea
          name={name}
          id={name}
          className="dark:bg-mocha-crust bg-latte-crust outline-none h-20 px-2 rounded-md"
        ></textarea>
      ) : (
        <input
          {...inputOptions}
          name={name}
          id={name}
          className="dark:bg-mocha-crust bg-latte-crust outline-none h-8 px-2 rounded-md"
        />
      )}
    </div>
  );
}
