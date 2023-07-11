import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

export const getProducts =  async (): Promise<ProductProps[]> => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  
  const products = response.data.map( (product) => {
    const price = product.default_price as Stripe.Price

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
  
  return products
}