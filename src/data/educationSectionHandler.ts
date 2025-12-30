import grad_cap2 from '../StaticFiles/grad_cap2.png'


export interface EducationItem {
    school: string,
    study_period: string,
    programme: string,
    school_icon: string
}


export let educationArray: EducationItem[] = [
    { school: 'University of Ghana, Legon', programme: 'BSc. Computer Science', study_period: '2017 - 2021', school_icon: grad_cap2 },
]

