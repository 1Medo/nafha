import CustomBreadCrumb from "@/app/components/CustomBreadcrumb";
import products from "@/constants/products";
import OneProductInfo from "@/app/components/OneProductInfo";
import BannerSection from "@/app/components/BannerSection";
import OneProductRatesSection from "@/app/components/OneProductRatesSection";

export default async function ProductPageServer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>المنتج غير موجود</p>;

  return (
    <>
    <CustomBreadCrumb pageName="تفاصيل المنتج" parentHref="/products" parentName="المنتجات" />
    <OneProductInfo product={product} />
    <OneProductRatesSection
        rate={product.rate}
        ratesNumber={product.ratesNumber}/>
    <BannerSection />
    </>
  )};