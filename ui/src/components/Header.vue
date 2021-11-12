<template lang="pug">
div
  //- LOGO
  div.logo
    img(src="@/assets/logo.png" width="120" height="25")
  //- FILTER-BOX
  div.filter-box
    div.header-box.center
      div
        //- HEADER TEXT
        div.header-text.center
          div
            article.text-title
              span Netwrix
              span Partner Locator
            div.text-description
              p Hundreds of Netwrix partners around the world are standing by to help you.
              p With our Partner Locator you can easily find the list of authorized partners in your area.
        //- SEARCH
        div.center
          div.search-box.center
            input(
              type="text"
              placeholder="Search by company name or adress.."
            )
            div.search-ico
        //- FILTER SELECT
        //- Type
        div.center
          div.select-box
            div.pr-1em
              div.filters-box.center
                select.border(ref="type")
                  option(value="" disabled selected) Type
                //- div.rectangle-ico
            //- Country
            div.filters-box.center
              select.border-left
                option(value="" disabled selected) Country
              //- div.rectangle-ico
            //- State
            div.filters-box.center
              select.border-right
                option(value="" disabled selected) State
              //- div.rectangle-ico
</template>

<script>
import axios from 'axios'
export default {
  name: 'Header'
}
</script>