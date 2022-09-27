interface BlogTitles {
  posts: string;
  notFound: string;
  about: string;
}
interface BlogMeta {
  github: string;
  profilePicture: string;
  logo: string;
  titles: BlogTitles;
}

const blogMeta: BlogMeta = {
  github: "https://github.com/eXiga",
  profilePicture: "https://github.com/eXiga.png",
  logo: "/images/logo.svg",
  titles: {
    posts: "Posts",
    notFound: "Oopsie :(",
    about: "About me",
  },
};

export default blogMeta;
