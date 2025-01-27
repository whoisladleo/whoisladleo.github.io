import { 
    NavLink, 
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

export const navItems: NavLink[] = [
    {
        name: 'Home',
        url: '#home',
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
            'Directing all technical aspects of the project, including key design and architecture decisions, ensuring a scalable and efficient platform.',
            'Leading a cross-functional team to build, maintain, and optimize a user-friendly health ecosystem platform.',
            'Designing and implementing system and task automations to enhance operational efficiency.',
            'Managing continuous integration and deployment pipelines to support seamless platform updates.',
            'Collaborating with stakeholders to ensure satisfaction and alignment with project goals.',
            'Developing and executing a comprehensive product roadmap to guide strategic growth.',
            'Overseeing resource management and allocation to optimize team productivity and project delivery.',
            'Establishing and maintaining relationships with investors to secure funding and support.',
            'Leading governance and decision-making processes to uphold project integrity and long-term vision.'
        ],
    },
    {
        title: 'Simba Money / Consulting Leading Engineer',
        date: 'Oct/2024 - Present',
        brief: 'Managing your payments has never been easier. Enjoy low-cost transfers to friends and family across the globe. Instantly get a virtual card for all your online, in-store and international transactions. Simplicity, security and convenience.',
        responsibilities: [
            'Spearheading technical decisions for the project, including system design and architecture, ensuring scalability and performance.',
            'Leading the development team to build and maintain a user-friendly and functional platform.',
            'Overseeing system automations and integrations to streamline operations and improve efficiency.',
            'Implementing task automation processes to optimize productivity and reduce manual workloads.',
            'Managing continuous integration and deployment pipelines.'
        ],
    },
    {
        title: "Flowteller / Founding partner & CTO",
        date: 'Jun/2024 - Present',
        brief: 'Flowteller connects fintechs and providers to a network of offline agents to move cash, collect payments, activates and support customers. ',
        responsibilities: [
            'Directing all technical aspects of the project, including key design and architecture decisions, ensuring a scalable and efficient platform.',
            'Leading a cross-functional team to build, maintain, and optimize a user-friendly health ecosystem platform.',
            'Designing and implementing system and task automations to enhance operational efficiency.',
            'Managing continuous integration and deployment pipelines to support seamless platform updates.',
            'Collaborating with stakeholders to ensure satisfaction and alignment with project goals.',
            'Overseeing resource management and allocation to optimize team productivity and project delivery.',
            'Leading governance and decision-making processes to uphold project integrity and long-term vision.'
        ],
    },
    {
        title: "Tunzaa / Consulting DevOps Engineer",
        date: 'Jun/2022 - Dec/2022',
        brief: 'Tunzaa leverages a combination of habit-transforming techniques to improve financial habits of everyday Africans.',
        responsibilities: [
            'Lead and manage a cross-functional team to ensure efficient collaboration and project delivery.',
            'Oversee continuous integration and deployment processes, ensuring seamless updates and operational stability.',
            'Design and implement system automations and integrations to streamline workflows and improve system efficiency.',
            'Develop and execute product planning strategies to align with business goals and user needs.'
        ],
    },
    {
        title: "Ramani.io / Senior Software Engineer",
        date: 'Dec/2022 - Jun/2023',
        brief: 'Ramani is a YC-backed FinTech startup in East Africa that\'s engineering new financial infrastructure for Africa\'s Supply Chains.',
        responsibilities: [
            'Designed and implemented task automation processes to improve efficiency and reduce manual workloads.',
            'Developed web scraping and data extraction pipelines to gather valuable insights from diverse data sources.',
            'Performed data normalization and standardization to ensure consistency and accuracy across datasets.',
            'Managed dashboards, visualizations, and reporting tools to provide actionable insights for stakeholders.',
            'Developed and integrated APIs to enable seamless communication between systems and enhance platform functionality.'
        ],
    },
    {
        title: "AIM Group / System Software Developer",
        date: 'Jan/2020 - Sep/2022',
        brief: 'Leading Pan-African digital agency revolutionizing the advertising and digital space in Africa.',
        responsibilities: [
            'Designed and developed robust, user-friendly mobile applications to enhance accessibility and user engagement.',
            'Built scalable and responsive web applications, ensuring seamless functionality across devices and platforms.'
        ],
    },
    {
        title: "UCC / Software Developer",
        date: 'Oct/2018 - Jan/2020',
        brief: 'Excellence, Innovation and Technological Foresight.',
        responsibilities: [
            'Developed user-focused mobile applications to enhance healthcare accessibility and engagement.',
            'Designed and implemented Electronic Medical Record (EMR) modules to streamline healthcare workflows.',
            'Provided ongoing support and maintenance for EMR applications, ensuring reliability and optimal performance.'
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
        icon: <HomeModernIcon className="size-6"/>,
    },
    {
        name: 'System orchestration.',
        icon: <RocketLaunchIcon className="size-6"/>,
    },
    {
        name: 'Continuous integration and deployment.',
        icon: <LinkIcon className="size-6"/>,
    },
    {
        name: 'API Planning and development.',
        icon: <AdjustmentsHorizontalIcon className="size-6"/>,
    },
    {
        name: 'Web Application development.',
        icon: <GlobeEuropeAfricaIcon className="size-6"/>,
    },
    {
        name: 'Mobile Application development.',
        icon: <DevicePhoneMobileIcon className="size-6"/>,
    },
    {
        name: 'Web scrapping.',
        icon: <WrenchIcon className="size-6"/>,
    },
    {
        name: 'Automations.',
        icon: <CogIcon className="size-6"/>,
    },
    {
        name: 'Database design and implementation.',
        icon: <CircleStackIcon className="size-6"/>,
    },
    {
        name: 'Resource gathering and documentation.',
        icon: <CubeTransparentIcon className="size-6"/>,
    },
    {
        name: 'Team management.',
        icon: <UserGroupIcon className="size-6"/>,
    }
]