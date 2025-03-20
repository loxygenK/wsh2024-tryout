import styled from 'styled-components';
const _Wrapper = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
`;

const _Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeroImage: React.FC = () => {
  return (
    <_Wrapper>
      <_Image src="/assets/imageSrc.png" alt="Cyber TOON" />
    </_Wrapper>
  );
};
