import { createGlobalStyle } from 'styled-components';

import NunitoWoff from './nunito-600.woff';
import NunitoWoff2 from './nunito-600.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Nunito';
        src: local('Nunito'), local('Nunito'),
        url(${NunitoWoff}) format('woff2'),
        url(${NunitoWoff2}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
`;
