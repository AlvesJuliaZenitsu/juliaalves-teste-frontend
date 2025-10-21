import { Banner } from "../components/banner";
import { Brands } from "../components/brands";
import { Categories } from "../components/categories";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { Rigths } from "../components/right reserved";
import { ShowCase } from "../components/showcase";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <ShowCase hasProductMenu={true} />
      <Partners />
      <ShowCase hasProductMenu={false} />
      <Partners />
      <Brands />
      <ShowCase hasProductMenu={false} />
      <Newsletter />
      <Footer />
      <Rigths />
    </>
  );
}
