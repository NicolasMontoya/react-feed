import { createGlobalStyle } from 'styled-components';

import SourceSansPro from './SourceSansPro-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Source Sans Pro';
        src: local('Source Sans Pro'), local('Source Sans Pro'),
        url(${SourceSansPro}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
`;