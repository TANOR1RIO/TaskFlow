<script setup>
import TaskCard from './TaskCard.vue'

// TODO: доработай валидацию props и добавь новые props для поиска/режимов.
const props = defineProps({
  tasks: { type: Array, default: () => [] },
  members: { type: Array, default: () => [] }
})

// TODO: объяви события, которые TaskList должен пересылать родителю.
</script>

<template>
  <section class="panel">
    <div class="section-heading">
      <div>
        <p class="eyebrow">ЗАДАЧИ КОМАНДЫ</p>
        <h2>Все задачи</h2>
      </div>
      <span class="count-chip">Всего: {{ tasks.length }}</span>
    </div>

    <div class="task-grid">
      <!-- Намеренно выведены только 2 записи. Замени это на v-for с :key. -->
      <TaskCard v-if="tasks[0]" :task="tasks[0]" />
      <TaskCard v-if="tasks[1]" :task="tasks[1]" />
    </div>

    <!-- TODO: сообщение о пустом результате, событийные кнопки и другое. -->
  </section>
</template>
