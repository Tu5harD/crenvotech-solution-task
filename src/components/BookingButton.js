import { Button } from "@mui/material";

export default function BookingButton({ title }) {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      className="bg-yellow-600 hover:bg-yellow-700"
    >
      {title}
    </Button>
  );
}
