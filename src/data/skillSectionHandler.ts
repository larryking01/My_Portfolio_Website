import js_logo from '../assets/js_logo.png'
import ts_logo from '../assets/ts_logo.png'
import graphql_logo from '../assets/graphql_logo.png'
import react_js_logo from '../assets/react_logo.png'
import angular_js_logo from '../assets/angular_logo.png'
import my_sql_logo from '../assets/my_sql_logo.png'
import scss_logo from '../assets/scss_logo.png'
import express_js_logo from '../assets/express_js_logo.png'
import tailwind_logo from '../assets/tailwind_logo.png'
import mongo_logo from '../assets/mongo_image.png'
import firebase_logo from '../assets/firebase_logo.png'
import ngrx_logo from '../assets/ngrx_logo.svg'
import supabase_logo from '../assets/supabase_logo.png'
import react_native_logo from '../assets/react_native_logo.png'
import jest_logo from '../assets/jest_logo.webp'
import aws_logo from '../assets/aws_logo.png'
import dart_logo from '../assets/dart_logo.png'
import rxjs_logo from '../assets/rxjsLogo.png'

export interface SkillItem {
    name: string,
    proficiency: number,
    skill_logo?: string
}


export let skillsArray: SkillItem[] = [
    { name: 'JavaScript', proficiency: 80, skill_logo: js_logo },
    { name: 'TypeScript', proficiency: 72, skill_logo: ts_logo },
    { name: 'Dart', proficiency: 72, skill_logo: dart_logo },
    { name: 'Angular', proficiency: 75, skill_logo: angular_js_logo },
    { name: 'React', proficiency: 88, skill_logo: react_js_logo },
    { name: 'GraphQL', proficiency: 78, skill_logo: graphql_logo },
    { name: 'RXJS', proficiency: 69, skill_logo: rxjs_logo },
    { name: 'AWS', proficiency: 82, skill_logo: aws_logo },
    { name: 'MySQL', proficiency: 74, skill_logo: my_sql_logo },
    { name: 'React Native', proficiency: 71, skill_logo: react_native_logo },
    { name: 'Jest', proficiency: 87, skill_logo: jest_logo },
    { name: 'Express JS', proficiency: 80, skill_logo: express_js_logo },
    { name: 'Tailwind CSS', proficiency: 94, skill_logo: tailwind_logo },
    { name: 'Mongo DB', proficiency: 72, skill_logo: mongo_logo },
    { name: 'Firebase', proficiency: 71, skill_logo: firebase_logo },
    { name: 'Supabase', proficiency: 69, skill_logo: supabase_logo },
    { name: 'NgRx', proficiency: 69, skill_logo: ngrx_logo },
    { name: 'SCSS', proficiency: 89, skill_logo: scss_logo },

]

