import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ForumIcon from "@mui/icons-material/Forum";

const data =[
    {
      id: 1,
      name: "Teacher Salary (MONTHLY)",
      icon: <CalendarTodayIcon fontSize="large" />,
      progress: "",
      content: "$40,000",
      color: "#4e73df",
    },
    {
      id: 2,
      name: "Class Expenses (ANNUAL)",
      icon: <CurrencyExchangeIcon fontSize="large" />,
      progress: "",
      content: "$215,000",
      color: "#1cc88a",
    },
    {
      id: 3,
      name: "Syllabus Completion",
      icon: <AssignmentIcon fontSize="large" />,
      progress: "50",
      content: "",
      color: "#36b9cc",
    },
    {
      id: 4,
      name: "Pending Topics",
      icon: <ForumIcon fontSize="large" />,
      progress: "",
      content: 18,
      color: "#f6c23e",
    },
  ];

  export default data