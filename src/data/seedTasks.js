// Учебные данные. Не удаляйте поля без причины: они понадобятся в следующих этапах.
export const teamMembers = [
  { id: 101, name: 'Анна', role: 'Дизайнер' },
  { id: 102, name: 'Игорь', role: 'Разработчик' },
  { id: 103, name: 'Маша', role: 'Тестировщик' }
]

const tasks = [
  { id: 1, title: 'Собрать референсы', description: 'Подготовить примеры для интерфейса', status: 'done', priority: 'low', assigneeId: 101, tags: ['дизайн', 'исследование'] },
  { id: 2, title: 'Сверстать главную страницу', description: 'Добавить шапку и секцию задач', status: 'progress', priority: 'high', assigneeId: 102, tags: ['frontend', 'vue'] },
  { id: 3, title: 'Написать тест-кейсы', description: 'Проверить сценарии CRUD', status: 'todo', priority: 'medium', assigneeId: 103, tags: ['qa'] },
  { id: 4, title: 'Сделать мобильную версию', description: 'Адаптировать интерфейс для телефона', status: 'todo', priority: 'high', assigneeId: 101, tags: ['дизайн', 'адаптив'] },
  { id: 5, title: 'Проверить сортировку', description: 'Убедиться, что фильтры и сортировка работают вместе', status: 'progress', priority: 'medium', assigneeId: 103, tags: ['qa', 'frontend'] },
  { id: 6, title: 'Подготовить документацию', description: 'Описать запуск и архитектуру проекта', status: 'done', priority: 'low', assigneeId: 102, tags: ['документы'] }
]

// Возвращаем новые объекты, чтобы тестовые данные не зависели от изменений интерфейса.
export function createSeedTasks() {
  return tasks.map(task => ({ ...task, tags: [...task.tags] }))
}
