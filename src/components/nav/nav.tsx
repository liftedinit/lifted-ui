import { Image, Stack } from "@chakra-ui/react"
import { Link, useResolvedPath, useMatch } from "react-router-dom"
import { Center, HStack, Icon, Text } from "@chakra-ui/react"
import { IconType } from "react-icons/lib"
import { logoSvg } from "../.."

interface NavItemProps {
  path: string
  label: string
  icon: IconType
}

export function NavItem({ path, label, icon }: NavItemProps) {
  const resolved = useResolvedPath(path)
  const isActive = useMatch({ path: resolved.pathname, end: true })
  return (
    <Link key={path} to={path}>
      <HStack
        m={0}
        borderRight={
          isActive ? "3px solid var(--chakra-colors-lifted-green-500)" : ""
        }
      >
        <Center p={3}>
          <Icon
            as={icon}
            aria-label={label}
            bg="white"
            color={isActive ? "lifted.green.500" : "black"}
          />
        </Center>
        <Text fontWeight={isActive ? "bold" : ""}>{label}</Text>
      </HStack>
    </Link>
  )
}

interface NavProps {
  navItems: NavItemProps[]
}

export function Nav({ navItems }: NavProps) {
  return (
    <Stack boxShadow="xl" h="100vh">
      <Image boxSize="6rem" src={logoSvg} alt="Lifted Logo" p={3} />
      {navItems.map(NavItem)}
    </Stack>
  )
}
