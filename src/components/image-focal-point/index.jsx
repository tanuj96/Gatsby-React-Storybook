import React, { useMemo, useState } from 'react';
import { FocusedImage } from 'image-focus';

const ImageWithFocalCoords = (props) => {
  const {
    poiCoordinates, src, description
  } = props;
  const [image, setRef] = useState(null);

  useMemo(() => {
    if (image) {
      return new FocusedImage(image, {
        updateOnContainerResize: true,
        focus: poiCoordinates,
        debounceTime: 3,
        updateOnWindowResize: true
      });
    }
    return undefined;
  }, [poiCoordinates, image]);

  return <img alt={description} ref={setRef} src={src} />;
};

export default function ImageWithFocalPoint({ data }) {
  const {
    height: imgHeight,
    width: imgWidth
  } = data.image.file.details.image;

  const {
    x: focalX,
    y: focalY
  } = data.focalPoint.focalPoint;

  const calculateCoordinates = (width, height, imgFocalX, imgFocalY) => ({
    x: ((imgFocalX / width - 0.5) * 2),
    y: ((imgFocalY / height - 0.5) * -2)
  });

  return (
    <div className="focalHeight">
      <ImageWithFocalCoords
        src={data.image.file.url}
        poiCoordinates={calculateCoordinates(imgWidth, imgHeight, focalX, focalY)}
        description={data?.image?.description}
        alt="focal point image"
      />
    </div>
  );
}
