import { Avatar, Box, Card } from "@mui/material";

import { Title } from "../title";
import { ForwardedRef, forwardRef } from "react";

interface Card3ComponentProps {
  title: string;
  content: string;
  icon: string;
  maxWidth?: number | string;
}

export const Card3Component = forwardRef((
  { title, content, icon, maxWidth }: Card3ComponentProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <Card
      ref={ref}
      sx={{
        display: 'flex',
        bgcolor: 'rgba(255, 255, 255, 0.1)',
        maxWidth: maxWidth || 390,
        m: 0,
        '&:hover': {
          scale: '1.01',
          transition: '0.4s'

        },
      }}
    >
      <Box display='flex' alignItems='center' p={2} gap={2}>

        <Avatar src={icon} sx={{ m: 0, width: 70, height: 70 }} />

        <Box display='flex' flexDirection='column'>
          <Title fontSize={20} color='HighlightText' fontWeight='bold'>
            {title}
          </Title>

          <Title subtitle fontSize={15} color='HighlightText'>
            {content}
          </Title>
        </Box>
      </Box>
    </Card >
  )
})