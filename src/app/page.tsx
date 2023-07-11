'use client'

import { HomeContainer, Product } from "@/styles/page/home";
import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";

interface HomeProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ product }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  console.log(product)
  

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {product.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt=""/>
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}
      
      
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps =  async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  console.log(response.data)
  
  const product = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    console.log(response.data)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount as number / 100)
    }
  })

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 2,
  }
}
