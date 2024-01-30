import Image from 'next/image'
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import Link from 'next/link'
import expandIcon from "../../../public/assets/icons/expand.svg"
import { motion } from 'framer-motion'
import TopNavInternal from '../../components/top-nav-inner/TopNavInner'
import leafPattern from "../../../public/assets/patterns/leaf.svg"


export default function Products() {
  return (
    <>
    <TopNavInternal />

    {/* MPay begins */}

    <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
            <GridChild 
              childId={19}
              customHeaderCss=""
              childName="mPayBrief"
              h1Order={2}
              assetOrder={1}
              buttonOrder={3}
            />
            <GridChild 
              childId={5}
              childName="mPayHeroImage"
            />
        </GridContainer>
    </section>

    {/* Payment cards for every purpose */}

    <section className='m-auto featureSection w-full max-parent-grid-container-width bg-tintRed rounded-xl px-12 py-20 min991px:mb-40 mb-20 relative overflow-hidden'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
            <GridChild 
              childId={28}
              childName="CoveringTransitPayments !justify-start"
              customHeaderCss="font-bold"
              h3Order={2}
            />
            <GridChild 
              childId={29}
              childName="CoveringTransitPaymentsDetails"
              paragraphOrder={1}
              checkboxListOrder={2}
            />
        </GridContainer>
        <div className='patternPosition max990px:hidden'><img src={leafPattern.src} alt=""></img></div>
    </section>

    <section className='m-auto featureSection w-full max-parent-grid-container-width bg-tintGreen rounded-xl px-12 py-20 min991px:mb-40 mb-20 relative overflow-hidden'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
            <GridChild 
              childId={30}
              childName="CoveringTransitPayments !justify-start"
              customHeaderCss="font-bold"
              h3Order={2}
            />
            <GridChild 
              childId={31}
              childName="CoveringTransitPaymentsDetails"
              paragraphOrder={1}
              checkboxListOrder={2}
            />
        </GridContainer>
        <div className='patternPosition max990px:hidden'><img src={leafPattern.src} alt=""></img></div>
    </section>

    {/* mTouch begins */}

    <section className='m-auto w-full max-parent-grid-container-width min991px:pb-60 pb-20'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
            <GridChild 
              childId={27}
              childName="mTouchBrief"
              customHeaderCss=""
              h1Order={2}
              assetOrder={1}
              buttonOrder={3}
            />
            <GridChild 
              childId={6}
              childName="mTouchHeroImage"
            />
        </GridContainer>
    </section>


    {/* Cashless solutions for the transit ecosystem */}

    <section className='m-auto w-full max-parent-grid-container-width bg-tintGray rounded-xl px-12 py-20 min991px:mb-40 mb-20 relative overflow-hidden'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
            <GridChild 
              childId={79}
              childName="CoveringTransitPayments !justify-start"
              customHeaderCss="font-bold"
              h3Order={2}
            />
            <GridChild 
              childId={80}
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