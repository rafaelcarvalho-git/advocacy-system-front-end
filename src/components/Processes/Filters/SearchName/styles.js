import styled from 'styled-components'
import { Input } from 'antd'

export const SearchBar = styled.div`
    flex: 1 0 200px;    
    max-width: 600px;
    
    @media(max-width: 531px) {
        width: 100%;
        flex: none;
    }

    @media(min-width: 991px) {
        min-width: 500px;
    }
`;

export const Bar = styled(Input)`
    margin-top: 0.550rem;
    margin-bottom: 24px;
    width: 100%;
`;