import http from "src/http-common";

class TutorialDataService {
  getAll() {
    return http.get("/test");
  }

  get(id) {
    return http.get(`/test/${id}`);
  }

  create(data) {
    return http.post("/test", data);
  }

  update(id, data) {
    return http.put(`/test/${id}`, data);
  }

  delete(id) {
    return http.delete(`/test/${id}`);
  }

  deleteAll() {
    return http.delete(`/test`);
  }

  findByTitle(title) {
    return http.get(`/test?title=${title}`);
  }
}

export default new TutorialDataService();