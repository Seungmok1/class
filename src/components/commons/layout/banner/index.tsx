import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <img src="/image/winter.jpg" />
      <img src="/image/spring.jpg" />
      <img src="/image/summer.jpg" />
      <img src="/image/fall.jpg" />
    </Slider>
  );
}
