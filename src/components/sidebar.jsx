import "./sidebar.css";
import logo from "../assets/logo-white.svg";
import {
  Box,
  IconButton,
  Container,
  Flex,
  Image,
  Icon,
  background,
  Center,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { MdAddBox } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { MdDownloading } from "react-icons/md";
import { color } from "framer-motion";

export default function Sidebar() {
  return (
    <>
      <Box
        className="bigbox"
        bg="#101010"
        w="241px"
        maxH="100vh"
        h="100%"
        color={"#b3b3b3"}
        position={"fixed"}
        zIndex={"2"}
      >
        <Flex bg="#101010" w="241px" maxH="100vh" h="100%" color={"#b3b3b3"}>
          <Flex
            bg="#101010"
            w="241px"
            maxH="100%"
            color={"#b3b3b3"}
            flexDir={"column"}
          >
            <Container margin={"0 0 18px"}>
              <a href="#">
                <Flex>
                  <Image
                    id="logo"
                    objectFit="cover"
                    src={logo}
                    alt="logo"
                  ></Image>
                </Flex>
              </a>
            </Container>
            <Container margin={"0 0 18px"}>
              <a href="#">
                <Flex p={"8px 0"} _hover={{ color: "white" }}>
                  <IconButton
                    variant="link"
                    as={AiFillHome}
                    color={"#b3b3b3"}
                    w={"24px"}
                    h={"24px"}
                    cursor={"pointer"}
                    _hover={{ color: "white" }}
                  ></IconButton>
                  <Center className="text-side">Home</Center>
                </Flex>
              </a>

              <a href="">
                <Flex p={"8px 0"} _hover={{ color: "white" }}>
                  <IconButton
                    variant="link"
                    as={FiSearch}
                    color={"#b3b3b3"}
                    w={"24px"}
                    h={"24px"}
                    cursor={"pointer"}
                    _hover={{ color: "white" }}
                  ></IconButton>
                  <Center className="text-side">Seacrh</Center>
                </Flex>
              </a>

              <a href="">
                <Flex p={"8px 0"} _hover={{ color: "white" }}>
                  <IconButton
                    variant="link"
                    as={VscLibrary}
                    color={"#b3b3b3"}
                    w={"24px"}
                    h={"24px"}
                    cursor={"pointer"}
                    _hover={{ color: "white" }}
                  ></IconButton>
                  <Center className="text-side">Library</Center>
                </Flex>
              </a>
            </Container>
            <Container>
              <a href="#">
                <Flex p={"8px 0"} _hover={{ color: "white" }}>
                  <IconButton
                    variant="link"
                    as={MdAddBox}
                    color={"#b3b3b3"}
                    w={"24px"}
                    h={"24px"}
                    cursor={"pointer"}
                    _hover={{ color: "white" }}
                  ></IconButton>
                  <Center className="text-side">Create Playlist</Center>
                </Flex>
              </a>
              <a href="#">
                <Flex p={"8px 0"} _hover={{ color: "white" }}>
                  <IconButton
                    variant="link"
                    as={FcLike}
                    color={"#b3b3b3"}
                    w={"24px"}
                    h={"24px"}
                    cursor={"pointer"}
                    _hover={{ color: "white" }}
                  ></IconButton>
                  <Center className="text-side">Liked Songs</Center>
                </Flex>
              </a>
            </Container>

            <hr className="hr-sidebar" />

            <Box
              className="scrollbox-sidebar"
              w={"100%"}
              // h={"100%"}
              padding={"10px 16px"}
            >
              <Flex
                w={"241"}
                h={"32px"}
                padding={"0 10px"}
                alignItems={"center"}
                _hover={{ color: "white" }}
              >
                <a href="">
                  <span className="song-title">Play List</span>
                </a>
              </Flex>
              <Flex
                w={"241"}
                h={"32px"}
                padding={"0 10px"}
                alignItems={"center"}
                _hover={{ color: "white" }}
              >
                <a href="">
                  <span className="song-title">Play List</span>
                </a>
              </Flex>
              <Flex
                w={"241"}
                h={"32px"}
                padding={"0 10px"}
                alignItems={"center"}
                _hover={{ color: "white" }}
              >
                <a href="">
                  <span className="song-title">Play List</span>
                </a>
              </Flex>
              <Flex
                w={"241"}
                h={"32px"}
                padding={"0 10px"}
                alignItems={"center"}
                _hover={{ color: "white" }}
              >
                <a href="">
                  <span className="song-title">Play List</span>
                </a>
              </Flex>
              <Flex
                w={"241"}
                h={"32px"}
                padding={"0 10px"}
                alignItems={"center"}
                _hover={{ color: "white" }}
              >
                <a href="">
                  <span className="song-title">Play List</span>
                </a>
              </Flex>
              <Flex
                w={"241"}
                h={"32px"}
                padding={"0 10px"}
                alignItems={"center"}
                _hover={{ color: "white" }}
              >
                <a href="">
                  <span className="song-title">Play List</span>
                </a>
              </Flex>
              <Flex
                w={"241"}
                h={"32px"}
                padding={"0 10px"}
                alignItems={"center"}
                _hover={{ color: "white" }}
              >
                <a href="">
                  <span className="song-title">Play List</span>
                </a>
              </Flex>
              <Flex
                w={"241"}
                h={"32px"}
                padding={"0 10px"}
                alignItems={"center"}
                _hover={{ color: "white" }}
              >
                <a href="">
                  <span className="song-title">Play List</span>
                </a>
              </Flex>
              <Flex
                w={"241"}
                h={"32px"}
                padding={"0 10px"}
                alignItems={"center"}
                _hover={{ color: "white" }}
              >
                <a href="">
                  <span className="song-title">Play List</span>
                </a>
              </Flex>
              <Flex
                w={"241"}
                h={"32px"}
                padding={"0 10px"}
                alignItems={"center"}
                _hover={{ color: "white" }}
              >
                <a href="">
                  <span className="song-title">Play List</span>
                </a>
              </Flex>
              <Flex
                w={"241"}
                h={"32px"}
                padding={"0 10px"}
                alignItems={"center"}
                _hover={{ color: "white" }}
              >
                <a href="">
                  <span className="song-title">Play List</span>
                </a>
              </Flex>
              <Flex
                w={"241"}
                h={"32px"}
                padding={"0 10px"}
                alignItems={"center"}
                _hover={{ color: "white" }}
              >
                <a href="">
                  <span className="song-title">Play List</span>
                </a>
              </Flex>
              <Flex
                w={"241"}
                h={"32px"}
                padding={"0 10px"}
                alignItems={"center"}
                _hover={{ color: "white" }}
              >
                <a href="">
                  <span className="song-title">Play List</span>
                </a>
              </Flex>
            </Box>
          </Flex>
          {/* <Container>
          <a href="#">
            <Flex>
              <IconButton
                variant="link"
                as={MdDownloading}
                color={"#b3b3b3"}
                cursor={"pointer"}
                padding={"5px"}
              ></IconButton>
              <div className="text-side">Install App</div>
            </Flex>
          </a>
        </Container> */}
        </Flex>
      </Box>
    </>
  );
}
