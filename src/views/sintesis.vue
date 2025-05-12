<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 La valoración de la biodiversidad y la gestión responsable del turismo son fundamentales para garantizar la sostenibilidad a largo plazo de los destinos turísticos. En Colombia, la riqueza biológica del país está estrechamente vinculada a la actividad turística, que depende en gran medida de los servicios ecosistémicos proporcionados por los ecosistemas naturales. El turismo, en especial el de naturaleza, presenta tanto oportunidades de desarrollo económico como riesgos de impactos negativos sobre el medio ambiente y las comunidades locales. Comprender los factores que afectan la biodiversidad, como el cambio climático y el cambio en el uso del suelo, es esencial para promover prácticas turísticas que favorezcan la conservación y el uso sostenible de los recursos naturales. 

    .row.justify-content-center
      .col-lg-12.mb-5
        .tarjeta.tarjeta--gris.p-4.p-lg-5
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Se presenta como síntesis la relación entre turismo, naturaleza y sostenibilidad, organizada en cuatro bloques. El primero aborda la valoración y gestión, destacando conceptos como biodiversidad, turismo sostenible y áreas protegidas. El segundo se centra en los impactos y su gestión, incluyendo aspectos económicos, socioculturales, ambientales y servicios ecosistémicos. El tercero identifica factores de amenaza como el cambio en el uso del suelo, invasiones biológicas y contaminación del agua. El cuarto describe los motores de transformación y pérdida de biodiversidad, estructurados en cinco categorías principales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
