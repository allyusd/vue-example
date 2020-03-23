import axios from "axios";
import { BlogSiteInfo } from "@/models/BlogSiteInfo";

// interface ServerResponse {
//   data: Array<BlogSiteInfo>
// }

class BlogService {
  constructor() {
    console.log("creating new instance of blog.service");
  }

  getBlogs() {
    return axios.get<Array<BlogSiteInfo>>(
      "https://raw.githubusercontent.com/hexschool/w3hexschool-API/master/data.json"
    );
  }
}

// Export a singleton instance in the global namespace
export const blogService = new BlogService();
