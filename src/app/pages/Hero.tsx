import Side1 from "../components/Side1";
import Side2 from "../components/Side2";


export default function Hero() {
  return (
    <div className="bg-background1 min-h-screen flex w-screen">
      <div className=" max-w-5xl md:mx-auto max-md:flex-col  md:flex md:items-center mx-7">
        <Side1 />
        <Side2 />
      </div>
    </div>
  );
}
