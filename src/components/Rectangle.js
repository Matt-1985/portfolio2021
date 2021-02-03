import styled from "styled-components";

const Rectangle = styled.div`
  height: 60vh;
  width: 50vw;
  background-color: var(--highlight-color);
  border: none;
  padding-bottom: (1/1) * 100%;
  position: relative;
  overflow: hidden;
  z-index: 2;
  backdrop-filter: blur(1px);
  background-size: cover;
  background-position: center;
  animation: slide-in-left 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @keyframes slide-in-left {
      0% {
        transform: translateX(-1000px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;

export default Rectangle;
