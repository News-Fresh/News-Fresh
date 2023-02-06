import React, { useState } from "react";
import styled from "styled-components";
import apple from "../icons/apple.png";
import grape from "../icons/grape.png";
import watermelon from "../icons/watermelon.png";
import pineapple from "../icons/pineapple.png";
import Modal from "./Modal";

const Menu = styled.div`
  background-color: #c4dea3;
  position: fixed;
  width: 135px;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 1;
  @media screen and (max-width: 1210px) {
    width: 100%;
    height: 60px;
  }
`;
const BarStyle = styled.label`
  position: fixed;
  width: 36.33px;
  height: 28.37px;
  left: 50px;
  top: 88px;
  cursor: pointer;
  z-index: 2;
  @media screen and (max-width: 1210px) {
    left: 0px;
  }
`;
const Bar1 = styled.span`
  width: 100%;
  height: 20%;
  border-radius: 30px;
  background: white;
  position: absolute;
  @media screen and (max-width: 1210px) {
    width: 20px;
    background: black;
    display: none;
  }
`;
const Bar2 = styled.span`
  width: 100%;
  height: 20%;
  border-radius: 30px;
  background: white;
  position: absolute;
  top: 15px;
  @media screen and (max-width: 1210px) {
    width: 20px;
    background: black;
    display: none;
  }
`;
const AppleIcon = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 45px;
  top: 256px;
  cursor: pointer;
  @media screen and (max-width: 1210px) {
    width: 35px;
    height: 35px;
    left: 15%;
    top: 12.5px;
  }
`;
const GrapeIcon = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 45px;
  top: 383px;
  cursor: pointer;
  @media screen and (max-width: 1210px) {
    width: 35px;
    height: 35px;
    left: 35%;
    top: 12.5px;
  }
`;
const WatermelonIcon = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 45px;
  top: 510px;
  cursor: pointer;
  @media screen and (max-width: 1210px) {
    width: 35px;
    height: 35px;
    left: 55%;
    top: 12.5px;
  }
`;
const PineappleIcon = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 45px;
  top: 637px;
  cursor: pointer;
  @media screen and (max-width: 1210px) {
    width: 35px;
    height: 35px;
    left: 75%;
    top: 12.5px;
  }
`;
export default function Menubar() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal1 = () => {
    setModalOpen1(true);
  };
  const closeModal1 = () => {
    setModalOpen1(false);
  };
  const openModal2 = () => {
    setModalOpen2(true);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Menu>
        <AppleIcon src={apple} alt="apple" onClick={openModal1} />

        {/* header 부분에 텍스트를 입력한다. */}
        <Modal open={modalOpen1} close={closeModal1} header="Developer Information">
        {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달
        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요! */}
        NEWS FRESH란?
        <hr />
        <h1>바쁜 현대인에게 신선한 뉴스를!
          <br />
        NEWS 및 날씨를 FRESH하게 🍏</h1>
        </Modal>

        <GrapeIcon src={grape}  onClick={openModal2}/>
        
        {/* header 부분에 텍스트를 입력한다. */}
        <Modal open={modalOpen2} close={closeModal2} header="Developer Information">
        {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달
        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요! */}
        개발목적
        <hr />
        <h1>다양한 API를 적극 활용하여,
          <br />
           실시간 정보를 가져오는데 주력하였습니다!</h1>
        </Modal>

        <WatermelonIcon src={watermelon} />

        <PineappleIcon src={pineapple} onClick={openModal}/>

        {/* header 부분에 텍스트를 입력한다. */}
        <Modal open={modalOpen} close={closeModal} header="Developer Information">
        {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달
        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요! */}
        만든이
        <hr />
        <h1>배인해</h1>
        dlsgo0405@gmail.com
        <br />
        GitHub <a href="https://github.com/ome-r">https://github.com/ome-r</a>
        <h1>정희영</h1>
        wjdgmldud1994@gmail.com
        <br />
        GitHub <a href="https://github.com/hiii-young">https://github.com/hiii-young</a>
      </Modal>

      </Menu>
      <BarStyle htmlFor="icon">
        <Bar1 />
        <Bar2 />
      </BarStyle>
    </>
  );
}
