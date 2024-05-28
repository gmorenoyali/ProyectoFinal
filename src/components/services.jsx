import React from 'react';

const services = [
  {
    image: 'service1.jpg',
    title: 'Servicio 1',
    description: 'Descripción del servicio 1',
  },
  {
    image: 'service2.jpg',
    title: 'Servicio 2',
    description: 'Descripción del servicio 2',
  },
  {
    image: 'service3.jpg',
    title: 'Servicio 3',
    description: 'Descripción del servicio 3',
  },
  {
    image: 'service4.jpg',
    title: 'Servicio 4',
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