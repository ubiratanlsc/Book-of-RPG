import { Global } from '@mantine/core';
import SansaPro from '../assets/font/SansaPro-Normal.otf'

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'SansaProNormal',
            src: `url('${SansaPro}') format("otf")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}
export const SansaProNormal = {
    '@font-face': {
      fontFamily: 'SansaPro',
      src: `url('${SansaPro}') format("otf")`,
      fontWeight: 700,
      fontStyle: 'normal',
    },
  }