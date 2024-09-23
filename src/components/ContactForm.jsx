import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const PageTitle = styled.h1`
  color: white;
`;

const FormContainer = styled.div`
  text-align: center;
  padding: 2em;
  background-color: #19355c;
  color: white;
`;

const BodyForm = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ItemForm = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
`;

const Input = {
  border: '1px solid #b29163',
  height: '2em',
};

const TextArea = {
  border: '1px solid #b29163',
  height: '7em',
};

const DivButton = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #f6c402;
  color: black;
  border: none;
  padding: 1em 2em;
  margin: 2em;
  border-radius: 10px;
`;

const Span = styled.span`
  display: block;
  color: tomato;
  font-size: x-small;
`;

export const ContactForm = () => {
  const navigate = useNavigate();
  const handleLopd = () => {
    navigate('/lopd');
    window.scroll(0, 0);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const templateParams = {
      from_nombre: data.nombre,
      from_email: data.email,
      from_mensaje: data.mensaje,
    };

    emailjs
      .send('service_tjg22gj', 'template_067v4im', templateParams, {
        publicKey: 'GkReJvzgDEJ5TvC7K',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  });

  return (
    <FormContainer>
      <PageTitle>Contacto</PageTitle>
      <form onSubmit={onSubmit}>
        <BodyForm>
          <ItemForm>
            <label>Nombre:</label>
            <input
              placeholder="Su nombre"
              onClick={() => setValue('nombre', '')}
              style={Input}
              type="text"
              {...register('nombre', {
                required: {
                  value: true,
                  message: 'Nombre es requerido',
                },
              })}
            />
            {errors.nombre && <Span>{errors.nombre.message}</Span>}
          </ItemForm>
          <ItemForm>
            <label>Correo electrónico:</label>
            <input
              placeholder="Su e-mail"
              onClick={() => setValue('email', '')}
              style={Input}
              type="email"
              {...register('email', {
                required: {
                  value: true,
                  message: 'El correo es requerido',
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,4}$/,
                  message: 'Correo no válido',
                },
              })}
            />
            {errors.email && <Span>{errors.email.message}</Span>}
          </ItemForm>
          <ItemForm>
            <label>Mensaje:</label>
            <textarea
              placeholder="Su mensaje"
              onClick={() => setValue('mensaje', '')}
              style={TextArea}
              {...register('mensaje', {
                required: true,
              })}
            />
            {errors.mensaje?.type === 'required' && (
              <Span>Espacio requerido</Span>
            )}
          </ItemForm>
          <input
            style={{
              marginBottom: '1em',
            }}
            type="checkbox"
            {...register('lopd', {
              required: {
                value: true,
                message: 'Debe de aceptar los términos y condiciones',
              },
            })}
          />
          <Link
            onClick={handleLopd}
            style={{ color: 'white', padding: '1em' }}
            to="/lopd"
          >
            Acepto la política de privacidad
          </Link>
          {errors.lopd && <Span>{errors.lopd.message}</Span>}
          <DivButton>
            <Button type="submit">Enviar</Button>
          </DivButton>
        </BodyForm>
      </form>
    </FormContainer>
  );
};
