import { CiHome, CiGrid41, CiShoppingTag, CiTimer, CiChat1 } from "react-icons/ci";

const navLinks = [
  { label: "الرئيسية", href: "/", icon: <CiHome size={24}/> },
  { label: "المنتجات", href: "/products", icon: <CiGrid41 size={24}/> },
  { label: "الأكثر مبيعًا", href: "#bestSales", icon: <CiShoppingTag size={24}/> },
  { label: "الأحدث", href: "#newComes", icon: <CiTimer size={24}/> },
  { label: "آراء العملاء", href: "#feedback", icon: <CiChat1 size={24}/> },
];

export default navLinks;