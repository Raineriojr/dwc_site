import { SxProps } from "@mui/material";

export const headerStyle = (image: string) => {
  const headerStyle: SxProps = {
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      filter: 'blur(2px)',
      backgroundPosition: 'center',
      zIndex: -1,
    },
  }
  return headerStyle;
}

export const imageStyle = (image: string) => {
  const style: SxProps = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return style;
}

export const blurImageStyle = (image: string) => {
  const style: SxProps = {
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      filter: 'blur(4px)',
      backgroundPosition: 'center',
      zIndex: -1,
    },
    '::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: -1,
    },
  }

  return style
}