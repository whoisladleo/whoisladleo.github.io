export default function Welcome() {
    return (
        <div className="flex flex-col w-full min-h-screen justify-center pt-12 bg-circle section" id="home">
            <div className="flex flex-col justify-start p-6 md:p-12 lg:ml-12 text-start sm:w-full md:w-1/2 h-1/2">
                <h1 className="font-bold text-xl md:text-2xl mb-4">Hello, I am</h1>
                <h1 className="font-bold text-4xl md:text-6xl mb-4">Denis Rwelamila</h1>
                <h2 className="md:font-bold text-base md:text-3xl mb-8">Engineering better systems. Architecting digital futures.</h2>
                <p className="text-sm">Senior Software Engineer | Solutions Architect | Founder, Afya Hewani.</p>
            </div>
        </div>
    );
}