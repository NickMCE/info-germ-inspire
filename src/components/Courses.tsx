import { motion } from "framer-motion";
import { Code, Palette, Brain } from "lucide-react";

const courses = [
  {
    title: "Design",
    description: "Master the art of digital design with industry-standard tools and principles",
    icon: Palette,
    color: "bg-blue-500",
  },
  {
    title: "Coding",
    description: "Learn programming from basics to advanced with hands-on projects",
    icon: Code,
    color: "bg-green-500",
  },
  {
    title: "AI Tools",
    description: "Explore the future of technology with cutting-edge AI applications",
    icon: Brain,
    color: "bg-purple-500",
  },
];

export const Courses = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of courses designed to prepare you for
            the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`${course.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6`}
              >
                <course.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-6">{course.description}</p>
              <button className="text-primary font-medium hover:underline">
                Learn more →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};