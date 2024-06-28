import { Box, Divider, Link, Typography, Grid } from "@mui/material";
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../../assets/logo.svg';
import { Title } from "../title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "../../utils/navigation";
import { socialItems } from "../../utils/social";

const year = new Date().getFullYear().toString();

interface FooterProps {
  isSmallScreen: boolean;
}

export const Footer = ({ isSmallScreen }: FooterProps) => {
  return (
    <Box display='flex' width="100%">
      <Grid container spacing={4} justifyContent='center'>
        <Grid item xs={12} md={4} display="flex" justifyContent={isSmallScreen ? 'center' : 'flex-start'}>
          <img
            src={Logo}
            style={{
              width: isSmallScreen ? '50%' : '80%',
              height: isSmallScreen ? 'auto' : '100%',
              margin: 0,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display='flex' flexDirection='column'>
            <Title fontSize={20}>Navegação</Title>
            <Divider sx={{ bgcolor: 'white', mb: 1 }} />

            {links.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.link}
                smooth={true}
                style={{ textAlign: 'left', width: '100%', cursor: "pointer", color: "white" }}
                duration={500}
              >
                <Typography sx={{ '&:hover': { zoom: 1.1 } }}>
                  {item.name}
                </Typography>
              </ScrollLink>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display='flex' flexDirection='column'>
            <Title fontSize={20}>Redes Sociais</Title>
            <Divider sx={{ bgcolor: 'white', mb: 1 }} />

            {socialItems.map((item, index) => (
              <Link
                key={index}
                display='flex'
                href={item.link}
                target="_blank"
                underline='none'
                sx={{ '&:hover': { zoom: '1.1', transition: '0.4s' } }}
              >
                <FontAwesomeIcon style={{ margin: 0 }} size='xl' color='HighlightText' icon={item.icon} />
                <Typography color='HighlightText' ml={1}>
                  {item.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display='flex' flexDirection='column' alignItems='center' mt={4}>
            <Title subtitle fontSize={14} fontWeight='300'>
              © Desenvolvido por DWC Consult,
            </Title>
            <Title subtitle fontSize={14} fontWeight='300'>
              {year + '.'}
            </Title>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
