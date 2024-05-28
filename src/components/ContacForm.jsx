import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Manejar el envío del formulario
  };

  return (
    <section className="contact-form">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Correo:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Teléfono:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Fecha:
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;