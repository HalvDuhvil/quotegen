import { FaDiceFive, FaSpinner } from "react-icons/fa";

const Card = ({ quote, handleClick, loading }) => {
  return (
    <div className="flex flex-col bg-[#313a49] rounded-lg p-16 text-center gap-6 relative max-w-xs sm:max-w-md mt-20 sm:mt-0">
      {!loading ? (
        <>
          <p className="uppercase text-[#53ffab] text-sm sm:text-xs tracking-widest font-manrope">
            {quote.author ? `${quote.author} -` : `someone -`}
          </p>
          <p className="text-slate-300 text-2xl sm:text-xl font-bold">{`"${quote.text}"`}</p>
          <div className="flex items-center justify-center gap-2 font-bold">
            <hr className="border-t border-gray-500 flex-grow" />
            <p className="text-slate-300 text-3xl sm:text-xl font-bold">
              &#x2223;&#x2223;
            </p>
            <hr className="border-t border-gray-500 flex-grow" />
          </div>
          <button
            onClick={handleClick}
            className="absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2 p-5 sm:p-4 rounded-full bg-[#53ffab] hover:shadow-[0px_0px_40px_2px_#53ffab] active:shadow-[0px_0px_40px_2px_#53ffab] focus:shadow-[0px_0px_40px_2px_#53ffab] transition-shadow ease-in focus:outline-none"
          >
            <FaDiceFive className="w-7 h-7 sm:w-5 sm:h-5 pointer-events-none" />
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
