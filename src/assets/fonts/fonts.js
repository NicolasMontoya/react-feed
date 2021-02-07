import { createGlobalStyle } from 'styled-components';

import SourceSansPro from './SourceSansPro-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('Font Name'),
        url(${SourceSansPro}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;