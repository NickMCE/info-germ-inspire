import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, Trophy } from "lucide-react";

const courseData = {
  design: {
    title: "Design",
    description: "Master the art of digital design with industry-standard tools and principles",
    duration: "6 months",
    students: "150+",
    projects: "25+",
    curriculum: [
      "UI/UX Fundamentals",
      "Color Theory & Typography",
      "Design Systems",
      "Responsive Design",
      "Prototyping & Wireframing",
      "Portfolio Development"
    ],
    tools: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
    color: "bg-blue-500"
  },
  coding: {
    title: "Coding",
    description: "Learn programming from basics to advanced with hands-on projects",
    duration: "8 months",
    students: "200+",
    projects: "30+",
    curriculum: [
      "Web Development Fundamentals",
      "JavaScript & Modern Frameworks",
      "Backend Development",
      "Database Management",
      "API Development",
      "DevOps Basics"
    ],
    tools: ["VS Code", "Git", "React", "Node.js", "MongoDB"],
    color: "bg-green-500"
  },
  ai: {
    title: "AI Tools",
    description: "Explore the future of technology with cutting-edge AI applications",
    duration: "4 months",
    students: "100+",
    projects: "20+",
    curriculum: [
      "AI Fundamentals",
      "Machine Learning Basics",
      "Natural Language Processing",
      "Computer Vision",
      "AI Ethics",
      "Practical AI Applications"
    ],
    tools: ["Python", "TensorFlow", "PyTorch", "Jupyter", "OpenAI API"],
    color: "bg-purple-500"
  }
};

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:opacity-80 transition-opacity mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{course.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-secondary rounded-lg">
                <Clock className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold">{course.duration}</div>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <Users className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm text-gray-600">Students</div>
                <div className="font-semibold">{course.students}</div>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <Trophy className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm text-gray-600">Projects</div>
                <div className="font-semibold">{course.projects}</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Curriculum</h2>
            <ul className="list-disc list-inside mb-8 space-y-2">
              {course.curriculum.map((item) => (
                <li key={item} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-secondary p-6 rounded-lg sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tools & Technologies</h2>
              <div className="space-y-2">
                {course.tools.map((tool) => (
                  <div
                    key={tool}
                    className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-between"
                  >
                    <span className="text-gray-800">{tool}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium">
                Enroll Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetails;