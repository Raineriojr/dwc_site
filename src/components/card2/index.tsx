import { Box, Card } from "@mui/material";

import { Title } from "../title";

interface Card2ComponentProps {
  title: string;
  content: string;
  icon: string;
  minHeight: number | string;
}

export const Card2Component = ({ title, content, icon, minHeight }: Card2ComponentProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flex: 1,
        width: '100%',
        minHeight,
        bgcolor: 'rgba(0, 0, 0, 0.2)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          scale: '1.05',
          transition: '0.4s'
        },
      }}
    >
      <Box display='flex' flex={1} flexDirection='column' alignItems='flex-start' p={3} >

        <Box width={'100%'} height={70}>
          <img
            src={icon}
            style={{ margin: 0, height: '100%' }}
          />
        </Box>

        <Box display='flex' flexDirection='column' gap={1} mt={2}>
          <Title fontSize={20} color='#f5f5f5' fontWeight='bold'>
            {title}
          </Title>
          <Title subtitle color="#e5e5e5" fontSize={15} textAlign='justify'>
            {content}
          </Title>
        </Box>
      </Box>
    </Card>
  )
}