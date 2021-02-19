import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { useDate } from "../commons/useDate";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import { mediaQueries } from "../commons/MediaQueries";

const Background = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 990;
`;

const ModalWrapper = styled.div`
  width: 60vw;
  height: 50vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  ${mediaQueries("sm")`
    width: 70vw;
    height: 70vh;
  
  
  
  `};
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;

  p {
    padding: 1rem;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--main-font-color);
    text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.48);
    text-align: center;
    ${mediaQueries("sm")`
    padding: 0.5rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  `};
  }
  button {
    padding: 10px 24px;
    color: var(--secondary-font-color);
    border: none;
  }

  h2 {
    color: var(--main-font-color);
    font-size: 3rem;
    text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.48);
    ${mediaQueries("sm")`
    margin-top: 0.5rem;
    font-size: 1.5rem;
    
  `};
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  color: var(--secondary-font-color);
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const { wish } = useDate();

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h2>{wish}</h2>
                <p>
                  i am Matthias, a Cologne based Webdeveloper & Designer. From
                  the first concept to the production, i create clean &
                  user-friendly solutions. Always in mind to keep my code
                  maintainable & reusable.
                </p>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  showModal: PropTypes.string,
  setShowModal: PropTypes.string,
};
