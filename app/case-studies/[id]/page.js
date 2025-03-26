'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import caseImg from '../../../public/assets/home/caseStudiesImg.png';
import caseImg2 from '../../../public/assets/home/Blogs/blog1.png'
import caseImg3 from '../../../public/assets/home/Blogs/blog2.png'
import caseImg4 from '../../../public/assets/home/Blogs/blog3.png'
import CaseStudiesDetails from '../../../components/Case-studies/CaseStudiesDetails';

const data = [
    {
        id: 1,
        title: 'Predictive Analytics for Disease Prevention',
        description:
            'Leveraging big data and machine learning, our platform predicts potential disease outbreaks and provides proactive healthcare insights.',
        img: caseImg4,
        options: [
            {
                title: 'Early Disease Prediction',
                description: 'AI identifies at-risk individuals before symptoms appear'
            },
            {
                title: 'Personalized Health Recommendations',
                description: 'Tailored wellness plans based on data insights'
            },
            {
                title: 'Hospital Resource Optimization',
                description:
                    'Predicting patient influx to improve hospital preparedness'
            },
            {
                title: 'Real-Time Data Processing',
                description: 'Analyzing millions of health records for patterns'
            }
        ],
        challenges: [
            {
                title: 'Delayed Diagnosis',
                description:
                    'Traditional diagnostic methods required manual analysis, often taking days to provide results. This delay hindered timely treatment decisions, especially for critical conditions.'
            },
            {
                title: 'Human Errors',
                description:
                    'Inconsistencies in manual assessments led to varying diagnostic accuracy, increasing the risk of misdiagnosis.'
            },
            {
                title: 'Scalability Issues',
                description:
                    'The hospital faced increasing patient loads, making it difficult to maintain efficiency with its existing diagnostic processes.'
            }
        ],
        solutions: [
            {
                title: 'Automated Image Analysis',
                description:
                    'AI models were trained to analyze medical images, including X-rays, MRIs, and pathology slides, detecting abnormalities with high precision.'
            },
            {
                title: 'Predictive Insights',
                description:
                    'Machine learning algorithms identified patterns and flagged potential diseases in their earliest stages, improving preventive care.'
            },
            {
                title: 'Seamless Integration',
                description:
                    'The system was integrated with the hospital’s electronic health records (EHR), allowing real-time access to AI-powered diagnostic reports.'
            },
            {
                title: 'User-Friendly Dashboard',
                description:
                    'A visual and interactive dashboard enabled healthcare professionals to interpret AI findings quickly and make data-driven decisions.'
            }
        ],
        metrics: [
            {
                title: '30% Faster Diagnosis',
                description:
                    'AI reduced analysis time from 48 hours to just 12 hours, enabling quicker medical intervention.'
            },
            {
                title: '95% Accuracy Rate',
                description:
                    'The AI system significantly improved precision in detecting abnormalities, reducing misdiagnosis rates.'
            },
            {
                title: '40% Decrease in Diagnostic Errors',
                description:
                    'AI-assisted assessments led to more reliable and consistent results compared to traditional manual evaluations.'
            },
            {
                title: '5x Increase in Scalability',
                description:
                    'The system efficiently handled increased patient data without additional strain on healthcare staff.'
            }
        ],
        clientTestimonial: {
            description:
                'With AI-driven diagnostics, our hospital reduced misdiagnoses and improved patient care significantly. The efficiency gains have been remarkable, and we are now able to detect critical diseases much earlier.',
            clientName: 'Dr. Sarah Matthews, Chief Radiologist'
        },
        conclusion:
            'The successful deployment of AI-powered diagnostics transformed the healthcare provider’s operations, ensuring faster, more accurate, and scalable diagnostic processes. Moving forward, we plan to integrate real-time remote diagnostics to extend AI-driven healthcare access to underserved regions.'
    },
    {
        id: 2,
        title: 'AI-Powered Chatbots for Patient Assistance',
        description:
            'A virtual health assistant provides 24/7 support, answering patient queries, booking appointments, and assisting in symptom analysis.',
        img: caseImg3,
        options: [
            {
                title: '24/7 Patient Support',
                description: 'Immediate responses to common health queries'
            },
            {
                title: 'Appointment Scheduling',
                description: 'Seamless booking without human intervention'
            },
            {
                title: 'Symptom Checker',
                description: 'AI analyzes symptoms and suggests possible conditions'
            },
            {
                title: 'Multilingual Support',
                description: 'Catering to patients worldwide with language translation'
            }
        ],
        challenges: [
            {
                title: 'Delayed Diagnosis',
                description:
                    'Traditional diagnostic methods required manual analysis, often taking days to provide results. This delay hindered timely treatment decisions, especially for critical conditions.'
            },
            {
                title: 'Human Errors',
                description:
                    'Inconsistencies in manual assessments led to varying diagnostic accuracy, increasing the risk of misdiagnosis.'
            },
            {
                title: 'Scalability Issues',
                description:
                    'The hospital faced increasing patient loads, making it difficult to maintain efficiency with its existing diagnostic processes.'
            }
        ],
        solutions: [
            {
                title: 'Automated Image Analysis',
                description:
                    'AI models were trained to analyze medical images, including X-rays, MRIs, and pathology slides, detecting abnormalities with high precision.'
            },
            {
                title: 'Predictive Insights',
                description:
                    'Machine learning algorithms identified patterns and flagged potential diseases in their earliest stages, improving preventive care.'
            },
            {
                title: 'Seamless Integration',
                description:
                    'The system was integrated with the hospital’s electronic health records (EHR), allowing real-time access to AI-powered diagnostic reports.'
            },
            {
                title: 'User-Friendly Dashboard',
                description:
                    'A visual and interactive dashboard enabled healthcare professionals to interpret AI findings quickly and make data-driven decisions.'
            }
        ],
        metrics: [
            {
                title: '30% Faster Diagnosis',
                description:
                    'AI reduced analysis time from 48 hours to just 12 hours, enabling quicker medical intervention.'
            },
            {
                title: '95% Accuracy Rate',
                description:
                    'The AI system significantly improved precision in detecting abnormalities, reducing misdiagnosis rates.'
            },
            {
                title: '40% Decrease in Diagnostic Errors',
                description:
                    'AI-assisted assessments led to more reliable and consistent results compared to traditional manual evaluations.'
            },
            {
                title: '5x Increase in Scalability',
                description:
                    'The system efficiently handled increased patient data without additional strain on healthcare staff.'
            }
        ],
        clientTestimonial: {
            description:
                'With AI-driven diagnostics, our hospital reduced misdiagnoses and improved patient care significantly. The efficiency gains have been remarkable, and we are now able to detect critical diseases much earlier.',
            clientName: 'Dr. Sarah Matthews, Chief Radiologist'
        },
        conclusion:
            'The successful deployment of AI-powered diagnostics transformed the healthcare provider’s operations, ensuring faster, more accurate, and scalable diagnostic processes. Moving forward, we plan to integrate real-time remote diagnostics to extend AI-driven healthcare access to underserved regions.'
    },
    {
        id: 3,
        title: 'AI-Powered Diagnostics for Early Disease Detection',
        description:
            'A leading healthcare provider faced challenges in detecting diseases early due to delayed diagnostics and human error and implemented an AI-driven diagnostic system.',
        img: caseImg,
        options: [
            {
                title: '30% Faster Diagnosis',
                description: 'Reduced analysis time from 48 hours to 12 hours'
            },
            {
                title: '95% Accuracy Rate',
                description: 'Improved precision in detecting abnormalities'
            },
            {
                title: '40% Decrease in Diagnostic Errors',
                description: 'AI-assisted assessments led to more reliable results'
            },
            {
                title: 'Seamless Scalability',
                description: 'Processed 5x more cases without additional workforce'
            }
        ],
        challenges: [
            {
                title: 'Delayed Diagnosis',
                description:
                    'Traditional diagnostic methods required manual analysis, often taking days to provide results. This delay hindered timely treatment decisions, especially for critical conditions.'
            },
            {
                title: 'Human Errors',
                description:
                    'Inconsistencies in manual assessments led to varying diagnostic accuracy, increasing the risk of misdiagnosis.'
            },
            {
                title: 'Scalability Issues',
                description:
                    'The hospital faced increasing patient loads, making it difficult to maintain efficiency with its existing diagnostic processes.'
            }
        ],
        solutions: [
            {
                title: 'Automated Image Analysis',
                description:
                    'AI models were trained to analyze medical images, including X-rays, MRIs, and pathology slides, detecting abnormalities with high precision.'
            },
            {
                title: 'Predictive Insights',
                description:
                    'Machine learning algorithms identified patterns and flagged potential diseases in their earliest stages, improving preventive care.'
            },
            {
                title: 'Seamless Integration',
                description:
                    'The system was integrated with the hospital’s electronic health records (EHR), allowing real-time access to AI-powered diagnostic reports.'
            },
            {
                title: 'User-Friendly Dashboard',
                description:
                    'A visual and interactive dashboard enabled healthcare professionals to interpret AI findings quickly and make data-driven decisions.'
            }
        ],
        metrics: [
            {
                title: '30% Faster Diagnosis',
                description:
                    'AI reduced analysis time from 48 hours to just 12 hours, enabling quicker medical intervention.'
            },
            {
                title: '95% Accuracy Rate',
                description:
                    'The AI system significantly improved precision in detecting abnormalities, reducing misdiagnosis rates.'
            },
            {
                title: '40% Decrease in Diagnostic Errors',
                description:
                    'AI-assisted assessments led to more reliable and consistent results compared to traditional manual evaluations.'
            },
            {
                title: '5x Increase in Scalability',
                description:
                    'The system efficiently handled increased patient data without additional strain on healthcare staff.'
            }
        ],
        clientTestimonial: {
            description:
                'With AI-driven diagnostics, our hospital reduced misdiagnoses and improved patient care significantly. The efficiency gains have been remarkable, and we are now able to detect critical diseases much earlier.',
            clientName: 'Dr. Sarah Matthews, Chief Radiologist'
        },
        conclusion:
            'The successful deployment of AI-powered diagnostics transformed the healthcare provider’s operations, ensuring faster, more accurate, and scalable diagnostic processes. Moving forward, we plan to integrate real-time remote diagnostics to extend AI-driven healthcare access to underserved regions.'
    },
    {
        id: 4,
        title: 'AI-Powered Chatbots for Patient Assistance',
        description:
            'A virtual health assistant provides 24/7 support, answering patient queries, booking appointments, and assisting in symptom analysis.',
        img: caseImg2,
        options: [
            {
                title: '24/7 Patient Support',
                description: 'Immediate responses to common health queries'
            },
            {
                title: 'Appointment Scheduling',
                description: 'Seamless booking without human intervention'
            },
            {
                title: 'Symptom Checker',
                description: 'AI analyzes symptoms and suggests possible conditions'
            },
            {
                title: 'Multilingual Support',
                description: 'Catering to patients worldwide with language translation'
            }
        ],
        challenges: [
            {
                title: 'Delayed Diagnosis',
                description:
                    'Traditional diagnostic methods required manual analysis, often taking days to provide results. This delay hindered timely treatment decisions, especially for critical conditions.'
            },
            {
                title: 'Human Errors',
                description:
                    'Inconsistencies in manual assessments led to varying diagnostic accuracy, increasing the risk of misdiagnosis.'
            },
            {
                title: 'Scalability Issues',
                description:
                    'The hospital faced increasing patient loads, making it difficult to maintain efficiency with its existing diagnostic processes.'
            }
        ],
        solutions: [
            {
                title: 'Automated Image Analysis',
                description:
                    'AI models were trained to analyze medical images, including X-rays, MRIs, and pathology slides, detecting abnormalities with high precision.'
            },
            {
                title: 'Predictive Insights',
                description:
                    'Machine learning algorithms identified patterns and flagged potential diseases in their earliest stages, improving preventive care.'
            },
            {
                title: 'Seamless Integration',
                description:
                    'The system was integrated with the hospital’s electronic health records (EHR), allowing real-time access to AI-powered diagnostic reports.'
            },
            {
                title: 'User-Friendly Dashboard',
                description:
                    'A visual and interactive dashboard enabled healthcare professionals to interpret AI findings quickly and make data-driven decisions.'
            }
        ],
        metrics: [
            {
                title: '30% Faster Diagnosis',
                description:
                    'AI reduced analysis time from 48 hours to just 12 hours, enabling quicker medical intervention.'
            },
            {
                title: '95% Accuracy Rate',
                description:
                    'The AI system significantly improved precision in detecting abnormalities, reducing misdiagnosis rates.'
            },
            {
                title: '40% Decrease in Diagnostic Errors',
                description:
                    'AI-assisted assessments led to more reliable and consistent results compared to traditional manual evaluations.'
            },
            {
                title: '5x Increase in Scalability',
                description:
                    'The system efficiently handled increased patient data without additional strain on healthcare staff.'
            }
        ],
        clientTestimonial: {
            description:
                'With AI-driven diagnostics, our hospital reduced misdiagnoses and improved patient care significantly. The efficiency gains have been remarkable, and we are now able to detect critical diseases much earlier.',
            clientName: 'Dr. Sarah Matthews, Chief Radiologist'
        },
        conclusion:
            'The successful deployment of AI-powered diagnostics transformed the healthcare provider’s operations, ensuring faster, more accurate, and scalable diagnostic processes. Moving forward, we plan to integrate real-time remote diagnostics to extend AI-driven healthcare access to underserved regions.'
    },
    {
        id: 5,
        title: 'Predictive Analytics for Disease Prevention',
        description:
            'Leveraging big data and machine learning, our platform predicts potential disease outbreaks and provides proactive healthcare insights.',
        img: caseImg4,
        options: [
            {
                title: 'Early Disease Prediction',
                description: 'AI identifies at-risk individuals before symptoms appear'
            },
            {
                title: 'Personalized Health Recommendations',
                description: 'Tailored wellness plans based on data insights'
            },
            {
                title: 'Hospital Resource Optimization',
                description:
                    'Predicting patient influx to improve hospital preparedness'
            },
            {
                title: 'Real-Time Data Processing',
                description: 'Analyzing millions of health records for patterns'
            }
        ],
        challenges: [
            {
                title: 'Delayed Diagnosis',
                description:
                    'Traditional diagnostic methods required manual analysis, often taking days to provide results. This delay hindered timely treatment decisions, especially for critical conditions.'
            },
            {
                title: 'Human Errors',
                description:
                    'Inconsistencies in manual assessments led to varying diagnostic accuracy, increasing the risk of misdiagnosis.'
            },
            {
                title: 'Scalability Issues',
                description:
                    'The hospital faced increasing patient loads, making it difficult to maintain efficiency with its existing diagnostic processes.'
            }
        ],
        solutions: [
            {
                title: 'Automated Image Analysis',
                description:
                    'AI models were trained to analyze medical images, including X-rays, MRIs, and pathology slides, detecting abnormalities with high precision.'
            },
            {
                title: 'Predictive Insights',
                description:
                    'Machine learning algorithms identified patterns and flagged potential diseases in their earliest stages, improving preventive care.'
            },
            {
                title: 'Seamless Integration',
                description:
                    'The system was integrated with the hospital’s electronic health records (EHR), allowing real-time access to AI-powered diagnostic reports.'
            },
            {
                title: 'User-Friendly Dashboard',
                description:
                    'A visual and interactive dashboard enabled healthcare professionals to interpret AI findings quickly and make data-driven decisions.'
            }
        ],
        metrics: [
            {
                title: '30% Faster Diagnosis',
                description:
                    'AI reduced analysis time from 48 hours to just 12 hours, enabling quicker medical intervention.'
            },
            {
                title: '95% Accuracy Rate',
                description:
                    'The AI system significantly improved precision in detecting abnormalities, reducing misdiagnosis rates.'
            },
            {
                title: '40% Decrease in Diagnostic Errors',
                description:
                    'AI-assisted assessments led to more reliable and consistent results compared to traditional manual evaluations.'
            },
            {
                title: '5x Increase in Scalability',
                description:
                    'The system efficiently handled increased patient data without additional strain on healthcare staff.'
            }
        ],
        clientTestimonial: {
            description:
                'With AI-driven diagnostics, our hospital reduced misdiagnoses and improved patient care significantly. The efficiency gains have been remarkable, and we are now able to detect critical diseases much earlier.',
            clientName: 'Dr. Sarah Matthews, Chief Radiologist'
        },
        conclusion:
            'The successful deployment of AI-powered diagnostics transformed the healthcare provider’s operations, ensuring faster, more accurate, and scalable diagnostic processes. Moving forward, we plan to integrate real-time remote diagnostics to extend AI-driven healthcare access to underserved regions.'
    }
]

const page = () => {
    const params = useParams();
    const id = params?.id;
    const [caseStudy, setCaseStudy] = useState(null);

    useEffect(() => {
        if (id) {
            const foundCase = data.find((item) => item.id == id);
            if (foundCase) {
                setCaseStudy(foundCase);
            }
        }
    }, [id]);

    if (!caseStudy) {
        return <p>Loading...</p>;
    }

    return (
        <div className="custom-container">
            <div className='w-full h-min-[56px]  border-t border-b border-t-[#F1F3F4] border-b-[#F1F3F4] mb-10'>
                <p className='py-[16px] leading-[24px] text-[16px] font-[500] flex justify-start items-center gap-[16px]'>
                    <span className='text-[#586A78]'>Home</span>
                    <span className='text-[#F05232]'>/</span>
                    <span className='text-[#586A78]'>Case Studies</span>
                    <span className='text-[#F05232]'>/</span>
                    <span className='text-primary'>{caseStudy.title}</span>
                </p>
            </div>
            <CaseStudiesDetails caseStudy={caseStudy} />
        </div>
    );
};

export default page;
