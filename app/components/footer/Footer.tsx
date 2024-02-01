import React from 'react'
import GridContainer from '../gridData/GridContainer'
import GridChild from '../gridData/GridChild'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
        {/* <section className='sectionContainer m-auto w-full py-40 contactUsSection'>
        <GridContainer gridCols="grid-cols-1 max-parent-grid-container-width m-auto">
            <GridChild 
              childId={12}
              customHeaderCss="font-bold"
              childName="WriteToUs"
              h2Order={1}
              buttonOrder={2}
            />
        </GridContainer>
    </section> */}
    <section className='sectionContainer m-auto w-full max-parent-grid-container-width pt-40 pb-8 footer-section-components'>
        <GridContainer gridCols="grid-cols-4 m-auto !items-start pb-12 border-b max709px:grid-cols-1 max990px:gap-y-24">
        <GridChild 
              childId={13}
              childName="aboutMercury col-start-1 col-end-2 max554px:text-center max554px:m-auto max554px:justify-center"
              assetOrder={1}
              socialMediaOrder={2}
              paragraphOrder={3}
            />
        <GridChild 
              childId={16}
              childName="companyLinksFooter max554px:text-center"
              customHeaderCss="font-bold"
              h4Order={1}
              paragraphOrder={2}
            />
            <GridChild 
              childId={14}
              childName="productsLinksFooter max554px:text-center"
              customHeaderCss="font-bold"
              h4Order={1}
              paragraphOrder={2}
            />
            <GridChild 
              childId={15}
              childName="servicesLinksFooter max554px:text-center"
              customHeaderCss="font-bold"
              h4Order={1}
              paragraphOrder={2}
            />
        </GridContainer>
        <GridContainer gridCols="grid-cols-2 m-auto items-stretch py-8 flex-wrap">
            <GridChild 
              childId={17}
              childName="copyright"
            />
            <GridChild 
              childId={18}
              childName="policyFooter !flex-row !gap-x-10 !justify-end"
            />
        </GridContainer>
    </section>
    </>
  )
}

export default Footer
