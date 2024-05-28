import React from 'react';

import '../styles/Services.css'

const services = [
  {
    image: 'service1.jpg',
    title: 'Bodas',
    description: 'Descripción del servicio 1',
  },
  {
    image: 'service2.jpg',
    title: 'Eventos Empresariales',
    description: 'Descripción del servicio 2',
  },
  {
    image: 'service3.jpg',
    title: 'Veladas Sociales',
    description: 'Descripción del servicio 3',
  },
  {
    image: 'service4.jpg',
    title: 'Cumpleaños',
    description: 'Descripción del servicio 4',
  },
];

const Services = () => {
  return (
    <section className="services">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img src={service.image} alt={service.title} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;