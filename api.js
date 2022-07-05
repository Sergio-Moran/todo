const ROUTE = "http://localhost:3015/tasks";

export const getTasks = async () => {
  const response = await fetch(ROUTE, {
    method: "GET",
  });
  return await response.json();
};

export const getTask = async (id) => {
  const response = await fetch(`${ROUTE}/${id}`, {
    method: "GET",
  });
  return await response.json();
};

export const updateCompleted = async (id, completed) => {
  const response = await fetch(`${ROUTE}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(completed),
  });
  const a = await response.json();
  console.log(a);
};
