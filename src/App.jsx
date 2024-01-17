import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AnimatePresence, motion } from 'framer-motion'

const AnimatedButton = ({  children }) => {
  const [isVisible, setVisible] = useState(1)

  return <AnimatePresence>
    {isVisible && (
      <motion.button initial={{ opacity: 1 }} exit={{ opacity: 0, x: 100 }} onClick={() => setVisible(!isVisible)} transition={{ type: 'spring' }} >
        {children}
      </motion.button>
    )}
  </AnimatePresence>
}

function App() {
  const [count, setCount] = useState(0)
  const initialItems = [
    { name: 'Item 1', inputs: ['Item 0'] },
    { name: 'Item 2', inputs: ['Item 1'] },
    { name: 'Item 3', inputs: ['Item 2'] },
    { name: 'Item 4', inputs: ['Item 3'] },
    { name: 'Item 5', inputs: ['Item 4'] },
    { name: 'Item 6', inputs: ['Item 5'] },
    { name: 'Item 7', inputs: ['Item 6'] },
    { name: 'Item 8', inputs: ['Item 7'] },
    { name: 'Item 9', inputs: ['Item 8'] },
    { name: 'Item 10', inputs: ['Item 9'] },
    { name: 'Item 11', inputs: ['Item 10'] },
    { name: 'Item 12', inputs: ['Item 11'] },
  ]

  const [items, setItems] = useState(initialItems)

  return (
    <>
      <motion.div className='item-container' style={{ overflowX: 'hidden', minWidth: '90vw', minHeight: '70vw' }}>
        <AnimatePresence>
          {items.map((item) => (
            <motion.button layout key={item.name} exit={{ opacity: 0, x: Math.random() > .5 ? 100 : -100, y: Math.random() > .5 ? 100 : -100, transition: { duration: 0.1 } }} onClick={() => {
              setItems([item])
            }}>{item.name}</motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default App
