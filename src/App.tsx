import {
  Box,
  Fade,
  Grid,
  Grow,
  Slide,
  useMediaQuery,
  useTheme
} from '@mui/material';

import {
  Header,
  Title,
  Carousel,
  Footer,
  Social,
  ContactForm,
  Contact,
  CardComponent,
  Card2Component,
  Card3Component
} from './components'

import Logo from './assets/logo2.png';
import BackgroundImage from './assets/bg.jpg';
import BackgroundImage2 from './assets/bg2.jpg';

import { cards, companyCards, contacts, specialties } from './data';
import { useInView } from './hooks/UseInView';
import { headerStyle, imageStyle, blurImageStyle } from './style';

function App() {
  const theme = useTheme();
  const missionView = useInView({ threshold: 0.1 });
  const cardsView = useInView({ threshold: 0.1 });
  const titleView = useInView({ threshold: 0.1 });

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid container style={{ overflowX: 'hidden', width: '100%' }}>
      {/* Início Header */}
      <Grid
        id='header'
        container
        height={isLgScreen ? '100%' : '100vh'}
        pb={isLgScreen ? 4 : 2}
        sx={headerStyle(BackgroundImage)}
      >
        <Header isSmallScreen={isSmallScreen} />

        <Grid container px={isSmallScreen ? 6 : 16} mt={4}>
          <Grid item xs={12} md={12}>
            <Carousel isSmallScreen={isSmallScreen} />
          </Grid>
        </Grid>
      </Grid>
      {/* Fim Header */}


      {/* Início sobre */}
      <Grid
        container
        id='about'
        py={8}
        px={isSmallScreen ? 6 : 16}
        sx={imageStyle(BackgroundImage2)}
      >
        <Box display={'flex'} flex={1} justifyContent='center'>
          <Title color='#0494ac' fontWeight='bold'>
            Sobre nós
          </Title>
        </Box>
        <Grid container py={4} columnSpacing={4}>
          <Grid item>
            <Title subtitle color='InfoText' fontSize={18} fontFamily='Tinos' mb={4} textAlign='justify'>
              Somos uma Consultoria especializada no desenvolvimento de soluções específicas Web e Mobile, Modelagem de Processos, Implementação de Sistemas de Gestão Empresarial e Desenvolvimento de soluções específicas para automação  dos processos.
              Nossa equipe é formada por profissionais com vasta experiência na área de Sistemas de Informação, obtida através de atuação direta nos processos de negócio, apoiada em sólida formação acadêmica.
              Com uma metodologia adequada baseada nas melhores práticas do mercado Oferecemos profissionalismo e confiabilidade na obtenção de resultados levando o cliente a atingir suas metas e objetivos.
            </Title>
          </Grid>
        </Grid>
      </Grid>
      {/* Fim sobre */}

      {/* Início Valores */}
      <Grid
        container
        py={8}
        px={isSmallScreen ? 6 : 16}
        height={isLgScreen ? '100%' : '100vh'}
        sx={{ background: 'linear-gradient(40deg, #0494ac 70%, #f0f0f0)' }}
      >
        <Box display='flex' flex={1} justifyContent='center'>
          <Title fontWeight='bold'>
            Missão, Visão e Valores
          </Title>
        </Box>
        <Grow in={missionView.isInView} ref={missionView.ref} style={{ transformOrigin: '0 0 0' }} >
          <Grid container py={4} columnSpacing={4} rowSpacing={4}>
            {companyCards.map((item, index) => (
              <Grid item lg={4} key={index}>
                <CardComponent
                  title={item.title}
                  content={item.content}
                  icon={item.icon}
                  minHeight='100%'
                />
              </Grid>
            ))}
          </Grid>
        </Grow>
      </Grid>
      {/* Fim Valores */}

      {/* Início Porque DWC */}
      <Grid
        container
        py={8}
        px={isSmallScreen ? 6 : 16}
        height='100%'
        columnSpacing={4}
        sx={blurImageStyle(Logo)}
      >
        <Grid item md={6} display='flex' flexDirection='column' justifyContent='center'>
          <Fade in={cardsView.isInView} timeout={1000}>
            <Box display='flex' flexDirection='column' gap={4} p={4} borderRadius={2} bgcolor='rgba(255,255,255, 0.1)'>
              <Title fontSize={30} color='HighlightText'>
                Por Que Escolher a DWC Consult?
              </Title>
              <Title subtitle color='white'>
                Na DWC Consult, nos dedicamos a transformar negócios através de soluções inovadoras e estratégicas. Com uma equipe experiente e comprometida, oferecemos consultoria de alta qualidade, focada em resultados e na satisfação dos nossos clientes.
              </Title>
              <Title subtitle color='white'>
                Nossos serviços são personalizados para atender às necessidades específicas de cada empresa, garantindo eficiência, segurança e crescimento sustentável. Junte-se a nós e descubra como podemos impulsionar seu negócio para o próximo nível.
              </Title>
            </Box>
          </Fade>
        </Grid>

        <Grid item sm={12} md={6}>
          <Box
            ref={cardsView.ref}
            display='flex'
            flexDirection='column'
            py={2}
            gap={2}
            px={isSmallScreen ? 0 : 4}
            justifyContent='flex-start'
          >
            {cards.map((item, index) => (
              <Slide
                key={index}
                in={cardsView.isInView}
                direction={index == 1 ? "left" : 'right'}
                timeout={1000}
                mountOnEnter
                unmountOnExit
              >
                <Box
                  display='flex'
                  width='100%'
                  ml={index === 0 ? (isLgScreen ? 0 : 4) : 0}
                  justifyContent={index === 1 ? 'flex-end' : 'flex-start'}
                >
                  <Card3Component
                    title={item.title}
                    content={item.content}
                    icon={item.icon}
                    maxWidth={isSmallScreen ? '100%' : 390}
                  />
                </Box>
              </Slide>
            ))}
          </Box>
        </Grid>
      </Grid>
      {/* Fim Porque DWC */}

      {/* Início Especialidades */}
      <Grid
        container
        ref={titleView.ref}
        id='specialties'
        py={8}
        px={isSmallScreen ? 6 : 16}
        height='100%'
        rowGap={8}
        sx={{ background: 'linear-gradient(40deg, #0494ac 70%, #f0f0f0)' }}
      >
        <Fade in={titleView.isInView} timeout={1000}>
          <Box display='flex' flex={1} justifyContent='center'>
            <Title fontWeight='bold' color='HighlightText'>
              Nossas Especialidades
            </Title>
          </Box>
        </Fade>
        <Grid container py={4} columnSpacing={4} rowSpacing={4}>
          {specialties.map((item, index) => (
            <Grid item sm={6} lg={4} key={index}>
              <Card2Component
                title={item.title}
                content={item.content}
                minHeight={'100%'}
                icon={item.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Fim Especialidades */}

      {/* Início Contacts */}
      <Grid container id='contacts' py={12} sx={imageStyle(BackgroundImage2)}>
        <Grid container bgcolor='#0494ac' px={isSmallScreen ? 6 : 16}>
          <Grid item sm={12} md={6} py={6}>
            <Box display='flex' flex={1} flexDirection='column' width='100%' gap={3} px={4} mb={6}>
              {contacts.map((item, index) => (
                <Contact
                  key={index}
                  title={item.title}
                  content={item.content}
                  icon={item.icon}
                />
              ))}
            </Box>

            <Box display='flex' flex={1} flexDirection='column' width='100%' gap={2}>
              <Title fontSize={24} textAlign='center' fontWeight='200'>
                Acompanhe Nossas Redes Sociais
              </Title>

              <Social />
            </Box>
          </Grid>
          <Grid item sm={12} md={6} mb={isSmallScreen ? 4 : -4} mt={isSmallScreen ? 0 : -4}>
            <ContactForm />
          </Grid>
        </Grid>
      </Grid>
      {/* Fim Contacts */}

      {/* Início Footer */}
      <Grid
        container
        py={8}
        px={isSmallScreen ? 6 : 16}
        height='100%'
        sx={{ background: 'linear-gradient(30deg, #000048 5%, #0494ac)' }}

      >
        <Footer isSmallScreen={isSmallScreen} />
      </Grid>
      {/* Fim Footer */}
    </Grid >
  );
}

export default App;
