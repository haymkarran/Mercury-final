import Image from 'next/image'
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import Link from 'next/link'
import expandIcon from "../../../public/assets/icons/expand.svg"
import { motion } from 'framer-motion'
import TopNavInternal from '../../components/top-nav-inner/TopNavInner'
import leafPattern from "../../../public/assets/patterns/leaf.svg"


export default function Services() {
  return (
    <>
    <TopNavInternal />

    {/* 360 begins */}

    <section id='m360Section' className='m-auto w-full max-parent-grid-container-width max990px:pb-20 min991px:pb-60'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
          <GridChild 
              childId={32}
              childName="m360Brief"
              customHeaderCss=""
              h3Order={2}
              assetOrder={1}
            />
          <GridChild 
              childId={9}
              childName="m360HeroImage"
            />
        </GridContainer>
    </section>

    {/* 360 contents */}

    <section className='m-auto w-full max-parent-grid-container-width bg-tintGray rounded-xl px-12 py-20 mb-10 relative overflow-hidden'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
            <GridChild 
              childId={81}
              childName="CoveringTransitPayments !justify-start"
              customHeaderCss="font-bold"
              h3Order={2}
            />
            <GridChild 
              childId={82}
              childName="CoveringTransitPaymentsDetails"
              paragraphOrder={1}
              checkboxListOrder={2}
            />
        </GridContainer>
        <div className='patternPosition max990px:hidden'><img src={leafPattern.src} alt=""></img></div>
    </section>

    <section className='m-auto w-full max-parent-grid-container-width bg-tintYellow rounded-xl px-12 py-20 min991px:mb-40 mb-20 relative overflow-hidden'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
            <GridChild 
              childId={83}
              childName="CoveringTransitPayments !justify-start"
              customHeaderCss="font-bold"
              h3Order={2}
            />
            <GridChild 
              childId={84}
              childName="CoveringTransitPaymentsDetails"
              paragraphOrder={1}
              checkboxListOrder={2}
            />
        </GridContainer>
        <div className='patternPosition max990px:hidden'><img src={leafPattern.src} alt=""></img></div>
    </section>

    {/* mHub begins */}

    <section id='mHubSection' className='m-auto w-full max-parent-grid-container-width max990px:pb-20 min991px:pb-60'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
        <GridChild 
              childId={39}
              childName="mHubPageBrief"
              h3Order={2}
              customHeaderCss=""
              assetOrder={1}
            />
          <GridChild 
              childId={10}
              childName="mHubHeroImage"
            />
        </GridContainer>
    </section>


    {/* mHub services */}

    <section className='m-auto w-full max-parent-grid-container-width bg-tintRed rounded-xl px-12 py-20 mb-10 relative overflow-hidden'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
            <GridChild 
              childId={85}
              childName="CoveringTransitPayments !justify-start"
              customHeaderCss="font-bold"
              h3Order={2}
            />
            <GridChild 
              childId={86}
              childName="CoveringTransitPaymentsDetails"
              paragraphOrder={1}
              checkboxListOrder={2}
            />
        </GridContainer>
        <div className='patternPosition max990px:hidden'><img src={leafPattern.src} alt=""></img></div>
    </section>

    <section className='m-auto w-full max-parent-grid-container-width bg-tintGreen rounded-xl px-12 py-20 mb-10 relative overflow-hidden'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
            <GridChild 
              childId={87}
              childName="CoveringTransitPayments !justify-start"
              customHeaderCss="font-bold"
              h3Order={2}
            />
            <GridChild 
              childId={88}
              childName="CoveringTransitPaymentsDetails"
              paragraphOrder={1}
              checkboxListOrder={2}
            />
        </GridContainer>
        <div className='patternPosition max990px:hidden'><img src={leafPattern.src} alt=""></img></div>
    </section>
    </>
  )
}