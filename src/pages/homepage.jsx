import React from "react";
import Navbar from "../components/navbar.jsx";
import hero from "../assets/hero.svg";
import img1 from "../assets/image1.svg";
import img2 from "../assets/image2.svg";
import img3 from "../assets/image3.svg";
import testimonial1 from "../assets/testimonial1.svg";
import testimonial2 from "../assets/testimonial2.svg";
import testimonial3 from "../assets/testimonial3.svg";
import contact1 from "../assets/contact1.svg";
import contact2 from "../assets/contact2.svg";
import rabiya from "../assets/rabiya.svg";
import rabiya2 from "../assets/rabiya2.svg";

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Image,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";
import Footer from "../components/footer";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

function Homepage() {
  const [isGreaterThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isGreaterThan600] = useMediaQuery("(min-width: 600px)");
  return (
    <div>
      <Navbar />
      {/* hero */}

      <Flex
        marginTop="80px"
        width="100%"
        height="650px"
        backgroundImage={hero}
        backgroundSize="cover"
        backgroundPosition="center"
        id="home"
      >
        <Box
          width={isGreaterThan600 ? "624px" : "90%"}
          height={isGreaterThan600 ? "334px" : "550px"}
          border="0.5px solid #FFFFFF"
          margin="auto"
          marginRight={isGreaterThan600 ? "10%" : ""}
        >
          <Box
            width={isGreaterThan600 ? "604px" : "85%"}
            height={isGreaterThan600 ? "314px" : "530px"}
            marginTop="10px"
            marginLeft="10px"
            bgColor="white"
            position="absolute"
            p={8}
          >
            <Text
              fontFamily="lora"
              color="#06325E"
              fontWeight="400"
              fontSize="32px"
              textAlign="center"
            >
              CHOOSE YOU, TAKE OWNERSHIP ELEVATE YOUR LIFE
            </Text>

            <Text
              fontFamily="satoshi"
              color="#000000DE"
              fontWeight="400"
              fontSize="16px"
              textAlign="center"
              mt={4}
            >
              Let me help you take the next step towards your WELL-BEING.
            </Text>
            <Text
              fontFamily="satoshi"
              color="#000000DE"
              fontWeight="400"
              fontSize="16px"
              textAlign="center"
            >
              A step towards your Emotional, Mental, Physical and Spiritual
              GROWTH.
            </Text>

            <Flex justifyContent="center" mt={10}>
              <Button
                bgColor="#F38D43"
                color="white"
                w="179px"
                fontWeight="500"
                fontSize="15px"
                h="44px"
                borderRadius="5px"
                fontFamily="satoshi"
                ml={8}
                onClick={() => navigate("/contact")}
                _hover="none"
              >
                Contact Us
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Box bgColor="#E8F3F9" height="307px" w="100%">
        <Text
          color="#06325E"
          fontFamily="lora"
          fontSize="30px"
          fontWeight="400"
          textAlign="center"
          pt={isGreaterThan600 ? "20" : "10"}
        >
          “Commit to Living the Dream <br />
          Take Ownership and Elevate your Life”
        </Text>
        <Text
          color="#00000099"
          fontFamily="lora"
          fontSize="16px"
          fontWeight="400"
          textAlign="center"
          mt="10"
        >
          - Rabiya Gill{" "}
        </Text>
      </Box>

      {/* Experienced Life Coach & Therapist */}

      <Flex
        id="about"
        justifyContent="space-between"
        direction={isGreaterThan600 ? "row" : "column"}
        mb={isGreaterThan600?"":"40px"}
      >
        <Image
          src={rabiya2}
          h={isGreaterThan600 ? "702px" : "650px"}
          ml={isGreaterThan600 ? "" : "-70px"}
        />
        <Box
          position="absolute"
          ml={isGreaterThan600 ? "100px" : "10px"}
          mt="100px"
        >
          <Box
            w={isGreaterThan600 ? "362px" : "319px"}
            h={isGreaterThan600 ? "450px" : "407px"}
            border="0.5px solid white"
            pos="absolute"
            borderTopRadius="full"
          >
            <Image
              src={rabiya}
              w={isGreaterThan600 ? "343px" : "300px"}
              h={isGreaterThan600 ? "430px" : "387px"}
              ml="10px"
              mt="10px"
            />
          </Box>

          <Flex
            bgColor="#F38D43"
            w={isGreaterThan600 ? "330px" : "280px"}
            h={isGreaterThan600 ? "78px" : "60px"}
            pos="absolute"
            justifyContent="center"
            alignItems="center"
            top={isGreaterThan600 ? "415px" : "365px"}
            ml="90px"
          >
            <Text
              color="white"
              fontFamily="lora"
              fontWeight="400"
              fontSize="30px"
            >
              Hi, I’m Rabiya Gill
            </Text>
          </Flex>
        </Box>

        <Box
          w={isGreaterThan600 ? "50%" : "90%"}
          position="relative"
          my="auto"
          mr="100px"
          mx={isGreaterThan600 ? "" : "auto"}
        >
          <Text
            color="#06325E"
            fontFamily="lora"
            fontWeight="400"
            fontSize="40px"
          >
            Experienced Life Coach & Therapist
          </Text>
          <Divider
            borderColor="#F38D43"
            borderWidth="1px"
            w={isGreaterThan600 ? "735px" : "200px"}
            // my={4} // Adds margin on top and bottom (adjust as needed)
          />

          <Text
            fontFamily="satoshi"
            fontWeight="700"
            color="#000000DE"
            fontSize="24px"
            my={4}
          >
            Hey, you found me! Take a deep EXHALE.
          </Text>

          <Text
            fontFamily="satoshi"
            fontSize="16px"
            color="#000000DE"
            fontWeight="400"
            mb={4}
          >
            My name is Rabiya Gill and I’m a Life Coach who decided to dedicate
            her life to help transform people to live to their highest
            potential. I’m passionate about coaching and my favourite thing is
            watching others grow into their true selves.
          </Text>

          <Text
            fontFamily="satoshi"
            fontSize="16px"
            color="#000000DE"
            fontWeight="400"
            mb={4}
          >
            I'm proud to have created a global reach helping hundreds of you
            around the world to create a Life that was once a Dream.
          </Text>

          <Text
            fontFamily="satoshi"
            fontSize="16px"
            color="#000000DE"
            fontWeight="400"
            mb={2}
          >
            I'll help you help yourself by equipping you with tools, techniques,
            proven strategies and personal learnings that can really help you
            make a positive difference in your life.
          </Text>

          <Flex
            width={isGreaterThan600 ? "50%" : "90%"}
            justifyContent="space-between"
            mt={10}
          >
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                color="#06325E"
                fontFamily="lora"
                fontWeight="600"
                fontSize="62px"
              >
                7+
              </Text>
              <Text
                color="#000000DE"
                fontFamily="satoshi"
                fontWeight="400"
                fontSize="18px"
              >
                Years Of Experience
              </Text>
            </Flex>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                color="#06325E"
                fontFamily="lora"
                fontWeight="600"
                fontSize="62px"
              >
                200+
              </Text>
              <Text
                color="#000000DE"
                fontFamily="satoshi"
                fontWeight="400"
                fontSize="18px"
              >
                Lives Changed
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      {/* Our Thought-Based Approach */}
      <Box bgColor="#E8F3F9" py={20}>
        <Text
          fontFamily="lora"
          fontSize="40px"
          fontWeight="400"
          color="#06325E"
          textAlign="center"
        >
          Our Thought-Based Approach
        </Text>

        <Flex
          w="85%"
          margin="auto"
          justifyContent="space-around"
          mt={16}
          direction={isGreaterThan600 ? "row" : "column"}
        >
          <Box w={isGreaterThan600 ? "27%" : "100%"}>
            <Image src={img1} />
            <Text
              fontFamily="satoshi"
              fontWeight="700"
              fontSize="24px"
              color="#06325E"
              textAlign="center"
              mt={4}
            >
              DISCOVERY COACHING SESSION
            </Text>
            <Text
              color="#000000DE"
              fontFamily="satoshi"
              fontWeight="400"
              fontSize="16px"
              textAlign="center"
              mt={2}
            >
              Exploring the pain points and creating an Action Plan to help you
              on your Wellness Journey.
            </Text>
          </Box>

          {isGreaterThan600 && (
            <Box
              height="300px" // Set the height of the line
              borderLeft="0.5px solid #00000066" // Creates the vertical line
              mt={10}
            />
          )}

          {!isGreaterThan600 && (
            <Box
              width="100%" // Set the width of the line (100% will make it stretch across the container)
              borderBottom="0.5px solid #00000066" // Creates the horizontal line (borderBottom)
              mt={10} // Add margin on top if needed
              mb={10}
            />
          )}

          <Box w={isGreaterThan600 ? "27%" : "100%"}>
            <Image src={img2} />
            <Text
              fontFamily="satoshi"
              fontWeight="700"
              fontSize="24px"
              color="#06325E"
              textAlign="center"
              mt={4}
            >
              DELVE DEEPER THERAPY SESSION
            </Text>
            <Text
              color="#000000DE"
              fontFamily="satoshi"
              fontWeight="400"
              fontSize="16px"
              textAlign="center"
              mt={2}
            >
              Overcome Personal Traumas, Issues and Challenges to be a better
              you, one Session at a time.
            </Text>
          </Box>

          {isGreaterThan600 && (
            <Box
              height="300px" // Set the height of the line
              borderLeft="0.5px solid #00000066" // Creates the vertical line
              mt={10}
            />
          )}

          {!isGreaterThan600 && (
            <Box
              width="100%" // Set the width of the line (100% will make it stretch across the container)
              borderBottom="0.5px solid #00000066" // Creates the horizontal line (borderBottom)
              mt={10} // Add margin on top if needed
              mb={10}
            />
          )}

          <Box w={isGreaterThan600 ? "27%" : "100%"}>
            <Image src={img3} />
            <Text
              fontFamily="satoshi"
              fontWeight="700"
              fontSize="24px"
              color="#06325E"
              textAlign="center"
              mt={4}
            >
              3 MONTH COACHING & THERAPY PROGRAM
            </Text>
            <Text
              color="#000000DE"
              fontFamily="satoshi"
              fontWeight="400"
              fontSize="16px"
              textAlign="center"
              mt={2}
            >
              A customised program to remove the Block of your Life and Overcome
              Pain, Discomfort and Challenges to be able to Create and Live the
              Dream Life.
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* How Can We Help You With? */}
      <Box my={20} id="overcome">
        <Text
          fontFamily="lora"
          color="#06325E"
          fontWeight="400"
          fontSize="40px"
          textAlign="center"
        >
          How Can We Help You With?
        </Text>
        <Text
          fontFamily="satoshi"
          color="#000000DE"
          fontWeight="400"
          fontSize="16px"
          textAlign="center"
          width="80%"
          m="auto"
          mt={4}
        >
          Offering a variety of life coaching and therapy services to nurture
          the spirit, overcome personal challenges, and achieve individual life
          goals. Catering to personal needs unlocks full potential. Contact to
          start a proactive journey today.
        </Text>
        <Box m="auto" mt={6} w="90%">
          <Grid
            templateRows={
              isGreaterThan600 ? "repeat(4, 1fr)" : "repeat(12, 1fr)"
            } // 4 rows of equal height
            templateColumns={
              isGreaterThan600 ? "repeat(3, 1fr)" : "repeat(1, 1fr)"
            } // 4 columns of equal width
            gap={isGreaterThan600 ? "6" : "2"} // Gap between grid items
            fontFamily="satoshi"
            fontSize="20px"
            fontWeight="700"
            textTransform="uppercase"
            textAlign="center"
          >
            <Box>
              <Text>Stress & Anxiety</Text>
            </Box>

            <Box>
              <Text>Depression</Text>
            </Box>

            <Box>
              <Text>Overthinking</Text>
            </Box>

            <Box>
              <Text>Anger Management</Text>
            </Box>
            <Box>
              <Text>Trauma & abuse</Text>
            </Box>
            <Box>
              <Text>procrastination</Text>
            </Box>

            <Box>
              <Text>Stress & focus improvement</Text>
            </Box>
            <Box>
              <Text>fears & phobia</Text>
            </Box>
            <Box>
              <Text>identity crises</Text>
            </Box>
            <Box>
              <Text>couple relationship issues</Text>
            </Box>
            <Box>
              <Text>self worth & confidence</Text>
            </Box>
            <Box>
              <Text>chronic illness & pain management</Text>
            </Box>
          </Grid>

          <Flex justifyContent="center" mt={14}>
            <Button
              bgColor="#F38D43"
              color="white"
              w="179px"
              fontWeight="500"
              fontSize="15px"
              h="44px"
              borderRadius="5px"
              fontFamily="satoshi"
              ml={8}
              onClick={() => navigate("/contact")}
              _hover="none"
            >
              Contact Us
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* What Our Clients Have To Say */}
      <Box bgColor="#E8F3F9" py={20} id="testimonial">
        <Text
          fontFamily="lora"
          fontSize="40px"
          fontWeight="400"
          color="#06325E"
          textAlign="center"
        >
          What Our Clients Have To Say
        </Text>
        {isGreaterThan600 && (
          <Flex
            w="85%"
            margin="auto"
            justifyContent="space-around"
            mt={16}
            wrap="wrap"
            fontFamily="satoshi"
          >
            <Box bgColor="#FCFCFC" h="400px" w="392px" p={8}>
              <Flex justifyContent="space-between" mb={4}>
                <Flex width="30%" justifyContent="space-between">
                  <FaStar color="#F9A602" />
                  <FaStar color="#F9A602" />
                  <FaStar color="#F9A602" />
                  <FaStar color="#F9A602" />
                  <FaRegStar color="#D9D9D999" />
                </Flex>
                <Text color="#00000099" fontWeight="400" fontSize="12px">
                  (4 Rating)
                </Text>
              </Flex>
              <Text color="#00000099" fontWeight="500" fontSize="14px">
                Rabiya not only helped me through my worst times of life but
                also helped me get an insight into this journey at a deeper
                level.
              </Text>

              <Text color="#00000099" fontWeight="500" fontSize="14px" mt={4}>
                Her sessions helped me through personal growth, healing
                relationships and losing weight. I went from feeling hopeless to
                feeling motivated and loved.
              </Text>

              <Flex position="relative" bottom="-110px">
                <Image src={testimonial1} w="50px" />
                <Box ml={4}>
                  <Text fontSize="16px" fontWeight="700">
                    Name
                  </Text>
                  <Text color="#00000099" fontSize="12px" fontWeight="400">
                    CEO Founder
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box bgColor="#FCFCFC" h="400px" w="392px" p={8}>
              <Flex justifyContent="space-between" mb={4}>
                <Flex width="30%" justifyContent="space-between">
                  <FaStar color="#F9A602" />
                  <FaStar color="#F9A602" />
                  <FaStar color="#F9A602" />
                  <FaStar color="#F9A602" />
                  <FaRegStar color="#D9D9D999" />
                </Flex>
                <Text color="#00000099" fontWeight="400" fontSize="12px">
                  (4 Rating)
                </Text>
              </Flex>
              <Text color="#00000099" fontWeight="500" fontSize="14px">
                Working with Rabiya made me realise that I did not accept a part
                of me that felt lonely and sad. I have never felt this freer and
                lighter. The sessions made me realise my own power and helped me
                heal my relationship with myself.
              </Text>

              <Flex position="relative" bottom="-140px">
                <Image src={testimonial2} w="50px" />
                <Box ml={4}>
                  <Text fontSize="16px" fontWeight="700">
                    Name
                  </Text>
                  <Text color="#00000099" fontSize="12px" fontWeight="400">
                    CEO Founder
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box bgColor="#FCFCFC" h="400px" w="392px" p={8}>
              <Flex justifyContent="space-between" mb={4}>
                <Flex width="30%" justifyContent="space-between">
                  <FaStar color="#F9A602" />
                  <FaStar color="#F9A602" />
                  <FaStar color="#F9A602" />
                  <FaStar color="#F9A602" />
                  <FaRegStar color="#D9D9D999" />
                </Flex>
                <Text color="#00000099" fontWeight="400" fontSize="12px">
                  (4 Rating)
                </Text>
              </Flex>
              <Text color="#00000099" fontWeight="500" fontSize="14px">
                Hypnotherapy was something that got me out of a depressed life.
                With each session I felt better about myself and started looking
                forward to the next day. I was not just able to identify my
                issues and fear but was also able to come out of my shell within
                a few weeks. After the session I achieved a lot more than what I
                wanted. I may have learnt it the hard way but now I truly
                believe that I can achieve whatever I want with my heart and
                soul.
              </Text>

              <Flex position="relative" bottom="-60px">
                <Image src={testimonial3} w="50px" />
                <Box ml={4}>
                  <Text fontSize="16px" fontWeight="700">
                    Name
                  </Text>
                  <Text color="#00000099" fontSize="12px" fontWeight="400">
                    CEO Founder
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        )}

        {!isGreaterThan600 && (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            style={{ width: "90%", marginTop: !isGreaterThan600 && "40px" }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            loop={true} // Enable looping
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000, // 5 seconds delay
              disableOnInteraction: true,
            }}
          >
            <SwiperSlide style={{ width: "100%" }}>
              <Box bgColor="#FCFCFC" h="400px" w="100%" p={4}>
                <Flex justifyContent="space-between" mb={4}>
                  <Flex width="30%" justifyContent="space-between">
                    <FaStar color="#F9A602" />
                    <FaStar color="#F9A602" />
                    <FaStar color="#F9A602" />
                    <FaStar color="#F9A602" />
                    <FaRegStar color="#D9D9D999" />
                  </Flex>
                  <Text color="#00000099" fontWeight="400" fontSize="12px">
                    (4 Rating)
                  </Text>
                </Flex>
                <Text color="#00000099" fontWeight="500" fontSize="14px">
                  Rabiya not only helped me through my worst times of life but
                  also helped me get an insight into this journey at a deeper
                  level.
                </Text>

                <Text color="#00000099" fontWeight="500" fontSize="14px" mt={4}>
                  Her sessions helped me through personal growth, healing
                  relationships and losing weight. I went from feeling hopeless
                  to feeling motivated and loved.
                </Text>

                <Flex position="relative" bottom="-110px">
                  <Image src={testimonial1} w="50px" />
                  <Box ml={4}>
                    <Text fontSize="16px" fontWeight="700">
                      Name
                    </Text>
                    <Text color="#00000099" fontSize="12px" fontWeight="400">
                      CEO Founder
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </SwiperSlide>

            <SwiperSlide style={{ width: "100%" }}>
              <Box bgColor="#FCFCFC" h="400px" w="100%" p={4}>
                <Flex justifyContent="space-between" mb={4}>
                  <Flex width="30%" justifyContent="space-between">
                    <FaStar color="#F9A602" />
                    <FaStar color="#F9A602" />
                    <FaStar color="#F9A602" />
                    <FaStar color="#F9A602" />
                    <FaRegStar color="#D9D9D999" />
                  </Flex>
                  <Text color="#00000099" fontWeight="400" fontSize="12px">
                    (4 Rating)
                  </Text>
                </Flex>
                <Text color="#00000099" fontWeight="500" fontSize="14px">
                  Working with Rabiya made me realise that I did not accept a
                  part of me that felt lonely and sad. I have never felt this
                  freer and lighter. The sessions made me realise my own power
                  and helped me heal my relationship with myself.
                </Text>

                <Flex position="relative" bottom="-140px">
                  <Image src={testimonial2} w="50px" />
                  <Box ml={4}>
                    <Text fontSize="16px" fontWeight="700">
                      Name
                    </Text>
                    <Text color="#00000099" fontSize="12px" fontWeight="400">
                      CEO Founder
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%" }}>
              <Box bgColor="#FCFCFC" h="400px" w="100%" p={4}>
                <Flex justifyContent="space-between" mb={4}>
                  <Flex width="30%" justifyContent="space-between">
                    <FaStar color="#F9A602" />
                    <FaStar color="#F9A602" />
                    <FaStar color="#F9A602" />
                    <FaStar color="#F9A602" />
                    <FaRegStar color="#D9D9D999" />
                  </Flex>
                  <Text color="#00000099" fontWeight="400" fontSize="12px">
                    (4 Rating)
                  </Text>
                </Flex>
                <Text color="#00000099" fontWeight="500" fontSize="14px">
                  Hypnotherapy was something that got me out of a depressed
                  life. With each session I felt better about myself and started
                  looking forward to the next day. I was not just able to
                  identify my issues and fear but was also able to come out of
                  my shell within a few weeks. After the session I achieved a
                  lot more than what I wanted. I may have learnt it the hard way
                  but now I truly believe that I can achieve whatever I want
                  with my heart and soul.
                </Text>

                <Flex position="relative" bottom="-60px">
                  <Image src={testimonial3} w="50px" />
                  <Box ml={4}>
                    <Text fontSize="16px" fontWeight="700">
                      Name
                    </Text>
                    <Text color="#00000099" fontSize="12px" fontWeight="400">
                      CEO Founder
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </SwiperSlide>
          </Swiper>
        )}
      </Box>

      {/* contact */}
      <Box w="100%">
        <Flex
          justifyContent="space-between"
          my="90px"
          direction={isGreaterThan600 ? "row" : "column"}
        >
          <Image src={contact1} />
          <Box
            w={isGreaterThan600 ? "624px" : "98%"}
            h={isGreaterThan600 ? "514px" : "600px"}
            border="0.5px solid white"
            ml={isGreaterThan600 ? "430px" : "2px"}
            mt={isGreaterThan600 ? "150px" : "270px"}
            pos="absolute"
          >
            <Box
              w={isGreaterThan600 ? "604px" : "96%"}
              h="487px"
              bg="white"
              pos="absolute"
              marginTop={isGreaterThan600 ? "9px" : "9px"}
              marginLeft={isGreaterThan600 ? "10px" : "8px"}
            >
              <Box w="100%" p={8} bg="white" color="#00000099">
                <Text
                  color="#06325E"
                  textAlign="center"
                  fontFamily="lora"
                  fontSize="40px"
                  fontWeight="400"
                  mb={2}
                >
                  Get In Touch!
                </Text>

                <form>
                  <FormControl mb={4} isRequired>
                    <FormLabel
                      fontWeight="500"
                      fontSize="14px"
                      fontFamily="satoshi"
                      color="#00000099"
                    >
                      Full Name
                    </FormLabel>
                    <Input
                      // value={fullName}
                      // onChange={(e) => setFullName(e.target.value)}
                      fontSize="14px"
                      type="text"
                      placeholder="Full name"
                      fontFamily="satoshi"
                    />
                  </FormControl>

                  <SimpleGrid
                    columns={isGreaterThan600 ? 2 : 1}
                    spacing={4}
                    mb={4}
                  >
                    <FormControl isRequired>
                      <FormLabel
                        fontWeight="500"
                        fontSize="14px"
                        fontFamily="satoshi"
                        color="#00000099"
                      >
                        Phone Number
                      </FormLabel>
                      <Input
                        // value={phone}
                        // onChange={(e) => setPhone(e.target.value)}
                        fontSize="14px"
                        type="tel"
                        placeholder="Phone number"
                        fontFamily="satoshi"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel
                        fontWeight="500"
                        fontSize="14px"
                        fontFamily="satoshi"
                        color="#00000099"
                      >
                        E-mail ID
                      </FormLabel>
                      <Input
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        fontSize="14px"
                        placeholder="E-mail ID"
                        fontFamily="satoshi"
                      />
                    </FormControl>
                  </SimpleGrid>

                  <FormControl mb={4} isRequired>
                    <FormLabel
                      fontWeight="500"
                      fontSize="14px"
                      fontFamily="satoshi"
                      color="#00000099"
                    >
                      Message
                    </FormLabel>
                    <Textarea
                      // value={message}
                      // onChange={(e) => setMessage(e.target.value)}
                      fontSize="14px"
                      placeholder="Message"
                      fontFamily="satoshi"
                    />
                  </FormControl>

                  <Flex justifyContent="center" mt={10}>
                    <Button
                      bgColor="#F38D43"
                      color="white"
                      w="179px"
                      fontWeight="500"
                      fontSize="15px"
                      h="44px"
                      borderRadius="5px"
                      fontFamily="satoshi"
                      ml={8}
                      onClick={() => navigate("/contact")}
                      _hover="none"
                    >
                      Contact Us
                    </Button>
                  </Flex>
                </form>
              </Box>
            </Box>
          </Box>

          <Image src={contact2} mt={isGreaterThan600 ? "120px" : "450px"} />
        </Flex>
      </Box>

      <Footer />
    </div>
  );
}

export default Homepage;
