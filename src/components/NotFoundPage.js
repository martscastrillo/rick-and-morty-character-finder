import "../styles/NotFoundPage.scss";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
	return (
		< div className="diverror">
		<p className="error">
			The page does not exist{" "}
			<span className="div">
				<span className="span"> It seems that there is nothing here.</span>
				<span className="span"> Go back and try another page.</span>
			</span>
			
		</p>
		<Link to="/" className="linkerror">
				
		<i className="fa-solid fa-chevron-left"></i>Return
	</Link>
	</div>
	);
};
export default NotFoundPage;
