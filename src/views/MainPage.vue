<template>
  <div class="wrapper">
    <CalendarComp />
    <EmptyTodo v-if="isEmpty" />
    <TodoBox v-else />
  </div>
</template>

<script setup>
import EmptyTodo from "@/components/EmptyTodo.vue";
import TodoBox from "@/components/TodoBox.vue";
import CalendarComp from "@/components/Calendar.vue";
import { useStore } from "vuex";
import { computed } from "vue";

document.body.style.backgroundColor = "#f8fffe";
const store = useStore();
const isEmpty = computed({
  get() {
    return store.getters.getTodosOfDate.length === 0;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
