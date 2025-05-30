<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Impactos del turismo

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-down")
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.jpg')})`}")
        .bloque-texto-g__texto.p-4
          p.mb-0 La actividad turística, al igual que otras formas de actividad humana, deja una huella en el territorio en el que se desarrolla, generando efectos tanto positivos como negativos; esta huella se manifiesta en diversos aspectos, como lo son los impactos económicos, socioculturales y ambientales, los cuales influyen en la evolución y sostenibilidad de los destinos turísticos (SENA y Trujillo, 2016).


      Separador  
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Impactos económicos

      p.mb-5 El turismo, como motor económico, juega un papel fundamental en la dinamización de los destinos turísticos. A través de la prestación de servicios como alojamiento, transporte, alimentación y entretenimiento, se genera un flujo de ingresos que contribuye directamente al crecimiento económico local; sin embargo, los impactos económicos del turismo son tanto positivos como negativos.

      .bg5.w-fit.br-50.mb-4(data-aos="fade-right")
        h3.mb-0.px-3.py-1 Impactos positivos

      .row.justify-content-center.justify-content-md-start.cursor-pointer.mb-4(data-aos="fade-down")
        .col-lg-4.col-md-6.col-10.mb-4
          .crd_hover_txt
            .crd_hover_txt--img
              img(src="@/assets/curso/temas/t2/tarj1-1.png", alt="")
            .crd_hover_txt--body.pt-2.text-center
              h4 Inversión económica en la infraestructura del lugar
              p El turismo fomenta el desarrollo de infraestructura, como hoteles, aeropuertos y carreteras, que puede beneficiar a la comunidad local a largo plazo.
        .col-lg-4.col-md-6.col-10.mb-4
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              img(src="@/assets/curso/temas/t2/tarj1-2.png", alt="")
            .crd_hover_txt--body.pt-2.pt-lg-4.text-center
              h4 Contribución a la economía local
              p Los servicios turísticos prestados en un destino, como alojamiento, alimentación y actividades recreativas, aportan directamente a la economía local.
        .col-lg-4.col-md-6.col-10.mb-4
          .crd_hover_txt
            .crd_hover_txt--img
              img(src="@/assets/curso/temas/t2/tarj1-3.png", alt="")
            .crd_hover_txt--body.text-center
              h4 Generación de empleo
              p El sector turístico crea oportunidades laborales en diversos niveles, desde la construcción de infraestructuras hasta la gestión y operación de servicios turísticos.
        .col-lg-4.col-md-6.col-10.mb-4
          .crd_hover_txt
            .crd_hover_txt--img
              img(src="@/assets/curso/temas/t2/tarj1-4.png", alt="")
            .crd_hover_txt--body.text-center
              h4 Economía diversificada
              p El turismo puede diversificar la economía de un destino, reduciendo la dependencia de sectores tradicionales y abriendo oportunidades para otras industrias.
        .col-lg-4.col-md-6.col-10.mb-4
          .crd_hover_txt
            .crd_hover_txt--img
              img(src="@/assets/curso/temas/t2/tarj1-5.png", alt="")
            .crd_hover_txt--body.text-center
              h4 Captación de divisas 
              p El turismo internacional permite la entrada de divisas extranjeras, funcionando como una forma de exportación de servicios que beneficia la economía.

      .bg5.w-fit.br-50.mb-4(data-aos="fade-right")
        h3.mb-0.px-3.py-1 Impactos negativos

      .row.justify-content-center.align-items-center
        .col-lg-8(data-aos="fade-right")
          ul.lista-ul--color.lista-ul--separador.fa-lista
            li
              i.fas.fa-leaf
              span.mb-0 #[strong Aumento de los costos de vida y de la tierra:] la llegada de turistas puede generar un incremento en el costo de vida local, lo que afecta a los residentes permanentes, especialmente en términos de vivienda y servicios.
            li
              i.fas.fa-leaf
              span.mb-0 #[strong Transformación hacia una mono economía:] el turismo puede llevar a una excesiva dependencia de este sector, lo que podría hacer que el destino se vuelva vulnerable a cambios en la demanda turística y pierda diversificación económica.
            li
              i.fas.fa-leaf
              span.mb-0 #[strong Aumento del trabajo informal con bajos ingresos:] aunque el turismo genera empleo, también puede incentivar la informalidad laboral, donde los trabajadores no cuentan con las condiciones adecuadas de remuneración o seguridad social.
            li
              i.fas.fa-leaf
              span.mb-0 #[strong Desplazamiento de la mano de obra local:] el crecimiento del sector turístico puede generar una demanda por trabajadores de fuera del destino, desplazando a la mano de obra local, especialmente en los trabajos mejor remunerados.
        .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
          img(src="@/assets/curso/temas/t2/2.svg", alt="")


      Separador  
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Impactos socioculturales

      p.mb-5 El turismo, en especial el turismo cultural, genera un intercambio cultural entre los visitantes y las comunidades locales, promoviendo vínculos estrechos y entendimiento mutuo, pero también pueden generar efectos adversos, como la pérdida de identidad cultural o la alteración de tradiciones y costumbres de las comunidades anfitrionas.

      .bg5.w-fit.br-50.mb-4(data-aos="fade-right")
        h3.mb-0.px-3.py-1 Impactos positivos

      .row.bgc-2.align-items-center.p-3.mb-5(data-aos='fade-down')
        .col-lg-12.col-12.px-lg-5.px-md-4.pt-5
          .row.justify-content-center.align-items-center    

            .row.justify-content-center
              .col-lg-4.d-none.d-lg-block
                img(src="@/assets/curso/temas/t2/3.svg", alt="")
              .col-lg-8
                SlyderF.circl-arrow(columnas="col-lg-6")
                  .tarjeta.bg1.p-4.text-center
                    .row.justify-content-center.mb-4
                      .col-lg-4.col-md-3.col-5
                        img(src='@/assets/curso/temas/t2/tarj-ico1.svg' alt='')
                    .bg-color-acento-contenido.tarjeta.py-2.px-2.mb-4
                      h4.text-white.mb-0 Rehabilitación y preservación del patrimonio
                    p El turismo cultural puede fomentar la conservación de monumentos históricos y tradiciones, incentivando su restauración y preservación a largo plazo.
                  .tarjeta.bg1.p-4.text-center
                    .row.justify-content-center.mb-4
                      .col-lg-4.col-md-3.col-5
                        img(src='@/assets/curso/temas/t2/tarj-ico2.svg' alt='')
                    .bg-color-acento-contenido.tarjeta.py-2.px-2.mb-4
                      h4.text-white.mb-0 Revitalización de actividades culturales en peligro de desaparecer
                    p.mb-0 A través de la demanda turística, se pueden revitalizar actividades o tradiciones que antes estaban en riesgo de desaparecer, permitiendo su transmisión a las nuevas generaciones.
                  .tarjeta.bg1.p-4.text-center
                    .row.justify-content-center.mb-4
                      .col-lg-4.col-md-3.col-5
                        img(src='@/assets/curso/temas/t2/tarj-ico3.svg' alt='')
                    .bg-color-acento-contenido.tarjeta.py-2.px-2.mb-4
                      h4.text-white.mb-0 Generación de empleo para residentes locales
                    p La expansión del turismo cultural crea oportunidades de empleo directo e indirecto para los residentes de la región.
                  .tarjeta.bg1.p-4.text-center
                    .row.justify-content-center.mb-4
                      .col-lg-4.col-md-3.col-5
                        img(src='@/assets/curso/temas/t2/tarj-ico4.svg' alt='')
                    .bg-color-acento-contenido.tarjeta.py-2.px-2.mb-4
                      h4.text-white.mb-0 Incentivo a la capacitación local
                    p La demanda de profesionales calificados en el sector turístico puede motivar a la población local a mejorar sus habilidades y niveles de educación, lo que beneficia a la comunidad a largo plazo.
                  .tarjeta.bg1.p-4.text-center
                    .row.justify-content-center.mb-4
                      .col-lg-4.col-md-3.col-5
                        img(src='@/assets/curso/temas/t2/tarj-ico5.svg' alt='')
                    .bg-color-acento-contenido.tarjeta.py-2.px-2.mb-4
                      h4.text-white.mb-0 Mejora de la calidad de vida
                    p El turismo puede generar mejoras en la infraestructura y los servicios locales, elevando la calidad de vida de las comunidades receptoras.
                  .tarjeta.bg1.p-4.text-center
                    .row.justify-content-center.mb-4
                      .col-lg-4.col-md-3.col-5
                        img(src='@/assets/curso/temas/t2/tarj-ico6.svg' alt='')
                    .bg-color-acento-contenido.tarjeta.py-2.px-2.mb-4
                      h4.text-white.mb-0 Intercambio cultural
                    p El turismo promueve el intercambio de ideas, costumbres y tradiciones, lo que enriquece tanto a los turistas como a las comunidades locales.
                  .tarjeta.bg1.p-4.text-center
                    .row.justify-content-center.mb-4
                      .col-lg-4.col-md-3.col-5
                        img(src='@/assets/curso/temas/t2/tarj-ico7.svg' alt='')
                    .bg-color-acento-contenido.tarjeta.py-2.px-2.mb-4
                      h4.text-white.mb-0 Reconocimiento y apropiación cultural
                    p La exposición y valorización de las culturas locales a través del turismo puede fomentar un mayor reconocimiento, protección y apropiación de la identidad cultural por parte de los residentes.

      .bg5.w-fit.br-50.mb-4(data-aos="fade-right")
        h3.mb-0.px-3.py-1 Impactos negativos

      TabsA.color-acento-botones(data-aos="fade-down")
        .tarjeta.row.justify-content-around.bg3.p-4(titulo="Pérdida de identidad y valores")
          .col-lg-5
            h4 Pérdida de identidad y valores
            p La creciente influencia de los turistas puede provocar una erosión de los valores tradicionales y la identidad cultural local, ya que las comunidades tienden a adaptar sus costumbres y tradiciones para satisfacer las expectativas de los visitantes.
          .col-lg-6.col-md-6.col-10
            img(src='@/assets/curso/temas/t2/tab1.png' alt='')
        .tarjeta.row.justify-content-around.bg3.p-4(titulo="Inseguridad")
          .col-lg-5
            h4 Inseguridad
            p El aumento de turistas en ciertas áreas puede generar un entorno de inseguridad, tanto para los residentes como para los visitantes, si no se gestionan adecuadamente los recursos y las infraestructuras.
          .col-lg-6.col-md-6.col-10
            img(src='@/assets/curso/temas/t2/tab2.png' alt='')
        .tarjeta.row.justify-content-around.bg3.p-4(titulo="Aumento de fenómenos negativos como la drogadicción y el turismo sexual")
          .col-lg-5
            h4 Aumento de fenómenos negativos como la drogadicción y el turismo sexual
            p En algunos destinos turísticos, el aumento de la demanda puede generar la proliferación de actividades indeseables como el turismo sexual o la drogadicción, afectando la salud y el bienestar de la comunidad.
          .col-lg-6.col-md-6.col-10
            img(src='@/assets/curso/temas/t2/tab3.png' alt='')
        .tarjeta.row.justify-content-around.bg3.p-4(titulo="Riesgos sociales para poblaciones vulnerables")
          .col-lg-5
            h4 Riesgos sociales para poblaciones vulnerables
            p El turismo puede poner en riesgo a las poblaciones más vulnerables, como niños, mujeres y personas de comunidades marginadas, al generar situaciones de explotación o abuso.
          .col-lg-6.col-md-6.col-10
            img(src='@/assets/curso/temas/t2/tab4.png' alt='')
        .tarjeta.row.justify-content-around.bg3.p-4(titulo="Degradación del patrimonio cultural")
          .col-lg-5
            h4 Degradación del patrimonio cultural
            p La masificación del turismo puede llevar a la sobreexplotación de los recursos culturales y naturales, lo que puede resultar en su degradación o destrucción irreversible.
          .col-lg-6.col-md-6.col-10
            img(src='@/assets/curso/temas/t2/tab5.png' alt='')
        .tarjeta.row.justify-content-around.bg3.p-4(titulo="Desplazamiento de la comunidad local")
          .col-lg-5
            h4 Desplazamiento de la comunidad local
            p La expansión del turismo y el aumento de la demanda de infraestructuras y servicios pueden causar el desplazamiento de las comunidades locales, que se ven obligadas a abandonar sus hogares debido a la presión por la expansión de la actividad turística.
          .col-lg-6.col-md-6.col-10
            img(src='@/assets/curso/temas/t2/tab6.png' alt='')


      Separador  
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.3 Impactos ambientales

      p Los impactos ambientales son modificaciones en el entorno causadas por la acción humana o por procesos naturales, mientras que los cambios impulsados por la naturaleza son inevitables, los impactos causados por actividades humanas, como el turismo, pueden ser prevenidos o mitigados. Por tanto, la política ambiental se ha enfocado en la creación de instrumentos y estrategias para reducir los daños al medio ambiente.
      p.mb-5 En las áreas naturales donde se desarrollan actividades turísticas, es esencial tomar medidas estrictas para proteger los ecosistemas; aunque la educación ambiental durante las visitas es importante, un aumento excesivo en el número de turistas puede llevar a la degradación de estos espacios naturales. Este riesgo es destinos de sol y playa.
      
      .bg5.w-fit.br-50.mb-4(data-aos="fade-right")
        h3.mb-0.px-3.py-1 Impactos positivos

      .row.justify-content-center.mb-5(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          img(src="@/assets/curso/temas/t2/4.png", alt="")
        .col-lg-8
          SlyderF.circl-arrow(columnas="col-lg-6")
            .tarjeta.borde-t2.p-4.text-center
              .row.justify-content-center.mb-4
                .col-lg-4.col-md-2.col-4
                  img(src='@/assets/curso/temas/t2/tarj2-ico1.svg' alt='')
              .bg-color-acento-contenido.tarjeta.py-2.px-2.mb-4
                h4.text-white.mb-0 Promoción de la conservación
              p El turismo puede ser una herramienta para promover la conservación de los ecosistemas, fomentando el interés y la protección de áreas naturales y especies en peligro de extinción.   
            .tarjeta.borde-t2.p-4.text-center
              .row.justify-content-center.mb-4
                .col-lg-4.col-md-2.col-4
                  img(src='@/assets/curso/temas/t2/tarj2-ico2.svg' alt='')
              .bg-color-acento-contenido.tarjeta.py-2.px-2.mb-4
                h4.text-white.mb-0 Generación de áreas naturales protegidas
              p Las actividades turísticas pueden incentivar la creación de áreas protegidas, que a su vez contribuyen a la preservación de la biodiversidad y los recursos naturales.  
            .tarjeta.borde-t2.p-4.text-center
              .row.justify-content-center.mb-4
                .col-lg-4.col-md-2.col-4
                  img(src='@/assets/curso/temas/t2/tarj2-ico3.svg' alt='')
              .bg-color-acento-contenido.tarjeta.py-2.px-2.mb-4
                h4.text-white.mb-0 Generación de cultura ambiental
              p El turismo educativo puede sensibilizar a los visitantes y a las comunidades locales sobre la importancia de cuidar el medio ambiente.  
            .tarjeta.borde-t2.p-4.text-center
              .row.justify-content-center.mb-4
                .col-lg-4.col-md-2.col-4
                  img(src='@/assets/curso/temas/t2/tarj2-ico4.svg' alt='')
              .bg-color-acento-contenido.tarjeta.py-2.px-2.mb-4
                h4.text-white.mb-0 Mejora de la infraestructura comunitaria
              p Las inversiones en infraestructura turística, como caminos, servicios básicos y espacios públicos, pueden mejorar la calidad de vida de las comunidades locales.  
            .tarjeta.borde-t2.p-4.text-center
              .row.justify-content-center.mb-4
                .col-lg-4.col-md-2.col-4
                  img(src='@/assets/curso/temas/t2/tarj2-ico5.svg' alt='')
              .bg-color-acento-contenido.tarjeta.py-2.px-2.mb-4
                h4.text-white.mb-0 Valoración de especies en peligro de extinción
              p A través del ecoturismo, los turistas pueden ser motivados a apoyar y valorar la conservación de especies en vías de extinción.   
            .tarjeta.borde-t2.p-4.text-center
              .row.justify-content-center.mb-4
                .col-lg-4.col-md-2.col-4
                  img(src='@/assets/curso/temas/t2/tarj2-ico6.svg' alt='')
              .bg-color-acento-contenido.tarjeta.py-2.px-2.mb-4
                h4.text-white.mb-0 Atracción de turistas conscientes de la conservación
              p El turismo sostenible atrae a visitantes que valoran la conservación del entorno natural y promueven prácticas turísticas responsables.  

      .bg5.w-fit.br-50.mb-4(data-aos="fade-right")
        h3.mb-0.px-3.py-1 Impactos negativos

      .row.justify-content-center(data-aos="fade-down")
        .col-lg-4.col-md-6.col-10.mb-4
          .tarjeta--boton.color-secundario.text-center.bg-tarj-t1.p-3.h-100
            .row.justify-content-center.mb-3.mb-lg-4
              .col-lg-4.col-md-4.col-4
                img(src='@/assets/curso/temas/t2/tarj3-ico1.svg', alt='')
            .tarjeta.bg-white.m-auto.w-fit.mb-3.px-3.py-2.mx-lg-4    
              h4.mb-0 Contaminación visual, auditiva y de desechos
            p.mb-0 El turismo masivo puede generar contaminación visual y auditiva, así como un aumento en la generación de desechos, lo que afecta la calidad del entorno.
        .col-lg-4.col-md-6.col-10.mb-4
          .tarjeta--boton.color-secundario.text-center.bg-tarj-t1.p-3.h-100
            .row.justify-content-center.mb-3.mb-lg-4
              .col-lg-4.col-md-4.col-4
                img(src='@/assets/curso/temas/t2/tarj3-ico2.svg', alt='')
            .tarjeta.bg-white.m-auto.w-fit.mb-3.px-3.py-2.mx-lg-4    
              h4.mb-0 Comercialización de especies de fauna y flora
            p.mb-0 En algunos casos, la demanda turística puede llevar a la comercialización ilegal de especies, poniendo en peligro la biodiversidad local.
        .col-lg-4.col-md-6.col-10.mb-4
          .tarjeta--boton.color-secundario.text-center.bg-tarj-t1.p-3.h-100
            .row.justify-content-center.mb-3.mb-lg-4
              .col-lg-4.col-md-4.col-4
                img(src='@/assets/curso/temas/t2/tarj3-ico3.svg', alt='')
            .tarjeta.bg-white.m-auto.w-fit.mb-3.px-3.py-2.mx-lg-5    
              h4.mb-0 Exceso de demanda y sobreutilización de recursos naturales
            p.mb-0 El turismo intensivo puede agotar los recursos naturales de un destino, como el agua, la vegetación y la fauna, afectando su sostenibilidad a largo plazo.
        .col-lg-4.col-md-6.col-10.mb-4
          .tarjeta--boton.color-secundario.text-center.bg-tarj-t1.p-3.h-100
            .row.justify-content-center.mb-3.mb-lg-4
              .col-lg-4.col-md-4.col-4
                img(src='@/assets/curso/temas/t2/tarj3-ico4.svg', alt='')
            .tarjeta.bg-white.m-auto.w-fit.mb-3.px-3.py-2.mx-lg-4    
              h4.mb-0 Pérdida del paisaje natural por la construcción desmedida
            p.mb-0 El crecimiento de la infraestructura turística, como hoteles y resorts, puede alterar el paisaje natural y generar un impacto negativo en la belleza del entorno.
        .col-lg-4.col-md-6.col-10.mb-4
          .tarjeta--boton.color-secundario.text-center.bg-tarj-t1.p-3.h-100
            .row.justify-content-center.mb-3.mb-lg-4
              .col-lg-4.col-md-4.col-4
                img(src='@/assets/curso/temas/t2/tarj3-ico5.svg', alt='')
            .tarjeta.bg-white.text-center.m-auto.w-fit.mb-3.px-3.py-2    
              h4.mb-0 Generación de basura
            p.mb-0 El incremento de turistas puede llevar a una sobreproducción de residuos, que, si no se gestionan adecuadamente, contribuye a la degradación del medio ambiente.
        .col-lg-4.d-none.d-lg-block
          img(src="@/assets/curso/temas/t2/5.png", alt="")
          

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
