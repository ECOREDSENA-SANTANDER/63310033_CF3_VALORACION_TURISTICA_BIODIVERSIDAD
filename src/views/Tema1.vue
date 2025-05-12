<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 El turismo y sus actividades
      
      .row.justify-content-center.mb-4
        .col-lg-8.mb-3.mb-lg-0(data-aos="fade-right")
          .bg1.p-4.h-100.d-flex.justify-content-center.flex-column
            .lin-decor.mb-2
            p.mb-0 El turismo es un fenómeno social, cultural y económico que implica el desplazamiento de personas fuera de su lugar habitual de residencia, motivado por razones personales o de negocios o profesionales (Organización Mundial del Turismo - OMT, s.f.). Las motivaciones detrás de estos desplazamientos dan origen al concepto de actividad turística, que se refiere a las experiencias que los turistas disfrutan durante su tiempo libre o de ocio. Las actividades turísticas forman parte de la oferta turística y comprenden una serie de productos, servicios y experiencias donde el turista puede desempeñar tanto un papel activo como pasivo (Gobierno de Canarias, s.f.).
        .col-lg-4.col-md-8.col-11(data-aos="fade-left")
          img(src='@/assets/curso/temas/t1/1.jpg', alt='')
        
      .bg2.p-4.mb-5(data-aos="fade")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-md-2.col-4.d-none.d-md-block
            img.px-lg-4(src='@/assets/curso/temas/t1/2.svg', alt='')
          .col-lg-10.col-md-10
            p.mb-0 Las actividades turísticas se clasifican en función de las motivaciones de los turistas y de las actividades principales que realizan durante su estancia en un destino. Esta clasificación puede variar según la región, ya que depende tanto de la motivación del visitante como de la oferta disponible en el destino.


      .subt.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0 Clasificación de actividades turísticas

      .row.justify-content-center.mb-5
        .col-lg-3.col-md-5.col-6.mb-3.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/temas/t1/3.png', alt='')
        .col-lg-9(data-aos="fade-left")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg3")
            .row.justify-content-center(titulo="Turismo cultural")
              .col-lg-7.col-md-7.col-11.mb-3.mb-md-0
                p.mb-0 Viaje turístico motivado por conocer, comprender, disfrutar, el conjunto de rasgos y elementos distintivos, espirituales, materiales, intelectuales y afectivos que caracterizan a una sociedad o grupo social de un destino turístico.
              .col-lg-4.col-md-4.col-8
                img(src='@/assets/curso/temas/t1/acord1.png', alt='')  
            .row.justify-content-center(titulo="Turismo de negocios")
              .col-lg-7.col-md-7.col-11.mb-3.mb-md-0
                p.mb-0 Cada vez más comunes debido a la globalización, estos viajes no solo están destinados a actividades profesionales, sino que también permiten disfrutar del destino.
              .col-lg-4.col-md-4.col-8
                img(src='@/assets/curso/temas/t1/acord2.png', alt='')
            .row.justify-content-center(titulo="Turismo de diversión")
              .col-lg-7.col-md-7.col-11.mb-3.mb-md-0
                p.mb-0 Su propósito principal es el relax, el descanso y el esparcimiento. Es un turismo de disfrute pasivo o recreativo sin necesidad de enfrentar desafíos físicos ni riesgos. Ejemplos típicos son viajes a playas, resorts, parques temáticos o cruceros. No necesariamente se asocia a la aventura ni a entornos naturales exigentes. 
              .col-lg-4.col-md-4.col-8
                img(src='@/assets/curso/temas/t1/acord3.png', alt='')
            .row.justify-content-center(titulo="Turismo de salud")
              .col-lg-7.col-md-7.col-11.mb-3.mb-md-0
                p.mb-0 Relacionado con el bienestar, se basa en ofrecer atención personalizada para superar las expectativas de los clientes (SENA, 2011).
              .col-lg-4.col-md-4.col-8
                img(src='@/assets/curso/temas/t1/acord4.png', alt='')
            .row.justify-content-center(titulo="Turismo rural")
              .col-lg-7.col-md-7.col-11.mb-3.mb-md-0
                p.mb-0 Modalidad turística orientada al descanso y disfrute en áreas rurales, que permite al visitante interactuar con el entorno natural y cultural a través de actividades tradicionales, experiencias comunitarias y contacto con la vida campesina.
              .col-lg-4.col-md-4.col-8
                img(src='@/assets/curso/temas/t1/acord5.png', alt='')
            .row.justify-content-center(titulo="Turismo de aventura")
              .col-lg-7.col-md-7.col-11.mb-3.mb-md-0
                p Se centra en vivir experiencias emocionantes a través de actividades que implican riesgo controlado y actividad física; el contacto con la naturaleza es más intenso y activo. Involucra desafío personal, habilidades técnicas o deportivas, como:
                ul.lista-ul--color.fa-lista
                  li
                    i.fas.fa-leaf
                    span.mb-0 #[strong Buceo:] practicado bajo el agua con o sin equipo especial.
                  li
                    i.fas.fa-leaf
                    span.mb-0 #[strong #[em Rafting]:] descenso de ríos en embarcaciones sin motor, en aguas bravas.
                  li
                    i.fas.fa-leaf
                    span.mb-0 #[strong #[em Rappel]:] técnica de descenso por cuerdas en paredes verticales.
                  li
                    i.fas.fa-leaf
                    span.mb-0 #[strong Torrentismo:] descenso por cascadas de gran altura, una actividad cargada de adrenalina.
                  li
                    i.fas.fa-leaf
                    span.mb-0 #[strong Espeleología:] estudio y exploración de cavernas y formaciones subterráneas naturales.
                  li
                    i.fas.fa-leaf
                    span.mb-0 #[strong Parapente:] deslizarse desde montañas con un paracaídas, aprovechando las corrientes de aire.
                  li
                    i.fas.fa-leaf
                    span.mb-0 #[strong #[em Trekking] de montaña:] entrenamiento y actividades recreativas en montañas.
                  li
                    i.fas.fa-leaf
                    span.mb-0 #[strong Pesca deportiva:] actividad que se practica en ríos, lagos y océanos, tanto en competencias como recreativamente (SENA, 2017).
              .col-lg-4.col-md-4.col-6
                img(src='@/assets/curso/temas/t1/acord6.png', alt='')
            .row.justify-content-center(titulo="Turismo de naturaleza")
              .col-lg-7.col-md-7.col-11.mb-3.mb-md-0
                p.mb-0 Se centra en la observación y apreciación de la naturaleza, y puede incluir prácticas como el ecoturismo, agroturismo y turismo de aventura. Según la OMT (2002), esta modalidad involucra actividades en entornos naturales y culturas tradicionales.
              .col-lg-4.col-md-4.col-8
                img(src='@/assets/curso/temas/t1/acord7.png', alt='')

        .bg-1.mb-4.p-4.px-lg-5(data-aos="fade-down")
          .back-filter.back-filter--t1.tarjeta
            .row.justify-content-center.align-items-center
              .col-lg-7.col-md-6.col-11
                .row.justify-content-center.align-items-center.bg3.p-3.tarjeta.t1-bloque
                  .col-lg-2.col-md-4.col-4.t1-cont
                    img(src='@/assets/curso/temas/t1/6.svg', alt='')
                  .col-lg-10.col-md-8.col-8.t1-cont
                    p.mb-0 #[strong Nota:] existen tipos específicos de turismo de naturaleza 
              .col-lg-4.col-md-5.d-none.d-md-block.t1-cont
                img(src='@/assets/curso/temas/t1/5.svg', alt='')

        .bg3.p-4.mb-4(data-aos="fade")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-2.d-none.d-md-block
              img.px-lg-4(src='@/assets/curso/temas/t1/2.svg', alt='')
            .col-lg-6.col-md-6
              h4 Agroturismo
              p Conecta a los turistas con actividades agrícolas en el campo, como la recolección de café, ordeño o siembra (Ley 300, artículo 26), (Ministerio de Desarrollo Económico, 2006).
            .col-lg-4.col-md-4.col-9
              img(src='@/assets/curso/temas/t1/7.png', alt='')

        .bg-2.p-4.mb-4(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-5.col-7.mb-3.mb-lg-0.d-none.d-md-block
              img.px-lg-3(src='@/assets/curso/temas/t1/8.png', alt='')
            .col-lg-8
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-10.col-md-10
                  h4 Ecoturismo
                  p.mb-0 Desarrollado en áreas naturales, este tipo de turismo involucra actividades educativas y recreativas, como la observación de aves, avistamiento de ballenas y senderos interpretativos.
                .col-lg-2.col-md-2.d-none.d-md-block
                  img(src='@/assets/curso/temas/t1/2.svg', alt='')
              .row.justify-content-center
                .col-lg-4.col-md-6.col-11.mb-3.mb-lg-0
                  .tarjeta--boton.color-secundario.text-center.bg-tarj-t1.p-3.h-100
                    .row.justify-content-center.mb-3
                      .col-lg-6.col-md-4.col-4
                        img(src='@/assets/curso/temas/t1/tarj1.svg', alt='')
                    h4.w-fit.bg-white.m-auto.mb-2.px-1 Observación de aves
                    p.mb-0 Consiste en la identificación y disfrute de aves en su hábitat natural.  
                .col-lg-4.col-md-6.col-11.mb-3.mb-lg-0
                  .tarjeta--boton.color-secundario.text-center.bg-tarj-t1.p-3.h-100
                    .row.justify-content-center.mb-3
                      .col-lg-6.col-md-4.col-4
                        img(src='@/assets/curso/temas/t1/tarj2.svg', alt='')
                    h4.w-fit.bg-white.m-auto.mb-2.px-1 Avistamiento de ballenas
                    p.mb-0 Permite a los turistas observar el comportamiento de las ballenas durante su ciclo reproductivo.
                .col-lg-4.col-md-6.col-11.mb-3.mb-lg-0
                  .tarjeta--boton.color-secundario.text-center.bg-tarj-t1.p-3.h-100
                    .row.justify-content-center.mb-3
                      .col-lg-6.col-md-4.col-4
                        img(src='@/assets/curso/temas/t1/tarj3.svg', alt='')
                    h4.w-fit.bg-white.m-auto.mb-2.px-1 Senderos interpretativos
                    p.mb-0 Caminos en áreas naturales que educan a los visitantes sobre el medio ambiente mediante la explicación de un guía turístico.


        .bg4.p-4(data-aos="fade")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-2.col-4.d-none.d-md-block
              img.px-lg-4(src='@/assets/curso/temas/t1/2.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 Estas actividades generan impactos significativos en los destinos turísticos, que pueden ser tanto positivos como negativos; el turismo de naturaleza, en particular, representa una gran oportunidad de crecimiento para el sector, ya que la biodiversidad, los paisajes y la naturaleza misma son los principales atractivos. Este crecimiento, sin embargo, también implica un flujo de visitantes que afecta a las comunidades locales, la infraestructura y el medio ambiente.

        
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
