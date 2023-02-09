import NextImage, { ImageLoaderProps, ImageProps } from "next/image";

const customLoader = ({ src }: ImageLoaderProps) => {
  return src;
};

export default function Image(props: ImageProps) {
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
}
