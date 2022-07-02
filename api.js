const ROUTE = "http://localhost:3015/tasks";

export const getTasks = async () => {
  const response = await fetch(ROUTE, {
    method: "GET",
  });
  return await response.json();
};

export const getTask = async (taskId) => {
  const response = await fetch(`${ROUTE}/${taskId}`);
  return await response.json();
};
