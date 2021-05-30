import styled from "styled-components";

const Logo = () => {
  return (
    <LogoContainer>
      <img src="/assets/logo.svg" alt="BMI Calculator - Logo" />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  height: 80px;
  padding: 0;
  margin-bottom: 90px;
  text-align: center;
`;

export default Logo;
