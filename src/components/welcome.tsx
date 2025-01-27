export default function Welcome() {
    return (
        <div className="flex flex-col w-full h-screen justify-center pt-12 bg-circle" id="home">
            <div className="flex flex-col justify-start p-12 ml-12 text-start w-1/2 h-1/2">
                <h1 className="font-bold text-2xl mb-4">Hello, I am</h1>
                <h1 className="font-bold text-6xl mb-4">Denis Rwelamila</h1>
                <h2 className="font-bold text-2xl mb-8">I tinker with code to make things happen.</h2>
                <p className="text-sm">Welcome to my portfolio, a curated collection of my professional journey and creative endeavors</p>
            </div>
        </div>
    );
}