import {
  RiBankCardLine,
  RiFlowChart,
  RiHome2Line,
  RiServerLine,
  RiUserLine,
} from "react-icons/ri"
import { Image, Stack } from "@chakra-ui/react"

import { NavItem } from ".."
import { logoSvg } from ".."

const navItems = [
  { label: "Dashboard", path: "", icon: RiHome2Line },
  { label: "Services", path: "settings", icon: RiServerLine },
  { label: "Flows", path: "flows", icon: RiFlowChart },
  { label: "Users", path: "users", icon: RiUserLine },
  { label: "Billing", path: "account", icon: RiBankCardLine },
]

export function Nav() {
  return (
    <Stack boxShadow="xl" h="100vh">
      <Image boxSize="6rem" src={logoSvg} alt="Lifted Logo" p={3} />
      {navItems.map(NavItem)}
    </Stack>
  )
}
