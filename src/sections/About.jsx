import Globe from 'react-globe.gl'
import Button from '../components/Button.jsx'
import { useState } from 'react'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('geraldinevasquezgutierrez@gmail.com')

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }


    return (
        <section className='c-space my-20' id='about'>
            <p className="head-text">Sobre mí</p>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md-grid-cols-2 grid-cols-1 gap-5 mt-12 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="\assets\grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>¡Hola! Soy Geraldine</p>
                            <p className='grid-subtext'>Tecnóloga en formación en Análisis y Desarrollo de Software. Me apasiona crear soluciones digitales que faciliten la vida de las personas y las empresas.
Disfruto transformar ideas en proyectos reales aplicando desarrollo web y móvil.</p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="\assets\grid2.png" alt="grid-2" className='mx-auto w-full sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Mi stack tecnológico</p>
                            <p className='grid-subtext'>Trabajo con HTML, CSS, JavaScript y PHP, además de MySQL y PostgreSQL.
Uso React, Flutter, Node.js y Figma para integrar diseño y funcionalidad en experiencias eficientes.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                // se puede cambiar a dia cambiar night a day 
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            // labelsData={[{
                            //     lat: 40, lng: -100, text: 'Im Here', color: 'white', size: 20
                            // }]}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>Trabajo con equipos de cualquier lugar</p>
                            <p className='grid-subtext'>Desde Colombia para el mundo 🌎. Me encanta colaborar con personas y empresas que comparten la pasión por la innovación.</p>
                            <a href="#contact">
                                <Button name="Contáctame" isBeam containerClass='w-full mt-10' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="\assets\grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Mi pasión por la programación</p>
                            <p className='grid-subtext'>Me gusta aprender, resolver problemas y construir cosas con propósito.
La programación une mi creatividad y lógica para generar impacto.</p>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contáctame</p>
                        </div>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            <p className='lg:text-lg md:text-xl font-medium text-gray_gradient text-white'>geraldinevasquezgutierrez@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
