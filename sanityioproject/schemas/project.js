export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Project Description",
      type: "text",
    },
    {
      name: "githubURL",
      title: "Github URL",
      type: "url",
    },
    {
      name: "websiteURL",
      title: "Website URL",
      type: "url",
    },
  ],
};
