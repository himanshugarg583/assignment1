import { motion } from 'framer-motion'

export function SplitText({ text }: { text: string }) {
  const words = text.split(' ')

  return (
    <span aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block pr-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.04, duration: 0.6, ease: 'easeOut' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
