import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

function Analysis() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const age = searchParams.get('age');

    const graphImage = `images/Result/Graph/graph-${age}.png`;
    const totalGraphImage = `images/Result/Graph/graph-total.png`;

    let advice = '';

    if (age >= 45 && age <= 60) {
        advice = `평균 혈색소가 13.8g/dl 이상이에요. 성인 남성은 13g/dl 미만, 성인 여성은 12g/dl미만의 혈색소를 유지해야 해요. 이를 초과하면 빈혈이 일어날 수 있으니 조심해야 해요.`;
    } else if (age < 60) {
        advice = "공복 혈당이 106mg/dL 이상이에요. 당뇨병을 예방하기 위해, 혈당 조절에 관심을 기울이셔야 해요.";
    } else if (age == 80) {
        advice = "80세는 평균 공복 혈당이 108.6mg/dL이에요. 공복 혈당이 126mg/dL 이상이 되면 당뇨병이 의심되니 조심해야 해요.";
    }


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
                <StyledP>
                    {advice}
                </StyledP>
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