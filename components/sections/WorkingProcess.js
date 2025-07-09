import React from 'react'

const workingProcess = [
  {
    step: '01',
    title: 'Discover',
    description: `Before we begin, we take the time to understand where you currently stand and what you 
aim to achieve. This helps us grasp your goals and requirements thoroughly.`},
  {
    step: '02',
    title: 'Define',
    description: `Next, we clearly define the project scope and expectations. Once everything is aligned, 
we outline a step-by-step, solution-driven approach.`},
  {
    step: '03',
    title: 'Design',
    description: `With the requirements in place, we move into the design phase creating wireframes and 
visual concepts that reflect your brand and objectives.`,
  },
  {
    step: '04',
    title: 'Develop',
    description: `Once you're satisfied with the design, we proceed with development, adding the final 
touches and building out the full solution. `,
  },
  {
    step: '05',
    title: 'Deploy',
    description: `This is where your vision comes to life. We launch a live version of the project so you can 
experience how it works in real time.`,
  },
  {
    step: '06',
    title: 'Deliver',
    description: `The final and most rewarding step delivery. After your evaluation and approval, we hand 
over the completed project with full support and a smile.`,
  },
]

export default function WorkingProcess() {
  return (
    <section className="py-5 bg-theme text-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" data-aos="zoom-in-left" data-aos-duration={1700}>Our 6-D Process</h2>
          <p className="white-clr mb-xxl-2 mb-xl-2 mb-2" data-aos="zoom-in-left" data-aos-duration={1700}>
            At DigiFlix, we follow a structured and strategic approach to ensure every project is 
            executed with precision and creativity. Here's how we do it
          </p>
          <button className="btn btn-outline-light mt-3" data-aos="zoom-in-down" data-aos-duration={1700}>Here’s an overview of our process:</button>
        </div>

        <div className="row">
          {workingProcess.map((item, idx) => (
            <div key={idx} className="col-md-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1700}>
              <div className="p-4 h-100 border border-secondary rounded bg-black">
                <h1 className="text-success-emphasis fw-bold theme-clr">{item.step}</h1>
                <h5 className="text-light mb-3">{item.title}</h5>
                <p className="white-clr mb-xxl-2 mb-xl-2 mb-2" data-aos="zoom-in-up" data-aos-duration={1400}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
