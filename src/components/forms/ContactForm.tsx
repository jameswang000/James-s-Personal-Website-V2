import { textJSON } from "../../assets";
import { Button } from "../util/";

export const ContactForm = () => {
  return (
    <form
      className="flex flex-col gap-3 items-start justify-start
                   bg-highlighting-gold/20 border-1 border-text-dark-brown/30 shadow-2xl p-8 rounded-2xl h-full"
    >
      <h3 className="text-heading-dark-burgandy font-semibold text-4xl">
        {textJSON["forms.contactForm.heading"]}
      </h3>
      <p className="font-normal text-xl text-text-dark-brown">
        {textJSON["forms.contactForm.description"]}
      </p>
      <textarea
        className="bg-text-light-white font-medium text-xl text-text-dark-brown p-3 w-full border-1 rounded-sm"
        name="message"
        id="message"
        placeholder={textJSON["forms.contactForm.messageInput.placeholder"]}
        rows={4}
      />
      <div className="flex flex-row justify-between items-start w-full gap-2">
        <input
          className="bg-text-light-white font-medium text-xl text-text-dark-brown p-3 w-full border-1 rounded-sm"
          type="email"
          name="email"
          id="email"
          placeholder={textJSON["forms.contactForm.emailInput.placeholder"]}
        />
        <Button
          variant="primary"
          label={textJSON["forms.contactForm.sendButton"]}
          onClick={() => {}}
          size="md"
        />
      </div>
    </form>
  );
};
