export function getTaskFromLs() {
  try {
    return JSON.parse(localStorage.getItem('tasks')) ?? [];
  } catch (error) {
    console.log(error);
  }
}
export function saveTaskToLS(task) {
  const tasks = getTaskFromLs();

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
