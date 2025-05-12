<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bgc-1.align-items-center.p-3
      .col-lg-12.col-12.px-lg-5.px-md-4.pt-5
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
            .col-12
              .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
                .bloque-texto-g__img(
                  :style="{'background-image': `url(${require('@/assets/curso/temas/intro/1.svg')})`}")
                .bloque-texto-g__texto.p-4.py-lg-5
                  p.mb-0 La biodiversidad brinda numerosos beneficios a las sociedades humanas, entre ellos el turismo, considerado un servicio ecosistémico de gran valor, cuya conservación o pérdida influye directamente en la calidad y valoración de los destinos turísticos, afectando su atractivo y sostenibilidad.
                  br 
                  br
                  p.mb-0 Comprender los factores que provocan la pérdida de biodiversidad, así como aquellos que contribuyen a su protección, es fundamental para establecer una relación armónica entre la actividad turística y el medio ambiente; este conocimiento resulta esencial para impulsar un turismo nacional sostenible, que promueva tanto la preservación de los ecosistemas como el desarrollo económico y social de las comunidades locales.

              figure(data-aos="fade-down")
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. 


</template>

<script>
export default {
  name: 'Introduccion',
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
