import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
// import { Icons } from "@/components/icons";
import { HomeIcon } from "@heroicons/react/24/outline";
import Newsletter from "@/components/ui/news-letter";

function Footer() {
  return (
    <footer className="ml-4 w-full border-t lg:ml-0">
      <div className="container mx-auto flex flex-col justify-between p-8 pt-6 pb-8 lg:flex-row lg:py-6">
        <section className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-20">
          <section className="">
            <Link to="/" className="flex items-center space-x-2">
              <HomeIcon className="size-5" />
              <span className="font-bold">{siteConfig.name}</span>
            </Link>
          </section>
          <section className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-4">
            {siteConfig.footerNav.map((foot) => (
              <div key={foot.title} className="space-y-3">
                <h4 className="font-medium">{foot.title}</h4>
                <ul>
                  {foot.items.map((item) => (
                    <li key={`${foot.title}-${item.title}`}>
                      <Link
                        to={item.href}
                        target={item.external ? "_blank" : undefined}
                        className="text-muted-foreground hover:text-foreground text-sm"
                      >
                        {item.title}
                        <span className="sr-only">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
        <div className="mt-10 flex items-start justify-between gap-4 lg:mt-0 lg:w-75">
          <Newsletter />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
