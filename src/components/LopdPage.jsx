import React from 'react';
import styled from 'styled-components';
import { Wellcome } from './Wellcome';
import { Link, useNavigate } from 'react-router-dom';

// Styled-components para estilizar el componente
const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  min-height: 100vh;
`;

const Title = styled.h1`
  color: #19355c;
`;

const SubTitle = styled.h2`
  color: #19355c;
  margin-top: 1.5em;
`;

const Paragraph = styled.p`
  line-height: 1.6;
`;

const List = styled.ul`
  padding-left: 1.5em;
`;

const ListItem = styled.li`
  margin-bottom: 0.5em;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  color: #19355c;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const LopdPage = () => {
  const navigate = useNavigate();
  const handleBackLink = () => {
    navigate('/');
    window.scroll(0, 0);
  };
  return (
    <Container>
      <Title>Política de Privacidad de NahwiPro</Title>
      <Paragraph>
        <Strong>Última actualización:</Strong> 23/09/2024
      </Paragraph>

      <Paragraph>
        En NahwiPro, nos comprometemos a proteger la privacidad de nuestros
        usuarios y a garantizar la seguridad de la información personal que
        recopilamos. Esta política de privacidad describe cómo recopilamos,
        usamos y protegemos su información personal cuando utiliza nuestros
        servicios y sitio web.
      </Paragraph>

      <SubTitle>1. Información que Recopilamos</SubTitle>
      <Paragraph>
        Cuando accede a nuestros servicios o sitio web, podemos recopilar las
        siguientes categorías de información:
      </Paragraph>
      <List>
        <ListItem>
          <Strong>Información personal:</Strong> como nombre, dirección de
          correo electrónico, número de teléfono y otros datos que nos
          proporcione directamente.
        </ListItem>
        <ListItem>
          <Strong>Información de uso:</Strong> como dirección IP, tipo de
          navegador, páginas visitadas y tiempos de acceso.
        </ListItem>
        <ListItem>
          <Strong>Cookies y tecnologías similares:</Strong> que nos permiten
          rastrear su interacción con nuestro sitio web y mejorar su experiencia
          de usuario.
        </ListItem>
      </List>

      <SubTitle>2. Cómo Utilizamos su Información</SubTitle>
      <Paragraph>Usamos la información recopilada para:</Paragraph>
      <List>
        <ListItem>Proporcionar y mejorar nuestros servicios.</ListItem>
        <ListItem>Personalizar su experiencia en nuestro sitio web.</ListItem>
        <ListItem>Responder a sus consultas y brindarle soporte.</ListItem>
        <ListItem>
          Enviar notificaciones relacionadas con actualizaciones o cambios en
          nuestros servicios.
        </ListItem>
        <ListItem>Cumplir con obligaciones legales.</ListItem>
      </List>

      <SubTitle>3. Compartición de Información</SubTitle>
      <Paragraph>
        NahwiPro no venderá ni alquilará su información personal a terceros. Sin
        embargo, podemos compartir su información con:
      </Paragraph>
      <List>
        <ListItem>
          <Strong>Proveedores de servicios externos:</Strong> que nos ayudan a
          operar nuestro sitio web y ofrecer nuestros servicios.
        </ListItem>
        <ListItem>
          <Strong>Autoridades legales:</Strong> si es necesario para cumplir con
          la ley o proteger nuestros derechos.
        </ListItem>
      </List>

      <SubTitle>4. Seguridad de la Información</SubTitle>
      <Paragraph>
        Implementamos medidas de seguridad técnicas y organizativas para
        proteger su información personal frente a accesos no autorizados,
        pérdida, alteración o divulgación.
      </Paragraph>

      <SubTitle>5. Retención de Datos</SubTitle>
      <Paragraph>
        Conservamos su información personal solo durante el tiempo necesario
        para cumplir con los fines descritos en esta política o para cumplir con
        nuestras obligaciones legales.
      </Paragraph>

      <SubTitle>6. Sus Derechos</SubTitle>
      <Paragraph>Tiene derecho a:</Paragraph>
      <List>
        <ListItem>
          Acceder, corregir o eliminar su información personal.
        </ListItem>
        <ListItem>
          Solicitar la restricción o portabilidad de su información.
        </ListItem>
        <ListItem>
          Retirar su consentimiento para el procesamiento de datos en cualquier
          momento.
        </ListItem>
      </List>
      <Paragraph>
        Para ejercer estos derechos, puede ponerse en contacto con nosotros a
        través del correo electrónico
        <Strong> nahwiprocontacto@gmail.com</Strong>.
      </Paragraph>

      <SubTitle>7. Cambios a Esta Política</SubTitle>
      <Paragraph>
        Nos reservamos el derecho de actualizar esta política de privacidad en
        cualquier momento. Cualquier cambio será comunicado en esta página, por
        lo que le recomendamos revisarla periódicamente.
      </Paragraph>

      <SubTitle>8. Contacto</SubTitle>
      <Paragraph>
        Si tiene preguntas o inquietudes sobre esta política de privacidad, no
        dude en ponerse en contacto con nosotros a través de:
      </Paragraph>
      <List>
        <ListItem>
          <Strong>Correo electrónico:</Strong> nahwiprocontacto@gmail.com
        </ListItem>
        <ListItem>
          <Strong>Dirección postal:</Strong> [Dirección de la empresa]
        </ListItem>
      </List>
      <BackLink onClick={handleBackLink} to="/" element={<Wellcome />}>
        Volver
      </BackLink>
    </Container>
  );
};
