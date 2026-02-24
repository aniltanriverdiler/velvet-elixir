import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <h1 className="text-3xl text-blue-500 font-bold">Hello World!</h1>
  );
};

export default App;
