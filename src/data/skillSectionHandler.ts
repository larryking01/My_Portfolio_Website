import js_logo from '../StaticFiles/js_logo.png'
import ts_logo from '../StaticFiles/ts_logo.png'
import graphql_logo from '../StaticFiles/graphql_logo.png'
import postgresql_logo from '../StaticFiles/postgresql_logo.png'
import react_js_logo from '../StaticFiles/react_logo.png'
import angular_js_logo from '../StaticFiles/angular_logo.png'
import my_sql_logo from '../StaticFiles/my_sql_logo.png'
import react_bootstrap_logo from '../StaticFiles/react_bootstrap_logo.png'
import express_js_logo from '../StaticFiles/express_js_logo.png'
import tailwind_logo from '../StaticFiles/tailwind_logo.png'
import mongo_logo from '../StaticFiles/mongo_image.png'
import firebase_logo from '../StaticFiles/firebase_logo.png'
import supabase_logo from '../StaticFiles/supabase_logo.png'
import docker_logo from '../StaticFiles/docker_logo.png'
import next_js_logo from '../StaticFiles/next_js logo.png'
import dart_logo from '../StaticFiles/dart_logo.png'
import flutter_logo from '../StaticFiles/flutter_logo.webp'


export interface SkillItem {
    name: string,
    proficiency: number,
    skill_logo?: string
}


export let skillsArray: SkillItem[] = [
    { name: 'JavaScript', proficiency: 80, skill_logo: js_logo },
    { name: 'TypeScript', proficiency: 72, skill_logo: ts_logo },
    { name: 'Dart', proficiency: 72, skill_logo: dart_logo },
    { name: 'React JS', proficiency: 88, skill_logo: react_js_logo },
    { name: 'Flutter', proficiency: 89, skill_logo: flutter_logo },
    { name: 'React Native', proficiency: 71, skill_logo: react_js_logo },
    { name: 'Angular', proficiency: 69, skill_logo: angular_js_logo },
    { name: 'GraphQL', proficiency: 78, skill_logo: graphql_logo },
    { name: 'Next JS', proficiency: 69, skill_logo: next_js_logo },
    { name: 'PostgreSQL', proficiency: 82, skill_logo: postgresql_logo },
    { name: 'My SQL', proficiency: 80, skill_logo: my_sql_logo },
    { name: 'React-Bootstrap', proficiency: 87, skill_logo: react_bootstrap_logo },
    { name: 'Express JS', proficiency: 80, skill_logo: express_js_logo },
    { name: 'Tailwind CSS', proficiency: 94, skill_logo: tailwind_logo },
    { name: 'Mongo DB', proficiency: 72, skill_logo: mongo_logo },
    { name: 'Firebase', proficiency: 71, skill_logo: firebase_logo },
    { name: 'Supabase', proficiency: 69, skill_logo: supabase_logo },
    { name: 'Docker', proficiency: 69, skill_logo: docker_logo },

]

