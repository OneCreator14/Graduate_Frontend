<template>
    <div class="wrapper">
        <Calendar
            v-model="date"
            dateFormat="dd.mm.yy"
            :minDate="minDate"
            :maxDate="maxDate"
            placeholder="__.__.____"
            class="calendar-settings"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'

let today = new Date()
let year = today.getFullYear()

const date = ref()
const minDate = ref(new Date())
const maxDate = ref(new Date())

minDate.value.setDate(1)
minDate.value.setMonth(0)
minDate.value.setFullYear(year)
maxDate.value.setDate(31)
maxDate.value.setMonth(11)
maxDate.value.setFullYear(year)
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 30px;
  width: 200px;
}
</style>