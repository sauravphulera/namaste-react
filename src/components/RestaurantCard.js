import { UTILS } from '../constants/constants';


const RestaurantCart = ({ resData }) => {
	const { name, cuisines, avgRating, costForTwoString, deliveryTime } = resData
	return (
		//resData.cloudinaryImageId
		<div className="res-card">
			<img className="res-logo" alt="res-logo" src={UTILS.imageURLRestaurant + resData.cloudinaryImageId} />
			<h3 className="res-details">{name}</h3>
			<div className="res-details">{cuisines.join(", ")}</div>
			<div className="res-details">{avgRating} Stars</div>
			<div className="res-details">{costForTwoString}</div>
			<div className="res-details">{deliveryTime} minutes</div>
		</div>
	)
}

export default RestaurantCart;