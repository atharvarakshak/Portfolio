import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import ScrollAnimation from "react-animate-on-scroll";
import githubIcon from '../assets/images/github.svg';
import externalLink from '../assets/images/external-link-icon.svg';

 function Project() {
  // useEffect(() => {
  //   AOS.init({ duration: 1000, once: true });
  // }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: "sdffffffffffff aaaaaaaaaaaaaa asddddddddddd asddddddddd asddddddddddd asdad aaaaaaaaaaaaaa kk lkkj",
      githubLink: "https://github.com/CodeVinayak/Serverless-Voting-Application",
      externalLink: "https://vote.vinayaksingh.com",
      tech: ["AWS Lambda", "API Gateway", "DynamoDB"],
    },
    {
      title: "Pawfect: Pets service destination",
      description: "Developed an interactive chatbot application using Streamlit, OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text extraction, enabling users to ask context-based questions on uploaded PDFs and general queries.",
      githubLink: "https://github.com/CodeVinayak/AI-Chatbot-Assistant",
      externalLink: "https://ai-chatbot-t8fn.onrender.com",
      tech: ["Streamlit", "PyPDF2", "LangChain"],
    },
    {
      title: "Credit Risk Analysis Project",
      description: "Developed a highly accurate credit risk classification model using XGBoost, achieving 100% precision, recall, and F1-scores for predicting loan defaults.Implemented rigorous data preprocessing, feature engineering, and hyperparameter tuning on imbalanced credit risk data, employing ensemble methods, cross-validation, and model interpretation techniques.",
      githubLink: "https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis",
      externalLink: "https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb",
      tech: ["XGBoost", "Pandas", "Matplotlib"],
    },
    {
      title: "MediBook: Medical Appointment Scheduler with Health History",
      description: "Developed a secure medical appointment management platform with CRUD functionality, utilizing role-based access control, encryption techniques, and a robust MySQL database with normalized schema design and stored procedures for efficient scheduling, data privacy, and reliable retrieval of patient records.",
      githubLink: "https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History",
      externalLink: "https://medibook.vinayaksingh.com",
      tech: ["PHP", "HTML", "CSS", "MySQL"],
    },
    {
      title: "Real-Time Hand Gesture-Driven 3D Object Manipulation",
      description: "Developed a real-time hand gesture recognition system for intuitive 3D object manipulation. Leveraged a multimodal approach integrating OpenCV for video processing, MediaPipe for hand detection/landmark extraction, and scikit-learn for machine learning model training. Achieved 95.2% accuracy in hand gesture classification with efficient real-time performance.",
      githubLink: "https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation",
      externalLink: "https://youtu.be/NOm-3MynPLE",
      tech: ["OpenCV", "MediaPipe", "scikit-learn"],
    },
    {
      title: "VeloCityAI",
      description: "VelocityAI is a website that allows users to get instant answers to any question and generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model.With VelocityAI, users can type in text-based prompts and receive a corresponding response.",
      externalLink: "https://velocityai.vinayaksingh.com/",
      tech: ["React", "Typescript", "Html", "css"],
    },
  ];

  return (
    <section id="project" className="mt-60">
      <h2 className="text-center text-4xl mb-12 dark:text-white font-extrabold">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4  ">
        {projects.map((project, index) => (
        <ScrollAnimation animateIn="animate__flipInX">

          <div key={index} className="p-6 bg-gray-800 dark:bg-gray-100 dark:text-black text-white rounded-lg transition-transform transform hover:-translate-y-2 border-2 border-red-600 h-full" >
            <header className="flex items-center justify-between text-green-400 mb-8">
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> 
                <title>Folder</title> 
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> 
              </svg>
              <div className="flex items-center gap-2">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Visit site" className="w-12" />
                  </a>
                )}
                {project.externalLink && (
                  <a href={project.externalLink} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" className="w-12" />
                  </a>
                )}
              </div>
            </header>
            <div className="mb-4">
              <h3 className="text-2xl mb-4">{project.title}</h3>
              <p className="leading-relaxed mb-4">{project.description}</p>
            </div>
            <footer className="mt-auto">
              <ul className="flex gap-4 text-sm opacity-60">
                {project.tech.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}
export default Project;