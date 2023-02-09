import NextImage, { ImageLoaderProps, ImageProps } from "next/image";

const customLoader = ({ src }: ImageLoaderProps) => {
  return src;
};

const Image = (props: ImageProps) => {
  return <NextImage {...props} loader={customLoader} unoptimized />;
};

export default Image;
