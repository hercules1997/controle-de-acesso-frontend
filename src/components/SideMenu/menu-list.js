import { ShoppingBag } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home'
import ListAltIcon from '@mui/icons-material/ListAlt'

import paths from '../../constants'
const listLinks = [
  {
    id: 1,
    label: 'Novo Cadastro',
    link: paths.Cadastro,
    icon: HomeIcon
  },
  {
    id: 2,
    label: 'Pessoas Cadastradas',
    link: paths.ListRegisters,
    icon: ShoppingBag
  },
  {
    id: 3,
    label: 'Status de visitas',
    link: paths.Status,
    icon: ListAltIcon
  }
]

export default listLinks
