import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import paths from "../../constants";
const listLinks = [
  {
    id: 1,
    label: "Novo Cadastro",
    link: paths.Cadastro,
    icon: GroupAddIcon,
  },
  {
    id: 2,
    label: "Pessoas Cadastradas",
    link: paths.ListRegisters,
    icon: RecentActorsIcon,
  },
  {
    id: 3,
    label: "Status de visitas",
    link: paths.Status,
    icon: HourglassBottomIcon,
  },
];

export default listLinks;
