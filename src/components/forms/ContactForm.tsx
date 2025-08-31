import { useState, useRef, useEffect } from "react";
import { textJSON } from "../../assets";
import { Button } from "../util/";
import emailjs from "emailjs-com";
import * as ToastPrimitive from "@radix-ui/react-toast";

export const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const toastTimerRef = useRef<number>(5);

  useEffect(() => {
    return () => clearTimeout(toastTimerRef.current);
  }, []);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const showToast = (message: string, type: "success" | "error") => {
    setToastMessage(message);
    setToastType(type);
    setToastOpen(false);
    clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToastOpen(true), 100);
  };

  const handleSubmit = async () => {
    if (!message.trim()) {
      showToast("Message cannot be empty.", "error");
      return;
    }
    if (!validateEmail(email)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(
        "service_bw9jce1",
        "template_zu2a8ts",
        {
          from_email: email,
          message,
          subject: "New message from portfolio contact form",
        },
        "anG1r_us7C4pS9xM9"
      );
      showToast("Message sent successfully!", "success");
      setMessage("");
      setEmail("");
    } catch {
      showToast("Failed to send message. Please try again later.", "error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <ToastPrimitive.Provider swipeDirection="right">
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex flex-row justify-between items-start w-full gap-2">
          <input
            className="bg-text-light-white font-medium text-xl text-text-dark-brown p-3 w-full border-1 rounded-sm"
            type="email"
            name="email"
            id="email"
            placeholder={textJSON["forms.contactForm.emailInput.placeholder"]}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="primary"
            size="md"
            disabled={isSending}
            onClick={() => handleSubmit()}
            label={
              isSending ? (
                <div className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 018 8h-4l3.5 3.5L20 12h-4a8 8 0 01-8 8v-4l-3.5 3.5L8 20v-4a8 8 0 01-8-8h4L.5 8.5 4 12z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                textJSON["forms.contactForm.sendButton"]
              )
            }
          />
        </div>
      </form>

      {/* Toast */}
      <ToastPrimitive.Root
        className={`grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
          ${toastType === "success" ? "bg-green-200" : "bg-red-200"}
          [grid-template-areas:_'title_action'_'description_action']
          data-[swipe=cancel]:translate-x-0
          data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]
          data-[state=closed]:animate-hide
          data-[state=open]:animate-slideIn
          data-[swipe=end]:animate-swipeOut
          data-[swipe=cancel]:transition-[transform_200ms_ease-out] border-1 border-black`}
        open={toastOpen}
        onOpenChange={setToastOpen}
      >
        <ToastPrimitive.Title className="mb-[5px] text-[15px] font-medium text-slate12 [grid-area:_title]">
          {toastType === "success" ? "Success" : "Error"}
        </ToastPrimitive.Title>
        <ToastPrimitive.Description asChild>
          <span className="m-0 text-[13px] leading-[1.3] text-slate11 [grid-area:_description]">
            {toastMessage}
          </span>
        </ToastPrimitive.Description>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </ToastPrimitive.Provider>
  );
};
