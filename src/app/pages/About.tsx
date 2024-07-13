import Hints from "../components/Hints";

export default function About() {
  return (
    <div className="bg-backgroundDiv2 h-fit pb-14 w-screen">
      <h1 className="text-5xl text-offwhite lg:mx-14 max-md:text-center md:mb-8 pt-5 max-md:mx-auto">About Me</h1>
      <div className="flex flex-row justify-center text-offwhite my-12">
       <div className="flex max-md:flex-col">
        <div className="flex flex-col items-center">
          
            <div className="px-2">
                <Hints />
            </div>

            <div className="mt-8">
                <p className="font-light max-w-96 px-2">
                As an accomplished programmer, I derive immense joy from conquering intricate challenges and sharing the wonders of computer science. With 5 years of coding expertise and a journey that began with learning C++ at the age of 9, my fascination with computers sparked at 5 years old, igniting a relentless drive to unravel their endless possibilities and inspire others to do the same.
                </p>
            </div>

        </div>
     
        <div>
            <img src="computer.jpg" className="lg:max-w-96 max-md:hidden sm:max-w-40 rounded-2xl md:ml-52 max-md:my-11"></img>
        </div>
        </div>
      </div>
    </div>
  );
}
