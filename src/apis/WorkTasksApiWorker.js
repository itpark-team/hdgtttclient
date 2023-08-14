import axios from "axios";

class WorkTasksApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "/api/work-tasks"
        });
    }

    async getAllByUserId() {
        return await this.#axios.get("/get-all-by-userid/1");
    }

    async getById(id) {
        return await this.#axios.get("/get-by-id/" + id);
    }
}

export default WorkTasksApiWorker;