import PriceOption from "./PriceOption"
const PriceOptions = () => {

    const priceOptions =[
          {
            "id": 1,
            "name": "Basic Plan",
            "price": 19.99,
            "features": [
              "10GB of storage",
              "Unlimited bandwidth",
              "Access to basic support",
              "Mobile app access",
              "Monthly usage reports",
              "Basic security features"
            ]
          },
          {
            "id": 2,
            "name": "Standard Plan",
            "price": 39.99,
            "features": [
              "50GB of storage",
              "Unlimited bandwidth",
              "24/7 customer support",
              "Advanced analytics",
              "Multi-device synchronization",
              "Enhanced security features"
            ]
          },
          {
            "id": 3,
            "name": "Premium Plan",
            "price": 59.99,
            "features": [
              "100GB of storage",
              "Unlimited bandwidth",
              "Priority customer support",
              "Access to premium content",
              "Customizable templates",
              "Advanced security suite",
              "Dedicated account manager"
            ]
          }
        ]
      

  return (
    <div className="m-12">
        <h1 className="uppercase md:text-3xl text-xl text-blue-500 font-bold text-center my-10">Best price offer for your data storage</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {
                priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
      
    </div>
  )
}

export default PriceOptions
