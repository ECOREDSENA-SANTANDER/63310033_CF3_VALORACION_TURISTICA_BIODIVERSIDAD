export default {
  global: {
    Name: 'Conectando turismo, naturaleza y sostenibilidad',
    Description:
      'La valoración de la biodiversidad en la actividad turística es esencial para entender cómo el turismo puede afectar tanto positiva como negativamente los ecosistemas. El turismo depende de los servicios ecosistémicos que la biodiversidad ofrece, y su conservación o pérdida impacta directamente la sostenibilidad del sector. Gestionar el turismo de manera responsable es clave para preservar los recursos naturales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El turismo y sus actividades',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Impactos del turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Impactos económicos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Impactos socioculturales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Impactos ambientales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Capacidad de Carga',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Motores de transformación y pérdida de la biodiversidad',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Turismo y sus actividades',
      referencia:
        'Trochando, R. (2016, 19 agosto). Campesinos e indígenas exigen cierre del turismo al nevado del Cocuy - Trochando Sin Fronteras. Trochando Sin Fronteras.',
      tipo: 'Página Web',
      link:
        'https://trochandosinfronteras.info/campesinos-e-indigenas-exigen-cierre-del-turismo-al-nevado-del-cocuy/',
    },
    {
      tema: 'Turismo y sus actividades',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024, 21 octubre). El turismo rural en Colombia',
      tipo: 'Video',
      link: 'https://youtu.be/YIpnqZRTYZU',
    },
  ],
  glosario: [
    {
      termino: 'Áreas protegidas',
      significado:
        'son terrenos o aguas designados para preservar la biodiversidad y los recursos naturales y culturales, gestionados legalmente u otros medios eficaces. su propósito es proteger la diversidad biológica (uicn, 1992).',
    },
    {
      termino: 'Cambio climático',
      significado:
        'es el cambio en el clima causado por la actividad humana que altera la composición de la atmósfera global, más allá de la variabilidad climática natural (convención marco de las naciones unidas sobre el cambio climático).',
    },
    {
      termino: 'Conservación de la biodiversidad',
      significado:
        'es el objetivo principal de la gestión de la biodiversidad y sus servicios ecosistémicos, que implica la preservación, el uso sostenible, el conocimiento y la restauración de la biodiversidad.',
    },
    {
      termino: 'Degradación ecosistémica',
      significado:
        'es la pérdida de la capacidad de los ecosistemas para proporcionar servicios esenciales, como la purificación del aire, el agua o la protección del suelo.',
    },
    {
      termino: 'Enfoque ecosistémico',
      significado:
        'estrategia para gestionar los recursos naturales de manera integrada, promoviendo la conservación y el uso sostenible. se basa en el estudio científico de los ecosistemas, considerando las interacciones biológicas y el impacto humano en ellos.',
    },
    {
      termino: 'Gestión integral de biodiversidad',
      significado:
        'proceso que involucra la planificación y ejecución de acciones para la conservación de la biodiversidad y sus servicios, promoviendo el bienestar social mediante el mantenimiento de la capacidad adaptativa de los ecosistemas.',
    },
    {
      termino: 'Preservación de biodiversidad',
      significado:
        'consiste en mantener los ecosistemas y su biodiversidad en su estado natural, limitando la intervención humana para evitar su alteración.',
    },
    {
      termino: 'Recurso biológico',
      significado:
        'son organismos, partes de organismos o componentes bióticos que tienen un valor o utilidad real o potencial, incluidos sus productos derivados (decisión andina 391).',
    },
    {
      termino: 'Recurso genético',
      significado:
        'es todo material biológico que contiene información genética útil o valiosa para la humanidad.',
    },
    {
      termino: 'Servicios ecosistémicos',
      significado:
        'son los beneficios que los seres humanos reciben de los ecosistemas, como la purificación del aire, el agua y la regulación del clima, además de servicios proporcionados por sectores como el saneamiento y la reducción de emisiones.',
    },
    {
      termino: 'Uso sostenible',
      significado:
        'es el aprovechamiento de los recursos naturales de manera que se mantenga su capacidad para satisfacer las necesidades futuras, sin comprometer su disponibilidad para las generaciones venideras.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'es la susceptibilidad de los objetos de conservación a ser afectados o dañados debido a sus características intrínsecas, lo que puede llevar a su desaparición o deterioro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Industria Comercio y Turismo. (2012). Política de Turismo de Naturaleza.Bogotá.',
    },
    {
      referencia:
        'Ministerio de Desarrollo Económico. (2006). Ley 300 de 2006 art. 26.',
    },

    {
      referencia:
        'Organización MundiaL del Turismo OMT. (2016). La OMT subraya en la COP13 el potencial del Turismo para conservar la Biodiversidad.',
    },

    {
      referencia:
        'Organización Mundial del Turismo OMT. (sf). Código Mundial de Ética para el Turismo.',
    },

    {
      referencia:
        'Organización Mundial del Turismo OMT. (s.f.). Entender el turismo: Glosario Básico. ',
    },

    {
      referencia: 'SENA. (2011). TURISMO: HISTORIA, MORFOLOGÍA y TIPOLOGÍA.',
    },

    {
      referencia: 'SENA. (2017). Guianza Turística. Armenia.',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2025, 13 marzo). Medición de impactos de productos turísticos. YouTube.',
      link: 'https://www.youtube.com/watch?v=QXdn11WQ5S4',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Eugenia Arango Narváez',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Turismo - Regional Quindío',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
