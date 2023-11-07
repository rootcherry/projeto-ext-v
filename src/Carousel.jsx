import CarouselItem from "./CarouselItem";
import items from "./../data.js";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="inner">
        {items.map((item) => {
          return <CarouselItem item={item} key={item.title} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
