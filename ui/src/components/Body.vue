<template lang="pug">
div
  div(v-if="$store.getters.partners.length > 0")
    div.body-list(
      v-for="item in $store.getters.partners"
      :key="item.id"
    )
      PostItem(:item="item")
  div(v-else-if="$store.getters.load")
    div.body-list Please wait…
  div(v-else-if="!$store.getters.load && $store.getters.query || $store.getters.selectParams")
    div.body-list Your search parameters did not match any partners. Please try different search.
  div(v-else)
    div.body-list No data
</template>

<script>
import axios from 'axios'
export default {
  name: 'Body',
  async mounted() {
    this.$store.commit('load', true)
    await axios.get('api/find')
      .then(data => {
        this.$store.commit('partners', data.data.data)
      })
      .finally(() => {
        this.$store.commit('load', false)
      })
  }
}
</script>