import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import type { Product } from "@/types";
import { Link } from "react-router-dom";

interface ProductsProps {
  products: Product[];
}
export default function CarouselCard({ products }: ProductsProps) {
  const [plugin] = React.useState(() =>
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <Carousel className="w-full" plugins={[plugin]}>
      <CarouselContent className="-ml-1">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-1/2 pl-1 lg:basis-1/3"
          >
            <div className="flex gap-2 p-4 lg:px-4">
              <img
                src={product.images[0]}
                alt={product.name}
                className="size-28"
                rounded-md
              />
              <div>
                <h3 className="line-clamp-1 text-sm font-bold">
                  {product.name}
                </h3>
                {/* <p className="my-2 text-sm text-gray-600">
                  {product.description.length > 55
                    ? product.description.substring(0, 55) + " ..."
                    : product.description}
                </p> */}
                <p className="my-2 line-clamp-2 text-sm text-gray-600">
                  {product.description}
                </p>
                <Link
                  to={`/products/${product.id}`}
                  className="text-sm font-semibold hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-8" />
      <CarouselNext className="-right-8" />
    </Carousel>
  );
}
