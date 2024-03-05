"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark
} from "@fortawesome/free-solid-svg-icons";

interface LightboxDataItem {
  id?: number;
  image: string;
  caption?: string;
}

interface AssetLightboxDataProps {
  lightboxData: LightboxDataItem[];
}

const AssetLightboxData: React.FC<AssetLightboxDataProps> = ({ lightboxData }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    setSlideNumber((prev) => (prev === 0 ? lightboxData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSlideNumber((prev) => (prev + 1 === lightboxData.length ? 0 : prev + 1));
  };

  return (
    <>
      {/* {openModal && (
        <div className="lightboxModalContainer">
          <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={handleCloseModal} />
          <FontAwesomeIcon icon={faCircleChevronLeft} className="btnPrev" onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className="btnNext" onClick={nextSlide} />
          <div className="slideNumberAndTotal">
            {slideNumber + 1} / {lightboxData.length}
          </div>
          <div className="fullscreenImage">
            <img src={lightboxData[slideNumber].image} alt="" />
          </div>
          <div className="imageCaption">
            <p>{lightboxData[slideNumber].caption}</p>
          </div>
        </div>
      )} */}

      {lightboxData &&
        lightboxData.map((currentElement, index) => (
          <div
            className="imageContainerLightbox max554px:max-w-80 max-w-sm flex-none rounded-2xl overflow-hidden max990px:!h-72 min991px:!h-96"
            key={index}
            onClick={() => handleOpenModal(index)}
          >
            <img className="w-full h-full object-cover hover:scale-110" src={currentElement.image} alt="" />
          </div>
        ))}
    </>
  );
};

export default AssetLightboxData;
