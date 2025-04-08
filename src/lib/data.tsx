import { 
    NavLink, 
    PageTitle, 
    PortfolioItem, 
    Skill
} from "@/data/do";
import { 
    ArrowTrendingUpIcon,
    CloudIcon, 
    FingerPrintIcon, 
    HandThumbUpIcon,
    PlayPauseIcon, 
    PresentationChartLineIcon, 
    PuzzlePieceIcon,
    UserGroupIcon, 
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
        title: 'AfyaHewani / Founder & Solutions Architect',
        date: 'Jun/2024 - Present',
        brief: 'Founded and led the engineering, product, and infrastructure strategy for Afya Hewani, a digital platform reshaping healthcare finance through smarter insurance and patient workflows.',
        responsibilities: [
            'Architected a modular system designed to streamline onboarding, claims, and underwriting workflows across hospitals and insurers.',
            'Developed a mobile-first self-check-in feature reducing onboarding time from 20+ minutes to under 60 seconds.',
            'Implemented a secure, event-driven architecture with end-to-end encryption, access control, and 2FA.',
            'Oversaw engagements with 4 insurance companies during product discovery; pilots in preparation.',
            'Leading roadmap development for actuarial model integration, real-time fraud checks, and coverage transparency tools.'
        ],
    },
    {
        title: 'Simba Money / Senior Lead Engineer',
        date: 'Oct/2024 - Present',
        brief: 'Senior leadership role driving architecture and development of Simba Money’s cross-border digital finance platform.',
        responsibilities: [
            'Led end-to-end product development and CI/CD optimization for regulatory-compliant transactions.',
            'Mentored engineers and implemented team-wide engineering best practices.',
            'Introduced observability and deployment standards that improved platform stability and delivery speed.',
            'Oversaw vendor and procurement pipelines aligned with scale-up strategy.'
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
        brief: 'Responsible for DevOps strategy and performance tuning for a fintech savings and micro-payments platform.',
        responsibilities: [
            'Reduced deployment times by 80% by implementing Git-based CI/CD workflows.',
            'Built fault-tolerant infrastructure and system runbooks to increase uptime and developer autonomy.'
        ],
    },
    {
        title: "Ramani.io / Senior Software Engineer",
        date: 'Dec/2022 - Jun/2023',
        brief: 'Led backend modernization and performance initiatives for a distribution and credit facilitation platform.',
        responsibilities: [
            'Built scalable backend APIs and services powering large inventory systems across East Africa.',
            'Automated critical onboarding and credit workflows, reducing processing time by 40%.',
            'Defined internal code standards and contributed to engineering culture development.'
        ],
    },
    {
        title: "AIM Group / System Software Developer",
        date: 'Jan/2020 - Sep/2022',
        brief: 'Delivered full-stack marketplace platforms with scalable architecture and resilient codebases.',
        responsibilities: [
            'Led development for key classifieds and marketplace features.',
            'Built integrations and internal APIs, and improved testing and deployment cycles.'
        ],
    },
    {
        title: "UCC / Software Developer",
        date: 'Oct/2018 - Jan/2020',
        brief: 'Delivered healthtech solutions in collaboration with public sector partners.',
        responsibilities: [
            'Built mobile and EMR components that improved healthcare access and clinical data workflows.',
            'Provided support and enhancements for mission-critical deployments across public health centers.'
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
        name: 'Technical & Product Vision',
        icon: <PuzzlePieceIcon className="size-6"/>,
    },
    {
        name: 'Team Building & Engineering Leadership',
        icon: <UserGroupIcon className="size-6"/>,
    },
    {
        name: 'Scalable Systems Architecture',
        icon: <ArrowTrendingUpIcon className="size-6"/>,
    },
    {
        name: 'Agile and Lean Methodologies',
        icon: <HandThumbUpIcon className="size-6"/>,
    },
    {
        name: 'Cloud Infrastructure (AWS, Azure, Heroku)',
        icon: <CloudIcon className="size-6"/>,
    },
    {
        name: 'DevOps & CI/CD Automation.',
        icon: <PlayPauseIcon className="size-6"/>,
    },
    {
        name: 'Stakeholder Alignment & Digital Strategy',
        icon: <FingerPrintIcon className="size-6"/>,
    },
    {
        name: 'Data-Driven Innovation in Fintech & Healthtech.',
        icon: <PresentationChartLineIcon className="size-6"/>,
    }
]