import Hint from "./Hint";

export default function Hints() {
  return (
    <div className="flex md:ml-10 ">
      <Hint imgSrc="Apps.png" text="5+ Years of Coding" />
      <div className="ml-5">
        <Hint imgSrc="Monitor.png" text="Skilled at Computers" />
      </div>

      <div className="ml-5">
        <Hint imgSrc="People.png" text="Countless People Educated" />
      </div>
    </div>
  );
}
