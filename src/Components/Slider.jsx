import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const Slider = ({ content , direction }) => {


  const responsive = {
    300: {
      items: 1,
    },
    512: {
      items: 2,
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
          className=" lg:w-[300px] xl:w-[500px] sm:w-[400px] md:h-[250px] xl:h-[300px] lg:h-[200px] w-[450px] h-[250px] rounded-[10px]"
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
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
        disableDotsControls
        responsive={responsive}


      />
    </div>
  );
};

export default Slider;
