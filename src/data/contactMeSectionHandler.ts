import email_icon from '../StaticFiles/email.png'
import phone_icon from '../StaticFiles/phone.png'
import linked_in from '../StaticFiles/linkedIn.png'
import git_hub from '../StaticFiles/github.png'


export interface ContactMeItem {
    icon: string,
    title: string,
    detail: string,
    url: string,
    hover?: string,
    target?: string
}


export const contactMeArray: ContactMeItem[] = [
    { icon: phone_icon, title: 'Contact Number', detail: '+233-(0)55-253-1004', url:'#', target: '' },
    { icon: email_icon, title: 'Email Address', detail: 'larryking8118@gmail.com', url:'#', target:'' },
    { icon: git_hub, title: 'Github', detail: 'https://github.com/larryking01', url:'https://github.com/larryking01', hover: 'cursor', target:'_blank' },
    { icon: linked_in, title: 'LinkedIn', detail: 'https://linkedin.com/in/larry-williams8118', url:'https://linkedin.com/in/larry-williams8118', hover: 'cursor', target:'_blank' },

]
