import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";

import { Title } from "../title";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ContactProps {
  title: string;
  content: string;
  icon: IconProp;
}

export const Contact = ({ title, content, icon }: ContactProps) => {
  return (
    <Box display='flex' flexDirection='column' width='100%'>
      <Box display='flex' alignItems='center' gap={1} width='100%'>
        <FontAwesomeIcon size='lg' style={{ margin: 0 }} color='HighlightText' icon={icon} />
        <Title fontSize={24} fontWeight='100'>
          {title}
        </Title>
      </Box>
      <Title subtitle color='#f5f5f5'>
        {content}
      </Title>
    </Box>

  )
}