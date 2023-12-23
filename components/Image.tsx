import NextImage, { type ImageProps } from "next/image";

export default function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
}
