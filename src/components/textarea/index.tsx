import { TextareaAutosize as BaseTextareaAutosize, TextareaAutosizeProps } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

type TextAreaProps = TextareaAutosizeProps & {};

export const TextArea = (props: TextAreaProps) => {
  return (
    <TextareaAutosize {...props} />
  )
}

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const TextareaAutosize = styled(BaseTextareaAutosize)(
  () => `
  box-sizing: border-box;
  width: 100%;
  resize: none;
  font-family: 'Roboto';
  font-size: 0.99rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 4px;
  color: ${grey[900]};

  background: #fff;
  border: 1px solid ${grey[400]};
  box-shadow: 0px 2px 2px ${grey[50]};

  &::placeholder {
    color: ${grey[500]};
  }
    
  &:hover {
    border-color: ${grey[900]};
  }

  &:focus {
    border: 2px solid ${grey[400]};
    border-color: ${blue[600]}; // Azul ao focar
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

