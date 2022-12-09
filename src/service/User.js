import {api} from './axios'

export const postUsers = async (path, option = {}) => {
  const AddData = await api.post(path, option);
  return AddData.data;
};
export const getTaskList = async () => {
  return api.get('tasks')
}
  
