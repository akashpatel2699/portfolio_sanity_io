export default {
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Certification Title",
      type: "string",
      options: {
        list: [
          { title: "AWS CLOUD  PRACTITIONER", value: "aws cloud practitioner" },
          {
            title: "AWS SOLUTIONS ARCHITECT ASSOCIATE",
            value: "aws solutions architect associate",
          },
        ],
      },
      initialValue: {
        title: "AWS CLOUD PRACTITIONER",
      },
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .error("Please Select one certification from the list."),
    },
    {
      name: "badge",
      title: "Badge Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "issueDate",
      title: "Issued Date",
      type: "date",
      options: {
        dateFormat: "MM-DD-YYYY",
        calenderTodayLabel: "Today",
      },
      validation: (Rule) =>
        Rule.required().error("Please provide issued date."),
    },
    {
      name: "expireDate",
      title: "Expire Date",
      type: "date",
      options: {
        dateFormat: "MM-DD-YYYY",
        calenderTodayLabel: "Today",
      },
    },
    {
      name: "badgeLink",
      title: "Badge Link",
      description:
        "credential link where you accept the certification. Maybe check your email. ",
      type: "string",
    },
  ],
};
