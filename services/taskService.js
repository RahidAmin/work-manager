import { httpAxios } from "@/lib/httpHelper";

export async function addTask(task) {
    const result = await httpAxios.post('/api/tasks', task).then((response) => response.data);
    return result;
}