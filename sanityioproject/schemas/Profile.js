export default {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Profile Name",
      type: "string",
    },
    {
      name: "profileBio",
      title: "Profile Bio",
      type: "text",
      description: "Enter profile biography here. max 500 characters",
      validation: (Rule) => [
        Rule.max(450).warning("you are reaching the 500 limit"),
        Rule.required().max(500).error("You have reached the limit"),
      ],
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "email",
      title: "Email address",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      description: "Please Enter Phone number as follow: xxx-xxx-xxxx.",
      validation: (Rule) =>
        Rule.max(12).warning(
          "Don't enter more than 12 characters including two '-'"
        ),
    },
  ],
};
