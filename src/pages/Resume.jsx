// portfolio-react\frontend\src\pages\Resume.jsx
import React from 'react';
import '../styles/pages/Resume.css';

const Resume = () => {

    return (
        <div className="w-full mx-auto p-2 md:p-6 bg-gray-800 text-white">
            <h2 className='heading'>Work Experience</h2>
                <ul>
                    <li>
                        <strong>HB Consultants LLC</strong> - Founder | April 2024 - Present
                        <p className="work">
                            As the founder of HB Consultants LLC, doing business as Data Point Solutions, I provide land surveying drafting, data processing
                            services, and land title searches. My business leverages nearly 20 years of experience in land surveying and civil engineering to
                            deliver high-quality and efficient solutions to clients. We are committed to staying at the forefront of technology, utilizing the
                            latest software and methodologies to ensure precision and accuracy in all our work.
                        </p>
                    </li>
                    <li>
                        <strong>Civil &amp; Environmental Consultants, Inc (CEC)</strong> - Sr. CADD Technician | November 2022 - Present
                        <p className="work">
                            As a Senior CADD Technician, I am responsible for the overall coordination of the performance and timely completion of land survey
                            drawings and reports. I perform data analysis on all field data, including network analysis (least squares), processing of LiDAR and
                            photogrammetry data, and finalize reports at the direction of the survey manager and Professional Land Surveyor. Additionally, I
                            ensure that all deliverables meet company standards and client expectations, providing detailed and accurate CAD drawings for
                            various civil engineering projects.
                        </p>
                    </li>
                    <li>
                        <strong>EAS Professionals, Inc</strong> - CADD Manager | December 2017 - November 2022
                        <p className="work">
                            In my role as CADD Manager, I was responsible for the proper implementation of all CADD software and provided training and support
                            to all CADD technicians. I worked closely with the survey manager to support field survey technicians and implemented cutting-edge
                            technology in land surveying, including UAS sensors and terrestrial LiDAR scanners. I developed new survey workflows and solutions
                            to complex surveying challenges, ensuring efficient and accurate data processing and project completion.
                        </p>
                    </li>
                    <li>
                        <strong>GE Power</strong> - CNC Machinist A | May 2016 - December 2017
                        <p className="work">
                            As a CNC Machinist at GE Power, I primarily worked with CNC broach machines to create turbine wheels for gas-fired power plants
                            worldwide. My responsibilities included machine setup, operation, and maintenance, as well as ensuring that all components met
                            strict quality standards. I collaborated with engineering teams to optimize machining processes and improve production efficiency.
                        </p>
                    </li>
                    <li>
                        <strong>Azimuth Control, Inc</strong> - Sr. CADD Technician | May 2013 - May 2016
                        <p className="work">
                            At Azimuth Control, I was tasked with developing new workflows for a small land surveying business and creating all draft documents
                            for surveys. I handled IT responsibilities, including writing copy for the company website, network support, and help desk support.
                            Additionally, I assisted field crews with site layout, boundary, and topographic surveys, utilizing GNSS and robotic total station
                            equipment to ensure precise data collection and project execution.
                        </p>
                    </li>
                    <li>
                        <strong>Morgan Corp.</strong> - Estimator/Survey Technician | February 2007 - May 2013
                        <p className="work">
                            While working as an estimator at Morgan Corp., I performed all take-off reports for upcoming bids, set up bids in Bid2Win, and
                            created project schedules in P6. I used Agtek, Autodesk Civil 3D, Terramodel, Trimble Business Center, and Microstation for
                            take-offs, as well as performing manual calculations from paper plans. I also supported the surveying department by building machine
                            control models, drafting final surveys, and setting up project control prior to mobilization.
                        </p>
                    </li>
                    <li>
                        <strong>SEW Eurodrive</strong> - CNC Machinist Intern | 2006 - 2007
                        <p className="work">
                            During my internship at SEW Eurodrive, I primarily worked in the deburr department, assisting in QA/QC, heat treat, and packaging
                            departments. I obtained my forklift certification and supported various manufacturing processes, ensuring high-quality production
                            standards were maintained.
                        </p>
                    </li>
                    <li>
                        <strong>A. Burger</strong> - CNC Machinist | 2005 - 2006
                        <p className="work">
                            At A. Burger, I operated and maintained two multi-axis CNC machines on second shift, ensuring that all produced components met
                            precise specifications. I collaborated with other machinists and engineers to troubleshoot issues and improve machining efficiency.
                        </p>
                    </li>
                    <li>
                        <strong>Denny&apos;s Corporate</strong> - Assets Protection &amp; Risk Management Associate | 2004 - 2005
                        <p className="work">
                            At Denny&apos;s Corporate headquarters, I managed building security, assets protection, and risk management. I provided IT support for
                            company camera and POS systems, conducted investigations on missing assets, and handled customer complaints and incident reports
                            from store managers.
                        </p>
                    </li>
                    <li>
                        <strong>Spartan Security</strong> - Unarmed Security Guard | 2003 - 2004
                        <p className="work">
                            As an unarmed security guard at Spartan Security, I was assigned to the Lyman Plant of Springs Industry, where I performed front
                            gate access, security rounds, and maintained back gate access, ensuring the safety and security of the premises.
                        </p>
                    </li>
                </ul>
            <div className="education">
                <h2 className="heading">Education</h2>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>School</th>
                                <th>Degree</th>
                                <th>Years</th>
                                <th>Location</th>
                            </tr>
{/*                         <tr>
                                <td>Udemy</td>
                                <td>Online Courses in Programming/Coding and Web Development</td>
                                <td>Ongoing</td>
                                <td>Online</td>
                            </tr>
                            <tr>
                                <td>University of Maine</td>
                                <td>Bachelor&apos;s of Engineering, Survey Engineering Technology</td>
                                <td>2022 - Present</td>
                                <td>Online</td>
                            </tr>
                            <tr>
                                <td>East Tennessee State University</td>
                                <td>Bachelor&apos;s of Science, Surveying and Mapping Science (Not Completed)</td>
                                <td>2021 - 2022</td>
                                <td>Online</td>
                            </tr> */}
                            <tr>
                                <td>Greenville Technical College</td>
                                <td>Associate of Technology, Aircraft Maintenance</td>
                                <td>2012 - 2014</td>
                                <td>Greenville, SC</td>
                            </tr>
                            <tr>
                                <td>Spartanburg Community College</td>
                                <td>Associate of Technology, Civil Engineering Technology</td>
                                <td>2007 - 2008</td>
                                <td>Spartanburg, SC</td>
                            </tr>
                            <tr>
                                <td>Spartanburg Community College</td>
                                <td>Associate of Technology, Machine Tool Technology</td>
                                <td>2005 - 2007</td>
                                <td>Spartanburg, SC</td>
                            </tr>
                            <tr>
                                <td>Grace Christian School</td>
                                <td>High School Diploma, General Education</td>
                                <td>2003</td>
                                <td>Landrum, SC</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
        
    )
}

export default Resume;