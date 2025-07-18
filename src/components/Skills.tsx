import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Languages, Wrench, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-animations";
import { skillIconMap } from "@/lib/skill-icon-map";
import { FaProjectDiagram } from 'react-icons/fa';

const techStacks = [
  'React.js', 'TypeScript', 'JavaScript(ES6+)', 'Vite', 'Vitest', 'Zustand', 'Zod', 'SCSS', 'Carbon', 'Jest', 'RESTful API', 'Python', 'Django', 'GraphQL', 'Node.js', 'HTML', 'Bootstrap', 'Web Application', 'Authentication', 'Web Crawling', 'Microservice'
];

const tools = [
  'Slack', 'VS Code', 'Github', 'Zenhub', 'Jira', 'Gitlab', 'Figma', 'InVision', 'Outlook'
];

const languages = [
  'English (Fluent)', 'Mandarin Chinese (Native)'
];

const Skills = () => {
  const animation = useScrollAnimation();
  const techStacksAnimation = useScrollAnimation({ staggerDelay: 0.05 });
  const toolsAnimation = useScrollAnimation({ staggerDelay: 0.1 });
  const languagesAnimation = useScrollAnimation({ staggerDelay: 0.1 });

  return (
    <motion.section 
      id="skills" 
      className="py-16 sm:py-24 bg-alt"
      ref={animation.ref}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
    >
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 crisp-text">
            Technical <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 crisp-gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Technologies and tools I work with
          </p>
        </div>

        {/* Tech Stacks */}
        <Card className="mb-6 sm:mb-8 dark:bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Cpu className="h-4 w-4 sm:h-5 sm:w-5" /> Tech Stacks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div 
                className="flex flex-wrap gap-1.5 sm:gap-2"
                ref={techStacksAnimation.ref}
                variants={techStacksAnimation.containerVariants}
                initial="hidden"
                animate={techStacksAnimation.isInView ? "visible" : "hidden"}
              >
                {techStacks.map((skill, i) => (
                  <motion.div key={i} variants={techStacksAnimation.itemVariants}>
                    <Badge variant="secondary" className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                      {skillIconMap[skill] || <FaProjectDiagram className="text-gray-400" />} {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>

          {/* Tools */}
          <Card className="mb-6 sm:mb-8 dark:bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Wrench className="h-4 w-4 sm:h-5 sm:w-5" /> Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div 
                className="flex flex-wrap gap-1.5 sm:gap-2"
                ref={toolsAnimation.ref}
                variants={toolsAnimation.containerVariants}
                initial="hidden"
                animate={toolsAnimation.isInView ? "visible" : "hidden"}
              >
                {tools.map((tool, i) => (
                  <motion.div key={i} variants={toolsAnimation.itemVariants}>
                    <Badge variant="secondary" className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                      {skillIconMap[tool] || <FaProjectDiagram className="text-gray-400" />} {tool}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="dark:bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Languages className="h-4 w-4 sm:h-5 sm:w-5" /> Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div 
                className="flex flex-wrap gap-1.5 sm:gap-2"
                ref={languagesAnimation.ref}
                variants={languagesAnimation.containerVariants}
                initial="hidden"
                animate={languagesAnimation.isInView ? "visible" : "hidden"}
              >
                {languages.map((lang, i) => (
                  <motion.div key={i} variants={languagesAnimation.itemVariants}>
                    <Badge variant="secondary" className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                      {lang}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </motion.section>
  );
};

export default Skills; 