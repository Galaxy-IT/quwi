import { appURL } from '@/config/systemConfig'
import requestOptions from "~/services/requestOptions";
import updateOptions from "~/services/updateOption";

export  const state = () => ({
  projects: []
})

export const mutations = {
  setProjects(state, projects) {
    state.projects = projects
  }
}

export const actions = {
  async getProjects({commit}) {
    await fetch(`${appURL}/projects-manage`, requestOptions())
      .then(response => response.json())
      .then(result => {
        commit('setProjects', result.projects || [])
      })
      .catch(error => console.log('error', error));
  },

  async fetchProjectById({commit}, id) {
    return await fetch(`${appURL}/projects-manage/${id}`, requestOptions())
      .then(response => response.json())
      .then(result => {
        return result.project || [];
      })
      .catch(error => console.log('error', error));
  },
  async updateProject({commit}, { id, data}) {
    fetch(`${appURL}/projects-manage/update?id=${id}`, updateOptions(data))
      .then(response => response.text())
      .then(result => {
       return result
      })
      .catch(error => console.log('error', error));
  },
}

export const getters = {
  projects: state => state.projects
}
