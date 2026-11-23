// npx shadcn@latest add checkbox
// This connects Zod with React Hook Form.
// React Hook Form manages the form and its values.
// Zod checks whether the form values follow your rules.
// zodResolver connects the two together,
// so that when the form is submitted,
// Zod can check the values and give feedback
// if they don't follow the rules.
import { zodResolver } from "@hookform/resolvers/zod";
//It helps you store form values, track selected checkboxes, validate the form and handle form submission.
// If we didn't use useForm, we would have to manually manage the state of each checkbox and handle form submission ourselves by using React State.
import { useForm } from "react-hook-form";
// This imports Zod so you can define validation rules for the form values.
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form, // connects the form UI to React Hook Form and Zod.
  FormControl, // Wraps the actual input/control.
  FormField, // connects a particular field to React Hook Form.
  FormItem, // groups the checkbox, label and related elements
  FormLabel, // displays the field's label
  FormMessage, // displays validation error messages for the field
} from "@/components/ui/form";

// This imports the typescrip category type.
// The type keyword means you are importing only a typescript type, not an actual javascript value.

import type { Category } from "@/types";

// This describes an object containing two properties:
// categories and types, both of which are arrays of Category objects.
interface FilterProps {
  filterList: {
    categories: Category[];
    types: Category[];
  };
}

//! filterList tells the component what choices it can display.
//! selectedCategory and selectedType tell it which choices should initially be selected.
//! actual information comes from the parent through filterList.
// This is particularly important because it describes what information the ProductFilter component receives from its parent.
// The component expects a property called filterList,
//  which is an object containing two arrays of Category objects: categories and types.
// interface ProductFilterProps {
//   filterList: FilterProps;
//   // selectedCategory and selectedType are arrays of strings that represent the currently selected categories and types in the filter.
//   selectedCategory: string[];
//   selectedType: string[];
//   // onFilterChange is a function that is called when the user submits the filter form.
//   onFilterChange: (category: string[], type: string[]) => void;
// }

// This tells Zod that the form data should be an object with two properties
const FormSchema = z.object({
  categories: z
    // the categories property should be an array of strings
    .array(z.string())
    // the refine method checks that at least one category is selected
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one categories.",
    }),
  // the types property should also be an array of strings
  // the refine method checks that at least one type is selected
  types: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one types.",
  }),
});

// This is the main component that renders the product filter form.
// This creates a React function component named ProductFilter.
// These are the properties that the component expects to receive from its parent component.
// This is called destructuring, which allows you to extract values from objects and arrays and assign them to variables.
export default function ProductFilter({
  filterList,
  // selectedCategory,
  // selectedType,
  // onFilterChange,
  // : ProductFilterProps tells typescript that the props received by this component must follow the struture describe by the ProductFilterProps interface.
}: FilterProps) {
  //! This is te central part of the form.
  //! Useform is a small manager that keeps tract of the user's selections.
  //! It has three main responsibilities, such as keep the currently selected values, check the values when the user submits, and help handle the form submission.
  // const form = useForm() creates and manages the form. It gives you an object called form.
  // that object contains useful form-related functions and properties, such as
  // form.control, form.handleSubmit, form.reset, and form.getValues
  // z.infer<typeof FormSchema> is the typescript, it automatically creates a typescript type based on the zod schema.
  //* 3. useForm() manages the form values. checks the selected values with formSchema(contanins the validation rules)
  //* and zodResolver (connects the rules to react hook form.)
  const form = useForm<z.infer<typeof FormSchema>>({
    // resolver: zodResolver(FormSchema) connects the form to Zod.
    // It tells Zod that the form data should follow the rules defined in FormSchema.
    // If the form data doesn't follow the rules, Zod will give feedback
    //! The resolver is a function that connects the form manager to the Zod rules.
    //! React Hook form keeps track of the selections and zod checks whether those selections are acceptable and returns the valid values.
    //* Check the values when the user submits the form. [mainly handled by resolver and formSchema]
    resolver: zodResolver(FormSchema),
    // This sets the initial values of the form.
    //! The information of the default values comes from the parent component.
    //* 1. DefaultValues gives the form its starting values.
    defaultValues: {
      // categories and types are arrays of strings that represent the currently selected categories and types in the filter.
      // categories: selectedCategory,
      // // types are arrays of strings that represent the currently selected types in the filter.
      // types: selectedType,
      categories: [],
      types: [],
    },
  });

  // This funtion is called when the user submits the filter form.
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Submit data .... ", data);
    // This is where your child component sends the selected values back to the parent.
    // It passes two arguments: categories and types.
    // Its get the data from this function, "onFilterChange: (category: string[], type: string[]) => void;",
    // the parent provided it and now the child calls it.
    // onFilterChange(data.categories, data.types);
  }

  return (
    // this is the shadcn form component.
    // It receives the form object created by useform()
    // the {...form} syntax is called the spread operator.
    // It passes the properties of the form object into the Form component.
    //* 4. Handle the form submission. [mainly handled by form.handleSubmit() and onSubmit()]
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="categories"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Furniture Made By</FormLabel>
              </div>
              {filterList.categories.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="categories"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-y-0 space-x-3"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id.toString())}
                            onCheckedChange={(checked) => {
                              //* 2. filed.onChange() updates the values when checkboxes are clicked.
                              return checked
                                ? field.onChange([
                                    ...field.value,
                                    item.id.toString(),
                                  ])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id.toString(),
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="types"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Furniture Types</FormLabel>
              </div>
              {filterList.types.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="types"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-y-0 space-x-3"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id.toString())}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([
                                    ...field.value,
                                    item.id.toString(),
                                  ])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id.toString(),
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="outline">
          Filter
        </Button>
      </form>
    </Form>
  );
}
