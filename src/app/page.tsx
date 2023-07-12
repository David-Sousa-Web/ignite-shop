import { Product } from "@/styles/page/home";
import Image from "next/image";

import 'keen-slider/keen-slider.min.css'

import { getProducts } from "@/services/get-products";
import { SliderWrapper } from "@/components/slide-wrapper";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();

  return (
    <SliderWrapper className="keen-slider">   
      {products.map((product) => {
        return (
          <Link href={`produtos/${product.id}`} key={product.id}>
            <Product  className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt=""/>
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        )
      })}
    </SliderWrapper>
  )
}