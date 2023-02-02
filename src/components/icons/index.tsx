import { Icon as BaseIcon, IconProps } from "@chakra-ui/react"

import { BiDownload } from "@react-icons/all-files/bi/BiDownload"
import { BiMinusCircle } from "@react-icons/all-files/bi/BiMinusCircle"
import { BiPlusCircle } from "@react-icons/all-files/bi/BiPlusCircle"
import { BiTrash } from "@react-icons/all-files/bi/BiTrash"
import { BsLightningFill } from "@react-icons/all-files/bs/BsLightningFill"
import { BsPersonDash } from "@react-icons/all-files/bs/BsPersonDash"
import { BsPersonPlus } from "@react-icons/all-files/bs/BsPersonPlus"
import { CgUsb } from "@react-icons/all-files/cg/CgUsb"
import { FaAddressBook } from "@react-icons/all-files/fa/FaAddressBook"
import { FaAddressCard } from "@react-icons/all-files/fa/FaAddressCard"
import { FaCheck } from "@react-icons/all-files/fa/FaCheck"
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLink } from "@react-icons/all-files/fa/FaLink"
import { FaLock } from "@react-icons/all-files/fa/FaLock"
import { FaMinus } from "@react-icons/all-files/fa/FaMinus"
import { FaRegAddressBook } from "@react-icons/all-files/fa/FaRegAddressBook"
import { FaRegAddressCard } from "@react-icons/all-files/fa/FaRegAddressCard"
import { FaRegPlayCircle } from "@react-icons/all-files/fa/FaRegPlayCircle"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"
import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle"
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle"
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown"
import { FiChevronLeft } from "@react-icons/all-files/fi/FiChevronLeft"
import { FiChevronRight } from "@react-icons/all-files/fi/FiChevronRight"
import { FiChevronUp } from "@react-icons/all-files/fi/FiChevronUp"
import { FiEdit } from "@react-icons/all-files/fi/FiEdit"
import { FiPlus } from "@react-icons/all-files/fi/FiPlus"
import { HiOutlineRefresh } from "@react-icons/all-files/hi/HiOutlineRefresh"
import { IoIosPaperPlane } from "@react-icons/all-files/io/IoIosPaperPlane"
import { IoMdPaperPlane } from "@react-icons/all-files/io/IoMdPaperPlane"
import { IoMdUndo } from "@react-icons/all-files/io/IoMdUndo"
import { IoSearch } from "@react-icons/all-files/io5/IoSearch"
import { IoSettingsOutline } from "@react-icons/all-files/io5/IoSettingsOutline"
import { IoSettingsSharp } from "@react-icons/all-files/io5/IoSettingsSharp"
import { IoTimeOutline } from "@react-icons/all-files/io5/IoTimeOutline"
import { IoWallet } from "@react-icons/all-files/io5/IoWallet"
import { IoWalletOutline } from "@react-icons/all-files/io5/IoWalletOutline"
import { MdContentCopy } from "@react-icons/all-files/md/MdContentCopy"

const Icon: typeof BaseIcon = (props: IconProps) => {
  return <BaseIcon boxSize={6} {...props} />
}

export function ReceiveIcon(props: IconProps) {
  return <Icon as={BiDownload} {...props} />
}

export function SendIcon(props: IconProps) {
  return <Icon as={IoIosPaperPlane} {...props} />
}

export function SendOutlineIcon(props: IconProps) {
  return <Icon as={IoMdPaperPlane} {...props} />
}

export function SettingsIcon(props: IconProps) {
  return <Icon as={IoSettingsSharp} {...props} />
}

export function SettingsOutlineIcon(props: IconProps) {
  return <Icon as={IoSettingsOutline} {...props} />
}

export function WalletIcon(props: IconProps) {
  return <Icon as={IoWallet} {...props} />
}

export function WalletOutlineIcon(props: IconProps) {
  return <Icon as={IoWalletOutline} {...props} />
}

export function AddressBookIcon(props: IconProps) {
  return <Icon as={FaAddressBook} {...props} />
}
export function AddressBookOutlineIcon(props: IconProps) {
  return <Icon as={FaRegAddressBook} {...props} />
}

export function UserIcon(props: IconProps) {
  return <Icon as={FaUserCircle} {...props} />
}

export function EditIcon(props: IconProps) {
  return <Icon as={FiEdit} {...props} />
}

export function ChevronDownIcon(props: IconProps) {
  return <Icon as={FiChevronDown} {...props} />
}

export function ChevronUpIcon(props: IconProps) {
  return <Icon as={FiChevronUp} {...props} />
}

export function ChevronLeftIcon(props: IconProps) {
  return <Icon as={FiChevronLeft} {...props} />
}

export function ChevronRightIcon(props: IconProps) {
  return <Icon as={FiChevronRight} {...props} />
}

export function CloseIcon(props: IconProps) {
  return <Icon as={FaTimes} {...props} />
}

export function TimesCircleIcon(props: IconProps) {
  return <Icon as={FaTimesCircle} {...props} />
}

export function SearchIcon(props: IconProps) {
  return <Icon as={IoSearch} {...props} />
}

export function UsbIcon(props: IconProps) {
  return <Icon as={CgUsb} {...props} />
}

export function CopyIcon(props: IconProps) {
  return <Icon as={MdContentCopy} {...props} />
}

export function RefreshIcon(props: IconProps) {
  return <Icon as={HiOutlineRefresh} {...props} />
}

export function AccountsIcon(props: IconProps) {
  return <Icon as={FaAddressCard} {...props} />
}

export function AccountsOutlineIcon(props: IconProps) {
  return <Icon as={FaRegAddressCard} {...props} />
}

export function PlusIcon(props: IconProps) {
  return <Icon as={FiPlus} {...props} />
}

export function MinusIcon(props: IconProps) {
  return <Icon as={FaMinus} {...props} />
}

export function PendingIcon(props: IconProps) {
  return <Icon as={IoTimeOutline} {...props} />
}

export function CheckCircleIcon(props: IconProps) {
  return <Icon as={FaCheckCircle} {...props} />
}

export function CheckIcon(props: IconProps) {
  return <Icon as={FaCheck} {...props} />
}

export function UndoIcon(props: IconProps) {
  return <Icon as={IoMdUndo} {...props} />
}

export function ExecuteIcon(props: IconProps) {
  return <Icon as={FaRegPlayCircle} {...props} />
}

export function MinusCircleIcon(props: IconProps) {
  return <Icon as={BiMinusCircle} {...props} />
}

export function PlusCircleIcon(props: IconProps) {
  return <Icon as={BiPlusCircle} {...props} />
}

export function UserMinusIcon(props: IconProps) {
  return <Icon as={BsPersonDash} {...props} />
}

export function UserPlusIcon(props: IconProps) {
  return <Icon as={BsPersonPlus} {...props} />
}

export function LinkIcon(props: IconProps) {
  return <Icon as={FaLink} {...props} />
}

export function LightningIcon(props: IconProps) {
  return <Icon as={BsLightningFill} {...props} />
}

export function GoogleIcon(props: IconProps) {
  return <Icon as={FcGoogle} {...props} />
}

export function GithubIcon(props: IconProps) {
  return <Icon as={FaGithub} {...props} />
}

export function TwitterIcon(props: IconProps) {
  return <Icon as={FaTwitter} color="#1d9bf0" {...props} />
}

export function DeleteIcon(props: IconProps) {
  return <Icon as={BiTrash} {...props} />
}

export function LockIcon(props: IconProps) {
  return <Icon as={FaLock} {...props} />
}
