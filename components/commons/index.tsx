import dynamic from "next/dynamic";

export const components = {
  background: dynamic(() => import("./background")),
  banner_video: dynamic(() => import("./bannerVideo")),
  button: dynamic(() => import("./button")),
  discription: dynamic(() => import("./discription")),
  icon: dynamic(() => import("./icon")),
  image: dynamic(() => import("./image")),
  link: dynamic(() => import("./link")),
  text: dynamic(() => import("./text")),
  title_complex: dynamic(() => import("./titleComplex")),
  title_header: dynamic(() => import("./titleHeader")),
  title_header_gradient: dynamic(() => import("./titleHeaderGradient")),
  
  text_custom10: dynamic(() => import("./TextCustom10")),
  accorditions: dynamic(() => import("./accorditions")),
  accorditions: dynamic(() => import("./accorditions")),
  : dynamic(() => import("./")),
  : dynamic(() => import("./")),
  accorditions: dynamic(() => import("./accorditions")),
  accorditions: dynamic(() => import("./accorditions")),
  text_custom09: dynamic(() => import("./TextCustom09")),
  text_custom09: dynamic(() => import("./TextCustom09")),
  accorditions: dynamic(() => import("./accorditions")),
};
