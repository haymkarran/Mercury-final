import Image from 'next/image'
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import Link from 'next/link'
import leafPattern from "../../../public/assets/patterns/leaf.svg"
import boltPattern from "../../../public/assets/patterns/bolt.svg"
import ringPattern from "../../../public/assets/patterns/ring.svg"
import wheelPattern from "../../../public/assets/patterns/wheel.svg"

export default function MercuryHub () {
  return (
    <>

    <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
        <GridChild 
              childId={39}
              childName="mHubPageBrief"
              h1Order={2}
              customHeaderCss="font-bold"
              assetOrder={1}
            />
          <GridChild 
              childId={10}
              childName="mHubHeroImage"
            />
        </GridContainer>
    </section>

    
    <section className='m-auto w-full max-parent-grid-container-width mHubGridSection pb-60'>
        <GridContainer gridCols="mHubGridSectionGridContainer grid-cols-6 min1280px:grid-rows-6 smTablet:grid-cols-2 lgTablet:grid-cols-2 max990px:grid-cols-1 max1279px:p-8">
            <div className='max990px:order-2 overflow-hidden relative min1280px:grid bg-tintGray flex flex-col w-full min1280px:row-start-1 min1280px:row-span-2 min1280px:col-start-1 min1280px:col-span-4 items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={40}
                      childName="schemeInABox z-50 min991px:pl-52"
                      h4Order={1}
                      customHeaderCss="font-bold"
                      paragraphOrder={2}
                    />
                <div className='absolute left-0 my-8 z-0 max990px:hidden'><img src={ringPattern.src} alt=""></img></div>
            </div>
            <div className='max990px:order-3 relative overflow-hidden min1280px:grid bg-tintGray flex flex-col w-full min1280px:row-start-3 min1280px:row-span-2 min1280px:col-start-1 min1280px:col-span-2 items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={41}
                      childName="readyToDeploy z-50"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
                <div className='absolute bottom-0 right-0 z-0 max990px:hidden'><img src={boltPattern.src} alt=""></img></div>
            </div>
            <div className='max990px:order-4 min1280px:grid bg-tintGray flex flex-col w-full min1280px:row-start-5 min1280px:row-span-2 min1280px:col-start-1 min1280px:col-span-1 items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={42}
                      childName="emvCompliant"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='max990px:order-5 min1280px:grid bg-tintGray flex flex-col w-full min1280px:row-start-5 min1280px:row-span-2 min1280px:col-start-2 min1280px:col-span-1 items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={43}
                      childName="apiSupport"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='max990px:order-1 min1280px:grid bg-tintGreen flex flex-col w-full min1280px:row-start-3 min1280px:row-span-2 min1280px:col-start-3 min1280px:col-span-2 items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={44}
                      childName="mHubGridCenter"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='max990px:order-6 min1280px:grid bg-tintGray flex flex-col w-full min1280px:row-start-5 min1280px:row-span-2 min1280px:col-start-3 min1280px:col-span-2 items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={45}
                      childName="ensuresEfficient"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='max990px:order-7 min1280px:grid bg-tintGray flex flex-col w-full min1280px:row-start-1 min1280px:row-span-4 min1280px:col-start-5 min1280px:col-span-2 items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={46}
                      childName="featureCheckList align-center !gap-y-6"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='max990px:order-8 min1280px:grid bg-tintGray flex flex-col w-full min1280px:row-start-5 min1280px:row-span-1 min1280px:col-start-5 min1280px:col-span-2 items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={47}
                      childName="robustPaymentSolution text-center"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='max990px:order-9 min1280px:grid bg-tintGray flex flex-col w-full min1280px:row-start-6 min1280px:row-span-1 min1280px:col-start-5 min1280px:col-span-2 items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={48}
                      childName="locallyDeployed text-center"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
        </GridContainer>
    </section>

    {/* mHub features and capabilities */}

    <section className='m-auto w-full max-parent-grid-container-width mHubGridSection pb-60'>
        <GridContainer gridCols="mHubGridSectionGridContainer lgTablet: grid-cols-2 max990px:grid-cols-1">
            <div className='min1280px:grid flex flex-col w-full'>
                <GridChild 
                      childId={49}
                      childName="mHubFeaturesHeading"
                      h2Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='min1280px:grid flex flex-col w-full items-center justify-center'>
                <GridChild 
                      childId={50}
                      childName="featureCheckList align-center !gap-y-6"
                      checkboxListOrder={1}
                    />
            </div>
        </GridContainer>
    </section>


    {/* contact us and footer sections */}
    </>
  )
}