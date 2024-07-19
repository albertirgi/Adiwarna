import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Category from "./components/works/Category"
import Thesis from "./components/works/thesis/Thesis"
import CampaignStrategy from "./components/works/campaign-strategy/CampaignStrategy"
import BrandAndProductInnovation from "./components/works/brand-and-product-innovation/BrandAndProductInnovation"
import GraphicDesign from "./components/works/graphic-design/GraphicDesign"
import SocialContribution from "./components/works/social-contribution/SocialContribution"
import NamaPerancang1 from "./components/works/thesis/NamaPerancang1"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/thesis" element={<Thesis />} />
        <Route path="/category/campaign-strategy" element={<CampaignStrategy />} />
        <Route path="/category/brand-and-product-innovation" element={<BrandAndProductInnovation />} />
        <Route path="/category/graphic-design" element={<GraphicDesign />} />
        <Route path="/category/social-contribution" element={<SocialContribution />} />
        <Route path="/category/thesis/nama-perancang1" element={<NamaPerancang1 />} />
      </Routes>
    </>
  )
}

export default App