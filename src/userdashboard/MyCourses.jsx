
import Category from "../course/Category"
import CourseBenefits from "../course/CourseBenefits"
import CourseHero from "../coursecontent/CourseHero"







const MyCourses = () => {
  return (
    <div className='md:ml-64'>

<div className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 border border-amber-300 rounded-xl shadow-md px-8 py-10 text-center md:text-left">
  <h1 className="text-2xl md:text-3xl  text-gray-900">
    Explore Our Courses
  </h1>
  <p className="text-sm md:text-base text-gray-700 mt-3">
    Learn from <span className="font-semibold text-yellow-700">expert CAs</span> and master the stock market
  </p>
</div>


    <CourseHero/>
    <Category/>
    <CourseBenefits/>

   
    </div>
  )
}

export default MyCourses
