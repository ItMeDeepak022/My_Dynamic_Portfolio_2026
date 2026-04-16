import React from 'react'

export default function Skills() {
    return (
        <section id="Skills" className="w-full sm:py-8 py-9 bg-white text-black">
            <div className="max-w-6xl mx-auto px-4 py-5 text-center">

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                    My Skills
                </h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {/* Skill Card */}
                    <div className="p-5 bg-white rounded-xl shadow-md border border-gray-200 
                      hover:shadow-xl hover:-translate-y-2 transition duration-300">
                        <h3 className="text-lg font-semibold text-blue-600">HTML</h3>
                    </div>

                    <div className="p-5 bg-white rounded-xl shadow-md border border-gray-200 
                      hover:shadow-xl hover:-translate-y-2 transition duration-300">
                        <h3 className="text-lg font-semibold text-orange-500">CSS</h3>
                    </div>

                    <div className="p-5 bg-white rounded-xl shadow-md border border-gray-200 
                      hover:shadow-xl hover:-translate-y-2 transition duration-300">
                        <h3 className="text-lg font-semibold text-yellow-500">JavaScript</h3>
                    </div>

                    <div className="p-5 bg-white rounded-xl shadow-md border border-gray-200 
                      hover:shadow-xl hover:-translate-y-2 transition duration-300">
                        <h3 className="text-lg font-semibold text-cyan-600">React.js</h3>
                    </div>

                    <div className="p-5 bg-white rounded-xl shadow-md border border-gray-200 
                      hover:shadow-xl hover:-translate-y-2 transition duration-300">
                        <h3 className="text-lg font-semibold text-purple-600">Tailwind CSS</h3>
                    </div>

                    <div className="p-5 bg-white rounded-xl shadow-md border border-gray-200 
                      hover:shadow-xl hover:-translate-y-2 transition duration-300">
                        <h3 className="text-lg font-semibold text-green-600">Node.js</h3>
                    </div>

                    <div className="p-5 bg-white rounded-xl shadow-md border border-gray-200 
                      hover:shadow-xl hover:-translate-y-2 transition duration-300">
                        <h3 className="text-lg font-semibold text-red-500">Express.js</h3>
                    </div>

                    <div className="p-5 bg-white rounded-xl shadow-md border border-gray-200 
                      hover:shadow-xl hover:-translate-y-2 transition duration-300">
                        <h3 className="text-lg font-semibold text-gray-800">MongoDB</h3>
                    </div>

                </div>

            </div>
        </section>
    )
}
