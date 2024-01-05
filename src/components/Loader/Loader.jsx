import { MagnifyingGlass } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <p>Loading... </p>
      <MagnifyingGlass
        visible={true}
        height="64"
        width="64"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{
          margin: '0 auto',
        }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="transparent"
        color="#266861"
      />
    </Wrapper>
  );
};
