import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
  FaSpinner,
} from "react-icons/fa";
import { BsFillPauseFill } from "react-icons/bs";

const Card = ({ quote, handleClick, loading }) => {
  return (
    <div className="flex flex-col bg-[#313a49] rounded-xl p-16 text-center gap-6 relative max-w-xs sm:max-w-lg mt-20 sm:mt-0">
      {!loading ? (
        <>
          <p className="uppercase text-[#53ffab] text-sm tracking-widest font-manrope">
            {quote.author ? `${quote.author} -` : `someone -`}
          </p>
          <h1 className="text-slate-300 text-2xl font-bold">{`"${quote.text}"`}</h1>
          <div className="flex items-center justify-center gap-2 font-bold">
            <hr className="border-t border-gray-500 flex-grow" />
            <BsFillPauseFill className="text-slate-300 text-3xl font-bold" />
            <hr className="border-t border-gray-500 flex-grow" />
          </div>
          <button
            aria-label="Generate Quote"
            onClick={handleClick}
            className="absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2 p-5 sm:p-4 rounded-full bg-[#53ffab] hover:shadow-[0px_0px_40px_2px_#53ffab] active:shadow-[0px_0px_40px_2px_#53ffab] focus:shadow-[0px_0px_40px_2px_#53ffab] transition-shadow ease-in focus:outline-none"
          >
            <FaDiceFive className="w-8 h-8 pointer-events-none" />
          </button>
        </>
      ) : (
        <div className="flex text-slate-300 items-center justify-center gap-2 font-bold text-xl">
          <FaSpinner className="animate-spin w-12 h-12" />
          <p>Loading</p>
        </div>
      )}
    </div>
  );
};

export default Card;
