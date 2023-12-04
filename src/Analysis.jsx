import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

function Analysis() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const age = searchParams.get('age');

    const graphImage = `images/Result/Graph/graph-${age}.png`;
    const totalGraphImage = `images/Result/Graph/graph-total.png`;

    return (
        <ContentBox>
            <GlobalStyle />
            <>
                <Typo>{age}세 평균의 건강 검진 데이터입니다.</Typo>
                <img src={graphImage} alt="나이 그래프" />
            </>
            <>
                <Typo>45세부터 80세까지의 평균 건강 검진 데이터입니다.</Typo>
                <img src={totalGraphImage} alt="전체 평균 그래프" />
            </>
            <>
                <StyledP>공복 혈당이 126mg/dL 이상이라면 <b>당뇨병</b>이 의심될 수 있어요.</StyledP>
            </>
        </ContentBox>
    )
}

export default Analysis;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px auto;

    margin: 160px auto; 
`;


const Typo = styled.h1`
    text-align: center;
`;

const StyledP = styled.p`
    margin: 50px auto;
    font-size: 1.2rem;
`