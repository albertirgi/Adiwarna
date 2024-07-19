import { Link } from "react-router-dom";

const category = () => {
  return (
    <div>
      <Link to="/category/thesis">Thesis</Link>
      <Link to="/category/campaign-strategy">Campaign Strategy</Link>
      <Link to="/category/brand-and-product-innovation">Brand and Product Innovation</Link>
      <Link to="/category/graphic-design">Graphic Design</Link>
      <Link to="/category/social-contribution">Social Contribution</Link>
    </div>
  );
};

export default category;
