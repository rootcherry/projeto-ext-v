const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item">
      <div></div>
      <img className="carousel-img" src={item.image} />
      <div className="carousel-item-text">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
