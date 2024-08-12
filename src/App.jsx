import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Category from "./components/works/Category"
import Thesis from "./components/works/thesis/Thesis"
import CampaignStrategy from "./components/works/campaign-strategy/CampaignStrategy"
import BrandAndProductInnovation from "./components/works/brand-and-product-innovation/BrandAndProductInnovation"
import GraphicDesign from "./components/works/graphic-design/GraphicDesign"
import DigitalMedia from "./components/works/digital-media/DigitalMedia"
import Event from "./components/event/Event"
import EventDetail from "./components/event/EventDetail"
import Merch from "./components/merch/Merch"
import MerchDetail from "./components/merch/MerchDetail"
import ScrollToTop from "./components/global/ScrollToTop"
import GD1 from "./components/works/graphic-design/GD1"
import GD2 from "./components/works/graphic-design/GD2"
import GD3 from "./components/works/graphic-design/GD3"
import GD4 from "./components/works/graphic-design/GD4"
import GD5 from "./components/works/graphic-design/GD5"
import GD6 from "./components/works/graphic-design/GD6"
import GD7 from "./components/works/graphic-design/GD7"
import GD8 from "./components/works/graphic-design/GD8"
import GD9 from "./components/works/graphic-design/GD9"
import GD10 from "./components/works/graphic-design/GD10"
import GD11 from "./components/works/graphic-design/GD11"
import T1 from "./components/works/thesis/T1"
import T2 from "./components/works/thesis/T2"
import T3 from "./components/works/thesis/T3"
import T4 from "./components/works/thesis/T4"
import T5 from "./components/works/thesis/T5"
import T6 from "./components/works/thesis/T6"
import T7 from "./components/works/thesis/T7"
import T8 from "./components/works/thesis/T8"
import T9 from "./components/works/thesis/T9"
import T10 from "./components/works/thesis/T10"
import BP1 from "./components/works/brand-and-product-innovation/BP1"
import BP2 from "./components/works/brand-and-product-innovation/BP2"
import BP3 from "./components/works/brand-and-product-innovation/BP3"
import BP4 from "./components/works/brand-and-product-innovation/BP4"
import BP5 from "./components/works/brand-and-product-innovation/BP5"
import BP6 from "./components/works/brand-and-product-innovation/BP6"
import BP7 from "./components/works/brand-and-product-innovation/BP7"
import BP8 from "./components/works/brand-and-product-innovation/BP8"
import DM1 from "./components/works/digital-media/DM1"
import DM2 from "./components/works/digital-media/DM2"
import DM3 from "./components/works/digital-media/DM3"
import DM4 from "./components/works/digital-media/DM4"
import DM5 from "./components/works/digital-media/DM5"
import CS1 from "./components/works/campaign-strategy/CS1"
import CS2 from "./components/works/campaign-strategy/CS2"
import CS3 from "./components/works/campaign-strategy/CS3"
import CS4 from "./components/works/campaign-strategy/CS4"
import CS5 from "./components/works/campaign-strategy/CS5"
import CS6 from "./components/works/campaign-strategy/CS6"  


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/thesis" element={<Thesis />} />
        <Route path="/category/campaign-strategy" element={<CampaignStrategy />} />
        <Route path="/category/brand-and-product-innovation" element={<BrandAndProductInnovation />} />
        <Route path="/category/graphic-design" element={<GraphicDesign />} />
        <Route path="/category/digital-media" element={<DigitalMedia />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/merch/:id" element={<MerchDetail />} />
        <Route path="/category/graphic-design/1" element={<GD1 />} />
        <Route path="/category/graphic-design/2" element={<GD2 />} />
        <Route path="/category/graphic-design/3" element={<GD3 />} />
        <Route path="/category/graphic-design/4" element={<GD4 />} />
        <Route path="/category/graphic-design/5" element={<GD5 />} />
        <Route path="/category/graphic-design/6" element={<GD6 />} />
        <Route path="/category/graphic-design/7" element={<GD7 />} />
        <Route path="/category/graphic-design/8" element={<GD8 />} />
        <Route path="/category/graphic-design/9" element={<GD9 />} />
        <Route path="/category/graphic-design/10" element={<GD10 />} />
        <Route path="/category/graphic-design/11" element={<GD11 />} />
        <Route path="/category/thesis/1" element={<T1 />} />
        <Route path="/category/thesis/2" element={<T2 />} />
        <Route path="/category/thesis/3" element={<T3 />} />
        <Route path="/category/thesis/4" element={<T4 />} />
        <Route path="/category/thesis/5" element={<T5 />} />
        <Route path="/category/thesis/6" element={<T6 />} />
        <Route path="/category/thesis/7" element={<T7 />} />
        <Route path="/category/thesis/8" element={<T8 />} />
        <Route path="/category/thesis/9" element={<T9 />} />
        <Route path="/category/thesis/10" element={<T10 />} />
        <Route path="/category/brand-and-product-innovation/1" element={<BP1 />} />
        <Route path="/category/brand-and-product-innovation/2" element={<BP2 />} />
        <Route path="/category/brand-and-product-innovation/3" element={<BP3 />} />
        <Route path="/category/brand-and-product-innovation/4" element={<BP4 />} />
        <Route path="/category/brand-and-product-innovation/5" element={<BP5 />} />
        <Route path="/category/brand-and-product-innovation/6" element={<BP6 />} />
        <Route path="/category/brand-and-product-innovation/7" element={<BP7 />} />
        <Route path="/category/brand-and-product-innovation/8" element={<BP8 />} />
        <Route path="/category/digital-media/1" element={<DM1 />} />
        <Route path="/category/digital-media/2" element={<DM2 />} />
        <Route path="/category/digital-media/3" element={<DM3 />} />
        <Route path="/category/digital-media/4" element={<DM4 />} />
        <Route path="/category/digital-media/5" element={<DM5 />} />
        <Route path="/category/campaign-strategy/1" element={<CS1 />} />
        <Route path="/category/campaign-strategy/2" element={<CS2 />} />
        <Route path="/category/campaign-strategy/3" element={<CS3 />} />
        <Route path="/category/campaign-strategy/4" element={<CS4 />} />
        <Route path="/category/campaign-strategy/5" element={<CS5 />} />
        <Route path="/category/campaign-strategy/6" element={<CS6 />} />
      </Routes>
    </>
  )
}

export default App