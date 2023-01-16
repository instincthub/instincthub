import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const FAQAnswers = ({answer}) => {
  return (
    <ReactMarkdown>{answer}</ReactMarkdown>
  )
}

export default FAQAnswers