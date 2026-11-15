import { Link } from "react-router-dom";
import Couch from "@/data/images/couch.png";
import { Button } from "@components/ui/button";
import CarouselCard from "@/components/products/CarouselCard";
import BlogCard from "@/components/blogs/BlogCard";
import { products } from "@/data/products";
import { posts } from "@/data/posts";
import ProductCard from "@/components/products/ProductCard";

const samplePosts = posts.slice(0, 3);

const Title = ({
  title,
  href,
  sideText,
}: {
  title: string;
  href: string;
  sideText: string;
}) => (
  <div className="mt-28 mb-10 flex flex-col px-4 md:justify-between md:px-0 lg:flex-row">
    <h2 className="mb-4 text-2xl font-bold md:mb-0">{title}</h2>
    <Link to={href} className="text-muted-foreground font-semibold underline">
      {sideText}
    </Link>
  </div>
);
function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        {/* Text Section */}
        <div className="my-8 text-center lg:mt-16 lg:mb-0 lg:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-green-950 lg:mb-8 lg:text-6xl">
            Modern Interior Design Studio
          </h1>
          <p className="mb-6 lg:mb-8">
            Furniture is an essential component of any living space, providing
            functionaluty, confort, and aesthetic appeal.
          </p>

          <div className="">
            <Button
              render={<Link to="#">Shop Now</Link>}
              className="mr-2 rounded-full bg-orange-300 px-8 py-6 text-base font-bold"
            />
            <Button
              render={<Link to="#">Explore</Link>}
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-bold"
            />
          </div>
        </div>

        {/* Image Section */}
        <img src={Couch} alt="Couch" className="h-auto w-full" />
      </div>
      <CarouselCard products={products} />
      <Title
        title="Feature Products"
        href="/products"
        sideText="View All Products"
      />
      <ProductCard />
      <Title title="Recent Blog" href="/blogs" sideText="View All Posts" />
      <BlogCard posts={samplePosts} />
    </div>
  );
}

export default Home;
