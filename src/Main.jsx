import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

function Main() {
    const [selectedAge, setSelectedAge] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleAgeChange = (e) => {
      setSelectedAge(e.target.value);
    }
  
    const handleSubmit = () => {        
        setIsAnalyzing(true);
        setTimeout(() => {
            window.location.href = `/analysis?age=${selectedAge}`;
        }, 2000);
    }

    return (
        <ContentBox>
            <GlobalStyle />
            {isAnalyzing ? (
                <Typo>연령대와 맞는 데이터를 분석하는 중입니다...</Typo>
            ) : (
                <>
                    <IconBox src="images/Icon/smile.png" alt="스마일" />
                    <Typo>
                        Let's Be Healthy!<br />
                        본인의 나이를 선택해 주세요.<br />
                        (5세 단위입니다.)<br />
                    </Typo>
                    <SelectBox value={selectedAge} onChange={handleAgeChange}>
                        <StyledOption value="45">45</StyledOption>
                        <StyledOption value="50">50</StyledOption>
                        <StyledOption value="55">55</StyledOption>
                        <StyledOption value="60">60</StyledOption>
                        <StyledOption value="65">65</StyledOption>
                        <StyledOption value="70">70</StyledOption>
                        <StyledOption value="75">75</StyledOption>
                        <StyledOption value="80">80</StyledOption>
                    </SelectBox> 
                    {selectedAge && <SubmitButton onClick={handleSubmit}>제출하기</SubmitButton>}
                </>
            )}
        </ContentBox>
    );
  }

export default Main;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px auto;

    margin: 160px auto; 
`;

const IconBox = styled.img`
    
`;

const Typo = styled.h1`
    text-align: center;
`;

const SelectBox = styled.select`
    width: 13.8rem;
    height: 4.8rem;
    border-radius: 1.25rem;
    border: 3px solid #B7B7B7;
    background: #FFF;

    text-align: center;
    font-family: 'NanumSquareRound';
    font-size: 2rem;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("images/Icon/Arrow.png") no-repeat right center;
    background-size: 2.75rem;
    padding-right: 1.31rem;
`;

const StyledOption = styled.option`
    font-size: 1.4rem;
`

const SubmitButton = styled.button`
    width: 8rem;
    height: 3rem;

    border-radius: 1.25rem;
    border: 3px solid #B7B7B7;
    background: #FFF;

    text-align: center;
    font-family: 'NanumSquareRound';
    font-size: 1rem;

    margin: 20px auto;

    &:hover {
        cursor: pointer;
        border: 3px solid black;
    }
`;

