import React from "react";
import Header from "../Components/Header";
import QuestionCard from "../Components/QuestionCard";
import { QNA } from "../data";



const Fquestions = () => {
  return (
    <div className=" container mx-auto" id="questions">

      <Header
        title="Frequently Asked Questions"
        subTitle="If you are not sure whether Fomio is suitable for you or not, do not worry. We are here to explain everything you might want to know."
        width={"lg:w-[500px]  mx-auto"}
      />

      <div className="mt-12 flex flex-col justify-center  items-center" >
          {QNA.map((card)=>(
              <QuestionCard card={card} key={card.id} />
          ))}
      </div>

    </div>
  );
};

export default Fquestions;
