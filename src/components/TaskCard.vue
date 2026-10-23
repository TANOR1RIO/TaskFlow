<script setup>
// TODO: добавь проверку полей объекта, эмиты, callback и собственное состояние.
const props = defineProps({
  task: { type: Object, required: true }
})
</script>

<template>
  <article class="task-card">
    <div class="card-top">
      <span class="task-status">{{ task.status }}</span>
      <span class="priority-text">{{ task.priority }}</span>
    </div>
    <h3>{{ task.title }}</h3>
    <p>{{ task.description }}</p>
    <div class="tag-row">
      <!-- TODO: вывести все task.tags через v-for -->
      <span v-if="task.tags.length" class="tag">{{ task.tags[0] }}</span>
    </div>
    <!-- TODO: кнопки изменения статуса и удаления, :class и :style -->
  </article>
</template>
