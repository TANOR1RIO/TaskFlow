<script setup>
import { ref } from 'vue'
import TaskList from './components/TaskList.vue'
import { createSeedTasks, teamMembers } from './data/seedTasks'

// Начальная точка: данные принадлежат родителю.
// TODO: вычисляемые свойства, watch, фильтры, сортировка, обработчики событий.
const tasks = ref(createSeedTasks())
const projectTitle = ref('TaskFlow')

// Пригодится в заданиях на props и сложные объекты.
const members = ref(teamMembers)

// TODO: добавь состояние для поиска, сортировки, формы, отображения и темы.
// TODO: добавь функции addTask(), removeTask(), toggleTask() и т. п.
</script>

<template>
  <div class="app-frame">
    <header class="topbar">
      <div class="topbar-inner">
        <span class="logo-mark">TF</span>
        <div>
          <strong>{{ projectTitle }}</strong>
          <small>Командный менеджер задач</small>
        </div>
        <span class="topbar-caption">Учебный проект · Vue 3</span>
      </div>
    </header>

    <main class="shell">
      <section class="hero">
        <div>
          <p class="eyebrow">НАЧАЛЬНЫЙ ШАБЛОН</p>
          <h1>Дела команды — в одном месте</h1>
          <p class="lead">Это только заготовка интерфейса. Функции вы реализуете самостоятельно по этапам практики.</p>
        </div>
        <div class="hero-icon" aria-hidden="true">✓</div>
      </section>

      <!-- TODO: сюда добавятся статистика, поиск, форма, переключатели видов. -->
      <TaskList :tasks="tasks" :members="members" />

      <p class="student-note">Сейчас показаны только первые две карточки — это специально. На этапе v-for выведи весь массив задач.</p>
    </main>

    <footer class="footer">TaskFlow · учебный проект по Vue 3</footer>
  </div>
</template>
