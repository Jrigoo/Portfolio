export class FetchAPI {
  static async getAllProjects() {
    try {
      const response = await fetch(`${process.env.BASE_URL}/api/projects`, {
        method: "GET",
      });
      if (response.ok) {
        const result = await response.json();
        return result;
      }
      return Promise.reject({ error: "Couldn't fetch API correctly" });
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
