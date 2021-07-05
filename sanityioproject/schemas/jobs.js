export default {
  name: "jobs",
  title: "jobs",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    },
    {
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "JobDescription",
      title: "Job Description",
      type: "text",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "MM-DD-YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "MM-DD-YYYY",
        calendarTodayLabel: "Today",
      },
    },
  ],
};
