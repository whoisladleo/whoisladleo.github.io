export default function Welcome() {
    return (
        <div className="flex flex-col w-full min-h-screen justify-center pt-12 bg-circle" id="home">
            <div className="flex flex-col justify-start p-6 md:p-12 lg:ml-12 text-start sm:w-full md:w-1/2 h-1/2">
                <h1 className="font-bold text-xl md:text-2xl mb-4">Hello, I am</h1>
                <h1 className="font-bold text-4xl md:text-6xl mb-4">Denis Rwelamila</h1>
                <h2 className="md:font-bold text-base md:text-3xl mb-8">I tinker with code to make things happen.</h2>
                <p className="text-sm">Welcome to my portfolio, a curated collection of my professional journey and creative endeavors</p>
            </div>
        </div>
    );
}