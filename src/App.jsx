import { useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const initialItems = [
    { name: "Wood Log", inputs: [], outputs: ["Wood Plank"] },
    {
      name: "Wood Plank",
      inputs: ["Wood Log"],
      outputs: ["Wooden Stick", "Wooden Board"],
    },
    { name: "Wooden Stick", inputs: ["Wood Plank"], outputs: ["Wooden Sword"] },
    {
      name: "Wooden Board",
      inputs: ["Wood Plank"],
      outputs: ["Wooden Shield"],
    },
    { name: "Stone", inputs: [], outputs: ["Stone Block"] },
    {
      name: "Stone Block",
      inputs: ["Stone"],
      outputs: ["Stone Bricks", "Stone Slab"],
    },
    { name: "Stone Bricks", inputs: ["Stone Block"], outputs: ["Stone Sword"] },
    { name: "Stone Slab", inputs: ["Stone Block"], outputs: ["Stone Shield"] },
    { name: "Iron Ingot", inputs: [], outputs: ["Iron Sword"] },
    { name: "Iron Sword", inputs: ["Iron Ingot"], outputs: ["Iron Shield"] },
    { name: "Gold Ingot", inputs: [], outputs: ["Golden Sword"] },
    {
      name: "Golden Sword",
      inputs: ["Gold Ingot"],
      outputs: ["Golden Shield"],
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [showInsAndOuts, setShowInsAndOuts] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <motion.div
        className="item-container"
        style={{ overflowX: "hidden", minWidth: "90vw", minHeight: "70vw" }}
      >
        <AnimatePresence initial={false}>
          {items.map((item) => (
            <motion.div
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
                if (items.length > 1) {
                  setItems([item]);
                  setSelectedItem(item);
                } else {
                  setItems(initialItems);
                  setSelectedItem(null);
                }
              }}
              onLayoutAnimationComplete={(def) => {
                if (selectedItem) {
                  setShowInsAndOuts(true);
                }
              }}
              onLayoutAnimationStart={(def) => {
                if (!selectedItem) {
                  setShowInsAndOuts(false);
                }
              }}
              style={{ display: "flex", alignItems: "center" }}
            >
              {showInsAndOuts && (
                <motion.div
                  animate={{ x: -200 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  {item.inputs.map((input) => (
                    <button id={input}>{input}</button>
                  ))}
                </motion.div>
              )}
              <motion.div layout>
                <motion.button>{item.name}</motion.button>
              </motion.div>
              {showInsAndOuts && (
                <motion.div
                  animate={{ x: 200 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  {item.outputs.map((input) => (
                    <button id={input}>{input}</button>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default App;
