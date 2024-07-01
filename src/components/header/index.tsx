import { Box, Typography, Link } from "@mui/material";
import { Link as ScrollLink } from 'react-scroll';

import Logo from '../../assets/logo.svg';
import { links } from "../../utils/navigation";
import { Fragment } from "react/jsx-runtime";

interface HeaderProps {
  isSmallScreen: boolean
}

export const Header = ({ isSmallScreen }: HeaderProps) => {
  return (
    <Box
      display='flex'
      flexDirection={isSmallScreen ? 'column' : 'row'}
      width='100%'
      height={isSmallScreen ? 'auto' : '8rem'}
      alignItems={isSmallScreen ? 'center' : 'stretch'}
      py={2}
      bgcolor={'rgba(0, 0, 0, 0.3)'}
    >
      <Box display='flex' justifyContent='center'>
        <img
          src={Logo}
          style={{ width: isSmallScreen ? '70%' : '100%', height: isSmallScreen ? 'auto' : '100%' }}
        />
      </Box>
      <Box display="flex" px={2} flex={0.5} gap={4} alignItems="center" justifyContent={isSmallScreen ? 'center' : 'flex-end'}>
        {links.map((item, index) => (
          <Fragment key={index}>
            {index === 3 || index === 4 ? (
              <Link
                href={item.link}
                target="_blank"
                underline='none'
                color='HighlightText'
                sx={{ '&:hover': { zoom: '1.01', transition: '0.4s' } }}
              >
                <Typography sx={{ '&:hover': { zoom: 1.1, transition: '0.4s' } }}>
                  {item.name}
                </Typography>
              </Link>
            ) : (
              <ScrollLink
                key={index}
                to={item.link}
                smooth={true}
                style={{ cursor: "pointer", color: "white" }}
                duration={500}
              >
                <Typography sx={{ '&:hover': { zoom: 1.1, transition: '0.4s' } }}>
                  {item.name}
                </Typography>
              </ScrollLink>
            )}
          </Fragment>
        ))}
      </Box>
    </Box>
  )
}