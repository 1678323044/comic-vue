<template>
  <div id="app" style="font-size: 24px">
    <input class="weui-check" type="checkbox" name="checkbox1" value="123" v-model="checkVal" />123
    <input class="weui-check" type="checkbox" name="checkbox1" value="456" v-model="checkVal" />456
    <input class="weui-check" type="checkbox" name="checkbox1" value="789" v-model="checkVal" />789
    <p>{{checkVal}}</p>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                checkVal: []
            }
        }
    }
</script>
