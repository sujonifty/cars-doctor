
const ServiceCard = ({Service}) => {
    const {title,img,price}=Service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price: ${price}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;