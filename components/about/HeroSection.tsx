import Image from "next/image"

const HeroSection= () => {
    return (
    <section
      className=" w-full max-w-[100%] max-h-[100vw]
    lg:max-h-[50vw] lg:h-[35vw] flex lg:flex-row flex-col items-center justify-between content-between"
    >
      {/* Content */}
      <div
        className="w-full lg:max-w-[70%]   
      flex flex-col justify-center items-center relative"
      >
        <div className="w-[100%] h-[60vw] top-[50%] translate-y-[-50%] lg:top-0 absolute left-0">
          <Image
            width={500}
            height={500}
            alt="Robot's Hand Light"
            src="/home-hero-text-light.png"
          ></Image>
        </div>
        <div className="w-full h-full absolute lg:mt-[5vw] mt-[25vw]  min-h-[70vw] px-6 lg:pl-28 lg:min-h-0 left-0 flex flex-col lg:items-start items-center justify-center gap-1">
         <h1 className="text-white bold-52 lg:text-start text-center">
            Welcome to the
            <br />
            <span className="text-gradient text-9xl lg:text-9xl">Future</span>
            <span className="text-gradient bold-52 lg:bold-64">!</span>
          </h1>
          <p className="text-gray-20 regular-12 lg:text-justify text-center px-12 lg:px-0">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>

      {/* Floadting Hand */}
      <div className="w-full max-h-[120vw] h-[1024px] lg:h-[35vw] relative -mt-[12vw]">
        <div className="relative top-0 w-full h-full lg:max-w-[100%]  ">
          <Image
            width={100}
            height={100}
            src="/robot-light.png"
            alt="Robot's Hand Light"
            className="border-2absolute bottom-[-25%] w-[180%] h-[130%] object-center object-cover"
          ></Image>
          <Image
            width={100}
            height={100}
            src="/robot-light-0.png"
            alt="Robot's Hand Light"
            className="absolute top-0 right-0 w-[120%] h-[120%] object-center object-cover"
          ></Image>
          <Image
            width={100}
            height={100}
            src="/robot-light-1.png"
            alt="Robot's Hand Light"
            className="absolute top-0 right-0 w-full h-full object-center object-cover"
          ></Image>
          <Image
            width={100}
            height={100}
            src="/robot-light-2.png"
            alt="Robot's Hand Light"
            className=" absolute top-0 right-0 w-full h-full object-center object-cover"
          ></Image>
          <Image
            width={100}
            height={100}
            src="/testmonials-light.png"
            alt="Robot's Hand Light"
            className=" absolute top-0 right-0 w-full h-[180%] hue-rotate-90 object-center object-cover"
          ></Image>
         <Image
            width={1080}
            height={1920}
            src="/about-hero-image.png"
            alt="Robot's Hand"
            className="absolute bottom-0 w-[70%] h-full lg:h-[120%] lg:-mb-[28%] -mb-[35%] lg:object-cover lg:object-top object-contain object-center lg:right-0 right-[10%]"
            ></Image>
        </div>
      </div>
    </section>

    )
}

export default HeroSection
