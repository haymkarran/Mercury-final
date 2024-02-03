'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import GridContainer from './components/gridData/GridContainer'
import GridChild from './components/gridData/GridChild'
import Link from 'next/link'
import 'react-intersection-observer'
import TopNav from './components/top-nav/TopNav'
import HeroAssetShowcase from './components/heroAssetShowcase/HeroAssetShowcase'
// import FeaturedVideo from './components/featuredVideo/FeaturedVideo'
import mercuryOffice from '../public/assets/images/office/mercury-office-official.jpeg';
import ClienteleScroller from './components/clientele-scroller/ClienteleScroller'

export default function Home() {

  return (
    <>
    <TopNav />

    <HeroAssetShowcase image={mercuryOffice.src} customCSS="homeHeroImageContainer" />

    <section className='m-auto w-full hero-asset-showcase-max-parent-grid-container-width max554px:pt-5 min555px:pt-10 min555px:mb-36 bg-black text-white rounded-t-none min710px:rounded-3xl overflow-hidden'>
        <section className='m-auto max-parent-grid-container-width max554px:pt-0 min555px:pt-20'>
            <GridContainer gridCols="grid-cols-1 text-center">
                <GridChild 
                  childId={97}
                  customHeaderCss="font-medium beyondPaymentsText"
                  childName=""
                />
            </GridContainer>
        </section>
        
        <section className='m-auto max-parent-grid-container-width max554px:pt-0 min555px:pt-5 min710px:pb-30 max554px:pb-10 min555px:pb-20 min991px:pl-40 min991px:pr-40'>
            <GridContainer gridCols="grid-cols-1 text-center">
                <GridChild 
                  childId={91}
                  customHeaderCss="homeHeroText"
                  childName=""
                />
            </GridContainer>
        </section>
    </section>

    <section className='m-auto w-full max-parent-grid-container-width max554px:pt-20 pb-20'>
        <GridContainer gridCols="grid-cols-1 text-center">
            <GridChild 
              childId={92}
              customHeaderCss="font-medium"
              childName="theManagement"
            />
        </GridContainer>
    </section>

    <section className='m-auto w-full pb-20 max-w-7xl max1279px:max-w-2xl'>
        <GridContainer gridCols="!flex !gap-5 justify-center flex-row flex-wrap !align-start pb-20 m-auto">
            <GridChild 
              childId={93}
              childName="productsandservices m-auto mpay h-full bg-tintGray text-center h-96 !justify-start"
              assetOrder={1}
              h4Order={2}
            />
            <GridChild 
              childId={94}
              childName="productsandservices m-auto mtouch h-full bg-tintGray text-center h-96 !justify-start"
              assetOrder={1}
              h4Order={2}
            />
            <GridChild 
              childId={95}
              childName="productsandservices m-auto m360 h-full bg-tintGray text-center h-96 !justify-start"
              assetOrder={1}
              h4Order={2}
            />
            <GridChild 
              childId={96}
              childName="productsandservices m-auto mhub h-full bg-tintGray text-center h-96 !justify-start"
              assetOrder={1}
              h4Order={2}
            />
        </GridContainer>
    </section>

        <section className='m-auto max-parent-grid-container-width pt-20'>
            <GridContainer gridCols="grid-cols-1 text-center">
                <GridChild 
                  childId={98}
                  customHeaderCss="font-medium"
                  childName="theManagement"
                />
            </GridContainer>
        </section>

    <ClienteleScroller scrollerApiId={1} slideDirection="Backwards" />
    </>
  )
}