import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Image src="/image.png" alt="Image" width={500} height={500} />
    </div>
  );
}
