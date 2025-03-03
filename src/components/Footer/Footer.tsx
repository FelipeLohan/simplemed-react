import styled from "styled-components";

const FooterContainer = styled.footer`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 40px 0px ;
`;

const FooterContacts = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;

  p {
    font-size: 2vmin;
    font-weight: 400;
    color: #dae7f9;
    cursor: pointer;
  }
`;

const FooterCopywrite = styled.div`
  display: flex;
  justify-content: center;
  p {
    font-size: 2vmin;
    font-weight: 400;
    color: #dae7f9;
    
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterContacts>
          <p>Fale conosco pelo WhatsApp</p>
          <p>Política de Privacidade</p>
          <p>Termos de Uso</p>
        </FooterContacts>
        <FooterCopywrite>
          <p>© 2024 SimpleMed. Todos os direitos reservados.</p>
        </FooterCopywrite>
      </FooterContainer>
    </>
  );
};

export { Footer };
