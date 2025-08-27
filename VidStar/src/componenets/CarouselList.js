import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CarouselListItem from "./CarouselListItem"


const CarouselList = ({data,dimen}) => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1400 },
          items: 8,
        },
        bigTablet:{
          breakpoint: { max: 1400, min: 1170 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1170, min: 960 },
          items: 5
        },
        smallTablet:{
          breakpoint: { max: 960, min: 770 },
          items: 4
        },
        bigMobile:{
          breakpoint: { max: 770, min: 610 },
          items: 3
        },
        bigsmallMobile:{
          breakpoint: { max: 610, min: 520 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 410, min: 0 },
          items: 1,
        },
      };
      const responsive2 = {
        desktop: {
          breakpoint: { max: 3000, min: 1400 },
          items: 5,
        },
        bigTablet:{
          breakpoint: { max: 1400, min: 1170 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1170, min: 900 },
          items: 3
        },
        bigMobile:{
          breakpoint: { max: 900, min: 610 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 610, min: 0 },
          items: 1,
        }
      };

    return (
        <Carousel
        ssr
        partialVisbile
        itemClass="image-item"
        responsive={dimen==="listitem"?responsive:responsive2}
        >
        {data.slice(0, data.length).map(image => {
            return (
                <CarouselListItem key={image.id} data={image} dimen={dimen} />
            );
        })}
        </Carousel>
    )
}

export default CarouselList

