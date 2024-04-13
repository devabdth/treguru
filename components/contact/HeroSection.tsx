"use client";
import { useState, useRef, HTMLInputTypeAttribute } from "react";
import Image from "next/image";
import {
  DefaultLineFormField,
  DefaultMultiLineFormField,
  MainButton,
} from "@/components/globals";
import TicketsRequestHandler, { CreateTicketProps } from "@/utils/ticketsReqeustsHandlers";

const HeroSection = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  return (
    <section className="w-full h-[768px] lg:h-[50vw] flex relative">
      <div className="w-full h-full relative top-0">
        <Image
          src="/home-hero-text-light.png"
          alt="Entry Section Neon Light"
          width={1024}
          height={1024}
          className="h-[200%] w-full absolute lg:-left-[15vw] lg:-top-[40vw] -top-[80vw] left-0"
        ></Image>
        <Image
          src="/testmonials-light.png"
          alt="Entry Section Neon Light"
          width={1024}
          height={1024}
          className="h-[200%] rotate-180 w-full absolute lg:-left-[15vw] lg:-top-[40vw] -top-[80vw] opacity-75 -left-[10vw]"
        ></Image>
        <Image
          src="/robot-light-0.png"
          alt="Entry Section Neon Light"
          width={1024}
          height={1024}
          className="h-[200%] w-full lg:w-[85vw] absolute lg:-top-[40vw] -top-[80vw] right-0"
        ></Image>
        <Image
          src="/robot-light-1.png"
          alt="Entry Section Neon Light"
          width={1024}
          height={1024}
          className="h-[200%] w-[95vw] absolute lg:-top-[40vw] -top-[80vw] right-0"
        ></Image>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center absolute top-0">
        <div className="flex flex-col items-center justify-center lg:w-[70%] lg:h-[90%] w-[90%] h-[90%] rounded-2xl btn-blur lg:px-[10%] px-[5%] py-8">
          <h2 className="bold-52 text-white">Contact Us</h2>
          <p className="bold-24 text-white/60">Get in touch with us!</p>
          <form className="w-full h-full flex flex-col items-center justify-center gap-2">
            <div className="w-full flex flex-row gap-[1vw] items-center justify-center">
              <DefaultLineFormField
                id="first-name" value={fname}
                placeholder="First Name"
                type="name" 
                onChanged={(value) => {
                  setFname(value);
                }}
              />
              <DefaultLineFormField
                id="last-name" value={lname}
                placeholder="Last Name"
                type="name"
                onChanged={(value) => {
                  setLname(value);
                }}
              />
            </div>
            <DefaultLineFormField
              id="email" value={email}
              placeholder="Email Address"
              type="email" 
              onChanged={(value) => {
                setEmail(value);
              }}
            />
            <DefaultLineFormField
              id="phone" value={phone}
              placeholder="Phone Number"
              type="phone"
              onChanged={(value) => {
                setPhone(value);
              }}
            />
            <DefaultMultiLineFormField
              id="message"
              placeholder="Message" value={message}
              onChanged={(value) => {
                setMessage(value);
              }}
            />
          </form>
          <div className="w-full flex flex-col items-center justify-center gap-1">
            <MainButton
              type="button"
              title="Submit"
              variant="btn-accent"
              onClick={async() => {
                const formValidationResult= await TicketsRequestHandler.validateForm({
                    fnameRef: document.querySelector("#first-name")!, lnameRef: document.querySelector("#last-name")!,
                    phoneRef: document.querySelector("#phone")!, emailRef: document.querySelector("#email")!,
                    messageRef: document.querySelector("#message")!,
                    setCurrentMessage: (message: string) => { setCurrentStatus(message); }

                });
                if (!formValidationResult) return;
                const payload: CreateTicketProps= {
                  fName: fname,
                  lName: lname,
                  email: email,
                  phone: phone,
                  message: message,
                };
                const result= await TicketsRequestHandler.createTicket(payload);
                console.log(result);
                if (result.status === 1) {
                    setFname(""); setEmail("");
                    setLname(""); setPhone("");
                    setMessage(""); setCurrentStatus("");
                }
                setCurrentStatus(result.message);
              }}
            />
            <p className="regular-12 text-gray-30">{currentStatus}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
