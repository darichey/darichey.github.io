import NextImage, { ImageLoaderProps, ImageProps } from "next/image";

const customLoader = ({ src }: ImageLoaderProps) => {
  return src;
};

const Image = (props: ImageProps) => {
  return (
    <NextImage
      {...props}
      loader={customLoader}
      unoptimized
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
};

export default Image;
