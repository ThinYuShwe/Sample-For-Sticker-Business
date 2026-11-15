import { Link } from "react-router-dom";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  // CardAction,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
function Error() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        <Card className="mx-auto flex w-100 items-center">
          <CardHeader>
            <CardTitle className="text-center">Oops!</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>An error occurs accidently.</p>
          </CardContent>
          <CardFooter className="text-center">
            <Button variant="outline">
              <Link to="/">Go back to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default Error;
