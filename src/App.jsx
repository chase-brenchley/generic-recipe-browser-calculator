import { useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const initialItems = [
    { name: "Item 1", inputs: ["Item 0"] },
    { name: "Item 2", inputs: ["Item 1"] },
    { name: "Item 3", inputs: ["Item 2"] },
    { name: "Item 4", inputs: ["Item 3"] },
    { name: "Item 5", inputs: ["Item 4"] },
    { name: "Item 6", inputs: ["Item 5"] },
    { name: "Item 7", inputs: ["Item 6"] },
    { name: "Item 8", inputs: ["Item 7"] },
    { name: "Item 9", inputs: ["Item 8"] },
    { name: "Item 10", inputs: ["Item 9"] },
    { name: "Item 11", inputs: ["Item 10"] },
    { name: "Item 12", inputs: ["Item 11"] },
  ];

  const [items, setItems] = useState(initialItems);

  return (
    <>
      <motion.div
        className="item-container"
        style={{ overflowX: "hidden", minWidth: "90vw", minHeight: "70vw" }}
      >
        <AnimatePresence initial={false}>
          {items.map((item) => (
            <motion.button
              layout
              initial={{
                opacity: 0,
                x: Math.random() > 0.5 ? 100 : -100,
                y: Math.random() > 0.5 ? 100 : -100,
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              key={item.name}
              exit={{
                opacity: 0,
                x: Math.random() > 0.5 ? 100 : -100,
                y: Math.random() > 0.5 ? 100 : -100,
                transition: { duration: 0.1 },
              }}
              onClick={() => {
                if (items.length > 1) setItems([item]);
                else setItems(initialItems);
              }}
            >
              {item.name}
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default App;
