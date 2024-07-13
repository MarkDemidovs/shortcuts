export default function Side1() {
    // <h2 className="text-offwhite p-4 md:p-8">Hello, I'm Mark.</h2>
   // <p className="pl-40">At the age of 14, I am a Full-Stack Software Developer residing in Latvia. I am deeply passionate about sharing my knowledge and inspiring others to explore the world of coding.</p>
   //<button className="bg-purplebtn ml-40 rounded-3xl w-80 h-12">My Experience</button>
    return (
        <div className="text-offwhite flex flex-col md:items-center">
            <h1 className="text-6xl md:ml-11">Hello, I'm Mark.</h1>
            <p className="font-thin text-xl w-fit mt-6 md:max-w-96 max-md:min-w-10">At the age of 14, I'm a tech / computer genius and a Full-Stack Software Developer residing in Latvia. I am deeply passionate about sharing my knowledge and inspiring others to explore the world of coding.</p>
            <button className="bg-purplebtn rounded-3xl max-md:min-w-52 md:min-w-96 h-12 mt-10 max-md:mx-4">My Skills</button>
        </div>
    );
}