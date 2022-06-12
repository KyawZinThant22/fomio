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
    <div className="flex flex-col px-[10px] object-contain" key={item.alt}>
        <img
          src={item.img}
          className=" lg:w-[300px] lg:h-[200px] w-[200px] h-[140px] rounded-[10px]"
          alt={item.alt}
            onDragStart={handleDragStart}
        />
        <p></p>
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
        autoPlayInterval={1000}
        infinite
        disableButtonsControls
        disableDotsControls
        responsive={responsive}


      />
    </div>
  );
};

export default Slider;
