<template lang="pug">
div
  div(v-if="$store.getters.partners.length > 0")
    div.body-list(
      v-for="item in $store.getters.partners"
      :key="item.id"
    )
      PostItem(:item="item")
  div(v-else-if="load")
    div.body-list Please wait…
  div(v-else-if="!load && $store.getters.query || $store.getters.selectParams")
    div.body-list Your search parameters did not match any partners. Please try different search.
  div(v-else)
    div.body-list No data
</template>

<script>
import axios from 'axios'
export default {
  name: 'Body',
  data() {
    return {
      load: false
    }
  },
  async mounted() {
    this.load = true
    await axios.get('api/find')
      .then(data => {
        this.$store.commit('partners', data.data.data)
      })
      .finally(() => {
        this.load = false
      })
  }
}
</script>