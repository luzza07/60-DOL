import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform?: (platform: Platform) => void;
  selectedPlatform?: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform?.(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
