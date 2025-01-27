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

export default function Skills() {
    return (
    <div className="h-screen" id="skills">
        <div className="title-with-background">
          <h2 className="font-bold text-2xl">Skills</h2>
          <p className="font-bold text-6xl">Hall of fame</p>
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-12">
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <HomeModernIcon className="size-12"/>
                    <h3 className="tracking-wide text-xl">Architecture design and implementation.</h3>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <RocketLaunchIcon className="size-12"/>
                    <h3 className="tracking-wide text-2xl">System orchestration.</h3>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <LinkIcon className="size-12"/>
                    <h3 className="tracking-wide text-2xl">Continuous integration and deployment.</h3>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <AdjustmentsHorizontalIcon className="size-12"/>
                    <h3 className="tracking-wide text-2xl">API Planning and development.</h3>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <GlobeEuropeAfricaIcon className="size-12"/>
                    <h3 className="tracking-wide text-2xl">Web Application development.</h3>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <DevicePhoneMobileIcon className="size-12"/>
                    <h3 className="tracking-wide text-2xl">Mobile Application development.</h3>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <WrenchIcon className="size-12"/>
                    <h3 className="tracking-wide text-2xl">Web Scrapping.</h3>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <CogIcon className="size-12"/>
                    <h3 className="tracking-wide text-2xl">Automations.</h3>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <CircleStackIcon className="size-12"/>
                    <h3 className="tracking-wide text-2xl">Database design and implementation.</h3>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <CubeTransparentIcon className="size-12"/>
                    <h3 className="tracking-wide text-2xl">Resource gathering and documentation.</h3>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <UserGroupIcon className="size-12"/>
                    <h3 className="tracking-wide text-2xl">Team management.</h3>
                </div>
            </div>
        </div>
      </div>
      );
}