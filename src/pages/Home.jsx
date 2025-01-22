function Home(){
    return<div>
     <div className="flex justify-around pt-[50px] bg-green-200">
        <div className="w-[400px]">
            <p className="text-green-600 tex-[20px] font-semibold">Stay Your Favorite Course</p>
            <h1 className="text-[35px] font-bold py-11">Now Learning From Anywhere,and build your <span className="text-green-600">bright Career</span></h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatem.</p>
            <button className=" mt-[10px] bg-green-600 px-[20px] rounded-md text-[20px] text-white py-[5px]">Start A course</button>

        </div>
        <img className="w-[500px] h-[550px]" src="src/images/person.png" alt="" />
    </div>

    <div className="flex justify-between px-[100px] mt-[50px]">
        <h1 className="text-[30px] font-bold">
            All Courses of <span className="text-green-600">Aabdul</span>
        </h1>
        <div className="w-[280px] h-[33px] border-[2px] border-gray-400">
            <p className="text-[12px] text-gray-500 pt-[3px]">Search Your Course</p>
        </div>
    </div>

    <div className="h-[100px] bg-green-200 py-[40px] text-center"> 
        <button className=" border-[2px] border-green-600 px-[18px] py-[8px] rounded-md font-semibold text-center bg-white">Web Development</button>
        <button className=" px-[18px] py-[8px] rounded-md font-semibold text-center bg-white mx-[20px]">Web Development</button>
        <button className=" px-[18px] py-[8px] rounded-md font-semibold text-center bg-white">Web Development</button>
        <button className=" px-[18px] py-[8px] rounded-md font-semibold text-center bg-white mx-[20px]">Web Development</button>
        <button className=" px-[18px] py-[8px] rounded-md font-semibold text-center bg-white">Web Development</button>
    </div>

    <div className=" flex justify-between px-[50px] mt-[50px]">
        {/* Course 1 */}
        <div className="h-[550px] w-[380px] border-[2px] border-gray-200">
            <img className="w-[360px] h-[300px] mt-[10px] rounded-md m-auto" src="src/images/machine.jpeg" alt="" />
            <div className="flex justify-between px-[20px] my-[12px] items-center">
                <div className=" flex justify-start gap-5 items-center">
                    <img className="w-[40px]" src="src/images/Abdalla circle.png" alt="" />
                    <h1 className="text-gray-500 text-[12px] font-bold">Eng.Abdalla</h1>
                </div>
                <button className="bg-green-200 h-[30px] px-5 text-center rounded-md text-green-600">Enroll Now</button>
            </div>
            <h1 className=" px-[20px] font-bold text-[20px] mb-[12px]"> Mastering datascience and Machine lerning Using pyhton</h1>
            <div className="flex justify-between px-[20px]">
                <div className=" flex justify-start gap-2">
                    <img className="w-[20px]" src="src/images/clock.png" alt="" />
                <p className="text-gray-500 tex-[12px] font-thin">10hr 15 minutes</p>

                </div>
                <div className=" flex justify-start gap-2">
                    <img className="w-[20px]" src="src/images/lesson.png" alt="" />
                <p className="text-gray-500 tex-[12px] font-thin">29 Lessons</p>

                </div>
            </div>
            <div className=" bg-green-300 h-[40px] mx-[20px] mt-[12px] flex justify-between px-[20px] pt-[5px] pl-[5px] ">
                <p className="font-bold text-green-600">$380</p>
                <p className="font-bold line-through">$499</p>
                <p className="font-bold"> 4.9</p>
                
            </div>

        </div>
        {/* Course 2 */}

        <div className="h-[550px] w-[380px] border-[2px] border-gray-200">
            <img className="w-[360px] h-[300px] mt-[10px] rounded-md m-auto" src="src/images/machine.jpeg" alt="" />
            <div className="flex justify-between px-[20px] my-[12px] items-center">
                <div className=" flex justify-start gap-5 items-center">
                    <img className="w-[40px]" src="src/images/Abdalla circle.png" alt="" />
                    <h1 className="text-gray-500 text-[12px] font-bold">Eng.Abdalla</h1>
                </div>
                <button className="bg-green-200 h-[30px] px-5 text-center rounded-md text-green-600">Enroll Now</button>
            </div>
            <h1 className=" px-[20px] font-bold text-[20px] mb-[12px]"> Mastering datascience and Machine lerning Using pyhton</h1>
            <div className="flex justify-between px-[20px]">
                <div className=" flex justify-start gap-2">
                    <img className="w-[20px]" src="src/images/clock.png" alt="" />
                <p className="text-gray-500 tex-[12px] font-thin">10hr 15 minutes</p>

                </div>
                <div className=" flex justify-start gap-2">
                    <img className="w-[20px]" src="src/images/lesson.png" alt="" />
                <p className="text-gray-500 tex-[12px] font-thin">29 Lessons</p>

                </div>
            </div>
            <div className=" bg-green-300 h-[40px] mx-[20px] mt-[12px] flex justify-between px-[20px] pt-[5px] pl-[5px] ">
                <p className="font-bold text-green-600">$380</p>
                <p className="font-bold line-through">$499</p>
                <p className="font-bold"> 4.9</p>
                
            </div>

        </div>
        {/* Course 3 */}

        <div className="h-[550px] w-[380px] border-[2px] border-gray-200">
            <img className="w-[360px] h-[300px] mt-[10px] rounded-md m-auto" src="src/images/machine.jpeg" alt="" />
            <div className="flex justify-between px-[20px] my-[12px] items-center">
                <div className=" flex justify-start gap-5 items-center">
                    <img className="w-[40px]" src="src/images/Abdalla circle.png" alt="" />
                    <h1 className="text-gray-500 text-[12px] font-bold">Eng.Abdalla</h1>
                </div>
                <button className="bg-green-200 h-[30px] px-5 text-center rounded-md text-green-600">Enroll Now</button>
            </div>
            <h1 className=" px-[20px] font-bold text-[20px] mb-[12px]"> Mastering datascience and Machine lerning Using pyhton</h1>
            <div className="flex justify-between px-[20px]">
                <div className=" flex justify-start gap-2">
                    <img className="w-[20px]" src="src/images/clock.png" alt="" />
                <p className="text-gray-500 tex-[12px] font-thin">10hr 15 minutes</p>

                </div>
                <div className=" flex justify-start gap-2">
                    <img className="w-[20px]" src="src/images/lesson.png" alt="" />
                <p className="text-gray-500 tex-[12px] font-thin">29 Lessons</p>

                </div>
            </div>
            <div className=" bg-green-300 h-[40px] mx-[20px] mt-[12px] flex justify-between px-[20px] pt-[5px] pl-[5px] ">
                <p className="font-bold text-green-600">$380</p>
                <p className="font-bold line-through">$499</p>
                <p className="font-bold"> 4.9</p>
                
            </div>

        </div>


    </div>


    </div>
}
export default Home 