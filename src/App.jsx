import { useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        action=""
        className="flex flex-col items-center justify-center mt-[5%]"
      >
        <h1 className="flex items-center justify-center font-semibold text-3xl text-[#aaa]">
          Contact Us
        </h1>
        <input
          type="text"
          name="user_name"
          placeholder="Enter fullname"
          className="border-2 border-[#aaa] border-solid p-[20px] w-[380px] mt-[20px]"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Enter email"
          className="border-2 border-[#aaa] border-solid p-[20px] w-[380px] mt-[20px]"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter Subject"
          className="border-2 border-[#aaa] border-solid p-[20px] w-[380px] mt-[20px]"
          required
        />
        <textarea
          type="text"
          name="message"
          cols={50}
          rows={7}
          placeholder="Leave a message"
          className="border-2 border-[#aaa] border-solid  mt-[20px]"
        />
        <button
          type="submit"
          className="bg-[#646cff] p-[20px] text-[#fff] border-none font-semibold cursor-pointer w-[380px] mt-[20px]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default App;
