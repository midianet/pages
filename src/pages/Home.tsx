import React from 'react'

import foto1 from '../assets/fotos/foto1.png'
import foto2 from '../assets/fotos/foto2.png'
import foto3 from '../assets/fotos/foto3.png'
import foto4 from '../assets/fotos/foto4.png'
import Carousel from '../components/Carousel'

const Home: React.FC = () => {

    return (
        <>
            <div className="flex flex-wrap bg-white dark:bg-gray-900">
                <div className="flex justify-center max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="flex flex-row flex-wrap justify-between">
                        <div className="mr-10">
                            <div className="mr-auto place-self-center">
                                <h1 className="max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl dark:text-white">Comunidade Java de Goiás</h1>
                                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                    A paixão pela tecnologia e inovação nos move, estamos comprometidos em expandir mentes e transmitir o conhecimento.     
                                    Junte-se a nós.
                                </p>
                                <div className="pt-8  max-w-2xl mb-4 text-wrap text-gray-800 dark:text-white">
                                    O software evoluiu para algo essencial em nossas vidas proporcionando um mundo mais conectado e inteligente.
                                </div>
                            </div>
                        </div>
                        <Carousel>
                            {[
                                <img className="object-fill" src={foto1}/>,
                                <img className="object-fill" src={foto2}/>,
                                <img className="object-fill" src={foto3}/>,
                                <img className="object-fill" src={foto4}/>
                            ]}
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                        </svg> 
                        <blockquote>
                            <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"Quando James Gosling criou a linguagem Java na década de 1990 ele teve a visão de uma linguagem que funcionasse em qualquer dispositivo e isso fez do Java uma escolha popular para desenvolvedores em todo o mundo, impactando profundamente a computação moderna."</p>
                        </blockquote>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default Home