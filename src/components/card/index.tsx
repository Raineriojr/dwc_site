import { Box, Card, CardContent } from "@mui/material";

import { Title } from "../title";

interface CardComponentProps {
  title: string;
  content: string;
  icon: string;
  minHeight: number | string;
}

export const CardComponent = ({ title, content, icon, minHeight }: CardComponentProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flex: 1,
        width: '100%',
        minHeight,
        bgcolor: '#00000050',
        boxShadow: '2px 2px 5px black',
        '&:hover': {
          scale: '1.1',
          transition: '0.4s'
        },
      }}
    >
      <CardContent>
        <Box display='flex' flexDirection='column' alignItems='center' gap={4}>

          <Box display='flex' flexDirection='column' alignItems='center' gap={1} mt={2}>
            <Box width={'100%'} height={70} display='flex' alignItems='center'>
              <img
                src={icon}
                style={{ height: '100%' }}
              />
            </Box>
            <Title fontSize={24} color='#f5f5f5' fontWeight='400'>
              {title}
            </Title>
          </Box>
          <Title subtitle textAlign='center' color="#e5e5e5">
            {content}
          </Title>
        </Box>
      </CardContent>
    </Card>
  )
}