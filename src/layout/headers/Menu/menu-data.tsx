import { StaticImageData } from "next/image";
import RightArrowMenu from "@/svg/home-1/RightArrowMenu";
// home demo
//import home_demo_1 from "@/assets/img/menu/home-1.jpg";

// type MenuData =  
interface menu_data_type  {
  id: number;
  title: string;
  link: string;
  has_dropdown?: boolean;
  has_megamenu?: boolean;  
  img_dropdown?: boolean;  
  service_dropdown?: boolean;  
  blog_dropdown?: boolean;  
  sub_menus?: {
      link?: string | any;
      title?: string;
      demo_img?: StaticImageData | any ; 
      layout?: {
        link: string;
        title: string;
      }[];
  }[];
  banner_sub_title?: string;
  banner_title?: JSX.Element;
  inner_title?: string;
  icon?: JSX.Element;
  m_banner?: StaticImageData;
}

// menu data 
const menu_data: menu_data_type[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Features",    
    link: "/#feature_area",
    has_dropdown: false, 
  },
  {
    id: 3,
    title: "Price",    
    link: "/#price_area",
    has_dropdown: false, 
  },
  {
    id: 4,
    title: "Contact",
    link: "/#contact",
    has_dropdown: false,     
  }, 
  {
    id: 5,
    title: "Eazy AI",
    link: "/#eazy_ai",
    has_dropdown: false,     
  },   
];
export default menu_data;