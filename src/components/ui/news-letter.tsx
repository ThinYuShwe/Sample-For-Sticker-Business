import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.email("Please enter a valid email address."),
});

function Newsletter() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      autoComplete="off"
      className="w-80"
    >
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name} className="text-1xl">
              Subscribe to our newsletter
            </FieldLabel>
            <div className="relative w-full">
              <Input
                {...field}
                id={field.name}
                type="email"
                placeholder="example@email.com"
                className="border-foreground text-foreground placeholder:text-foreground border pr-12"
                aria-invalid={fieldState.invalid}
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-foreground absolute top-1/2 right-1 z-10 h-6 w-8 -translate-y-1/2 cursor-pointer border-2 border-black p-0"
              >
                {loading ? (
                  <Loader2 className="size-4 animate-spin text-white" />
                ) : (
                  <ArrowRight aria-hidden="true" className="text-white" />
                )}
              </Button>
            </div>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </form>
  );
}

export default Newsletter;
