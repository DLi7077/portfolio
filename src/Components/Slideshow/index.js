import Carousel from "react-material-ui-carousel";

export default function Slideshow(props) {
  if (!props.slides) return <></>;
  if (props.slides.length < 2)
    return <img src={props.slides[0]} alt="slides" style={{ width: "100%" }} />;
  return (
    <Carousel navButtonsAlwaysVisible height={400}>
      {props.slides.map((slide, idx) => {
        return (
          <img key={idx} src={slide} alt="slide" style={{ width: "100%" }} />
        );
      })}
    </Carousel>
  );
}
