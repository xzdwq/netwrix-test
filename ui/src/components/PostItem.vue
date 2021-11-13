<template lang="pug">
div.post-item
  div.inside-el
    //- Logo
    div.post-logo-box
      div.post-logo
        img(:src="getImgUrl(item.logo)")
    //- Bidy
    div.post-body
      div.post-title {{ item.company }}
      div {{ item.address }}
    //- Link
    div.post-link
      a(:href="item.website" target="_blank") Website
      div {{ item.phone }}
    //- Description
    div.post-pertner
      div {{ item.status?.name || '' }}
</template>
<script>
export default {
  name: 'PostItem',
  props: ['item'],
  methods: {
    getImgUrl(name) {
      return require('../assets/'+name)
    }
  }
}
</script>