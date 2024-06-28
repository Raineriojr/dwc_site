import { Box, Button, Paper, TextField } from "@mui/material"
import { Title } from "../title"
import { TextArea } from "../textarea"

export const ContactForm = () => {
  return (
    <Box component={Paper} display='flex' flexDirection='column' alignItems='center' p={4} gap={4}>
      <Title fontSize={28} color='#0494ac' textAlign='center'>
        Formulário de Contato
      </Title>
      <TextField
        id="name"
        variant="outlined"
        placeholder='Insira seu nome completo'
        fullWidth
      />
      <TextField
        id="email"
        variant="outlined"
        placeholder='Informe seu email'
        fullWidth
        type='email'
      />
      <TextArea
        id='message'
        placeholder='Sua mensagem'
        style={{ height: 150, maxHeight: 150 }}
      />
      <Button variant='contained' sx={{ bgcolor: '#0494ac', alignSelf: 'flex-end' }}>
        Enviar
      </Button>
    </Box>
  )
}