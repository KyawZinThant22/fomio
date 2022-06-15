import { feedback } from "../data";
import dot from "../assets/dot.png";
const Feedback = () => {
  return (
    <div className="h-screen mt-28 flex flex-col lg:flex-row  lg:w-[1300px] container sm:-w-[300px] xs-w-[361px] mx-auto relative ">
        {/* //left site */}
      <div>
        <h1 className="text-white lg:text-5xl   xl:text-6xl xs:text-2xl xs:w-[18rem] xs:text-center lg:text-start xs:mb-8 xs:mx-auto font-bold xl:w-[39rem] lg:w-[30rem] leading-[80px] lg:mb-6">
          {feedback.title}
        </h1>
        <p className="text-white hidden lg:flex text-xl  leading-[30px] lg:w-[23rem] lg:mb-6">
          {feedback.subtitle}
        </p>

        <div className="lg:flex  items-center xs:justify-center lg:justify-start space-x-8 hidden ">
          <div className="flex items-center  ">
            {feedback.country.map((flag) => (
              <img
                src={flag}
                key={flag}
                className="w-[60px]  -mr-[23px] border-solid border-white border-4 rounded-full"
              />
            ))}
          </div>
          <p className="text-white text-xl">+25 Countries</p>
        </div>
        <img
          src={dot}
          className="absolute  xs:w-[8rem] lg:w-[187px] sm:left-[75px] xs:-top-[64px] xs:-left-[12px] lg:-top-[77px] lg:-left-[105px]"
          alt=""
        />
      </div>
      {/* //rigth side */}
      <div className="relative" >
        <div className="flex items-center space-x-6 ">
          <img src={feedback.adrian.img} className="profile " alt="" />
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col bg-white p-6 sm:text-[15px] lg:text-[20px] text-secondaryBlue rounded-tl-lg leading-[30px] rounded-r-lg ">
              <p>{feedback.adrian.text}</p>
            </div>
            <p className="text-secondaryBlue text-sm">{feedback.adrian.time}</p>
          </div>
        </div>
        
        <div className="flex flex-row-reverse items-center ml-[6rem] my-10  ">
          <img src={feedback.lura.img} className="profile ml-6 " alt="" />
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col bg-primary px-[2rem] py-3  sm:text-[15px] lg:text-[20px] text-white xs:w-[16rem] md:w-[19rem] leading-[30px] rounded-tr-lg rounded-l-lg ">
              <p>{feedback.lura.text}</p>
            </div>
            <p className="text-secondaryBlue text-sm text-end">{feedback.lura.time}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 ">
          <img src={feedback.adrian.img} className="profile " alt="" />
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col bg-white px-[2rem] py-3 sm:text-[15px] lg:text-[20px] xs:w-[17rem] md:w-[19rem] text-secondaryBlue rounded-tl-lg leading-[30px] rounded-r-lg ">
              <p>{feedback.adrian.text2}</p>
            </div>
            <p className="text-secondaryBlue text-sm">{feedback.adrian.time2}</p>
          </div>
        </div>
        <img src={dot} className="absolute xs:top-[20rem]  md:top-[20rem] md:left-[30rem] xs:left-[16rem] lg:w-[187px] lg:left-[25rem] xs:w-[8rem]  sm:left-[21rem] sm:top-[18rem] lg:top-[22rem]" alt="" />
      </div>

        <div className="xs:flex mt-12 items-center justify-center w-[361px] space-x-8 lg:hidden ">
            <h1 className="text-white text-xl xs:text-sm">We Support</h1>
          <div className="flex items-center  ">
            {feedback.country.map((flag) => (
              <img
                src={flag}
                key={flag}
                className="md:w-[50px] xs:w-[40px] -mr-[18px] border-solid border-white border-4 rounded-full"
              />
            ))}
          </div>
          <p className="text-white text-xl xs:text-lg">+25 Countries</p>
        </div>


    </div>
  );
};

export default Feedback;
