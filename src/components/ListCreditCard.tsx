import { Box, Image, Grid } from "@chakra-ui/react";
const payoutMethods = [
  { url: "/paymentmethod/1-visa.png" },
  { url: "/paymentmethod/2-mastercard.png" },
  { url: "/paymentmethod/3-americanexpress.png" },
  { url: "/paymentmethod/4-naraja.png" },
  { url: "/paymentmethod/5-nativa.png" },
  { url: "/paymentmethod/6-shopping.png" },
  { url: "/paymentmethod/7-cencosud.png" },
  { url: "/paymentmethod/8-cabal.png" },
  { url: "/paymentmethod/9-argencard.png" },
  { url: "/paymentmethod/10-dinersclub.png" },
  { url: "/paymentmethod/11-cordobesa.png" },
  { url: "/paymentmethod/12-fabella.png" },
  { url: "/paymentmethod/13-walmart.png" },
  { url: "/paymentmethod/14-sucedito.png" },
];
const ListCreditCard = ({ w, h }: { w?: number; h?: number }) => {
  return (
    <Grid templateColumns="repeat(15, 1fr)" h={"auto"} gap={1}>
      {payoutMethods.map((i) => (
        <Box
          key={i.url}
          p={0.2}
          w={w || "30px"}
          h={h || "20px"}
          className="rounded-sm border"
        >
          <Image src={i.url} boxSize={"100%"} objectFit={"contain"} />
        </Box>
      ))}
    </Grid>
  );
};

export default ListCreditCard;
