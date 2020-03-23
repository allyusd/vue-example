import { Blog } from "@/models/Blog";

export class BlogSiteInfo {
  keyID: number;
  blogList: Array<Blog>;
  updateTime: Date;
  blogUrl: string;
  name: string;

  constructor(
    keyID: number,
    blogList: Array<Blog>,
    updateTime: Date,
    blogUrl: string,
    name: string
  ) {
    this.keyID = keyID;
    this.blogList = blogList;
    this.updateTime = updateTime;
    this.blogUrl = blogUrl;
    this.name = name;
  }
}
