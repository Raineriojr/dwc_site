import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Link } from "@mui/material";

import { socialItems } from "../../utils/social";

export const Social = () => {
  return (
    <Box display='flex' justifyContent='center' gap={2}>
      {socialItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          target="_blank"
          underline='none'
          sx={{ '&:hover': { zoom: '1.5', transition: '0.4s' } }}
        >
          <FontAwesomeIcon size='xl' color='HighlightText' icon={item.icon} />
        </Link>
      ))}
    </Box>
  )
}