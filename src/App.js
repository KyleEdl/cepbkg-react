import "./App.css";
import { motion } from "framer-motion";
import { animate } from "framer-motion/dom";
import Carousel from "./components/Carousel";
import Main from "./components/Main";
import Lens from "./components/Lens";

function App() {
  return (
    <div className="App">
      <Main />
      <div className="content">
        {/* <Carousel /> */}
        <div className="lens">
          <motion.div
            className="lens"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Lens />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
