import styled from "styled-components";
import HeroImage from "../../assets/HeroBanner.svg";

const HeroBannerContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 54px;
  }

 
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 660px;
  
  gap: 25px;

   h1{
    font-size: 7vmin;
    color: #0B132A;
    font-weight: 600;
    line-height: 1.2em;

  }

  h2{
    font-size: 2.7vmin;
    color: #737D8F;
    font-weight: 400;
    line-height: 25px;

    @media (max-width: 440px) {
      font-size: 18px;
    }
  }

  @media (max-width: 440px) {
    width: 330px;
  }
`

const CtaButton = styled.button`
  font-family: 'Poppins';
  padding: 20px 10px;
  font-size: 2vmin;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #2C6262;
  width: 30%;
  font-weight: 600;
  box-shadow: 0 12px 20px rgba(67, 211, 208, 0.3);
  cursor: pointer;

  @media (max-width: 440px) {
    width: 160px;
    font-size: 16px;
  }
`

const HeroImageContainer = styled.div`
  display: flex;
  align-items: center;
  img{
    width: 550px;
  }
`

const HeroBanner = () => {
  return (
    <>
      <HeroBannerContainer>
        <HeroTextContainer>
          <h1>A solução inteligente para médicos organizarem seus atendimentos.</h1>
          <h2>Simplifique sua rotina, economize tempo e garanta a segurança dos dados de seus pacientes.</h2>
          <CtaButton>Teste Agora</CtaButton>
        </HeroTextContainer>
          <HeroImageContainer>
            <img src={HeroImage} alt="Hero image" />
          </HeroImageContainer>
      </HeroBannerContainer>
    </>
  );
};

export { HeroBanner };
