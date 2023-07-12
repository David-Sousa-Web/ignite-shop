import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/page/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo maxime asperiores placeat doloribus id, nobis minus corporis hic sed, iusto quos eveniet perspiciatis. Placeat similique expedita veniam iusto eligendi.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>

    </ProductContainer>
  )
}

