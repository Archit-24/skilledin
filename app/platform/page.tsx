import { HeroParallaxDemo } from '@/components/Aboutparalex'
import { TimelineDemo } from '@/components/AboutTimeline'
import { AnimatedTooltipPreview } from '@/components/team'
import { NavbarDemo } from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div>
      <NavbarDemo/>
      <HeroParallaxDemo/>
      <TimelineDemo/>
      <AnimatedTooltipPreview/>
    </div>
  )
}

export default page
