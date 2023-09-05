import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    nome: '',
    funcao: '',
    mensagem: '',
    email: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      // Make a POST request to the /api/email endpoint
      const response = await axios.post('api/email', formData);

      // Check the response status and display appropriate messages
      console.log(response.data);
      if (response.status === 200) {
        setStatusMessage('Email sent successfully!');
      } else {
        setStatusMessage('Failed to send the email. Please try again later.');
      }
    } catch (error) {
      // Handle error, display an error message
      setStatusMessage('Error sending email. Please try again later.');
      console.error('Error sending email:', error);
    }
  };

  return (
    <section>
      <div id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="relative  bg-[#d1d1d1]/80 backdrop-blur-md py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            <svg width="238" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* ... Background illustration code ... */}
            </svg>
          </div>
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-black mb-2">Entre em contato</h3>
              <p className="text-[#d1d1d1]-200 text-lg">Preencha o formulário abaixo para entrar em contato conosco:</p>
            </div>
            <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
              
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">

                <div className="flex-1">
                  <label htmlFor="empresa" className="block text-black mb-2">Empresa</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#d1d1d1]-900 border border-[#d1d1d1]-700 text-black placeholder-gray-400 focus:outline-none focus:border-[#d1d1d1]-500"
                    required
                  />
                </div>
                <div className="flex-1 mt-4 sm:mt-0 sm:ml-4">
                  <label htmlFor="nome" className="block text-black mb-2">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#d1d1d1]-900 border border-[#d1d1d1]-700 text-black placeholder-gray-400 focus:outline-none focus:border-[#d1d1d1]-500"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
              
  <label htmlFor="email" className="block text-black mb-2">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="w-full px-4 py-2 rounded-lg bg-[#d1d1d1]-900 border border-[#d1d1d1]-700 text-black placeholder-gray-400 focus:outline-none focus:border-[#d1d1d1]-500"
    required
  />
 
                <label htmlFor="funcao" className="block text-black mb-2">Função</label>
                <input
                  type="text"
                  id="funcao"
                  name="funcao"
                  value={formData.funcao}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#d1d1d1]-900 border border-[#d1d1d1]-700 text-black placeholder-gray-400 focus:outline-none focus:border-[#d1d1d1]-500"
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="mensagem" className="block text-black mb-2">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#d1d1d1]-900 border border-[#d1d1d1]-700 text-black placeholder-gray-400 focus:outline-none focus:border-[#d1d1d1]-500"
                   
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#d1d1d1]-900 hover:bg-[#d1d1d1]-700 focus:ring-[#d1d1d1]-500 focus:ring-offset-[#d1d1d1]-200 text-black w-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
          {statusMessage && (
            <div className="mt-6 text-center">
              <p className={statusMessage.includes('success') ? 'text-green-800' : 'text-red-800'}>
                {statusMessage}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
