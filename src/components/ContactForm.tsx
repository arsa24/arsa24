import FormInput from "./FormInput";

export default function ContactForm() {
  return (
    <div className="dark:bg-mocha-mantle bg-latte-mantle py-12 px-7 flex flex-col gap-6 rounded-xl">
      <FormInput
        label="Name"
        name="name"
        inputOptions={{
          type: "text",
        }}
      />

      <FormInput
        label="Email"
        name="email"
        inputOptions={{
          type: "email",
        }}
      />
      <FormInput
        label="Message"
        name="msg"
        useTextArea
        textareaOptions={{
          placeholder: "Message",
        }}
      />
      <button className="bg-latte-mauve dark:bg-mocha-mauve dark:text-mocha-surface0 text-latte-surface0 hover:dark:bg-mocha-mauve/70 hover:bg-latte-mauve/70 font-semibold py-2 rounded-md">Send</button>
    </div>
  );
}
