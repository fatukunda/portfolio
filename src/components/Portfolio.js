import React from "react";
import TimeLineItem from "./TimeLineItem";
import diarynomicsImage from "../assets/images/diarynomics.png";
import authors_haven from "../assets/images/authors-haven.png";
import store_manager from "../assets/images/store-manager.png";
import TechButton from "./TechButton";
import "./style/portfolio.css";

const Portfolio = () => {
	return (
		<div className="col-md-8 mt-4 portfolio">
			<h4 className="project">Portfolio</h4>
			<ul className="timeline">
				<TimeLineItem
					project="Dairynomics"
					link="https://dairynomics.netlify.com/"
					period="Now"
					image={diarynomicsImage}
					description="Dairynomics helps dairy farmers in Kenya to manage their farming 
					economics. Farmers are able to register with the platform and access information 
					on how they can increase milk production. The platform also helps farmers to 
					anticipate how much they will earn from farming depending on different factors."
				/>
				<div>
					<h3 className="lead">Technologies used:</h3>
					<TechButton tech="Vue.js" />
					<TechButton tech="Vuex" />
					<TechButton tech="PHP/Laravel" />
				</div>
				<TimeLineItem
					project="Authors Haven"
					link="https://ah-frontend-valkyrie.herokuapp.com/"
					period="Sept - November 2018"
					image={authors_haven}
					description="A social platform for the creative at heart... Authors Haven brings together 
					like-minded authors to write and share ideas.The font-end was built with React-Redux and 
					the backend was built with python-django. I contributed to both projects."
				/>
				<div>
					<h3 className="lead">Technologies used:</h3>
					<TechButton tech="React" />
					<TechButton tech="Redux" />
					<TechButton tech="Python/Django" />
				</div>
				<TimeLineItem
					project="Store Manager"
					link="https://fatukunda.github.io/Store-Manager-UI/dist/"
					period="January - March 2019"
					image={store_manager}
					description="This project was built as part of my Andela bootcamp project.
					 Store manager enables store owners to manage their inventory, manage sales 
					 made by sales people and also monitor the performance of store attendants.
					  The application come enables the store owner to register store attendants."
				/>
				<div>
					<h3 className="lead">Technologies used:</h3>
					<TechButton tech="Python/Flask" />
					<TechButton tech="Vanilla JS" />
					<TechButton tech="HTML" />
					<TechButton tech="CSS" />
				</div>
			</ul>
		</div>
	);
};
export default Portfolio;
