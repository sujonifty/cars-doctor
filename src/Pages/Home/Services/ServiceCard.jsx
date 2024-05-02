
const ServiceCard = ({Service}) => {
    const {title,img,price}=Service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="p-5 rounded-xl" src={img} alt="car's machine" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price: ${price}</p>
                    
                </div>
                <button className="btn m-4 md:mx-10 md:mb-10 bg-orange-600 hover:bg-orange-400 text-white font-bold">BUY NOW</button>

            </div>
        </div>
    );
};

export default ServiceCard;