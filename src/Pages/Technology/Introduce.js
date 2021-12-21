import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/technologybackground.png';
import {PageTitleWrpper, PageTitle, Bar } from '../../components/PageStyle';
import styled from '@emotion/styled';
import IntroImg1 from '../../assets/introimg1.png';
import IntroImg2 from '../../assets/introimg2.png';
import IntroImg3 from '../../assets/introimg3.png';
import IntroImg5 from '../../assets/introimg5.png';
import IntroImg6 from '../../assets/introimg6.png';
import IntroImg7 from '../../assets/introimg7.png';
import TitleImg4 from '../../assets/titleimg4.png';
import MobileTitleImg4 from '../../assets/mobiletitleimg4.png';

const Introduce = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                기술현황
                <NavBarWrapper>
                    <Link to="/introduce" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>연구소 소개</SelectNavBlock>
                    </Link>
                    <Link to="/patent" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>특허 및 인증</NavBlock>
                    </Link>
                </NavBarWrapper>
            </MainImg>
            <PageTitleWrpper>
                <PageTitle>연구소 소개</PageTitle>
            </PageTitleWrpper>
            <TitlePhoto />
            <MobileTitlePhoto />
            <BarkWrapper>
                <Bar>산업용 건조기술 : 동결건조장비</Bar>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block></Block>
                        
                    </RemarkWrapper>
                    
                        <Block5/>
                    
                </Blockwrapper>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block2/>
                        
                    </RemarkWrapper>
                    
                        <Block6/>
                    
                </Blockwrapper>
                <Bar>금속 플레이트 및 부품 측면 홀/탭 가공</Bar>
                <Blockwrapper>
                    <RemarkWrapper>
                        <Block3/>
                        
                    </RemarkWrapper>
                    
                        <Block7/>
                    
                </Blockwrapper>
            </BarkWrapper>
            <Footer/>
        </PageWrapper>
    );
}

const MainImg = styled.div`
    width: 100%;
    height: 25vh;
    background: #282D27;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    @font-face {
        font-family: 'EliceDigitalBaeum_Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/EliceDigitalBaeum_Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }
    font-family: 'EliceDigitalBaeum_Bold';
    @media screen and (max-width: 1024px) {
        height: 17vh;
        font-size: 26px;
    }
`;


const NavBarWrapper = styled.div`
    width: 60vw;
    height: 58px;
    display: flex;
    margin: 0 auto;
    position: absolute;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    top: calc(25vh + 56px);
    box-shadow:  0px 3px 6px rgba(0, 0, 0, 0.1);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    @media screen and (max-width: 1024px) {
        width: calc(90vw + 3px);
        top: calc(23vh); 
        height: 40px;
    }
`;

const NavBlock = styled.div`
    width: 30vw;
    height: 58px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    @media screen and (max-width: 1024px) {
    width: 45vw;
    height: 40px; 
    font-size: 14px;
    }
`;

const SelectNavBlock = styled(NavBlock)`
    background: #930E14;
    color: #fff;
    border-left: 1px solid #930E14;
`;

const BarkWrapper = styled.div`
    margin-bottom: 10vh;
    @media screen and (max-width: 1024px) {
        width: 90vw;
        margin: 0 auto 20vh auto;
  }
`;


const Blockwrapper = styled.div`
    width: 1088px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5vh auto 10vh auto;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-around;
  }
`;

const Block = styled.div`
    border: 1px solid #0067A3;
    width: 353px;
    height: 410px;
    margin-bottom: 15px;
    background-image: url(${IntroImg1});
    background-size: 101%;
    background-repeat: no-repeat;
    background-position: center; 
    @media screen and (max-width: 1220px) {
    width: 90vw;
    max-width: 360px;
    height: 410px;
  }
`;

const Block2 = styled(Block)`
    background-image: url(${IntroImg2});

`;

const Block3 = styled(Block)`
    background-image: url(${IntroImg3});

`;

const Block5 = styled(Block)`
    background-image: url(${IntroImg5});
    width: 593px;

`;

const Block6 = styled(Block)`
    background-image: url(${IntroImg6});
    width: 593px;

`;

const Block7 = styled(Block)`
    background-image: url(${IntroImg7});
    width: 593px;

`;

const Remark = styled.div`
    font-size: 18px;
    padding: 5px 20px;
`;

const RemarkWrapper = styled.div`
    
    padding-bottom: 15px;
    margin-bottom: 5vh;
    height: 395px;
    @media screen and (max-width: 1220px) {
        max-height: 365px;
  }
`;

const BlockContent = styled.div`
    width: 594px;
    margin-bottom: 43px;
    padding-left: 25px;
    font-weight: 600;
    border: 1px solid #0067A3;
    @media screen and (max-width: 1220px) {
    width: 90vw;
    max-width: 360px;
    border: 1px solid #0067A3;
  }
`;

const Contnet = styled.div`
    font-size: 20px;
    line-height: 32px;
    @media screen and (max-width: 780px) {
        font-size: 16px;
  }
`;


const TitlePhoto = styled.div`
    width: 1048px;
    height: 115px;
    padding: 0 20px;
    margin: 10vh auto 5vh auto;
    color: #930E14;
    display: flex;
    align-items: center;
    font-size: 24px;
    text-align: center;
    background-image: url(${TitleImg4});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    @media screen and (max-width: 1024px) {
        display: none;
}
`;

const MobileTitlePhoto = styled(TitlePhoto)`
        display: none;
        background-image: url(${MobileTitleImg4});
@media screen and (max-width: 1024px) {
    display: flex;
    width:  90vw;
    height: calc(12vw);
    padding: 0;
    min-height: 30px;
    margin: 3vh auto 5vh auto;
    font-size: 16px;
    border-top: 1.5px solid #851F1C;
    border-bottom: 1.5px solid #851F1C;
    }
`;

export default Introduce;