type FormFieldProps = {
    id: string;
    label: string;
    type?: "text" | "email" | "textarea";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
  };
  
  export default function FormField({
    id,
    label,
    type = "text",
    value,
    onChange,
    required = false,
  }: FormFieldProps) {
    const inputClass =
      "block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-300 peer";
  
    return (
      <div className="relative z-0 w-full mb-8 group">
        {type === "textarea" ? (
          <textarea
            id={id}
            name={id}
            required={required}
            value={value}
            onChange={onChange}
            placeholder=" "
            className={inputClass}
            rows={4}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            required={required}
            value={value}
            onChange={onChange}
            placeholder=" "
            className={inputClass}
          />
        )}
        <label
          htmlFor={id}
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-teal-300 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}{required && (<span className="text-red-500 mx-1">*</span>)}
        </label>
      </div>
    );
  }
  