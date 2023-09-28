import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { getItem } from "~/api/api";
import { PropsCategories } from "~/schemas/schemasProducts";

const NavBarButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { data, isLoading } = useQuery<PropsCategories[]>({
    queryKey: ["categories"],
    queryFn: () => getItem("/categories"),
  });
  return (
    <>
      <IconButton
        aria-label="Options"
        icon={<RxHamburgerMenu />}
        variant="outline"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        size={"xs"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          {isLoading ? (
            <>loading</>
          ) : (
            <DrawerBody display={'flex'} flexDirection={'column'} gap={5} alignItems={'start'}>
              {data?.map((item: PropsCategories) => (
                <Button key={item._id} variant="link">
                  <Link href={`/products/${item.title}`} className="capitalize">
                    {item.title}
                  </Link>
                </Button>
              ))}
              <Button variant="link">
                <Link href={`/products`}>Todos los productos</Link>
              </Button>
            </DrawerBody>
          )}

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBarButton;
