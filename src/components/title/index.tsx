import { Typography, TypographyProps } from "@mui/material";

type TitleProps = TypographyProps & {
  children: string;
  subtitle?: boolean;
  isSmallScreen?: boolean;
}

export const Title = ({ children, subtitle, isSmallScreen, ...props }: TitleProps) => {
  return (
    subtitle ? (
      <Typography {...props} color={props.color || '#f2f2f2'}>
        {children}
      </Typography>
    ) : (
      <Typography
        {...props}
        color={props.color || 'HighlightText'}
        fontSize={props.fontSize || (isSmallScreen ? 30 : 38)}
        fontFamily={props.fontFamily || 'Arimo'}
        fontWeight={props.fontWeight || '600'}
      >
        {children}
      </Typography>
    )
  )
}
