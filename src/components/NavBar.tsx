import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding="10px" paddingLeft={3}>
        <Button onClick={() => {}} padding="0" margin="0" boxSize="45px">
          <Image src={logo} height="60px" />
        </Button>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
