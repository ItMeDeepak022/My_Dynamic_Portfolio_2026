const educationData = [
    {
        title: "High School",
        school: "SHIVAJI INTER College KHUKHUNDU , Deoria",
        year: "2019",
        percentage: "74.83%",
    },
    {
        title: "Intermediate (12th)",
        school: "SHIVAJI INTER College KHUKHUNDU , Deoria",
        year: "2021",
        percentage: "80.6%",
    },
    {
        title: "B.Tech (Computer Science)",
        school: "RR Institute of Modern Technology , Lucknow UP",
        year: "2022 - 2026",
        percentage: "Final Year",
    },
];

export default function Education() {
    return (
        <div className="py-12 bg-gray-50">
            <h2 className="sm:text-4xl text-3xl  w-[70%] mx-auto sm:p-3 p-2 font-bold text-center mb-10 text-gray-800 border-b-2 border-t-2 border-slate-200">
                Education
            </h2>

            <div className="max-w-4xl sm:mx-auto mx-auto relative sm:border-l-4 border-blue-500 sm:pl-6 pl-5 ml-5">
                {educationData.map((edu, index) => (
                    <div key={index} className="mb-10 relative">

                        {/* Circle */}
                        <div className="absolute sm:left-[-10px] left-[-5px]  sm:block hidden top-10 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
                        <div className="absolute sm:left-[-24px] left-[-20px] sm:block hidden top-[26px] text-blue-500 text-4xl font-extrabold"> — </div>

                        {/* Card */}
                        <div className="sm:p-0 p-2 sm:mr-0 mr-10">
                            <div className="p-4 border-2 border-[purple] rounded-[10px]  hover:border-[cyan] transition-all duration-300">

                                <h3 className="text-xl font-semibold text-blue-600">
                                    {edu.title}
                                </h3>

                                <p className="text-gray-700 font-semibold">{edu.school}</p>

                                <div className="flex justify-between mt-2 text-sm text-gray-500">
                                    <span>{edu.year}</span>
                                    <span className=" text-green-600 font-bold text-[17px]">
                                        {edu.percentage}
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
