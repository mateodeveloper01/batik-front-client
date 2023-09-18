import { Box, Image, Grid } from "@chakra-ui/react";
const payoutMethods = [
  { url: "/paymentmethod/1-visa.png" },
  { url: "/paymentmethod/2-mastercard.png" },
  { url: "/paymentmethod/15-maestro.png" },
  { url: "/paymentmethod/8-cabal.png" },
];
const ListDebitCard = () => {
  return (
    <Grid templateColumns="repeat(15, 1fr)" h={"auto"} gap={1}>
      {payoutMethods.map((i) => (
        <Box key={i.url} p={0.2} w={"30px"} h={"20px"} className="rounded-sm border">
          <Image src={i.url} boxSize={"100%"} objectFit={"contain"} />
        </Box>
      ))}
    </Grid>
  );
};

export default ListDebitCard;
