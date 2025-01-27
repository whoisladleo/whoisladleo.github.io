import { 
    Link, 
    PageTitle, 
    PortfolioItem, 
    Skill
} from "@/data/do";
import { 
    AdjustmentsHorizontalIcon,
    CircleStackIcon, 
    CogIcon, 
    CubeTransparentIcon, 
    DevicePhoneMobileIcon, 
    GlobeEuropeAfricaIcon, 
    HomeModernIcon, 
    LinkIcon, 
    RocketLaunchIcon,
    UserGroupIcon, 
    WrenchIcon 
} from "@heroicons/react/16/solid";

export const navItems: Link[] = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Skills',
        url: '#skills',
    },
    {
        name: 'Portfolio',
        url: '#portfolio',
    },
]

export const portfolioItems: PortfolioItem[] = [
    {
        title: 'AfyaHewani / Founder & CEO',
        date: 'Jun/2024 - Present',
        brief: 'AfyaHewani is an ecosystem that bridges the gap between insurers, health care providers and patients.',
        responsibilities: [
            'Leading technical decision of the project, making key designs and architecture decisions.',
            'Leading the team that builds and maintains the platform, ensuring it is functional and user-friendly.',
            'Handling system automations and integrations.',
            'Task automations.',
            'Continous integration and deployment.',
            'Ensure stake holder satisfaction.',
            'Plan and develop the product roadmap.',
            'Resource management and allocation.',
            'Investor relations.',
            'Decision making and governance.'
        ],
    },
    {
        title: 'Simba Money / Consulting Leading Engineer',
        date: 'Oct/2024 - Present',
        brief: 'Managing your payments has never been easier. Enjoy low-cost transfers to friends and family across the globe. Instantly get a virtual card for all your online, in-store and international transactions. Simplicity, security and convenience.',
        responsibilities: [
            'Leading technical decision of the project, making key designs and architecture decisions.',
            'Leading the team that builds and maintains the platform, ensuring it is functional and user-friendly.',
            'Handling system automations and integrations.',
            'Task automations.',
            'Continous integration and deployment.',
        ],
    },
    {
        title: "Flowteller / Founding partner & CTO",
        date: 'Jun/2024 - Present',
        brief: 'Flowteller connects fintechs and providers to a network of offline agents to move cash, collect payments, activates and support customers. ',
        responsibilities: [
            'Leading technical decision of the project, making key designs and architecture decisions.',
            'Leading the team that builds and maintains the platform, ensuring it is functional and user-friendly.',
            'Handling system automations and integrations.',
            'Task automations.',
            'Continous integration and deployment.',
            'Ensure stake holder satisfaction.',
            'Decision making and governance.'
        ],
    },
    {
        title: "Tunzaa / Consulting DevOps Engineer",
        date: 'Jun/2022 - Dec/2022',
        brief: 'Tunzaa leverages a combination of habit-transforming techniques to improve financial habits of everyday Africans',
        responsibilities: [
            'Team management.',
            'Continous integration and deployment.',
            'Handling system automations and integrations.',
            'Product planning and development.',
        ],
    },
    {
        title: "Ramani.io / Senior Software Engineer",
        date: 'Dec/2022 - Jun/2023',
        brief: 'Ramani is a YC-backed FinTech startup in East Africa that\'s engineering new financial infrastructure for Africa\'s Supply Chains.',
        responsibilities: [
            'Task automations.',
            'Web scraping and data extraction.',
            'Data normalizations and standardizations.',
            'Dashboard management, visualizations and reporting.',
            'API development and integration.',
        ],
    },
    {
        title: "AIM Group / System Software Developer",
        date: 'Jan/2020 - Sep/2022',
        brief: 'Leading Pan-African digital agency revolutionizing the advertising and digital space in Africa.',
        responsibilities: [
            'Building mobile applications.',
            'Building web applications.',
        ],
    },
    {
        title: "UCC / Software Developer",
        date: 'Oct/2018 - Jan/2020',
        brief: 'Excellence, Innovation and Technological Foresight.',
        responsibilities: [
            'Develop mobile applications.',
            'Develop EMR modules.',
            'Support EMR Applications.'
        ],
    },
]

export const skillTitle: PageTitle = {
    title: 'Skills',
    subtitle: 'Hall of fame.',
}

export const portfolioTitle: PageTitle = {
    title: 'Portfolio',
    subtitle: 'Real world practice.',
}

export const skills: Skill[] = [
    {
        name: 'Architecture design and implementation.',
        icon: <HomeModernIcon className="size-12"/>,
    },
    {
        name: 'System orchestration.',
        icon: <RocketLaunchIcon className="size-12"/>,
    },
    {
        name: 'Continuous integration and deployment.',
        icon: <LinkIcon className="size-12"/>,
    },
    {
        name: 'API Planning and development.',
        icon: <AdjustmentsHorizontalIcon className="size-12"/>,
    },
    {
        name: 'Web Application development.',
        icon: <GlobeEuropeAfricaIcon className="size-12"/>,
    },
    {
        name: 'Mobile Application development.',
        icon: <DevicePhoneMobileIcon className="size-12"/>,
    },
    {
        name: 'Web scrapping.',
        icon: <WrenchIcon className="size-12"/>,
    },
    {
        name: 'Automations.',
        icon: <CogIcon className="size-12"/>,
    },
    {
        name: 'Databse design and implementation.',
        icon: <CircleStackIcon className="size-12"/>,
    },
    {
        name: 'Resource gathering and documentation.',
        icon: <CubeTransparentIcon className="size-12"/>,
    },
    {
        name: 'Team management.',
        icon: <UserGroupIcon className="size-12"/>,
    }
]