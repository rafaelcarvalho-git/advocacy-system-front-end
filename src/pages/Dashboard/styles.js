import styled from 'styled-components'

export const CardGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around; 
    max-width: 980px;
    margin: auto;
`;

export const DashboardProcessos = styled.div`
    border-radius: 0.5rem;
    padding: 26px 8px 26px 8px; 
    background-color: white;
    box-shadow: 0 .5rem 1rem rgba(33, 37, 41, .15);
`;

export const DataCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.5rem;
    padding: 26px 8px 26px 8px; 
    background-color: white;
    box-shadow: 0 .5rem 1rem rgba(33, 37, 41, .15);
    margin: 24px 12px 24px 12px;
    width: 320px;
    max-width: 320px;
   
    @media(max-width: 768px) {
        width: 100%;            
        margin: 20px auto 20px auto;
    }

    @media(max-width: 310px) {
        flex-direction: column-reverse;
        text-align: center;
    }
`;
/*rgba(139, 23, 59, 0.80)
#e08490*/
export const CardInfo = styled.div`
    @media(min-width: 311px) {
        margin-left: 18px; 
    }
       
    & h2 {
        color: rgba(139, 23, 59, 0.80);
        font-size: 2.250rem;
    }

    & p {       
        margin-top: 4px;
        font-size: 1.1rem;
    }
`;

export const CardIcon = styled.div`
    @media(min-width: 311px) {
        margin-right: 18px;         
    } 

    margin-bottom: 12px;
    color: rgba(139, 23, 59, 0.80);

    & * {
        font-size: 3.2rem;
    }
`;

export const DashboardFooter = styled.p`
    text-align: center;
    margin-bottom: 8px;
    margin-top: 24px;

    @media(max-width: 361px) {
        font-size: 14px;
    }
`;