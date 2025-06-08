function BtnSlide({ containerRef }) {
  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 340;
  };

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 340;
  };

  return (
    <>
      <button
        onClick={handleScrollLeft}
        className="absolute z-10 top-1/2 -left-0 lg:left-[70px]"
      >
        <i className="fas fa-arrow-left bg-[#2F3334] rounded-3xl p-3"></i>
      </button>
      <button
        onClick={handleScrollRight}
        className="absolute z-10 right-0 top-1/2"
      >
        <i className="fas fa-arrow-right bg-[#2F3334] rounded-3xl p-3"></i>
      </button>
    </>
  );
}

export default BtnSlide;
