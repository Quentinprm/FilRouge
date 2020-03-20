<template>
    <div>
        <h1> {{ message }}</h1>
        <h2>Hello {{person.firstname}} {{person.lastname}}</h2>
        <label>Firstname : <input type="text" v-model="person.firstname" /></label>
        <label>Lastname : <input type="text" v-model="person.lastname" /></label>
        <label>Message : <input type="text" v-model="message" /></label>
    </div>
</template>

<script>
export default {
  data () {
    return {
      person: {
        firstname: 'Jim',
        lastname: 'Doe'
      },
      message: 'Welcome !'
    }
  },
  props: ['firstname', 'lastname', 'from']
}
</script>

<style>

</style>
