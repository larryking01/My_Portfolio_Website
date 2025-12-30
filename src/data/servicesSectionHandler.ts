import mobile1 from '../StaticFiles/mobile1.png'
import website1 from '../StaticFiles/website1.png'
import website2 from '../StaticFiles/website2.png'


export interface ServiceItem {
    serviceType: string,
    serviceDetails: string,
    icon: string
}



export let servicesArray: ServiceItem[] = [
    { serviceType: 'Website development', serviceDetails: 'Websites should communicate to your intended audience as you would in-person. That is why I strive to build responsive, interactive websites like they should be in our modern era.', icon: website1 },
    { serviceType: 'Web app development', serviceDetails: 'You may not be able to reach all your users, but your web app can. Let me give you the best assistant possible for your needs.', icon: website2 },
    { serviceType: 'Mobile app development', serviceDetails: "Mobile devices come in handy these days and that is why you need your software or project running on one to reach a wide range of users. Don't compromise", icon: mobile1 }    
]
