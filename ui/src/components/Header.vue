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
              placeholder="Search by company name or adress..."
              v-on:keyup.enter="onSearch"
              ref="search"
            )
            div.search-ico(@click="onSearch")
        //- FILTER SELECT
        div.center
          div.select-box
            //- Type
            div.pr-1em
              div.filters-box
                select.border.select-type
                  option(value="" disabled selected) Type
                //- div.rectangle-ico
            //- Country
            div.filters-box
              div.first-select
                select.select-country
                  option(value="" disabled selected) Country
              //- div.rectangle-ico
            //- State
            div.filters-box
              div.last-select
                select.select-state
                  option(value="" disabled selected) State
                //- div.rectangle-ico
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import 'select2'
import 'select2/dist/css/select2.css'
export default {
  name: 'Header',
  methods: {
    async onSearch() {
      const type_id = $('.select-type').val()
      const country_id = $('.select-country').val()
      const country_short_name = $(".select-country").find(":selected").data("short-name")
      const state_id = $('.select-state').val()
      const state_short_name = $(".select-state").find(":selected").data("short-name")
      const query = this.$refs['search'].value.trim()

      this.$store.commit('query', query)
      this.$store.commit('selectParams', type_id || country_id || state_id || null)
      await axios.get('api/find', {
        params: {
          query: query,
          type_id: type_id,
          country_id: country_id,
          country_short_name: country_short_name,
          state_id: state_id,
          state_short_name: state_short_name
        }
      })
        .then(data => {
          this.$store.commit('partners', data.data.data)
        })
    },
    // Type (status)
    async fetchType() {
      let selectType = $('.select-type')
      await axios.get('api/status')
        .then(data => {
          if(data.data?.data?.length > 0) {
            $.each(data.data.data, (index, value) => {
              selectType.append(
                `<option value="${value.id}">${value.name}</option>`
              )
            })
          }
        })
        // Events
        // Select
        selectType.on('select2:select', (e) => {
          this.onSearch()
        })
        // Clear
        selectType.on('select2:clear', (e) => {
          this.onSearch()
        })
    },
    // Country
    async fetchCountry() {
      let selectCountry = $('.select-country')
      await axios.get('api/country')
        .then(data => {
          if(data.data?.data?.length > 0) {
            $.each(data.data.data, (index, value) => {
              selectCountry.append(
                `<option value="${value.country_id}" data-short-name=${value.short_name}>${value.name}</option>`
              )
            })
          }
        })
        // Events
        // Select
        selectCountry.on('select2:select', (e) => {
          $('.select-state').val('').trigger('change')
          let text = e.params.data.text,
              id = e.params.data.id
          if(text === 'United States' || text === 'Canada') {
            $('.select-state').prop("disabled", false)
            this.fetchStates(id)
          } else {
            $('.select-state').prop('disabled', true)
          }
          this.onSearch()
        })
        // Clear
        selectCountry.on('select2:clear', (e) => {
          $('.select-state').val('').trigger('change').prop('disabled', true)
          this.onSearch()
        })
    },
    // States
    async fetchStates(country_id) {
      let selectState = $('.select-state')
      await axios.get('api/states', {
        params: {
          country: country_id
        }
      })
        .then(data => {
          if(data.data?.data?.length > 0) {
            $.each(data.data.data, (index, value) => {
              selectState.append(
                `<option value="${value.state_id}" data-short-name=${value.short_name}>${value.name}</option>`
              )
            })
          }
        })
        // Events
        // Select
        selectState.on('select2:select', (e) => {
          this.onSearch()
        })
        // Clear
        selectState.on('select2:clear', (e) => {
          this.onSearch()
        })
    }
  },
  async mounted() {
    // Type (status)
    $('.select-type').select2({
      allowClear: true,
      placeholder: 'Type'
    })
    await this.fetchType()
    // Country
    $('.select-country').select2({
      allowClear: true,
      placeholder: 'Country'
    })
    await this.fetchCountry()
    // State
    $('.select-state').select2({
      allowClear: true,
      placeholder: 'State'
    }).prop("disabled", true)
  },
}
</script>