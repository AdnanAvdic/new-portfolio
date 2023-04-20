import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:avdic_adnan@hotmail.com?subject=${formData?.subject}
    &body=Hi, my name is ${formData?.name}, ${formData?.message} (${formData?.email})`;
  };
  return (
    <div
      className="h-screen relative flex flex-col justify-evenly items-center text-center 
        md:text-left md:flex-row max-w-7xl px-10 mx-auto "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-2 pt-24 ">
        <h4 className="text-2xl md:text-4xl font-semibold text-center ">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A] underline">
            Let&apos;s Talk.
          </span>
        </h4>

        <div className="space-y-2 md:space-y-10 py-4">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="w-7 h-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-lg md:text-2xl  font-semibold">
              +387 62/609/608
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="w-7 h-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-lg md:text-2xl  font-semibold">
              avdic_adnan@hotmail.com
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="w-7 h-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-lg md:text-2xl font-semibold">Sarajevo, BiH</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 mx-auto w-full "
        >
          <div className=" flex flex-row space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-full"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-full"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 md:py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
