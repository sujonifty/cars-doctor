import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl text-orange-500 font-bold">Our Services</h1>
                <h1 className="text-5xl font-bold">Our Services area</h1>
                <p className="pt-6">the majority have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    Services.map(Service => <ServiceCard key={Service._id} Service={Service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;