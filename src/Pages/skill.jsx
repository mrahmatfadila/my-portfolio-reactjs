import Navbar from "../components/Layouts/Navbar";

const SkillPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Website Under Construction</h1>
                <p className="text-lg text-gray-600 mb-8">We are currently working on something awesome! Stay tuned for updates.</p>
                <img src="/img/work-in-progress.png" alt="Under Construction" className="max-w-[150px]" />
            </div>
        </div>
    )
}

export default SkillPage;