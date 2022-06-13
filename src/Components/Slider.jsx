import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const Slider = ({ content , direction }) => {


  const responsive = {
    300: {
      items: 2,
    },
    512: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  };

const handleDragStart = (e) => e.preventDefault();
  const items = content?.map((item) => [
    <div className=" px-[10px] object-contain boz"  key={item.alt} >
        <img
          src={item.img}
          className=" lg:w-[300px] xl:w-[450px] sm:w-[300px] md:h-[150px] xl:h-[300px] lg:h-[200px] w-[200px] h-[140px] rounded-[10px]"
          alt={item.alt}
          onDragStart={handleDragStart}
        />
    </div>
  ]);

//   console.log(items);
  return (
    <div className="mt-8">
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        autoPlayDirection={direction}
        autoPlayInterval={1500}
        infinite
        disableButtonsControls
        disableDotsControls
        responsive={responsive}


      />
    </div>
  );
};

export default Slider;
