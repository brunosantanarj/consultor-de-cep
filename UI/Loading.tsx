import styled, { keyframes, css } from 'styled-components';

interface IProps {}

const loadingAnimation = keyframes`
  0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`;

const animation = css`
  animation: ${ loadingAnimation} 1.1s infinite linear;
`;

const Loading = styled.div<IProps>`
  display: inline-block;
  font-size: 5px;
  border: 0.5em solid rgba(255, 255, 255, 0.2);
  border-left-color: #fff;
  transform: translateZ(0);
  ${animation};

  &:after, & {
		border-radius: 50%;
    width: 15px;
    height: 15px;
  }
`;

export default Loading;
