import { Tab } from "@headlessui/react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import Basket from "../components/Basket";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Project from "../components/Project";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";
import ModalVideo from "../components/modal-video";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import logoSmall from '../assets/logoSmall.png';


import VideoThumb from '../public/images/hero-image-01.jpg';

const Home = () => {
 
 

  return (
    <div className="">
      <Head>
        <title>Código com Café</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
 

      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
      <section id="saibamais" className="relative z-40 -mt-[100vh] min-h-screen bg-[#ffffff]/90 backdrop-blur-md flex justify-center ">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-black md:text-5xl">
           Saiba mais
          </h1>
          <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

           

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        
    </div>
          
        </div>
      </section>
      <section id="nossamissao" className="relative z-40 -mt-[0vh] min-h-screen bg-[#d1d1d1] flex justify-center">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            Nossa missão
          </h1>

          <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
        <span className="block">É resolver os</span>
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Desafios
          </span>
          <span className="block">das grandes empresas</span>
          <span className="block">com tecnologia</span>
        </h1>

        <div className="space-x-8">
           
          <a href="#contato" className="link">Entre em contato</a>
        </div>
      </div>

      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
         
      </div>
        </div>
      </section>
      <section id="projetos" className="relative z-40 -mt-[0vh] min-h-screen bg-[#1B1B1B] flex justify-center">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            Alguns de nossos clientes
          </h1>

          <Tab.Group>
            <Tab.List className="flex justify-center">
              
            
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <Project title="Indooh Car" image="/images/indoohcar.png" description=""/>
                <Project title="Data Geosis" image="/images/datageosis.png" description=""/>
                <Project title="Vetner" image="/images/vetners.png" description=" "/>
                <Project title="Compara Preço" image="/images/comparapreco.png" description=""/>
              </Tab.Panel>
               
              
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
      <section id="contato" className="relative z-40 -mt-[0vh] h-100 bg-[#ffffff]  flex justify-center">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-black md:text-5xl">
            Contato
          </h1>

          <Newsletter />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

 
