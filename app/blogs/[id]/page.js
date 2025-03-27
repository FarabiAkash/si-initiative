'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import blog1 from '../../../public/assets/blogs/blog1.png';
import blog2 from '../../../public/assets/blogs/blog2.png';
import blog3 from '../../../public/assets/blogs/blog3.png';
import blog4 from '../../../public/assets/blogs/blog4.png';
import blog5 from '../../../public/assets/blogs/blog5.png';
import blog6 from '../../../public/assets/blogs/blog6.png';
import blog7 from '../../../public/assets/blogs/blog7.png';
import blog8 from '../../../public/assets/blogs/blog8.png';
import blog9 from '../../../public/assets/blogs/blog9.png';
import blog10 from '../../../public/assets/blogs/blog10.png';
import blog11 from '../../../public/assets/blogs/blog11.png';
import blog12 from '../../../public/assets/blogs/blog12.jpeg';
import BlogDetails from "../../../components/Blogs/BlogDetails";
import Link from "next/link";

const blogs = [
    {
        id: 1,
        title: 'The Future of AI in Healthcare: Transforming Patient Care',
        description:
            'Artificial Intelligence (AI) is reshaping the future of healthcare, bringing unprecedented efficiency, accuracy, and accessibility to patient care. From early disease detection to personalized treatment plans, AI-driven innovations are enhancing medical decision-making and improving health outcomes.',
        img: blog1,
        content: [
            {
                sectionTitle: 'AI-Powered Diagnostics',
                points: [
                    'Machine learning models analyze medical images to detect diseases like cancer with higher accuracy than traditional methods.',
                    'AI-driven pathology and radiology tools speed up diagnoses, reducing human error and workload for medical professionals.'
                ]
            },
            {
                sectionTitle: 'Personalized Treatment & Precision Medicine',
                points: [
                    'AI helps predict patient responses to treatments, enabling customized healthcare solutions.',
                    'Genomic analysis powered by AI is unlocking new possibilities for targeted therapies in complex diseases.'
                ]
            },
            {
                sectionTitle: 'Virtual Health Assistants & Chatbots',
                points: [
                    'AI-powered virtual assistants provide real-time health guidance and symptom checking, making healthcare more accessible.',
                    'Chatbots support mental health interventions, offering immediate response and reducing barriers to seeking help.'
                ]
            },
            {
                sectionTitle: 'AI in Drug Discovery & Research',
                points: [
                    'AI accelerates the drug discovery process, reducing research timelines from years to months.',
                    'Advanced algorithms analyze vast medical datasets to identify new treatments for emerging diseases.'
                ]
            },
            {
                sectionTitle: 'Smart Hospital & IoT Integration',
                points: [
                    'AI-driven hospital management systems optimize resource allocation and patient flow.',
                    'IoT-enabled AI solutions allow remote patient monitoring, improving chronic disease management.'
                ]
            }
        ],
        conclusion: {
            title: 'The AI-Powered Future of Healthcare',
            description:
                'AI is not just a futuristic concept—it’s actively transforming healthcare today. With advancements in deep learning, predictive analytics, and automation, AI is making patient care more precise, proactive, and personalized. As technology continues to evolve, AI-driven healthcare solutions will bridge gaps, improve accessibility, and save lives worldwide.'
        }
    },
    {
        id: 2,
        title: 'Digital Prescription Systems: The End of Paper-Based Errors',
        description:
            'Traditional prescriptions often lead to misinterpretation and errors, but digital systems ensure accuracy.',
        img: blog2,
        content: [
            {
                sectionTitle: 'AI-Powered Diagnostics',
                points: [
                    'Machine learning models analyze medical images to detect diseases like cancer with higher accuracy than traditional methods.',
                    'AI-driven pathology and radiology tools speed up diagnoses, reducing human error and workload for medical professionals.'
                ]
            },
            {
                sectionTitle: 'Personalized Treatment & Precision Medicine',
                points: [
                    'AI helps predict patient responses to treatments, enabling customized healthcare solutions.',
                    'Genomic analysis powered by AI is unlocking new possibilities for targeted therapies in complex diseases.'
                ]
            },
            {
                sectionTitle: 'Virtual Health Assistants & Chatbots',
                points: [
                    'AI-powered virtual assistants provide real-time health guidance and symptom checking, making healthcare more accessible.',
                    'Chatbots support mental health interventions, offering immediate response and reducing barriers to seeking help.'
                ]
            },
            {
                sectionTitle: 'AI in Drug Discovery & Research',
                points: [
                    'AI accelerates the drug discovery process, reducing research timelines from years to months.',
                    'Advanced algorithms analyze vast medical datasets to identify new treatments for emerging diseases.'
                ]
            },
            {
                sectionTitle: 'Smart Hospital & IoT Integration',
                points: [
                    'AI-driven hospital management systems optimize resource allocation and patient flow.',
                    'IoT-enabled AI solutions allow remote patient monitoring, improving chronic disease management.'
                ]
            }
        ],
        conclusion: {
            title: 'The AI-Powered Future of Healthcare',
            description:
                'AI is not just a futuristic concept—it’s actively transforming healthcare today. With advancements in deep learning, predictive analytics, and automation, AI is making patient care more precise, proactive, and personalized. As technology continues to evolve, AI-driven healthcare solutions will bridge gaps, improve accessibility, and save lives worldwide.'
        }
    },
    {
        id: 3,
        title: 'How IoT is Enhancing Remote Patient Monitoring',
        description:
            'IoT-powered healthcare devices bridge the gap between doctors and patients by providing real-time data.',
        img: blog3,
        content: [
            {
                sectionTitle: 'AI-Powered Diagnostics',
                points: [
                    'Machine learning models analyze medical images to detect diseases like cancer with higher accuracy than traditional methods.',
                    'AI-driven pathology and radiology tools speed up diagnoses, reducing human error and workload for medical professionals.'
                ]
            },
            {
                sectionTitle: 'Personalized Treatment & Precision Medicine',
                points: [
                    'AI helps predict patient responses to treatments, enabling customized healthcare solutions.',
                    'Genomic analysis powered by AI is unlocking new possibilities for targeted therapies in complex diseases.'
                ]
            },
            {
                sectionTitle: 'Virtual Health Assistants & Chatbots',
                points: [
                    'AI-powered virtual assistants provide real-time health guidance and symptom checking, making healthcare more accessible.',
                    'Chatbots support mental health interventions, offering immediate response and reducing barriers to seeking help.'
                ]
            },
            {
                sectionTitle: 'AI in Drug Discovery & Research',
                points: [
                    'AI accelerates the drug discovery process, reducing research timelines from years to months.',
                    'Advanced algorithms analyze vast medical datasets to identify new treatments for emerging diseases.'
                ]
            },
            {
                sectionTitle: 'Smart Hospital & IoT Integration',
                points: [
                    'AI-driven hospital management systems optimize resource allocation and patient flow.',
                    'IoT-enabled AI solutions allow remote patient monitoring, improving chronic disease management.'
                ]
            }
        ],
        conclusion: {
            title: 'The AI-Powered Future of Healthcare',
            description:
                'AI is not just a futuristic concept—it’s actively transforming healthcare today. With advancements in deep learning, predictive analytics, and automation, AI is making patient care more precise, proactive, and personalized. As technology continues to evolve, AI-driven healthcare solutions will bridge gaps, improve accessibility, and save lives worldwide.'
        }
    },
    {
        id: 4,
        title: 'Nutrition and Health: The Science Behind a Balanced Diet',
        description:
            'Understanding the importance of balanced meals can significantly impact overall health and wellness.',
        img: blog4,
        content: [
            {
                sectionTitle: 'AI-Powered Diagnostics',
                points: [
                    'Machine learning models analyze medical images to detect diseases like cancer with higher accuracy than traditional methods.',
                    'AI-driven pathology and radiology tools speed up diagnoses, reducing human error and workload for medical professionals.'
                ]
            },
            {
                sectionTitle: 'Personalized Treatment & Precision Medicine',
                points: [
                    'AI helps predict patient responses to treatments, enabling customized healthcare solutions.',
                    'Genomic analysis powered by AI is unlocking new possibilities for targeted therapies in complex diseases.'
                ]
            },
            {
                sectionTitle: 'Virtual Health Assistants & Chatbots',
                points: [
                    'AI-powered virtual assistants provide real-time health guidance and symptom checking, making healthcare more accessible.',
                    'Chatbots support mental health interventions, offering immediate response and reducing barriers to seeking help.'
                ]
            },
            {
                sectionTitle: 'AI in Drug Discovery & Research',
                points: [
                    'AI accelerates the drug discovery process, reducing research timelines from years to months.',
                    'Advanced algorithms analyze vast medical datasets to identify new treatments for emerging diseases.'
                ]
            },
            {
                sectionTitle: 'Smart Hospital & IoT Integration',
                points: [
                    'AI-driven hospital management systems optimize resource allocation and patient flow.',
                    'IoT-enabled AI solutions allow remote patient monitoring, improving chronic disease management.'
                ]
            }
        ],
        conclusion: {
            title: 'The AI-Powered Future of Healthcare',
            description:
                'AI is not just a futuristic concept—it’s actively transforming healthcare today. With advancements in deep learning, predictive analytics, and automation, AI is making patient care more precise, proactive, and personalized. As technology continues to evolve, AI-driven healthcare solutions will bridge gaps, improve accessibility, and save lives worldwide.'
        }
    },
    {
        id: 5,
        title: 'Surgeon’s Perspective: The Role of Technology in Modern Surgery',
        description:
            'With AI and robotics, modern surgeries have become safer and more efficient than ever before.',
        img: blog5,
        content: [
            {
                sectionTitle: 'AI-Powered Diagnostics',
                points: [
                    'Machine learning models analyze medical images to detect diseases like cancer with higher accuracy than traditional methods.',
                    'AI-driven pathology and radiology tools speed up diagnoses, reducing human error and workload for medical professionals.'
                ]
            },
            {
                sectionTitle: 'Personalized Treatment & Precision Medicine',
                points: [
                    'AI helps predict patient responses to treatments, enabling customized healthcare solutions.',
                    'Genomic analysis powered by AI is unlocking new possibilities for targeted therapies in complex diseases.'
                ]
            },
            {
                sectionTitle: 'Virtual Health Assistants & Chatbots',
                points: [
                    'AI-powered virtual assistants provide real-time health guidance and symptom checking, making healthcare more accessible.',
                    'Chatbots support mental health interventions, offering immediate response and reducing barriers to seeking help.'
                ]
            },
            {
                sectionTitle: 'AI in Drug Discovery & Research',
                points: [
                    'AI accelerates the drug discovery process, reducing research timelines from years to months.',
                    'Advanced algorithms analyze vast medical datasets to identify new treatments for emerging diseases.'
                ]
            },
            {
                sectionTitle: 'Smart Hospital & IoT Integration',
                points: [
                    'AI-driven hospital management systems optimize resource allocation and patient flow.',
                    'IoT-enabled AI solutions allow remote patient monitoring, improving chronic disease management.'
                ]
            }
        ],
        conclusion: {
            title: 'The AI-Powered Future of Healthcare',
            description:
                'AI is not just a futuristic concept—it’s actively transforming healthcare today. With advancements in deep learning, predictive analytics, and automation, AI is making patient care more precise, proactive, and personalized. As technology continues to evolve, AI-driven healthcare solutions will bridge gaps, improve accessibility, and save lives worldwide.'
        }
    },
    {
        id: 6,
        title: 'AI-Driven Digital Health Records: A New Era of Efficiency',
        description:
            'AI-powered EHR systems are making healthcare records more accessible and accurate for patients and doctors.',
        img: blog6,
        content: [
            {
                sectionTitle: 'AI-Powered Diagnostics',
                points: [
                    'Machine learning models analyze medical images to detect diseases like cancer with higher accuracy than traditional methods.',
                    'AI-driven pathology and radiology tools speed up diagnoses, reducing human error and workload for medical professionals.'
                ]
            },
            {
                sectionTitle: 'Personalized Treatment & Precision Medicine',
                points: [
                    'AI helps predict patient responses to treatments, enabling customized healthcare solutions.',
                    'Genomic analysis powered by AI is unlocking new possibilities for targeted therapies in complex diseases.'
                ]
            },
            {
                sectionTitle: 'Virtual Health Assistants & Chatbots',
                points: [
                    'AI-powered virtual assistants provide real-time health guidance and symptom checking, making healthcare more accessible.',
                    'Chatbots support mental health interventions, offering immediate response and reducing barriers to seeking help.'
                ]
            },
            {
                sectionTitle: 'AI in Drug Discovery & Research',
                points: [
                    'AI accelerates the drug discovery process, reducing research timelines from years to months.',
                    'Advanced algorithms analyze vast medical datasets to identify new treatments for emerging diseases.'
                ]
            },
            {
                sectionTitle: 'Smart Hospital & IoT Integration',
                points: [
                    'AI-driven hospital management systems optimize resource allocation and patient flow.',
                    'IoT-enabled AI solutions allow remote patient monitoring, improving chronic disease management.'
                ]
            }
        ],
        conclusion: {
            title: 'The AI-Powered Future of Healthcare',
            description:
                'AI is not just a futuristic concept—it’s actively transforming healthcare today. With advancements in deep learning, predictive analytics, and automation, AI is making patient care more precise, proactive, and personalized. As technology continues to evolve, AI-driven healthcare solutions will bridge gaps, improve accessibility, and save lives worldwide.'
        }
    },
    {
        id: 7,
        title: 'Wearable Tech: The Future of Preventive Healthcare',
        description:
            'Smartwatches and wearable sensors are helping individuals track their health in real-time.',
        img: blog7,
        content: [
            {
                sectionTitle: 'AI-Powered Diagnostics',
                points: [
                    'Machine learning models analyze medical images to detect diseases like cancer with higher accuracy than traditional methods.',
                    'AI-driven pathology and radiology tools speed up diagnoses, reducing human error and workload for medical professionals.'
                ]
            },
            {
                sectionTitle: 'Personalized Treatment & Precision Medicine',
                points: [
                    'AI helps predict patient responses to treatments, enabling customized healthcare solutions.',
                    'Genomic analysis powered by AI is unlocking new possibilities for targeted therapies in complex diseases.'
                ]
            },
            {
                sectionTitle: 'Virtual Health Assistants & Chatbots',
                points: [
                    'AI-powered virtual assistants provide real-time health guidance and symptom checking, making healthcare more accessible.',
                    'Chatbots support mental health interventions, offering immediate response and reducing barriers to seeking help.'
                ]
            },
            {
                sectionTitle: 'AI in Drug Discovery & Research',
                points: [
                    'AI accelerates the drug discovery process, reducing research timelines from years to months.',
                    'Advanced algorithms analyze vast medical datasets to identify new treatments for emerging diseases.'
                ]
            },
            {
                sectionTitle: 'Smart Hospital & IoT Integration',
                points: [
                    'AI-driven hospital management systems optimize resource allocation and patient flow.',
                    'IoT-enabled AI solutions allow remote patient monitoring, improving chronic disease management.'
                ]
            }
        ],
        conclusion: {
            title: 'The AI-Powered Future of Healthcare',
            description:
                'AI is not just a futuristic concept—it’s actively transforming healthcare today. With advancements in deep learning, predictive analytics, and automation, AI is making patient care more precise, proactive, and personalized. As technology continues to evolve, AI-driven healthcare solutions will bridge gaps, improve accessibility, and save lives worldwide.'
        }
    },
    {
        id: 8,
        title: 'The Growing Importance of Telemedicine in Post-Pandemic Healthcare',
        description:
            'Remote consultations have become a standard part of healthcare delivery worldwide.',
        img: blog8,
        content: [
            {
                sectionTitle: 'AI-Powered Diagnostics',
                points: [
                    'Machine learning models analyze medical images to detect diseases like cancer with higher accuracy than traditional methods.',
                    'AI-driven pathology and radiology tools speed up diagnoses, reducing human error and workload for medical professionals.'
                ]
            },
            {
                sectionTitle: 'Personalized Treatment & Precision Medicine',
                points: [
                    'AI helps predict patient responses to treatments, enabling customized healthcare solutions.',
                    'Genomic analysis powered by AI is unlocking new possibilities for targeted therapies in complex diseases.'
                ]
            },
            {
                sectionTitle: 'Virtual Health Assistants & Chatbots',
                points: [
                    'AI-powered virtual assistants provide real-time health guidance and symptom checking, making healthcare more accessible.',
                    'Chatbots support mental health interventions, offering immediate response and reducing barriers to seeking help.'
                ]
            },
            {
                sectionTitle: 'AI in Drug Discovery & Research',
                points: [
                    'AI accelerates the drug discovery process, reducing research timelines from years to months.',
                    'Advanced algorithms analyze vast medical datasets to identify new treatments for emerging diseases.'
                ]
            },
            {
                sectionTitle: 'Smart Hospital & IoT Integration',
                points: [
                    'AI-driven hospital management systems optimize resource allocation and patient flow.',
                    'IoT-enabled AI solutions allow remote patient monitoring, improving chronic disease management.'
                ]
            }
        ],
        conclusion: {
            title: 'The AI-Powered Future of Healthcare',
            description:
                'AI is not just a futuristic concept—it’s actively transforming healthcare today. With advancements in deep learning, predictive analytics, and automation, AI is making patient care more precise, proactive, and personalized. As technology continues to evolve, AI-driven healthcare solutions will bridge gaps, improve accessibility, and save lives worldwide.'
        }
    },
    {
        id: 9,
        title: 'AI-Powered Drug Discovery: Speeding Up Medical Breakthroughs',
        description:
            'AI algorithms are transforming how new drugs are researched and tested for global health needs.',
        img: blog9,
        content: [
            {
                sectionTitle: 'AI-Powered Diagnostics',
                points: [
                    'Machine learning models analyze medical images to detect diseases like cancer with higher accuracy than traditional methods.',
                    'AI-driven pathology and radiology tools speed up diagnoses, reducing human error and workload for medical professionals.'
                ]
            },
            {
                sectionTitle: 'Personalized Treatment & Precision Medicine',
                points: [
                    'AI helps predict patient responses to treatments, enabling customized healthcare solutions.',
                    'Genomic analysis powered by AI is unlocking new possibilities for targeted therapies in complex diseases.'
                ]
            },
            {
                sectionTitle: 'Virtual Health Assistants & Chatbots',
                points: [
                    'AI-powered virtual assistants provide real-time health guidance and symptom checking, making healthcare more accessible.',
                    'Chatbots support mental health interventions, offering immediate response and reducing barriers to seeking help.'
                ]
            },
            {
                sectionTitle: 'AI in Drug Discovery & Research',
                points: [
                    'AI accelerates the drug discovery process, reducing research timelines from years to months.',
                    'Advanced algorithms analyze vast medical datasets to identify new treatments for emerging diseases.'
                ]
            },
            {
                sectionTitle: 'Smart Hospital & IoT Integration',
                points: [
                    'AI-driven hospital management systems optimize resource allocation and patient flow.',
                    'IoT-enabled AI solutions allow remote patient monitoring, improving chronic disease management.'
                ]
            }
        ],
        conclusion: {
            title: 'The AI-Powered Future of Healthcare',
            description:
                'AI is not just a futuristic concept—it’s actively transforming healthcare today. With advancements in deep learning, predictive analytics, and automation, AI is making patient care more precise, proactive, and personalized. As technology continues to evolve, AI-driven healthcare solutions will bridge gaps, improve accessibility, and save lives worldwide.'
        }
    },
    {
        id: 10,
        title: 'Blockchain in Healthcare: Ensuring Data Security & Privacy',
        description:
            'Blockchain technology is enhancing security and privacy in electronic health records (EHRs).',
        img: blog10,
        content: [
            {
                sectionTitle: 'AI-Powered Diagnostics',
                points: [
                    'Machine learning models analyze medical images to detect diseases like cancer with higher accuracy than traditional methods.',
                    'AI-driven pathology and radiology tools speed up diagnoses, reducing human error and workload for medical professionals.'
                ]
            },
            {
                sectionTitle: 'Personalized Treatment & Precision Medicine',
                points: [
                    'AI helps predict patient responses to treatments, enabling customized healthcare solutions.',
                    'Genomic analysis powered by AI is unlocking new possibilities for targeted therapies in complex diseases.'
                ]
            },
            {
                sectionTitle: 'Virtual Health Assistants & Chatbots',
                points: [
                    'AI-powered virtual assistants provide real-time health guidance and symptom checking, making healthcare more accessible.',
                    'Chatbots support mental health interventions, offering immediate response and reducing barriers to seeking help.'
                ]
            },
            {
                sectionTitle: 'AI in Drug Discovery & Research',
                points: [
                    'AI accelerates the drug discovery process, reducing research timelines from years to months.',
                    'Advanced algorithms analyze vast medical datasets to identify new treatments for emerging diseases.'
                ]
            },
            {
                sectionTitle: 'Smart Hospital & IoT Integration',
                points: [
                    'AI-driven hospital management systems optimize resource allocation and patient flow.',
                    'IoT-enabled AI solutions allow remote patient monitoring, improving chronic disease management.'
                ]
            }
        ],
        conclusion: {
            title: 'The AI-Powered Future of Healthcare',
            description:
                'AI is not just a futuristic concept—it’s actively transforming healthcare today. With advancements in deep learning, predictive analytics, and automation, AI is making patient care more precise, proactive, and personalized. As technology continues to evolve, AI-driven healthcare solutions will bridge gaps, improve accessibility, and save lives worldwide.'
        }
    },
    {
        id: 11,
        title: 'Medical Imaging with AI: Enhancing Diagnostic Accuracy',
        description:
            'AI is improving radiology and diagnostic imaging for faster and more precise disease detection.',
        img: blog11,
        content: [
            {
                sectionTitle: 'AI-Powered Diagnostics',
                points: [
                    'Machine learning models analyze medical images to detect diseases like cancer with higher accuracy than traditional methods.',
                    'AI-driven pathology and radiology tools speed up diagnoses, reducing human error and workload for medical professionals.'
                ]
            },
            {
                sectionTitle: 'Personalized Treatment & Precision Medicine',
                points: [
                    'AI helps predict patient responses to treatments, enabling customized healthcare solutions.',
                    'Genomic analysis powered by AI is unlocking new possibilities for targeted therapies in complex diseases.'
                ]
            },
            {
                sectionTitle: 'Virtual Health Assistants & Chatbots',
                points: [
                    'AI-powered virtual assistants provide real-time health guidance and symptom checking, making healthcare more accessible.',
                    'Chatbots support mental health interventions, offering immediate response and reducing barriers to seeking help.'
                ]
            },
            {
                sectionTitle: 'AI in Drug Discovery & Research',
                points: [
                    'AI accelerates the drug discovery process, reducing research timelines from years to months.',
                    'Advanced algorithms analyze vast medical datasets to identify new treatments for emerging diseases.'
                ]
            },
            {
                sectionTitle: 'Smart Hospital & IoT Integration',
                points: [
                    'AI-driven hospital management systems optimize resource allocation and patient flow.',
                    'IoT-enabled AI solutions allow remote patient monitoring, improving chronic disease management.'
                ]
            }
        ],
        conclusion: {
            title: 'The AI-Powered Future of Healthcare',
            description:
                'AI is not just a futuristic concept—it’s actively transforming healthcare today. With advancements in deep learning, predictive analytics, and automation, AI is making patient care more precise, proactive, and personalized. As technology continues to evolve, AI-driven healthcare solutions will bridge gaps, improve accessibility, and save lives worldwide.'
        }
    },
    {
        id: 12,
        title: 'The Role of Big Data in Predictive Healthcare Analytics',
        description:
            'Data-driven insights are helping hospitals predict outbreaks and manage resources efficiently.',
        img: blog12,
        content: [
            {
                sectionTitle: 'AI-Powered Diagnostics',
                points: [
                    'Machine learning models analyze medical images to detect diseases like cancer with higher accuracy than traditional methods.',
                    'AI-driven pathology and radiology tools speed up diagnoses, reducing human error and workload for medical professionals.'
                ]
            },
            {
                sectionTitle: 'Personalized Treatment & Precision Medicine',
                points: [
                    'AI helps predict patient responses to treatments, enabling customized healthcare solutions.',
                    'Genomic analysis powered by AI is unlocking new possibilities for targeted therapies in complex diseases.'
                ]
            },
            {
                sectionTitle: 'Virtual Health Assistants & Chatbots',
                points: [
                    'AI-powered virtual assistants provide real-time health guidance and symptom checking, making healthcare more accessible.',
                    'Chatbots support mental health interventions, offering immediate response and reducing barriers to seeking help.'
                ]
            },
            {
                sectionTitle: 'AI in Drug Discovery & Research',
                points: [
                    'AI accelerates the drug discovery process, reducing research timelines from years to months.',
                    'Advanced algorithms analyze vast medical datasets to identify new treatments for emerging diseases.'
                ]
            },
            {
                sectionTitle: 'Smart Hospital & IoT Integration',
                points: [
                    'AI-driven hospital management systems optimize resource allocation and patient flow.',
                    'IoT-enabled AI solutions allow remote patient monitoring, improving chronic disease management.'
                ]
            }
        ],
        conclusion: {
            title: 'The AI-Powered Future of Healthcare',
            description:
                'AI is not just a futuristic concept—it’s actively transforming healthcare today. With advancements in deep learning, predictive analytics, and automation, AI is making patient care more precise, proactive, and personalized. As technology continues to evolve, AI-driven healthcare solutions will bridge gaps, improve accessibility, and save lives worldwide.'
        }
    }
]

const page = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const foundBlog = blogs.find((item) => item.id === parseInt(id));
        if (foundBlog) {
            setBlog(foundBlog);
        }
    }, [id]);

    if (!blog) return <p className="text-center text-lg font-semibold mt-10">Loading...</p>;

    return (
        <div className="custom-container">
            <div className='w-full h-min-[56px]  border-t border-b border-t-[#F1F3F4] border-b-[#F1F3F4] mb-10'>
                <p className='py-[16px] leading-[24px] text-[16px] font-[500] flex justify-start items-center gap-[16px]'>
                    <Link href={'/'}><span className='text-[#586A78]'>Home</span></Link>
                    <span className='text-[#F05232]'>/</span>
                    <Link href={'/blogs'}><span className='text-[#586A78]'>Blogs</span></Link>
                    <span className='text-[#F05232]'>/</span>
                    <span className='text-primary'>{blog.title}</span>
                </p>
            </div>
            <BlogDetails blog={blog} />
        </div>
    );
};

export default page;
