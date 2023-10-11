import React from "react";

export const Contact = () => {
  const currentDate = new Date();
  return (
    <footer
      className="min-h-screen py-20 text-center flex flex-col justify-between items-center"
      id="Contact"
    >
      <div>
        <h1 className="my-5">Contact</h1>
        <p className="my-5 max-w-lg text-center">
          Thank you for taking the time to review my work. I look forward to the
          possibility of collaborating with you and contributing to the success
          of your company. Best regards
        </p>
        <button>
          <a
            href="mailto:pk.juanr@gmail.com"
            className="block border border-green text-green px-5 py-2 rounded my-5 cursor-pointer"
          >
            Send Email
          </a>
        </button>
      </div>
      <p className="w-full font-mono text-pink self-end text-center">
        Created by Juan Riquelme <br />
        on {currentDate.getFullYear()}
      </p>
    </footer>
  );
};
