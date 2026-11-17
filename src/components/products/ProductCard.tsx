import { Link } from "react-router-dom";
import type { Product } from "@/types/";
// import {products} from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Icons } from "@/components/icons";
import { formatPrice } from "@/lib/utils";

// npx shadcn@latest add aspect-ratio
interface ProductProps {
  product: Product;
}

function ProductCard({ product }: ProductProps) {
  return (
    <Card className="size-full overflow-hidden rounded-lg">
      <Link to={`/products/${product.id}`} aria-label={product.name}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src={product.images[0]}
              alt="product image"
              className="size-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="space-y-1.5">
          <CardTitle className="line-clamp-1 text-lg font-semibold">
            {product.name}
          </CardTitle>
          <CardDescription className="line-clamp-1 text-sm">
            {formatPrice(product.price)}
            {product.discount > 0 && (
              <span className="ml-2 font-extralight line-through">
                {formatPrice(product.discount)}
              </span>
            )}
          </CardDescription>
        </CardContent>
      </Link>
      <CardFooter className="flex-col gap-2 p-4 pt-1">
        {product.status === "sold" ? (
          <Button
            type="submit"
            size="sm"
            disabled={true}
            className="h-8 w-full rounded-sm font-bold"
            aria-label="Sold Out"
          >
            Sold Out
          </Button>
        ) : (
          <Button
            type="submit"
            size="sm"
            disabled={true}
            className="h-8 w-full rounded-sm font-bold"
            aria-label="Add to Cart"
          >
            <Icons.plus className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
