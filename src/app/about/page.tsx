export const metadata = {
  title: 'Acerca de',
  description: 'La descripción de mi página',
};

function AboutPage() {
  return (
    <>
      <div className='h-screen text-xs flex flex-col items-center'>
        <div
          className='bg-neutral-100 text-sm px-8 py-10 rounded-md w-[90%] md:w-[80%] 
      min-[320px]:mt-28
      max-w-[1024px]'
        >
          <h2 className='text-sm md:text-2xl font-semibold sm:text-lg'>
            DISEÑO E IMPLEMENTACIÓN DE UN SISTEMA DE RIEGO AUTOMATIZADO MEDIANTE
            EL USO DE IoT
          </h2>
          <br />
          <p>
            La presente investigación se sumerge en el fascinante cruce entre la
            tecnología de la nube, la gestión de servidores virtuales y la
            automatización agrícola, centrándose en la implementación de un
            sistema de riego automatizado para cultivos de pequeña superficie en
            el municipio de Chía, Cundinamarca. Este proyecto, titulado
            &ldquo;DISEÑO E IMPLEMENTACIÓN DE UN SISTEMA DE RIEGO AUTOMATIZADO
            MEDIANTE EL USO DE IoT,&ldquo; se propone abordar las problemáticas
            enfrentadas por los pequeños agricultores, desde las limitaciones
            tradicionales hasta los desafíos contemporáneos.
          </p>
          <br />
          <p>
            En una sinergia entre Amazon Elastic Compute Cloud (EC2) y las
            poderosas Amazon Machine Images (AMI), la investigación se apoya en
            la infraestructura tecnológica líder en la nube para lanzar
            instancias que actúan como servidores virtuales. Estas instancias,
            siendo réplicas exactas de las AMIs, desencadenan un abanico de
            posibilidades para la automatización y control del riego agrícola. A
            través del uso del protocolo MQTT, el sistema se conecta con un
            broker central, facilitando la comunicación eficiente entre
            dispositivos IoT y permitiendo la gestión inteligente de datos. En
            este contexto, se destaca la implementación del servidor de mensajes
            de código abierto, Eclipse Mosquitto, como pieza clave en la
            arquitectura de comunicación.
          </p>
          <br />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
