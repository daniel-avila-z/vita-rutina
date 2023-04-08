'use client'
import '../styles/Escritura.css'
import React, { useState, useEffect } from 'react'

export default function EfectoEscritura ({ words }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [letterIndex, setLetterIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(words[0])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (letterIndex === currentWord.length) {
        // si se ha escrito toda la palabra actual, cambia a la siguiente palabra
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        setCurrentWord(words[wordIndex])
        setLetterIndex(0)
      } else {
        // añade la siguiente letra a la palabra actual
        setLetterIndex((prevIndex) => prevIndex + 1)
      }
    }, 500)
    // limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId)
  }, [letterIndex, currentWord, words, wordIndex])

  return (
    <div className="typing-effect">
      <span className="word">{currentWord.slice(0, letterIndex)}</span>
      <span className="cursor" />
    </div>
  )
}
