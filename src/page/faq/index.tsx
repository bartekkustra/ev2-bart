import { Box as MuiBox, Typography, useTheme } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandModeIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const questions: { question: string, answer: string }[] = [
    {
      question: 'What is the best thing about Switzerland?',
      answer: 'I don\'t know, but the flag is a big plus. 🇨🇭',
    },
    {
      question: 'Did you hear about the mathematician who\'s afraid of negative numbers?',
      answer: 'He\'ll stop at nothing to avoid them. 🧮',
    },
    {
      question: 'Why do we tell actors to "break a leg?"',
      answer: 'Because every play has a cast. 🎭',
    },
    {
      question: 'Helvetica and Times New Roman walk into a bar.',
      answer: 'Get out of here! shouts the bartender. We don\'t serve your type. 🍻',
    },
  ]

  return (
    <MuiBox m='20px'>
      <Header title="FAQ" subtitle='The FAQ page'/>
      <MuiBox>
          {questions.map((question, index) => {
            return (
              <Accordion key={index} defaultExpanded={index === 0}>
                <AccordionSummary expandIcon={<ExpandModeIcon />}>
                  <Typography color={colors.greenAccent[500]} variant='h5'>
                    {question.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {question.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )
          })}
      </MuiBox>
    </MuiBox>
  )
}

export default FAQ
