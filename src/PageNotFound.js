import { Link } from "react-router-dom";
import pageNotFoundImage from "./assets/page_not_found.png";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>Sorry</h1>
      <img src={pageNotFoundImage} alt="PNFImage" className="PNFImage"></img>
      <p>
        Page not found... Return to the <Link to="/">home page</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
