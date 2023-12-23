import { CardComponent } from "../../../lib/data";

const Card = () => {
  return (
    <>
      <div className="text-white text-center">
        <p className=" uppercase mt-12 tracking-[3px] text-[#d1eb5b] opacity-60 mb-2">
          Let's get started
        </p>
        <p className=" font-bold text-white/90 text-3xl mb-4">
          How would you like to add your investments?
        </p>
        <p className=" text-white/60 mb-12">
          Need help? Read our Guidelines here:{" "}
          <span className="underline">
            <a href="#" className="text-[#322d97] font-bold ml-1">
              Getting started guidelines
            </a>
          </span>
        </p>
        {/* crads */}
        <div className="flex justify-center text-left mx-10 gap-3 relative">
          {CardComponent.map((item, index) => (
            <div
              key={index}
              className="border border-[#1a2557] rounded-2xl p-5 bg-[#1a2557] w-[23rem] max-h-max"
            >
              <p className="font-bold text-2xl mb-2 text-[#42a2e6]">
                {item.icon}
              </p>
              <p className="font-bold tracking-wide mb-2">{item.title}</p>
              <p className=" text-white/70 mb-16">{item.text}</p>
              <button className="flex justify-center items-center gap-1 p-3 cursor-pointer text-center absolute bottom-2 border-[2px] border-[#3f4bc6] rounded-md w-[20.5rem] mb-2 bg-[#141f4d] 
              text-[#3f4bc6] font-bold">
                {item.button}
                {item.buttonIcon}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
