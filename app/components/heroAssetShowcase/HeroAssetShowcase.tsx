"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import './heroAssetCSS.css';

interface HeroShowcaseProps {
    image: string;
  }

const HeroAssetShowcase: React.FC<HeroShowcaseProps> = ({ image }) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <>
            <motion.div
                ref={ref}
                className="heroAssetContainer m-auto max709px:h-full min710px:h-screen mb-20"
            >
                {/* Use the next/image component for images */}
                <img
                    src={image}
                    alt="heroAsset"
                    className='w-full'
                />
                {/* <div className='centered'>
                    <h1 className='text-h3 mb-4'>Built Locally, Connected Globally</h1>
                    <p className='text-paragraph'>Founded in the UAE, Mercury designs, deploys, and manages Digital Payment ecosystems that enable sovereignty and inclusion. We are a technology-driven, solution-oriented team with decades of experience in the payments domain. We are on a mission to democratize financial services, level the playing field and drive cashless ecosystems.</p>
                </div> */}
            </motion.div>
        </>
    );
};

export default HeroAssetShowcase;
