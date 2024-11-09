import { quote } from "../assets"

function FeedbackCard({content, name, title}) {
  return (
    <div className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[340px] md:mr-10 sm:mr-5 mr-0 my-5 cursor-pointer feedback-card`}>
      <span>
        <img src={quote} alt="quote" className={`w-[42px] h-[27px] object-contain`} />
        <p className={`font-montserrat font-normal text-[18px] leading-[32px] text-white my-10`}>
          {content}
        </p>
      </span>

      <div className="flex flex-row">
        <div className="w-[50px] h-[50px] flex justify-center items-center bg-dark-gradient rounded-full text-[22px] font-semibold font-montserrat">
          <p className="text-gradient text-[22px] font-semibold font-montserrat">
            {name.split(' ')[0][0] + name.split(' ')[1][0]}
          </p>
        </div>
        <div className="flex flex-col ml-4">
          <h4 className="font-montserrat font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite">{title}</p>
        </div>
      </div>

    </div>
  )
}

export default FeedbackCard