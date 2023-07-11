'use client'

import { HomeContainer } from "@/styles/page/home";
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

type SliderWrapperProps = {
  children: React.ReactNode;
  className?: string;
}

export const SliderWrapper = ({children, className}: SliderWrapperProps) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {children}
    </HomeContainer>
  )

}