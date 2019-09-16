<template>
  <div id="app" style="font-size: 24px">
    <input @change="headleQuery" type="radio" id="male" value="Male" v-model="gender"> Male
    <input @change="headleQuery" type="radio" id="female" value="Female" v-model="gender"> Femalea
    <input @change="headleQuery" type="radio" id="hello" value="hello" v-model="gender"> hello
    <p>{{gender}}</p>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                gender: ''
            }
        },
        methods: {
            headleQuery(){
                console.log(this.gender)
            }
        }
    }
</script>
