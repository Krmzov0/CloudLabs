import { motion } from "framer-motion"
import { textContainer, textVariant2 } from '../utils/motion'

export const TypingText = ({ title }) => (

    <motion.p variants={textContainer} className={`thunderBlack text-[7.4rem] sm:text-[36rem] text-[#b5d43b]`}>
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))} 
    </motion.p>
)
