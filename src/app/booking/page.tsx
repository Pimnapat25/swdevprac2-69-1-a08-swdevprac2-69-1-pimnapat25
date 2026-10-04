import Button from "@mui/material/Button";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Venue Booking</h1>
      <form className="mt-8 flex max-w-sm flex-col gap-6">
        <DateReserve />
        <Button type="submit" name="Book Venue" variant="contained">
          Book Venue
        </Button>
      </form>
    </main>
  );
}
