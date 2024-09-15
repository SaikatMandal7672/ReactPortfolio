
import { PROJECTS } from '../constants'

const Projects = () => {
    return (
        <section id="projects" className='p-8'>
            <h2 className='my-10 text-center text-3xl lg:text-8xl uppercase'> My Works</h2>
            <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
                {
                    PROJECTS.map((project) => (
                        <a href={project.link} key={project.id} target="_blank" rel='noopener noreferrer' className='block'>
                            <div className="relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg">
                                <img src={project.imgSrc} alt={project.title} className='h-auto w-full object-cover' />
                                <div className="absolute bottom-0 left-0 right-0 m-8 p-8 text-white backdrop-blur-md">
                                    <h3 className="text-3xl">{project.title}</h3>
                                    <p className="max-w-xs text-lg">{project.description}</p>
                                    <a href={project.GitHub} target="_blank" className='bg-lime-300 text-black rounded-lg px-5  '>GitHub</a>
                                    <a href={project.link} target="_blank" className='bg-lime-300 text-black rounded-lg px-5  ml-5'>Link</a>
                                </div>
                                
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects